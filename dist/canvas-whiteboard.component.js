"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var canvas_whiteboard_update_model_1 = require("./canvas-whiteboard-update.model");
var template_1 = require("./template");
var canvas_whiteboard_service_1 = require("./canvas-whiteboard.service");
var canvas_whiteboard_point_1 = require("./canvas-whiteboard-point");
var canvas_whiteboard_shape_service_1 = require("./shapes/canvas-whiteboard-shape.service");
var rxjs_1 = require("rxjs");
var canvas_whiteboard_shape_options_1 = require("./shapes/canvas-whiteboard-shape-options");
var cloneDeep = require("lodash.clonedeep");
var CanvasWhiteboardComponent = (function () {
    function CanvasWhiteboardComponent(ngZone, _changeDetector, _canvasWhiteboardService, _canvasWhiteboardShapeService) {
        this.ngZone = ngZone;
        this._changeDetector = _changeDetector;
        this._canvasWhiteboardService = _canvasWhiteboardService;
        this._canvasWhiteboardShapeService = _canvasWhiteboardShapeService;
        //Number of ms to wait before sending out the updates as an array
        this.batchUpdateTimeoutDuration = 100;
        this.drawButtonText = "";
        this.clearButtonText = "";
        this.undoButtonText = "";
        this.redoButtonText = "";
        this.saveDataButtonText = "";
        this.drawButtonEnabled = true;
        this.clearButtonEnabled = true;
        this.undoButtonEnabled = false;
        this.redoButtonEnabled = false;
        this.saveDataButtonEnabled = false;
        this.shouldDownloadDrawing = true;
        this.colorPickerEnabled = false;
        this.lineWidth = 2;
        this.strokeColor = "rgba(0, 0, 0, 1)";
        this.startingColor = "#fff";
        this.scaleFactor = 0;
        this.drawingEnabled = false;
        this.showStrokeColorPicker = false;
        this.showFillColorPicker = false;
        this.lineJoin = "round";
        this.lineCap = "round";
        this.shapeSelectorEnabled = true;
        this.showShapeSelector = false;
        this.fillColor = "rgba(0,0,0,0)";
        this.onClear = new core_1.EventEmitter();
        this.onUndo = new core_1.EventEmitter();
        this.onRedo = new core_1.EventEmitter();
        this.onBatchUpdate = new core_1.EventEmitter();
        this.onImageLoaded = new core_1.EventEmitter();
        this.onSave = new core_1.EventEmitter();
        this._canDraw = true;
        this._clientDragging = false;
        this._updateHistory = [];
        this._undoStack = []; //Stores the value of start and count for each continuous stroke
        this._redoStack = [];
        this._batchUpdates = [];
        this._updatesNotDrawn = [];
        this._canvasWhiteboardServiceSubscriptions = [];
        this._shapesMap = new Map();
        this._incompleteShapesMap = new Map();
        this.canvasWhiteboardShapePreviewOptions = this.generateShapePreviewOptions();
    }
    Object.defineProperty(CanvasWhiteboardComponent.prototype, "imageUrl", {
        get: function () {
            return this._imageUrl;
        },
        set: function (imageUrl) {
            this._imageUrl = imageUrl;
            this._imageElement = null;
            this._redrawHistory();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Initialize the canvas drawing context. If we have an aspect ratio set up, the canvas will resize
     * according to the aspect ratio.
     */
    CanvasWhiteboardComponent.prototype.ngOnInit = function () {
        this._initInputsFromOptions(this.options);
        this._initCanvasEventListeners();
        this._initCanvasServiceObservables();
        this.context = this.canvas.nativeElement.getContext("2d");
        this._incompleteShapesCanvasContext = this._incompleteShapesCanvas.nativeElement.getContext("2d");
    };
    /**
     * If an image exists and it's url changes, we need to redraw the new image on the canvas.
     */
    CanvasWhiteboardComponent.prototype.ngOnChanges = function (changes) {
        if (changes.options && changes.options.currentValue != changes.options.previousValue) {
            this._initInputsFromOptions(changes.options.currentValue);
        }
    };
    /**
     * Recalculate the width and height of the canvas after the view has been fully initialized
     */
    CanvasWhiteboardComponent.prototype.ngAfterViewInit = function () {
        this._calculateCanvasWidthAndHeight();
        this._redrawHistory();
    };
    /**
     * This method reads the options which are helpful since they can be really long when specified in HTML
     * This method is also called everytime the options object changes
     * For security reasons we must check each item on its own since if we iterate the keys
     * we may be injected with malicious values
     *
     * @param {CanvasWhiteboardOptions} options
     * @private
     */
    CanvasWhiteboardComponent.prototype._initInputsFromOptions = function (options) {
        if (options) {
            if (!this._isNullOrUndefined(options.batchUpdateTimeoutDuration))
                this.batchUpdateTimeoutDuration = options.batchUpdateTimeoutDuration;
            if (!this._isNullOrUndefined(options.imageUrl))
                this.imageUrl = options.imageUrl;
            if (!this._isNullOrUndefined(options.aspectRatio))
                this.aspectRatio = options.aspectRatio;
            if (!this._isNullOrUndefined(options.drawButtonClass))
                this.drawButtonClass = options.drawButtonClass;
            if (!this._isNullOrUndefined(options.clearButtonClass))
                this.clearButtonClass = options.clearButtonClass;
            if (!this._isNullOrUndefined(options.undoButtonClass))
                this.undoButtonClass = options.undoButtonClass;
            if (!this._isNullOrUndefined(options.redoButtonClass))
                this.redoButtonClass = options.redoButtonClass;
            if (!this._isNullOrUndefined(options.saveDataButtonClass))
                this.saveDataButtonClass = options.saveDataButtonClass;
            if (!this._isNullOrUndefined(options.drawButtonText))
                this.drawButtonText = options.drawButtonText;
            if (!this._isNullOrUndefined(options.clearButtonText))
                this.clearButtonText = options.clearButtonText;
            if (!this._isNullOrUndefined(options.undoButtonText))
                this.undoButtonText = options.undoButtonText;
            if (!this._isNullOrUndefined(options.redoButtonText))
                this.redoButtonText = options.redoButtonText;
            if (!this._isNullOrUndefined(options.saveDataButtonText))
                this.saveDataButtonText = options.saveDataButtonText;
            if (!this._isNullOrUndefined(options.drawButtonEnabled))
                this.drawButtonEnabled = options.drawButtonEnabled;
            if (!this._isNullOrUndefined(options.clearButtonEnabled))
                this.clearButtonEnabled = options.clearButtonEnabled;
            if (!this._isNullOrUndefined(options.undoButtonEnabled))
                this.undoButtonEnabled = options.undoButtonEnabled;
            if (!this._isNullOrUndefined(options.redoButtonEnabled))
                this.redoButtonEnabled = options.redoButtonEnabled;
            if (!this._isNullOrUndefined(options.saveDataButtonEnabled))
                this.saveDataButtonEnabled = options.saveDataButtonEnabled;
            if (!this._isNullOrUndefined(options.colorPickerEnabled))
                this.colorPickerEnabled = options.colorPickerEnabled;
            if (!this._isNullOrUndefined(options.lineWidth))
                this.lineWidth = options.lineWidth;
            if (!this._isNullOrUndefined(options.strokeColor))
                this.strokeColor = options.strokeColor;
            if (!this._isNullOrUndefined(options.shouldDownloadDrawing))
                this.shouldDownloadDrawing = options.shouldDownloadDrawing;
            if (!this._isNullOrUndefined(options.startingColor))
                this.startingColor = options.startingColor;
            if (!this._isNullOrUndefined(options.scaleFactor))
                this.scaleFactor = options.scaleFactor;
            if (!this._isNullOrUndefined(options.drawingEnabled))
                this.drawingEnabled = options.drawingEnabled;
            if (!this._isNullOrUndefined(options.downloadedFileName))
                this.downloadedFileName = options.downloadedFileName;
            if (!this._isNullOrUndefined(options.lineJoin))
                this.lineJoin = options.lineJoin;
            if (!this._isNullOrUndefined(options.lineCap))
                this.lineCap = options.lineCap;
            if (!this._isNullOrUndefined(options.shapeSelectorEnabled))
                this.shapeSelectorEnabled = options.shapeSelectorEnabled;
            if (!this._isNullOrUndefined(options.showShapeSelector))
                this.showShapeSelector = options.showShapeSelector;
            if (!this._isNullOrUndefined(options.fillColor))
                this.fillColor = options.fillColor;
            if (!this._isNullOrUndefined(options.showStrokeColorPicker))
                this.showStrokeColorPicker = options.showStrokeColorPicker;
            if (!this._isNullOrUndefined(options.showFillColorPicker))
                this.showFillColorPicker = options.showFillColorPicker;
        }
    };
    CanvasWhiteboardComponent.prototype._isNullOrUndefined = function (property) {
        return property === null || property === undefined;
    };
    /**
     * Init global window listeners like resize and keydown
     * @private
     */
    CanvasWhiteboardComponent.prototype._initCanvasEventListeners = function () {
        var _this = this;
        this.ngZone.runOutsideAngular(function () {
            _this._resizeSubscription = rxjs_1.Observable.fromEvent(window, 'resize')
                .debounceTime(200).distinctUntilChanged().subscribe(function () {
                _this.ngZone.run(function () {
                    _this._redrawCanvasOnResize();
                });
            });
        });
        window.addEventListener("keydown", this._canvasKeyDown.bind(this), false);
    };
    /**
     * Subscribes to new signals in the canvas whiteboard service and executes methods accordingly
     * Because of circular publishing and subscribing, the canvas methods do not use the service when
     * local actions are completed (Ex. clicking undo from the button inside this component)
     * @private
     */
    CanvasWhiteboardComponent.prototype._initCanvasServiceObservables = function () {
        var _this = this;
        this._canvasWhiteboardServiceSubscriptions.push(this._canvasWhiteboardService.canvasDrawSubject$
            .subscribe(function (updates) { return _this.drawUpdates(updates); }));
        this._canvasWhiteboardServiceSubscriptions.push(this._canvasWhiteboardService.canvasClearSubject$
            .subscribe(function () { return _this.clearCanvas(); }));
        this._canvasWhiteboardServiceSubscriptions.push(this._canvasWhiteboardService.canvasUndoSubject$
            .subscribe(function (updateUUD) { return _this._undoCanvas(updateUUD); }));
        this._canvasWhiteboardServiceSubscriptions.push(this._canvasWhiteboardService.canvasRedoSubject$
            .subscribe(function (updateUUD) { return _this._redoCanvas(updateUUD); }));
        this._registeredShapesSubscription = this._canvasWhiteboardShapeService.registeredShapes$.subscribe(function (shapes) {
            if (!_this.selectedShapeConstructor || !_this._canvasWhiteboardShapeService.isRegisteredShape(_this.selectedShapeConstructor)) {
                _this.selectedShapeConstructor = shapes[0];
            }
        });
    };
    /**
     * Calculate the canvas width and height from it's parent container width and height (use aspect ratio if needed)
     * @private
     */
    CanvasWhiteboardComponent.prototype._calculateCanvasWidthAndHeight = function () {
        this.context.canvas.width = this.canvas.nativeElement.parentNode.clientWidth;
        if (this.aspectRatio) {
            this.context.canvas.height = this.canvas.nativeElement.parentNode.clientWidth * this.aspectRatio;
        }
        else {
            this.context.canvas.height = this.canvas.nativeElement.parentNode.clientHeight;
        }
        this._incompleteShapesCanvasContext.canvas.width = this.context.canvas.width;
        this._incompleteShapesCanvasContext.canvas.height = this.context.canvas.height;
    };
    /**
     * Load an image and draw it on the canvas (if an image exists)
     * @constructor
     * @param callbackFn A function that is called after the image loading is finished
     * @return Emits a value when the image has been loaded.
     */
    CanvasWhiteboardComponent.prototype._loadImage = function (callbackFn) {
        var _this = this;
        this._canDraw = false;
        //If we already have the image there is no need to acquire it
        if (this._imageElement) {
            this._canDraw = true;
            callbackFn && callbackFn();
            return;
        }
        this._imageElement = new Image();
        this._imageElement.addEventListener("load", function () {
            _this._canDraw = true;
            callbackFn && callbackFn();
            _this.onImageLoaded.emit(true);
        });
        this._imageElement.src = this.imageUrl;
    };
    /**
     * Sends a notification after clearing the canvas
     * This method should only be called from the clear button in this component since it will emit an clear event
     * If the client calls this method he may create a circular clear action which may cause danger.
     */
    CanvasWhiteboardComponent.prototype.clearCanvasLocal = function () {
        this.clearCanvas();
        this.onClear.emit(true);
    };
    /**
     * Clears all content on the canvas.
     */
    CanvasWhiteboardComponent.prototype.clearCanvas = function () {
        this._removeCanvasData();
        this._redoStack = [];
    };
    /**
     * This method resets the state of the canvas and redraws it.
     * It calls a callback function after redrawing
     * @param callbackFn
     * @private
     */
    CanvasWhiteboardComponent.prototype._removeCanvasData = function (callbackFn) {
        this._shapesMap = new Map();
        this._clientDragging = false;
        this._updateHistory = [];
        this._undoStack = [];
        this._redrawBackground(callbackFn);
    };
    /**
     * Clears the canvas and redraws the image if the url exists.
     * @param callbackFn A function that is called after the background is redrawn
     * @return Emits a value when the clearing is finished
     */
    CanvasWhiteboardComponent.prototype._redrawBackground = function (callbackFn) {
        var _this = this;
        if (this.context) {
            if (this.imageUrl) {
                this._loadImage(function () {
                    _this.context.save();
                    _this._drawImage(_this.context, _this._imageElement, 0, 0, _this.context.canvas.width, _this.context.canvas.height, 0.5, 0.5);
                    _this.context.restore();
                    _this._drawMissingUpdates();
                    callbackFn && callbackFn();
                });
            }
            else {
                this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
                this._drawStartingColor();
                callbackFn && callbackFn();
            }
        }
    };
    CanvasWhiteboardComponent.prototype._drawStartingColor = function () {
        var previousFillStyle = this.context.fillStyle;
        this.context.save();
        this.context.fillStyle = this.startingColor;
        this.context.fillRect(0, 0, this.context.canvas.width, this.context.canvas.height);
        this.context.fillStyle = previousFillStyle;
        this.context.restore();
    };
    /**
     * @deprecated Use getDrawingEnabled(): boolean
     */
    CanvasWhiteboardComponent.prototype.getShouldDraw = function () {
        return this.getDrawingEnabled();
    };
    /**
     * Returns a value of whether the user clicked the draw button on the canvas.
     */
    CanvasWhiteboardComponent.prototype.getDrawingEnabled = function () {
        return this.drawingEnabled;
    };
    /**
     * Toggles drawing on the canvas. It is called via the draw button on the canvas.
     */
    CanvasWhiteboardComponent.prototype.toggleDrawingEnabled = function () {
        this.drawingEnabled = !this.drawingEnabled;
    };
    /**
     * Set if drawing is enabled from the client using the canvas
     * @param {boolean} drawingEnabled
     */
    CanvasWhiteboardComponent.prototype.setDrawingEnabled = function (drawingEnabled) {
        this.drawingEnabled = drawingEnabled;
    };
    /**
     * @deprecated Please use the changeStrokeColor(newStrokeColor: string): void method
     */
    CanvasWhiteboardComponent.prototype.changeColor = function (newStrokeColor) {
        this.changeStrokeColor(newStrokeColor);
    };
    /**
     * Replaces the drawing color with a new color
     * The format should be ("#ffffff" or "rgb(r,g,b,a?)")
     * This method is public so that anyone can access the canvas and change the stroke color
     *
     * @param {string} newStrokeColor The new stroke color
     */
    CanvasWhiteboardComponent.prototype.changeStrokeColor = function (newStrokeColor) {
        this.strokeColor = newStrokeColor;
        this.canvasWhiteboardShapePreviewOptions = this.generateShapePreviewOptions();
        this._changeDetector.detectChanges();
    };
    /**
     * Replaces the fill color with a new color
     * The format should be ("#ffffff" or "rgb(r,g,b,a?)")
     * This method is public so that anyone can access the canvas and change the fill color
     *
     * @param {string} newFillColor The new fill color
     */
    CanvasWhiteboardComponent.prototype.changeFillColor = function (newFillColor) {
        this.fillColor = newFillColor;
        this.canvasWhiteboardShapePreviewOptions = this.generateShapePreviewOptions();
        this._changeDetector.detectChanges();
    };
    /**
     * This method is invoked by the undo button on the canvas screen
     * It calls the global undo method and emits a notification after undoing.
     * This method should only be called from the undo button in this component since it will emit an undo event
     * If the client calls this method he may create a circular undo action which may cause danger.
     */
    CanvasWhiteboardComponent.prototype.undoLocal = function () {
        var _this = this;
        this.undo(function (updateUUID) {
            _this._redoStack.push(updateUUID);
            _this.onUndo.emit(updateUUID);
        });
    };
    /**
     * This methods selects the last uuid prepares it for undoing (making the whole update sequence invisible)
     * This method can be called if the canvas component is a ViewChild of some other component.
     * This method will work even if the undo button has been disabled
     */
    CanvasWhiteboardComponent.prototype.undo = function (callbackFn) {
        if (!this._undoStack.length)
            return;
        var updateUUID = this._undoStack.pop();
        this._undoCanvas(updateUUID);
        callbackFn && callbackFn(updateUUID);
    };
    /**
     * This method takes an UUID for an update, and redraws the canvas by making all updates with that uuid invisible
     * @param {string} updateUUID
     * @private
     */
    CanvasWhiteboardComponent.prototype._undoCanvas = function (updateUUID) {
        if (this._shapesMap.has(updateUUID)) {
            var shape = this._shapesMap.get(updateUUID);
            shape.isVisible = false;
            this.drawAllShapes();
        }
    };
    /**
     * This method is invoked by the redo button on the canvas screen
     * It calls the global redo method and emits a notification after redoing
     * This method should only be called from the redo button in this component since it will emit an redo event
     * If the client calls this method he may create a circular redo action which may cause danger.
     */
    CanvasWhiteboardComponent.prototype.redoLocal = function () {
        var _this = this;
        this.redo(function (updateUUID) {
            _this._undoStack.push(updateUUID);
            _this.onRedo.emit(updateUUID);
        });
    };
    /**
     * This methods selects the last uuid prepares it for redoing (making the whole update sequence visible)
     * This method can be called if the canvas component is a ViewChild of some other component.
     * This method will work even if the redo button has been disabled
     */
    CanvasWhiteboardComponent.prototype.redo = function (callbackFn) {
        if (!this._redoStack.length)
            return;
        var updateUUID = this._redoStack.pop();
        this._redoCanvas(updateUUID);
        callbackFn && callbackFn(updateUUID);
    };
    /**
     * This method takes an UUID for an update, and redraws the canvas by making all updates with that uuid visible
     * @param {string} updateUUID
     * @private
     */
    CanvasWhiteboardComponent.prototype._redoCanvas = function (updateUUID) {
        if (this._shapesMap.has(updateUUID)) {
            var shape = this._shapesMap.get(updateUUID);
            shape.isVisible = true;
            this.drawAllShapes();
        }
    };
    /**
     * Catches the Mouse and Touch events made on the canvas.
     * If drawing is disabled (If an image exists but it's not loaded, or the user did not click Draw),
     * this function does nothing.
     *
     * If a "mousedown | touchstart" event is triggered, dragging will be set to true and an CanvasWhiteboardUpdate object
     * of type "start" will be drawn and then sent as an update to all receiving ends.
     *
     * If a "mousemove | touchmove" event is triggered and the client is dragging, an CanvasWhiteboardUpdate object
     * of type "drag" will be drawn and then sent as an update to all receiving ends.
     *
     * If a "mouseup, mouseout | touchend, touchcancel" event is triggered, dragging will be set to false and
     * an CanvasWhiteboardUpdate object of type "stop" will be drawn and then sent as an update to all receiving ends.
     *
     */
    CanvasWhiteboardComponent.prototype.canvasUserEvents = function (event) {
        //Ignore all if we didn't click the _draw! button or the image did not load
        if (!this.drawingEnabled || !this._canDraw) {
            return;
        }
        // Ignore mouse move Events if we're not dragging
        if (!this._clientDragging
            && (event.type === 'mousemove'
                || event.type === 'touchmove'
                || event.type === 'mouseout'
                || event.type === 'touchcancel'
                || event.type === 'mouseup'
                || event.type === 'touchend'
                || event.type === 'mouseout')) {
            return;
        }
        if (event.target == this._incompleteShapesCanvas.nativeElement || event.target == this.canvas.nativeElement) {
            event.preventDefault();
        }
        var update;
        var updateType;
        var eventPosition = this._getCanvasEventPosition(event);
        update = new canvas_whiteboard_update_model_1.CanvasWhiteboardUpdate(eventPosition.x, eventPosition.y);
        switch (event.type) {
            case 'mousedown':
            case 'touchstart':
                this._clientDragging = true;
                this._lastUUID = this._generateUUID();
                updateType = canvas_whiteboard_update_model_1.CanvasWhiteboardUpdateType.START;
                this._redoStack = [];
                this._addCurrentShapeDataToAnUpdate(update);
                break;
            case 'mousemove':
            case 'touchmove':
                if (!this._clientDragging) {
                    return;
                }
                updateType = canvas_whiteboard_update_model_1.CanvasWhiteboardUpdateType.DRAG;
                break;
            case 'touchcancel':
            case 'mouseup':
            case 'touchend':
            case 'mouseout':
                this._clientDragging = false;
                updateType = canvas_whiteboard_update_model_1.CanvasWhiteboardUpdateType.STOP;
                this._undoStack.push(this._lastUUID);
                break;
        }
        update.UUID = this._lastUUID;
        update.type = updateType;
        this._draw(update);
        this._prepareToSendUpdate(update);
    };
    /**
     * Get the coordinates (x,y) from a given event
     * If it is a touch event, get the touch positions
     * If we released the touch, the position will be placed in the changedTouches object
     * If it is not a touch event, use the original mouse event received
     * @param eventData
     * @return {CanvasWhiteboardPoint}
     * @private
     */
    CanvasWhiteboardComponent.prototype._getCanvasEventPosition = function (eventData) {
        var canvasBoundingRect = this.context.canvas.getBoundingClientRect();
        var hasTouches = (eventData.touches && eventData.touches.length) ? eventData.touches[0] : null;
        if (!hasTouches)
            hasTouches = (eventData.changedTouches && eventData.changedTouches.length) ? eventData.changedTouches[0] : null;
        var event = hasTouches ? hasTouches : eventData;
        var scaleWidth = canvasBoundingRect.width / this.context.canvas.width;
        var scaleHeight = canvasBoundingRect.height / this.context.canvas.height;
        var xPosition = (event.clientX - canvasBoundingRect.left);
        var yPosition = (event.clientY - canvasBoundingRect.top);
        xPosition /= this.scaleFactor ? this.scaleFactor : scaleWidth;
        yPosition /= this.scaleFactor ? this.scaleFactor : scaleHeight;
        return new canvas_whiteboard_point_1.CanvasWhiteboardPoint(xPosition / this.context.canvas.width, yPosition / this.context.canvas.height);
    };
    /**
     * The update coordinates on the canvas are mapped so that all receiving ends
     * can reverse the mapping and get the same position as the one that
     * was drawn on this update.
     *
     * @param {CanvasWhiteboardUpdate} update The CanvasWhiteboardUpdate object.
     */
    CanvasWhiteboardComponent.prototype._prepareToSendUpdate = function (update) {
        this._prepareUpdateForBatchDispatch(update);
    };
    /**
     * Catches the Key Up events made on the canvas.
     * If the ctrlKey or commandKey(macOS) was held and the keyCode is 90 (z), an undo action will be performed
     * If the ctrlKey or commandKey(macOS) was held and the keyCode is 89 (y), a redo action will be performed
     * If the ctrlKey or commandKey(macOS) was held and the keyCode is 83 (s) or 115(S), a save action will be performed
     *
     * @param event The event that occurred.
     */
    CanvasWhiteboardComponent.prototype._canvasKeyDown = function (event) {
        if (event.ctrlKey || event.metaKey) {
            if (event.keyCode === 90 && this.undoButtonEnabled) {
                event.preventDefault();
                this.undo();
            }
            if (event.keyCode === 89 && this.redoButtonEnabled) {
                event.preventDefault();
                this.redo();
            }
            if (event.keyCode === 83 || event.keyCode === 115) {
                event.preventDefault();
                this.saveLocal();
            }
        }
    };
    /**
     * On window resize, recalculate the canvas dimensions and redraw the history
     * @private
     */
    CanvasWhiteboardComponent.prototype._redrawCanvasOnResize = function () {
        this._calculateCanvasWidthAndHeight();
        this._redrawHistory();
    };
    /**
     * Redraw the saved history after resetting the canvas state
     * @private
     */
    CanvasWhiteboardComponent.prototype._redrawHistory = function () {
        var _this = this;
        var updatesToDraw = [].concat(this._updateHistory);
        this._removeCanvasData(function () {
            updatesToDraw.forEach(function (update) {
                _this._draw(update);
            });
        });
    };
    /**
     * Draws a CanvasWhiteboardUpdate object on the canvas.
     * The coordinates are first reverse mapped so that they can be drawn in the proper place. The update
     * is afterwards added to the undoStack so that it can be
     *
     * If the CanvasWhiteboardUpdate Type is "start", a new "selectedShape" is created.
     * If the CanvasWhiteboardUpdate Type is "drag", the shape is taken from the shapesMap and then it's updated.
     * Afterwards the context is used to draw the shape on the canvas.
     * This function saves the last X and Y coordinates that were drawn.
     *
     * @param {CanvasWhiteboardUpdate} update The update object.
     */
    CanvasWhiteboardComponent.prototype._draw = function (update) {
        this._updateHistory.push(update);
        //map the canvas coordinates to our canvas size since they are scaled.
        update = Object.assign(new canvas_whiteboard_update_model_1.CanvasWhiteboardUpdate(), update, {
            x: update.x * this.context.canvas.width,
            y: update.y * this.context.canvas.height
        });
        if (update.type === canvas_whiteboard_update_model_1.CanvasWhiteboardUpdateType.START) {
            var updateShapeConstructor = this._canvasWhiteboardShapeService.getShapeConstructorFromShapeName(update.selectedShape);
            var shape = new updateShapeConstructor(new canvas_whiteboard_point_1.CanvasWhiteboardPoint(update.x, update.y), Object.assign(new canvas_whiteboard_shape_options_1.CanvasWhiteboardShapeOptions(), update.selectedShapeOptions));
            this._incompleteShapesMap.set(update.UUID, shape);
            this._drawIncompleteShapes();
        }
        else if (update.type === canvas_whiteboard_update_model_1.CanvasWhiteboardUpdateType.DRAG) {
            var shape = this._incompleteShapesMap.get(update.UUID);
            shape && shape.onUpdateReceived(update);
            this._drawIncompleteShapes();
        }
        else if (canvas_whiteboard_update_model_1.CanvasWhiteboardUpdateType.STOP) {
            var shape = this._incompleteShapesMap.get(update.UUID);
            shape && shape.onStopReceived(update);
            this._shapesMap.set(update.UUID, shape);
            this._incompleteShapesMap.delete(update.UUID);
            this._swapCompletedShapeToActualCanvas(shape);
        }
    };
    CanvasWhiteboardComponent.prototype._drawIncompleteShapes = function () {
        var _this = this;
        this._resetIncompleteShapeCanvas();
        this._incompleteShapesMap.forEach(function (shape) {
            if (shape.isVisible) {
                shape.draw(_this._incompleteShapesCanvasContext);
            }
        });
    };
    CanvasWhiteboardComponent.prototype._swapCompletedShapeToActualCanvas = function (shape) {
        this._drawIncompleteShapes();
        if (shape.isVisible) {
            shape.draw(this.context);
        }
    };
    CanvasWhiteboardComponent.prototype._resetIncompleteShapeCanvas = function () {
        this._incompleteShapesCanvasContext.clearRect(0, 0, this._incompleteShapesCanvasContext.canvas.width, this._incompleteShapesCanvasContext.canvas.height);
        this._incompleteShapesCanvasContext.fillStyle = "transparent";
        this._incompleteShapesCanvasContext.fillRect(0, 0, this._incompleteShapesCanvasContext.canvas.width, this._incompleteShapesCanvasContext.canvas.height);
    };
    /**
     * Delete everything from the screen, redraw the background, and then redraw all the shapes from the shapesMap
     */
    CanvasWhiteboardComponent.prototype.drawAllShapes = function () {
        var _this = this;
        this._redrawBackground(function () {
            _this._shapesMap.forEach(function (shape) {
                if (shape.isVisible) {
                    shape.draw(_this.context);
                }
            });
        });
    };
    CanvasWhiteboardComponent.prototype._addCurrentShapeDataToAnUpdate = function (update) {
        if (!update.selectedShape) {
            update.selectedShape = this.selectedShapeConstructor.name;
        }
        if (!update.selectedShapeOptions) {
            //Make a deep copy since we don't want some Shape implementation to change something by accident
            update.selectedShapeOptions = Object.assign(new canvas_whiteboard_shape_options_1.CanvasWhiteboardShapeOptions(), this.generateShapePreviewOptions(), { lineWidth: this.lineWidth });
        }
    };
    CanvasWhiteboardComponent.prototype.generateShapePreviewOptions = function () {
        return Object.assign(new canvas_whiteboard_shape_options_1.CanvasWhiteboardShapeOptions(), {
            shouldFillShape: !!this.fillColor,
            fillStyle: this.fillColor,
            strokeStyle: this.strokeColor,
            lineWidth: 2,
            lineJoin: this.lineJoin,
            lineCap: this.lineCap
        });
    };
    /**
     * Sends the update to all receiving ends as an Event emit. This is done as a batch operation (meaning
     * multiple updates are sent at the same time). If this method is called, after 100 ms all updates
     * that were made at that time will be packed up together and sent to the receiver.
     *
     * @param {CanvasWhiteboardUpdate} update The update object.
     * @return Emits an Array of Updates when the batch.
     */
    CanvasWhiteboardComponent.prototype._prepareUpdateForBatchDispatch = function (update) {
        var _this = this;
        this._batchUpdates.push(cloneDeep(update));
        if (!this._updateTimeout) {
            this._updateTimeout = setTimeout(function () {
                _this.onBatchUpdate.emit(_this._batchUpdates);
                _this._batchUpdates = [];
                _this._updateTimeout = null;
            }, this.batchUpdateTimeoutDuration);
        }
    };
    ;
    /**
     * Draws an Array of Updates on the canvas.
     *
     * @param {CanvasWhiteboardUpdate[]} updates The array with Updates.
     */
    CanvasWhiteboardComponent.prototype.drawUpdates = function (updates) {
        var _this = this;
        if (this._canDraw) {
            this._drawMissingUpdates();
            updates.forEach(function (update) {
                _this._draw(update);
            });
        }
        else {
            this._updatesNotDrawn = this._updatesNotDrawn.concat(updates);
        }
    };
    ;
    /**
     * Draw any missing updates that were received before the image was loaded
     *
     */
    CanvasWhiteboardComponent.prototype._drawMissingUpdates = function () {
        var _this = this;
        if (this._updatesNotDrawn.length > 0) {
            var updatesToDraw = this._updatesNotDrawn;
            this._updatesNotDrawn = [];
            updatesToDraw.forEach(function (update) {
                _this._draw(update);
            });
        }
    };
    /**
     * Draws an image on the canvas
     *
     * @param {CanvasRenderingContext2D} context The context used to draw the image on the canvas.
     * @param {HTMLImageElement} image The image to draw.
     * @param {number} x The X coordinate for the starting draw position.
     * @param {number} y The Y coordinate for the starting draw position.
     * @param {number} width The width of the image that will be drawn.
     * @param {number} height The height of the image that will be drawn.
     * @param {number} offsetX The offsetX if the image size is larger than the canvas (aspect Ratio)
     * @param {number} offsetY The offsetY if the image size is larger than the canvas (aspect Ratio)
     */
    CanvasWhiteboardComponent.prototype._drawImage = function (context, image, x, y, width, height, offsetX, offsetY) {
        if (arguments.length === 2) {
            x = y = 0;
            width = context.canvas.width;
            height = context.canvas.height;
        }
        offsetX = typeof offsetX === 'number' ? offsetX : 0.5;
        offsetY = typeof offsetY === 'number' ? offsetY : 0.5;
        if (offsetX < 0)
            offsetX = 0;
        if (offsetY < 0)
            offsetY = 0;
        if (offsetX > 1)
            offsetX = 1;
        if (offsetY > 1)
            offsetY = 1;
        var imageWidth = image.width;
        var imageHeight = image.height;
        var radius = Math.min(width / imageWidth, height / imageHeight);
        var newWidth = imageWidth * radius;
        var newHeight = imageHeight * radius;
        var finalDrawX;
        var finalDrawY;
        var finalDrawWidth;
        var finalDrawHeight;
        var aspectRatio = 1;
        // decide which gap to fill
        if (newWidth < width)
            aspectRatio = width / newWidth;
        if (Math.abs(aspectRatio - 1) < 1e-14 && newHeight < height)
            aspectRatio = height / newHeight;
        newWidth *= aspectRatio;
        newHeight *= aspectRatio;
        // calculate source rectangle
        finalDrawWidth = imageWidth / (newWidth / width);
        finalDrawHeight = imageHeight / (newHeight / height);
        finalDrawX = (imageWidth - finalDrawWidth) * offsetX;
        finalDrawY = (imageHeight - finalDrawHeight) * offsetY;
        // make sure the source rectangle is valid
        if (finalDrawX < 0)
            finalDrawX = 0;
        if (finalDrawY < 0)
            finalDrawY = 0;
        if (finalDrawWidth > imageWidth)
            finalDrawWidth = imageWidth;
        if (finalDrawHeight > imageHeight)
            finalDrawHeight = imageHeight;
        // fill the image in destination rectangle
        context.drawImage(image, finalDrawX, finalDrawY, finalDrawWidth, finalDrawHeight, x, y, width, height);
    };
    /**
     * The HTMLCanvasElement.toDataURL() method returns a data URI containing a representation of the image in the format specified by the type parameter (defaults to PNG).
     * The returned image is in a resolution of 96 dpi.
     * If the height or width of the canvas is 0, the string "data:," is returned.
     * If the requested type is not image/png, but the returned value starts with data:image/png, then the requested type is not supported.
     * Chrome also supports the image/webp type.
     *
     * @param {string} returnedDataType A DOMString indicating the image format. The default format type is image/png.
     * @param {number} returnedDataQuality A Number between 0 and 1 indicating image quality if the requested type is image/jpeg or image/webp.
     If this argument is anything else, the default value for image quality is used. The default value is 0.92. Other arguments are ignored.
     */
    CanvasWhiteboardComponent.prototype.generateCanvasDataUrl = function (returnedDataType, returnedDataQuality) {
        if (returnedDataType === void 0) { returnedDataType = "image/png"; }
        if (returnedDataQuality === void 0) { returnedDataQuality = 1; }
        return this.context.canvas.toDataURL(returnedDataType, returnedDataQuality);
    };
    /**
     * Generate a Blob object representing the content drawn on the canvas.
     * This file may be cached on the disk or stored in memory at the discretion of the user agent.
     * If type is not specified, the image type is image/png. The created image is in a resolution of 96dpi.
     * The third argument is used with image/jpeg images to specify the quality of the output.
     *
     * @param callbackFn The function that should be executed when the blob is created. Should accept a parameter Blob (for the result).
     * @param {string} returnedDataType A DOMString indicating the image format. The default type is image/png.
     * @param {number} returnedDataQuality A Number between 0 and 1 indicating image quality if the requested type is image/jpeg or image/webp.
     If this argument is anything else, the default value for image quality is used. Other arguments are ignored.
     */
    CanvasWhiteboardComponent.prototype.generateCanvasBlob = function (callbackFn, returnedDataType, returnedDataQuality) {
        var _this = this;
        if (returnedDataType === void 0) { returnedDataType = "image/png"; }
        if (returnedDataQuality === void 0) { returnedDataQuality = 1; }
        var toBlobMethod;
        if (typeof this.context.canvas.toBlob !== "undefined") {
            toBlobMethod = this.context.canvas.toBlob.bind(this.context.canvas);
        }
        else if (typeof this.context.canvas.msToBlob !== "undefined") {
            toBlobMethod = function (callback) {
                callback && callback(_this.context.canvas.msToBlob());
            };
        }
        toBlobMethod && toBlobMethod(function (blob) {
            callbackFn && callbackFn(blob, returnedDataType);
        }, returnedDataType, returnedDataQuality);
    };
    /**
     * Generate a canvas image representation and download it locally
     * The name of the image is canvas_drawing_ + the current local Date and Time the image was created
     * Methods for standalone creation of the images in this method are left here for backwards compatibility
     *
     * @param {string} returnedDataType A DOMString indicating the image format. The default type is image/png.
     * @param {string | Blob} downloadData? The created string or Blob (IE).
     * @param {string} customFileName? The name of the file that should be downloaded
     */
    CanvasWhiteboardComponent.prototype.downloadCanvasImage = function (returnedDataType, downloadData, customFileName) {
        if (returnedDataType === void 0) { returnedDataType = "image/png"; }
        if (window.navigator.msSaveOrOpenBlob === undefined) {
            var downloadLink = document.createElement('a');
            downloadLink.setAttribute('href', downloadData ? downloadData : this.generateCanvasDataUrl(returnedDataType));
            var fileName = customFileName ? customFileName
                : (this.downloadedFileName ? this.downloadedFileName : "canvas_drawing_" + new Date().valueOf());
            downloadLink.setAttribute('download', fileName + this._generateDataTypeString(returnedDataType));
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
        }
        else {
            // IE-specific code
            if (downloadData) {
                this._saveCanvasBlob(downloadData, returnedDataType);
            }
            else {
                this.generateCanvasBlob(this._saveCanvasBlob.bind(this), returnedDataType);
            }
        }
    };
    /**
     * Save the canvas blob (IE) locally
     * @param {Blob} blob
     * @param {string} returnedDataType
     * @private
     */
    CanvasWhiteboardComponent.prototype._saveCanvasBlob = function (blob, returnedDataType) {
        if (returnedDataType === void 0) { returnedDataType = "image/png"; }
        window.navigator.msSaveOrOpenBlob(blob, "canvas_drawing_" + new Date().valueOf() + this._generateDataTypeString(returnedDataType));
    };
    /**
     * This method generates a canvas url string or a canvas blob with the presented data type
     * A callback function is then invoked since the blob creation must be done via a callback
     *
     * @param callback
     * @param {string} returnedDataType
     * @param returnedDataQuality
     */
    CanvasWhiteboardComponent.prototype.generateCanvasData = function (callback, returnedDataType, returnedDataQuality) {
        if (returnedDataType === void 0) { returnedDataType = "image/png"; }
        if (returnedDataQuality === void 0) { returnedDataQuality = 1; }
        if (window.navigator.msSaveOrOpenBlob === undefined) {
            callback && callback(this.generateCanvasDataUrl(returnedDataType, returnedDataQuality));
        }
        else {
            this.generateCanvasBlob(callback, returnedDataType, returnedDataQuality);
        }
    };
    /**
     * Local method to invoke saving of the canvas data when clicked on the canvas Save button
     * This method will emit the generated data with the specified Event Emitter
     *
     * @param {string} returnedDataType
     */
    CanvasWhiteboardComponent.prototype.saveLocal = function (returnedDataType) {
        var _this = this;
        if (returnedDataType === void 0) { returnedDataType = "image/png"; }
        this.generateCanvasData(function (generatedData) {
            _this.onSave.emit(generatedData);
            if (_this.shouldDownloadDrawing) {
                _this.downloadCanvasImage(returnedDataType, generatedData);
            }
        });
    };
    CanvasWhiteboardComponent.prototype._generateDataTypeString = function (returnedDataType) {
        if (returnedDataType) {
            return "." + returnedDataType.split('/')[1];
        }
        return "";
    };
    /**
     * Toggles the color picker window, delegating the showColorPicker Input to the ColorPickerComponent.
     * If no value is supplied (null/undefined) the current value will be negated and used.
     * @param {boolean} value
     */
    CanvasWhiteboardComponent.prototype.toggleStrokeColorPicker = function (value) {
        this.showStrokeColorPicker = !this._isNullOrUndefined(value) ? value : !this.showStrokeColorPicker;
    };
    /**
     * Toggles the color picker window, delegating the showColorPicker Input to the ColorPickerComponent.
     * If no value is supplied (null/undefined) the current value will be negated and used.
     * @param {boolean} value
     */
    CanvasWhiteboardComponent.prototype.toggleFillColorPicker = function (value) {
        this.showFillColorPicker = !this._isNullOrUndefined(value) ? value : !this.showFillColorPicker;
    };
    /**
     * Toggles the shape selector window, delegating the showShapeSelector Input to the CanvasWhiteboardShapeSelectorComponent.
     * If no value is supplied (null/undefined) the current value will be negated and used.
     * @param {boolean} value
     */
    CanvasWhiteboardComponent.prototype.toggleShapeSelector = function (value) {
        this.showShapeSelector = !this._isNullOrUndefined(value) ? value : !this.showShapeSelector;
    };
    CanvasWhiteboardComponent.prototype.selectShape = function (newShapeBlueprint) {
        this.selectedShapeConstructor = newShapeBlueprint;
    };
    /**
     * Returns a deep copy of the current drawing history for the canvas.
     * The deep copy is returned because we don't want anyone to mutate the current history
     * @returns {CanvasWhiteboardUpdate[]}
     */
    CanvasWhiteboardComponent.prototype.getDrawingHistory = function () {
        return cloneDeep(this._updateHistory);
    };
    /**
     * Unsubscribe from a given subscription if it is active
     * @param {Subscription} subscription
     * @private
     */
    CanvasWhiteboardComponent.prototype._unsubscribe = function (subscription) {
        if (subscription)
            subscription.unsubscribe();
    };
    CanvasWhiteboardComponent.prototype._generateUUID = function () {
        return this._random4() + this._random4() + "-" + this._random4() + "-" + this._random4() + "-" +
            this._random4() + "-" + this._random4() + this._random4() + this._random4();
    };
    CanvasWhiteboardComponent.prototype._random4 = function () {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    };
    /**
     * Unsubscribe from the service observables
     */
    CanvasWhiteboardComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        this._unsubscribe(this._resizeSubscription);
        this._unsubscribe(this._registeredShapesSubscription);
        this._canvasWhiteboardServiceSubscriptions.forEach(function (subscription) { return _this._unsubscribe(subscription); });
    };
    return CanvasWhiteboardComponent;
}());
CanvasWhiteboardComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'canvas-whiteboard',
                template: "\n        <div class=\"canvas_wrapper_div\">\n            <div class=\"canvas_whiteboard_buttons\">\n                <canvas-whiteboard-shape-selector *ngIf=\"shapeSelectorEnabled\"\n                                                  [showShapeSelector]=\"showShapeSelector\"\n                                                  [selectedShapeConstructor]=\"selectedShapeConstructor\"\n                                                  [shapeOptions]=\"generateShapePreviewOptions()\"\n                                                  (onToggleShapeSelector)=\"toggleShapeSelector($event)\"\n                                                  (onShapeSelected)=\"selectShape($event)\"></canvas-whiteboard-shape-selector>\n\n                <canvas-whiteboard-colorpicker *ngIf=\"colorPickerEnabled\"\n                                               [previewText]=\"'Fill'\"\n                                               [showColorPicker]=\"showFillColorPicker\"\n                                               [selectedColor]=\"fillColor\"\n                                               (onToggleColorPicker)=\"toggleFillColorPicker($event)\"\n                                               (onColorSelected)=\"changeFillColor($event)\">\n                </canvas-whiteboard-colorpicker>\n\n                <canvas-whiteboard-colorpicker *ngIf=\"colorPickerEnabled\"\n                                               [previewText]=\"'Stroke'\"\n                                               [showColorPicker]=\"showStrokeColorPicker\"\n                                               [selectedColor]=\"strokeColor\"\n                                               (onToggleColorPicker)=\"toggleStrokeColorPicker($event)\"\n                                               (onColorSelected)=\"changeStrokeColor($event)\">\n                </canvas-whiteboard-colorpicker>\n\n\n                <button *ngIf=\"drawButtonEnabled\" (click)=\"toggleDrawingEnabled()\"\n                        [class.canvas_whiteboard_button-draw_animated]=\"getDrawingEnabled()\"\n                        class=\"canvas_whiteboard_button canvas_whiteboard_button-draw\" type=\"button\">\n                    <i [class]=\"drawButtonClass\" aria-hidden=\"true\"></i> {{drawButtonText}}\n                </button>\n\n                <button *ngIf=\"clearButtonEnabled\" (click)=\"clearCanvasLocal()\" type=\"button\"\n                        class=\"canvas_whiteboard_button canvas_whiteboard_button-clear\">\n                    <i [class]=\"clearButtonClass\" aria-hidden=\"true\"></i> {{clearButtonText}}\n                </button>\n\n                <button *ngIf=\"undoButtonEnabled\" (click)=\"undoLocal()\" type=\"button\"\n                        class=\"canvas_whiteboard_button canvas_whiteboard_button-undo\">\n                    <i [class]=\"undoButtonClass\" aria-hidden=\"true\"></i> {{undoButtonText}}\n                </button>\n\n                <button *ngIf=\"redoButtonEnabled\" (click)=\"redoLocal()\" type=\"button\"\n                        class=\"canvas_whiteboard_button canvas_whiteboard_button-redo\">\n                    <i [class]=\"redoButtonClass\" aria-hidden=\"true\"></i> {{redoButtonText}}\n                </button>\n                <button *ngIf=\"saveDataButtonEnabled\" (click)=\"saveLocal()\" type=\"button\"\n                        class=\"canvas_whiteboard_button canvas_whiteboard_button-save\">\n                    <i [class]=\"saveDataButtonClass\" aria-hidden=\"true\"></i> {{saveDataButtonText}}\n                </button>\n            </div>\n            <canvas #canvas class=\"canvas_whiteboard\"></canvas>\n            <canvas #incompleteShapesCanvas class=\"incomplete_shapes_canvas_whiteboard\"\n                    (mousedown)=\"canvasUserEvents($event)\" (mouseup)=\"canvasUserEvents($event)\"\n                    (mousemove)=\"canvasUserEvents($event)\" (mouseout)=\"canvasUserEvents($event)\"\n                    (touchstart)=\"canvasUserEvents($event)\" (touchmove)=\"canvasUserEvents($event)\"\n                    (touchend)=\"canvasUserEvents($event)\" (touchcancel)=\"canvasUserEvents($event)\"></canvas>\n        </div>\n    ",
                styles: [template_1.DEFAULT_STYLES]
            },] },
];
/** @nocollapse */
CanvasWhiteboardComponent.ctorParameters = function () { return [
    { type: core_1.NgZone, },
    { type: core_1.ChangeDetectorRef, },
    { type: canvas_whiteboard_service_1.CanvasWhiteboardService, },
    { type: canvas_whiteboard_shape_service_1.CanvasWhiteboardShapeService, },
]; };
CanvasWhiteboardComponent.propDecorators = {
    'options': [{ type: core_1.Input },],
    'batchUpdateTimeoutDuration': [{ type: core_1.Input },],
    'imageUrl': [{ type: core_1.Input },],
    'aspectRatio': [{ type: core_1.Input },],
    'drawButtonClass': [{ type: core_1.Input },],
    'clearButtonClass': [{ type: core_1.Input },],
    'undoButtonClass': [{ type: core_1.Input },],
    'redoButtonClass': [{ type: core_1.Input },],
    'saveDataButtonClass': [{ type: core_1.Input },],
    'drawButtonText': [{ type: core_1.Input },],
    'clearButtonText': [{ type: core_1.Input },],
    'undoButtonText': [{ type: core_1.Input },],
    'redoButtonText': [{ type: core_1.Input },],
    'saveDataButtonText': [{ type: core_1.Input },],
    'drawButtonEnabled': [{ type: core_1.Input },],
    'clearButtonEnabled': [{ type: core_1.Input },],
    'undoButtonEnabled': [{ type: core_1.Input },],
    'redoButtonEnabled': [{ type: core_1.Input },],
    'saveDataButtonEnabled': [{ type: core_1.Input },],
    'shouldDownloadDrawing': [{ type: core_1.Input },],
    'colorPickerEnabled': [{ type: core_1.Input },],
    'lineWidth': [{ type: core_1.Input },],
    'strokeColor': [{ type: core_1.Input },],
    'startingColor': [{ type: core_1.Input },],
    'scaleFactor': [{ type: core_1.Input },],
    'drawingEnabled': [{ type: core_1.Input },],
    'showStrokeColorPicker': [{ type: core_1.Input },],
    'showFillColorPicker': [{ type: core_1.Input },],
    'downloadedFileName': [{ type: core_1.Input },],
    'lineJoin': [{ type: core_1.Input },],
    'lineCap': [{ type: core_1.Input },],
    'shapeSelectorEnabled': [{ type: core_1.Input },],
    'showShapeSelector': [{ type: core_1.Input },],
    'fillColor': [{ type: core_1.Input },],
    'onClear': [{ type: core_1.Output },],
    'onUndo': [{ type: core_1.Output },],
    'onRedo': [{ type: core_1.Output },],
    'onBatchUpdate': [{ type: core_1.Output },],
    'onImageLoaded': [{ type: core_1.Output },],
    'onSave': [{ type: core_1.Output },],
    'canvas': [{ type: core_1.ViewChild, args: ['canvas',] },],
    '_incompleteShapesCanvas': [{ type: core_1.ViewChild, args: ['incompleteShapesCanvas',] },],
};
exports.CanvasWhiteboardComponent = CanvasWhiteboardComponent;
//# sourceMappingURL=canvas-whiteboard.component.js.map