import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { CanvasWhiteboardUpdate, CanvasWhiteboardUpdateType } from './canvas-whiteboard-update.model';
import { DEFAULT_STYLES } from './template';
import { CanvasWhiteboardPoint } from './canvas-whiteboard-point.model';
import { CanvasWhiteboardShapeOptions } from './shapes/canvas-whiteboard-shape-options';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { cloneDeep, isEqual } from 'lodash-es';
import * as i0 from "@angular/core";
import * as i1 from "./canvas-whiteboard.service";
import * as i2 from "./shapes/canvas-whiteboard-shape.service";
import * as i3 from "@angular/common";
import * as i4 from "./canvas-whiteboard-colorpicker.component";
import * as i5 from "./shapes/canvas-whiteboard-shape-selector.component";
const _c0 = ["canvas"];
const _c1 = ["incompleteShapesCanvas"];
function CanvasWhiteboardComponent_canvas_whiteboard_shape_selector_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "canvas-whiteboard-shape-selector", 13);
    i0.ɵɵlistener("onToggleShapeSelector", function CanvasWhiteboardComponent_canvas_whiteboard_shape_selector_2_Template_canvas_whiteboard_shape_selector_onToggleShapeSelector_0_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r10.toggleShapeSelector($event)); })("onShapeSelected", function CanvasWhiteboardComponent_canvas_whiteboard_shape_selector_2_Template_canvas_whiteboard_shape_selector_onShapeSelected_0_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r12 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r12.selectShape($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("showShapeSelector", ctx_r0.showShapeSelector)("selectedShapeConstructor", ctx_r0.selectedShapeConstructor)("shapeOptions", ctx_r0.generateShapePreviewOptions());
} }
function CanvasWhiteboardComponent_canvas_whiteboard_colorpicker_3_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "canvas-whiteboard-colorpicker", 14);
    i0.ɵɵlistener("onToggleColorPicker", function CanvasWhiteboardComponent_canvas_whiteboard_colorpicker_3_Template_canvas_whiteboard_colorpicker_onToggleColorPicker_0_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r13.toggleFillColorPicker($event)); })("onColorSelected", function CanvasWhiteboardComponent_canvas_whiteboard_colorpicker_3_Template_canvas_whiteboard_colorpicker_onColorSelected_0_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r15 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r15.changeFillColor($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("previewText", ctx_r1.fillColorPickerText)("showColorPicker", ctx_r1.showFillColorPicker)("selectedColor", ctx_r1.fillColor);
} }
function CanvasWhiteboardComponent_canvas_whiteboard_colorpicker_4_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "canvas-whiteboard-colorpicker", 14);
    i0.ɵɵlistener("onToggleColorPicker", function CanvasWhiteboardComponent_canvas_whiteboard_colorpicker_4_Template_canvas_whiteboard_colorpicker_onToggleColorPicker_0_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r16 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r16.toggleStrokeColorPicker($event)); })("onColorSelected", function CanvasWhiteboardComponent_canvas_whiteboard_colorpicker_4_Template_canvas_whiteboard_colorpicker_onColorSelected_0_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r18 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r18.changeStrokeColor($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("previewText", ctx_r2.strokeColorPickerText)("showColorPicker", ctx_r2.showStrokeColorPicker)("selectedColor", ctx_r2.strokeColor);
} }
function CanvasWhiteboardComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 15);
    i0.ɵɵlistener("click", function CanvasWhiteboardComponent_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r20); const ctx_r19 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r19.toggleDrawingEnabled()); });
    i0.ɵɵelement(1, "i", 16);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("canvas_whiteboard_button-draw_animated", ctx_r3.getDrawingEnabled());
    i0.ɵɵadvance(1);
    i0.ɵɵclassMap(ctx_r3.drawButtonClass);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r3.drawButtonText, " ");
} }
function CanvasWhiteboardComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 17);
    i0.ɵɵlistener("click", function CanvasWhiteboardComponent_button_6_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r22); const ctx_r21 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r21.clearCanvasLocal()); });
    i0.ɵɵelement(1, "i", 16);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassMap(ctx_r4.clearButtonClass);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r4.clearButtonText, " ");
} }
function CanvasWhiteboardComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 18);
    i0.ɵɵlistener("click", function CanvasWhiteboardComponent_button_7_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r24); const ctx_r23 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r23.undoLocal()); });
    i0.ɵɵelement(1, "i", 16);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassMap(ctx_r5.undoButtonClass);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r5.undoButtonText, " ");
} }
function CanvasWhiteboardComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 19);
    i0.ɵɵlistener("click", function CanvasWhiteboardComponent_button_8_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r26); const ctx_r25 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r25.redoLocal()); });
    i0.ɵɵelement(1, "i", 16);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassMap(ctx_r6.redoButtonClass);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r6.redoButtonText, " ");
} }
function CanvasWhiteboardComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r28 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 20);
    i0.ɵɵlistener("click", function CanvasWhiteboardComponent_button_9_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r28); const ctx_r27 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r27.saveLocal()); });
    i0.ɵɵelement(1, "i", 16);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassMap(ctx_r7.saveDataButtonClass);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r7.saveDataButtonText, " ");
} }
export class CanvasWhiteboardComponent {
    set imageUrl(imageUrl) {
        this._imageUrl = imageUrl;
        this._imageElement = null;
        this._redrawHistory();
    }
    get imageUrl() {
        return this._imageUrl;
    }
    constructor(ngZone, changeDetectorRef, canvasWhiteboardService, canvasWhiteboardShapeService) {
        this.ngZone = ngZone;
        this.changeDetectorRef = changeDetectorRef;
        this.canvasWhiteboardService = canvasWhiteboardService;
        this.canvasWhiteboardShapeService = canvasWhiteboardShapeService;
        // Number of ms to wait before sending out the updates as an array
        this.batchUpdateTimeoutDuration = 100;
        this.drawButtonText = '';
        this.clearButtonText = '';
        this.undoButtonText = '';
        this.redoButtonText = '';
        this.saveDataButtonText = '';
        this.strokeColorPickerText = 'Stroke';
        this.fillColorPickerText = 'Fill';
        this.drawButtonEnabled = true;
        this.clearButtonEnabled = true;
        this.undoButtonEnabled = false;
        this.redoButtonEnabled = false;
        this.saveDataButtonEnabled = false;
        this.shouldDownloadDrawing = true;
        /** @deprecated. Replaced with strokeColorPickerEnabled and fillColorPickerEnabled inputs */
        this.colorPickerEnabled = false;
        this.strokeColorPickerEnabled = false;
        this.fillColorPickerEnabled = false;
        this.lineWidth = 2;
        this.strokeColor = 'rgba(0, 0, 0, 1)';
        this.startingColor = '#fff';
        this.scaleFactor = 0;
        this.drawingEnabled = false;
        this.showStrokeColorPicker = false;
        this.showFillColorPicker = false;
        this.lineJoin = 'round';
        this.lineCap = 'round';
        this.shapeSelectorEnabled = true;
        this.showShapeSelector = false;
        this.fillColor = 'rgba(0,0,0,0)';
        this.onClear = new EventEmitter();
        this.onUndo = new EventEmitter();
        this.onRedo = new EventEmitter();
        this.onBatchUpdate = new EventEmitter();
        this.onImageLoaded = new EventEmitter();
        this.onSave = new EventEmitter();
        this._canDraw = true;
        this._clientDragging = false;
        this._updateHistory = [];
        this._undoStack = []; // Stores the value of start and count for each continuous stroke
        this._redoStack = [];
        this._batchUpdates = [];
        this._updatesNotDrawn = [];
        this._canvasWhiteboardServiceSubscriptions = [];
        this._shapesMap = new Map();
        this._incompleteShapesMap = new Map();
        this.canvasWhiteboardShapePreviewOptions = this.generateShapePreviewOptions();
    }
    /**
     * Initialize the canvas drawing context. If we have an aspect ratio set up, the canvas will resize
     * according to the aspect ratio.
     */
    ngOnInit() {
        this._initInputsFromOptions(this.options);
        this._initCanvasEventListeners();
        this._initCanvasServiceObservables();
        this.context = this.canvas.nativeElement.getContext('2d');
        this._incompleteShapesCanvasContext = this._incompleteShapesCanvas.nativeElement.getContext('2d');
    }
    /**
     * If an image exists and it's url changes, we need to redraw the new image on the canvas.
     */
    ngOnChanges(changes) {
        if (changes.options && !isEqual(changes.options.currentValue, changes.options.previousValue)) {
            this._initInputsFromOptions(changes.options.currentValue);
        }
    }
    /**
     * Recalculate the width and height of the canvas after the view has been fully initialized
     */
    ngAfterViewInit() {
        this._calculateCanvasWidthAndHeight();
        this._redrawHistory();
    }
    /**
     * This method reads the options which are helpful since they can be really long when specified in HTML
     * This method is also called everytime the options object changes
     * For security reasons we must check each item on its own since if we iterate the keys
     * we may be injected with malicious values
     *
     * @param options
     */
    _initInputsFromOptions(options) {
        if (options) {
            if (!this._isNullOrUndefined(options.batchUpdateTimeoutDuration)) {
                this.batchUpdateTimeoutDuration = options.batchUpdateTimeoutDuration;
            }
            if (!this._isNullOrUndefined(options.imageUrl)) {
                this.imageUrl = options.imageUrl;
            }
            if (!this._isNullOrUndefined(options.aspectRatio)) {
                this.aspectRatio = options.aspectRatio;
            }
            if (!this._isNullOrUndefined(options.drawButtonClass)) {
                this.drawButtonClass = options.drawButtonClass;
            }
            if (!this._isNullOrUndefined(options.clearButtonClass)) {
                this.clearButtonClass = options.clearButtonClass;
            }
            if (!this._isNullOrUndefined(options.undoButtonClass)) {
                this.undoButtonClass = options.undoButtonClass;
            }
            if (!this._isNullOrUndefined(options.redoButtonClass)) {
                this.redoButtonClass = options.redoButtonClass;
            }
            if (!this._isNullOrUndefined(options.saveDataButtonClass)) {
                this.saveDataButtonClass = options.saveDataButtonClass;
            }
            if (!this._isNullOrUndefined(options.drawButtonText)) {
                this.drawButtonText = options.drawButtonText;
            }
            if (!this._isNullOrUndefined(options.clearButtonText)) {
                this.clearButtonText = options.clearButtonText;
            }
            if (!this._isNullOrUndefined(options.undoButtonText)) {
                this.undoButtonText = options.undoButtonText;
            }
            if (!this._isNullOrUndefined(options.redoButtonText)) {
                this.redoButtonText = options.redoButtonText;
            }
            if (!this._isNullOrUndefined(options.saveDataButtonText)) {
                this.saveDataButtonText = options.saveDataButtonText;
            }
            if (!this._isNullOrUndefined(options.strokeColorPickerText)) {
                this.strokeColorPickerText = options.strokeColorPickerText;
            }
            if (!this._isNullOrUndefined(options.fillColorPickerText)) {
                this.fillColorPickerText = options.fillColorPickerText;
            }
            if (!this._isNullOrUndefined(options.drawButtonEnabled)) {
                this.drawButtonEnabled = options.drawButtonEnabled;
            }
            if (!this._isNullOrUndefined(options.clearButtonEnabled)) {
                this.clearButtonEnabled = options.clearButtonEnabled;
            }
            if (!this._isNullOrUndefined(options.undoButtonEnabled)) {
                this.undoButtonEnabled = options.undoButtonEnabled;
            }
            if (!this._isNullOrUndefined(options.redoButtonEnabled)) {
                this.redoButtonEnabled = options.redoButtonEnabled;
            }
            if (!this._isNullOrUndefined(options.saveDataButtonEnabled)) {
                this.saveDataButtonEnabled = options.saveDataButtonEnabled;
            }
            if (!this._isNullOrUndefined(options.colorPickerEnabled)) {
                this.colorPickerEnabled = options.colorPickerEnabled;
            }
            if (!this._isNullOrUndefined(options.strokeColorPickerEnabled)) {
                this.strokeColorPickerEnabled = options.strokeColorPickerEnabled;
            }
            if (!this._isNullOrUndefined(options.fillColorPickerEnabled)) {
                this.fillColorPickerEnabled = options.fillColorPickerEnabled;
            }
            if (!this._isNullOrUndefined(options.lineWidth)) {
                this.lineWidth = options.lineWidth;
            }
            if (!this._isNullOrUndefined(options.strokeColor)) {
                this.strokeColor = options.strokeColor;
            }
            if (!this._isNullOrUndefined(options.shouldDownloadDrawing)) {
                this.shouldDownloadDrawing = options.shouldDownloadDrawing;
            }
            if (!this._isNullOrUndefined(options.startingColor)) {
                this.startingColor = options.startingColor;
            }
            if (!this._isNullOrUndefined(options.scaleFactor)) {
                this.scaleFactor = options.scaleFactor;
            }
            if (!this._isNullOrUndefined(options.drawingEnabled)) {
                this.drawingEnabled = options.drawingEnabled;
            }
            if (!this._isNullOrUndefined(options.downloadedFileName)) {
                this.downloadedFileName = options.downloadedFileName;
            }
            if (!this._isNullOrUndefined(options.lineJoin)) {
                this.lineJoin = options.lineJoin;
            }
            if (!this._isNullOrUndefined(options.lineCap)) {
                this.lineCap = options.lineCap;
            }
            if (!this._isNullOrUndefined(options.shapeSelectorEnabled)) {
                this.shapeSelectorEnabled = options.shapeSelectorEnabled;
            }
            if (!this._isNullOrUndefined(options.showShapeSelector)) {
                this.showShapeSelector = options.showShapeSelector;
            }
            if (!this._isNullOrUndefined(options.fillColor)) {
                this.fillColor = options.fillColor;
            }
            if (!this._isNullOrUndefined(options.showStrokeColorPicker)) {
                this.showStrokeColorPicker = options.showStrokeColorPicker;
            }
            if (!this._isNullOrUndefined(options.showFillColorPicker)) {
                this.showFillColorPicker = options.showFillColorPicker;
            }
        }
    }
    _isNullOrUndefined(property) {
        return property === null || property === undefined;
    }
    /**
     * Init global window listeners like resize and keydown
     */
    _initCanvasEventListeners() {
        this.ngZone.runOutsideAngular(() => {
            this._resizeSubscription = fromEvent(window, 'resize')
                .pipe(debounceTime(200), distinctUntilChanged())
                .subscribe(() => {
                this.ngZone.run(() => {
                    this._redrawCanvasOnResize();
                });
            });
        });
        window.addEventListener('keydown', this._canvasKeyDown.bind(this), false);
    }
    /**
     * Subscribes to new signals in the canvas whiteboard service and executes methods accordingly
     * Because of circular publishing and subscribing, the canvas methods do not use the service when
     * local actions are completed (Ex. clicking undo from the button inside this component)
     */
    _initCanvasServiceObservables() {
        this._canvasWhiteboardServiceSubscriptions.push(this.canvasWhiteboardService.canvasDrawSubject$
            .subscribe(updates => this.drawUpdates(updates)));
        this._canvasWhiteboardServiceSubscriptions.push(this.canvasWhiteboardService.canvasClearSubject$
            .subscribe(() => this.clearCanvas()));
        this._canvasWhiteboardServiceSubscriptions.push(this.canvasWhiteboardService.canvasUndoSubject$
            .subscribe((updateUUD) => this._undoCanvas(updateUUD)));
        this._canvasWhiteboardServiceSubscriptions.push(this.canvasWhiteboardService.canvasRedoSubject$
            .subscribe((updateUUD) => this._redoCanvas(updateUUD)));
        this._registeredShapesSubscription = this.canvasWhiteboardShapeService.registeredShapes$.subscribe((shapes) => {
            if (!this.selectedShapeConstructor || !this.canvasWhiteboardShapeService.isRegisteredShape(this.selectedShapeConstructor)) {
                this.selectedShapeConstructor = shapes[0];
            }
        });
    }
    /**
     * Calculate the canvas width and height from it's parent container width and height (use aspect ratio if needed)
     */
    _calculateCanvasWidthAndHeight() {
        this.context.canvas.width = this.canvas.nativeElement.parentNode.clientWidth;
        if (this.aspectRatio) {
            this.context.canvas.height = this.canvas.nativeElement.parentNode.clientWidth * this.aspectRatio;
        }
        else {
            this.context.canvas.height = this.canvas.nativeElement.parentNode.clientHeight;
        }
        this._incompleteShapesCanvasContext.canvas.width = this.context.canvas.width;
        this._incompleteShapesCanvasContext.canvas.height = this.context.canvas.height;
    }
    /**
     * Load an image and draw it on the canvas (if an image exists)
     * @param callbackFn A function that is called after the image loading is finished
     * @return Emits a value when the image has been loaded.
     */
    _loadImage(callbackFn) {
        this._canDraw = false;
        // If we already have the image there is no need to acquire it
        if (this._imageElement) {
            this._canDraw = true;
            callbackFn && callbackFn();
            return;
        }
        this._imageElement = new Image();
        this._imageElement.addEventListener('load', () => {
            this._canDraw = true;
            callbackFn && callbackFn();
            this.onImageLoaded.emit(true);
        });
        this._imageElement.src = this.imageUrl;
    }
    /**
     * Sends a notification after clearing the canvas
     * This method should only be called from the clear button in this component since it will emit an clear event
     * If the client calls this method he may create a circular clear action which may cause danger.
     */
    clearCanvasLocal() {
        this.clearCanvas();
        this.onClear.emit(true);
    }
    /**
     * Clears all content on the canvas.
     */
    clearCanvas() {
        this._removeCanvasData();
        this._redoStack = [];
    }
    /**
     * This method resets the state of the canvas and redraws it.
     * It calls a callback function after redrawing
     * @param callbackFn
     */
    _removeCanvasData(callbackFn) {
        this._shapesMap = new Map();
        this._clientDragging = false;
        this._updateHistory = [];
        this._undoStack = [];
        this._redrawBackground(callbackFn);
    }
    /**
     * Clears the canvas and redraws the image if the url exists.
     * @param callbackFn A function that is called after the background is redrawn
     * @return Emits a value when the clearing is finished
     */
    _redrawBackground(callbackFn) {
        if (this.context) {
            if (this.imageUrl) {
                this._loadImage(() => {
                    this.context.save();
                    this._drawImage(this.context, this._imageElement, 0, 0, this.context.canvas.width, this.context.canvas.height, 0.5, 0.5);
                    this.context.restore();
                    this._drawMissingUpdates();
                    callbackFn && callbackFn();
                });
            }
            else {
                this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
                this._drawStartingColor();
                callbackFn && callbackFn();
            }
        }
    }
    _drawStartingColor() {
        const previousFillStyle = this.context.fillStyle;
        this.context.save();
        this.context.fillStyle = this.startingColor;
        this.context.fillRect(0, 0, this.context.canvas.width, this.context.canvas.height);
        this.context.fillStyle = previousFillStyle;
        this.context.restore();
    }
    /**
     * @deprecated Use getDrawingEnabled(): boolean
     */
    getShouldDraw() {
        return this.getDrawingEnabled();
    }
    /**
     * Returns a value of whether the user clicked the draw button on the canvas.
     */
    getDrawingEnabled() {
        return this.drawingEnabled;
    }
    /**
     * Toggles drawing on the canvas. It is called via the draw button on the canvas.
     */
    toggleDrawingEnabled() {
        this.drawingEnabled = !this.drawingEnabled;
    }
    /**
     * Set if drawing is enabled from the client using the canvas
     * @param drawingEnabled
     */
    setDrawingEnabled(drawingEnabled) {
        this.drawingEnabled = drawingEnabled;
    }
    /**
     * @deprecated Please use the changeStrokeColor(newStrokeColor: string): void method
     */
    changeColor(newStrokeColor) {
        this.changeStrokeColor(newStrokeColor);
    }
    /**
     * Replaces the drawing color with a new color
     * The format should be ("#ffffff" or "rgb(r,g,b,a?)")
     * This method is public so that anyone can access the canvas and change the stroke color
     *
     * @param newStrokeColor The new stroke color
     */
    changeStrokeColor(newStrokeColor) {
        this.strokeColor = newStrokeColor;
        this.canvasWhiteboardShapePreviewOptions = this.generateShapePreviewOptions();
        this.changeDetectorRef.detectChanges();
    }
    /**
     * Replaces the fill color with a new color
     * The format should be ("#ffffff" or "rgb(r,g,b,a?)")
     * This method is public so that anyone can access the canvas and change the fill color
     *
     * @param newFillColor The new fill color
     */
    changeFillColor(newFillColor) {
        this.fillColor = newFillColor;
        this.canvasWhiteboardShapePreviewOptions = this.generateShapePreviewOptions();
        this.changeDetectorRef.detectChanges();
    }
    /**
     * This method is invoked by the undo button on the canvas screen
     * It calls the global undo method and emits a notification after undoing.
     * This method should only be called from the undo button in this component since it will emit an undo event
     * If the client calls this method he may create a circular undo action which may cause danger.
     */
    undoLocal() {
        this.undo((updateUUID) => {
            this._redoStack.push(updateUUID);
            this.onUndo.emit(updateUUID);
        });
    }
    /**
     * This methods selects the last uuid prepares it for undoing (making the whole update sequence invisible)
     * This method can be called if the canvas component is a ViewChild of some other component.
     * This method will work even if the undo button has been disabled
     */
    undo(callbackFn) {
        if (!this._undoStack.length) {
            return;
        }
        const updateUUID = this._undoStack.pop();
        this._undoCanvas(updateUUID);
        callbackFn && callbackFn(updateUUID);
    }
    /**
     * This method takes an UUID for an update, and redraws the canvas by making all updates with that uuid invisible
     * @param updateUUID
     */
    _undoCanvas(updateUUID) {
        if (this._shapesMap.has(updateUUID)) {
            const shape = this._shapesMap.get(updateUUID);
            shape.isVisible = false;
            this.drawAllShapes();
        }
    }
    /**
     * This method is invoked by the redo button on the canvas screen
     * It calls the global redo method and emits a notification after redoing
     * This method should only be called from the redo button in this component since it will emit an redo event
     * If the client calls this method he may create a circular redo action which may cause danger.
     */
    redoLocal() {
        this.redo((updateUUID) => {
            this._undoStack.push(updateUUID);
            this.onRedo.emit(updateUUID);
        });
    }
    /**
     * This methods selects the last uuid prepares it for redoing (making the whole update sequence visible)
     * This method can be called if the canvas component is a ViewChild of some other component.
     * This method will work even if the redo button has been disabled
     */
    redo(callbackFn) {
        if (!this._redoStack.length) {
            return;
        }
        const updateUUID = this._redoStack.pop();
        this._redoCanvas(updateUUID);
        callbackFn && callbackFn(updateUUID);
    }
    /**
     * This method takes an UUID for an update, and redraws the canvas by making all updates with that uuid visible
     * @param updateUUID
     */
    _redoCanvas(updateUUID) {
        if (this._shapesMap.has(updateUUID)) {
            const shape = this._shapesMap.get(updateUUID);
            shape.isVisible = true;
            this.drawAllShapes();
        }
    }
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
    canvasUserEvents(event) {
        // Ignore all if we didn't click the _draw! button or the image did not load
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
        let update;
        let updateType;
        const eventPosition = this._getCanvasEventPosition(event);
        update = new CanvasWhiteboardUpdate(eventPosition.x, eventPosition.y);
        switch (event.type) {
            case 'mousedown':
            case 'touchstart':
                this._clientDragging = true;
                this._lastUUID = this._generateUUID();
                updateType = CanvasWhiteboardUpdateType.START;
                this._redoStack = [];
                this._addCurrentShapeDataToAnUpdate(update);
                break;
            case 'mousemove':
            case 'touchmove':
                if (!this._clientDragging) {
                    return;
                }
                updateType = CanvasWhiteboardUpdateType.DRAG;
                break;
            case 'touchcancel':
            case 'mouseup':
            case 'touchend':
            case 'mouseout':
                this._clientDragging = false;
                updateType = CanvasWhiteboardUpdateType.STOP;
                this._undoStack.push(this._lastUUID);
                break;
        }
        update.UUID = this._lastUUID;
        update.type = updateType;
        this._draw(update);
        this._prepareToSendUpdate(update);
    }
    /**
     * Get the coordinates (x,y) from a given event
     * If it is a touch event, get the touch positions
     * If we released the touch, the position will be placed in the changedTouches object
     * If it is not a touch event, use the original mouse event received
     * @param eventData
     */
    _getCanvasEventPosition(eventData) {
        const canvasBoundingRect = this.context.canvas.getBoundingClientRect();
        let hasTouches = (eventData.touches && eventData.touches.length) ? eventData.touches[0] : null;
        if (!hasTouches) {
            hasTouches = (eventData.changedTouches && eventData.changedTouches.length) ? eventData.changedTouches[0] : null;
        }
        const event = hasTouches ? hasTouches : eventData;
        const scaleWidth = canvasBoundingRect.width / this.context.canvas.width;
        const scaleHeight = canvasBoundingRect.height / this.context.canvas.height;
        let xPosition = (event.clientX - canvasBoundingRect.left);
        let yPosition = (event.clientY - canvasBoundingRect.top);
        xPosition /= this.scaleFactor ? this.scaleFactor : scaleWidth;
        yPosition /= this.scaleFactor ? this.scaleFactor : scaleHeight;
        return new CanvasWhiteboardPoint(xPosition / this.context.canvas.width, yPosition / this.context.canvas.height);
    }
    /**
     * The update coordinates on the canvas are mapped so that all receiving ends
     * can reverse the mapping and get the same position as the one that
     * was drawn on this update.
     *
     * @param update The CanvasWhiteboardUpdate object.
     */
    _prepareToSendUpdate(update) {
        this._prepareUpdateForBatchDispatch(update);
    }
    /**
     * Catches the Key Up events made on the canvas.
     * If the ctrlKey or commandKey(macOS) was held and the keyCode is 90 (z), an undo action will be performed
     * If the ctrlKey or commandKey(macOS) was held and the keyCode is 89 (y), a redo action will be performed
     * If the ctrlKey or commandKey(macOS) was held and the keyCode is 83 (s) or 115(S), a save action will be performed
     *
     * @param event The event that occurred.
     */
    _canvasKeyDown(event) {
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
    }
    /**
     * On window resize, recalculate the canvas dimensions and redraw the history
     */
    _redrawCanvasOnResize() {
        this._calculateCanvasWidthAndHeight();
        this._redrawHistory();
    }
    /**
     * Redraw the saved history after resetting the canvas state
     */
    _redrawHistory() {
        const updatesToDraw = [].concat(this._updateHistory);
        this._removeCanvasData(() => {
            updatesToDraw.forEach((update) => {
                this._draw(update);
            });
        });
    }
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
     * @param update The update object.
     */
    _draw(update) {
        this._updateHistory.push(update);
        // map the canvas coordinates to our canvas size since they are scaled.
        update = Object.assign(new CanvasWhiteboardUpdate(), update, {
            x: update.x * this.context.canvas.width,
            y: update.y * this.context.canvas.height
        });
        if (update.type === CanvasWhiteboardUpdateType.START) {
            const updateShapeConstructor = this.canvasWhiteboardShapeService.getShapeConstructorFromShapeName(update.selectedShape);
            const shape = new updateShapeConstructor(new CanvasWhiteboardPoint(update.x, update.y), Object.assign(new CanvasWhiteboardShapeOptions(), update.selectedShapeOptions));
            this._incompleteShapesMap.set(update.UUID, shape);
            this._drawIncompleteShapes();
        }
        else if (update.type === CanvasWhiteboardUpdateType.DRAG) {
            const shape = this._incompleteShapesMap.get(update.UUID);
            shape && shape.onUpdateReceived(update);
            this._drawIncompleteShapes();
        }
        else if (CanvasWhiteboardUpdateType.STOP) {
            const shape = this._incompleteShapesMap.get(update.UUID);
            shape && shape.onStopReceived(update);
            this._shapesMap.set(update.UUID, shape);
            this._incompleteShapesMap.delete(update.UUID);
            this._swapCompletedShapeToActualCanvas(shape);
        }
    }
    _drawIncompleteShapes() {
        this._resetIncompleteShapeCanvas();
        this._incompleteShapesMap.forEach((shape) => {
            if (shape.isVisible) {
                shape.draw(this._incompleteShapesCanvasContext);
            }
        });
    }
    _swapCompletedShapeToActualCanvas(shape) {
        this._drawIncompleteShapes();
        if (shape.isVisible) {
            shape.draw(this.context);
        }
    }
    _resetIncompleteShapeCanvas() {
        this._incompleteShapesCanvasContext.clearRect(0, 0, this._incompleteShapesCanvasContext.canvas.width, this._incompleteShapesCanvasContext.canvas.height);
        this._incompleteShapesCanvasContext.fillStyle = 'transparent';
        this._incompleteShapesCanvasContext.fillRect(0, 0, this._incompleteShapesCanvasContext.canvas.width, this._incompleteShapesCanvasContext.canvas.height);
    }
    /**
     * Delete everything from the screen, redraw the background, and then redraw all the shapes from the shapesMap
     */
    drawAllShapes() {
        this._redrawBackground(() => {
            this._shapesMap.forEach((shape) => {
                if (shape.isVisible) {
                    shape.draw(this.context);
                }
            });
        });
    }
    _addCurrentShapeDataToAnUpdate(update) {
        if (!update.selectedShape) {
            update.selectedShape = (new this.selectedShapeConstructor).getShapeName();
        }
        if (!update.selectedShapeOptions) {
            // Make a deep copy since we don't want some Shape implementation to change something by accident
            update.selectedShapeOptions = Object.assign(new CanvasWhiteboardShapeOptions(), this.generateShapePreviewOptions(), { lineWidth: this.lineWidth });
        }
    }
    generateShapePreviewOptions() {
        return Object.assign(new CanvasWhiteboardShapeOptions(), {
            shouldFillShape: !!this.fillColor,
            fillStyle: this.fillColor,
            strokeStyle: this.strokeColor,
            lineWidth: 2,
            lineJoin: this.lineJoin,
            lineCap: this.lineCap
        });
    }
    /**
     * Sends the update to all receiving ends as an Event emit. This is done as a batch operation (meaning
     * multiple updates are sent at the same time). If this method is called, after 100 ms all updates
     * that were made at that time will be packed up together and sent to the receiver.
     *
     * @param update The update object.
     * @return Emits an Array of Updates when the batch.
     */
    _prepareUpdateForBatchDispatch(update) {
        this._batchUpdates.push(cloneDeep(update));
        if (!this._updateTimeout) {
            this._updateTimeout = setTimeout(() => {
                this.onBatchUpdate.emit(this._batchUpdates);
                this._batchUpdates = [];
                this._updateTimeout = null;
            }, this.batchUpdateTimeoutDuration);
        }
    }
    /**
     * Draws an Array of Updates on the canvas.
     *
     * @param updates The array with Updates.
     */
    drawUpdates(updates) {
        if (this._canDraw) {
            this._drawMissingUpdates();
            updates.forEach((update) => {
                this._draw(update);
            });
        }
        else {
            this._updatesNotDrawn = this._updatesNotDrawn.concat(updates);
        }
    }
    /**
     * Draw any missing updates that were received before the image was loaded
     */
    _drawMissingUpdates() {
        if (this._updatesNotDrawn.length > 0) {
            const updatesToDraw = this._updatesNotDrawn;
            this._updatesNotDrawn = [];
            updatesToDraw.forEach((update) => {
                this._draw(update);
            });
        }
    }
    /**
     * Draws an image on the canvas
     *
     * @param context The context used to draw the image on the canvas.
     * @param image The image to draw.
     * @param x The X coordinate for the starting draw position.
     * @param y The Y coordinate for the starting draw position.
     * @param width The width of the image that will be drawn.
     * @param height The height of the image that will be drawn.
     * @param offsetX The offsetX if the image size is larger than the canvas (aspect Ratio)
     * @param offsetY The offsetY if the image size is larger than the canvas (aspect Ratio)
     */
    _drawImage(context, image, x, y, width, height, offsetX, offsetY) {
        if (arguments.length === 2) {
            x = y = 0;
            width = context.canvas.width;
            height = context.canvas.height;
        }
        offsetX = typeof offsetX === 'number' ? offsetX : 0.5;
        offsetY = typeof offsetY === 'number' ? offsetY : 0.5;
        if (offsetX < 0) {
            offsetX = 0;
        }
        if (offsetY < 0) {
            offsetY = 0;
        }
        if (offsetX > 1) {
            offsetX = 1;
        }
        if (offsetY > 1) {
            offsetY = 1;
        }
        const imageWidth = image.width;
        const imageHeight = image.height;
        const radius = Math.min(width / imageWidth, height / imageHeight);
        let newWidth = imageWidth * radius;
        let newHeight = imageHeight * radius;
        let finalDrawX;
        let finalDrawY;
        let finalDrawWidth;
        let finalDrawHeight;
        let aspectRatio = 1;
        // decide which gap to fill
        if (newWidth < width) {
            aspectRatio = width / newWidth;
        }
        if (Math.abs(aspectRatio - 1) < 1e-14 && newHeight < height) {
            aspectRatio = height / newHeight;
        }
        newWidth *= aspectRatio;
        newHeight *= aspectRatio;
        // calculate source rectangle
        finalDrawWidth = imageWidth / (newWidth / width);
        finalDrawHeight = imageHeight / (newHeight / height);
        finalDrawX = (imageWidth - finalDrawWidth) * offsetX;
        finalDrawY = (imageHeight - finalDrawHeight) * offsetY;
        // make sure the source rectangle is valid
        if (finalDrawX < 0) {
            finalDrawX = 0;
        }
        if (finalDrawY < 0) {
            finalDrawY = 0;
        }
        if (finalDrawWidth > imageWidth) {
            finalDrawWidth = imageWidth;
        }
        if (finalDrawHeight > imageHeight) {
            finalDrawHeight = imageHeight;
        }
        // fill the image in destination rectangle
        context.drawImage(image, finalDrawX, finalDrawY, finalDrawWidth, finalDrawHeight, x, y, width, height);
    }
    /**
     * The HTMLCanvasElement.toDataURL() method returns a data URI containing a representation of the image in the format specified by the type parameter (defaults to PNG).
     * The returned image is in a resolution of 96 dpi.
     * If the height or width of the canvas is 0, the string "data:," is returned.
     * If the requested type is not image/png, but the returned value starts with data:image/png, then the requested type is not supported.
     * Chrome also supports the image/webp type.
     *
     * @param returnedDataType A DOMString indicating the image format. The default format type is image/png.
     * @param returnedDataQuality A Number between 0 and 1 indicating image quality if the requested type is image/jpeg or image/webp.
     If this argument is anything else, the default value for image quality is used. The default value is 0.92. Other arguments are ignored.
     */
    generateCanvasDataUrl(returnedDataType = 'image/png', returnedDataQuality = 1) {
        return this.context.canvas.toDataURL(returnedDataType, returnedDataQuality);
    }
    /**
     * Generate a Blob object representing the content drawn on the canvas.
     * This file may be cached on the disk or stored in memory at the discretion of the user agent.
     * If type is not specified, the image type is image/png. The created image is in a resolution of 96dpi.
     * The third argument is used with image/jpeg images to specify the quality of the output.
     *
     * @param callbackFn The function that should be executed when the blob is created. Should accept a parameter Blob (for the result).
     * @param returnedDataType A DOMString indicating the image format. The default type is image/png.
     * @param returnedDataQuality A Number between 0 and 1 indicating image quality if the requested type is image/jpeg or image/webp.
     If this argument is anything else, the default value for image quality is used. Other arguments are ignored.
     */
    generateCanvasBlob(callbackFn, returnedDataType = 'image/png', returnedDataQuality = 1) {
        let toBlobMethod;
        if (typeof this.context.canvas.toBlob !== 'undefined') {
            toBlobMethod = this.context.canvas.toBlob.bind(this.context.canvas);
        }
        else if (typeof this.context.canvas.msToBlob !== 'undefined') {
            // For IE
            toBlobMethod = (callback) => {
                callback && callback(this.context.canvas.msToBlob());
            };
        }
        toBlobMethod && toBlobMethod((blob) => {
            callbackFn && callbackFn(blob, returnedDataType);
        }, returnedDataType, returnedDataQuality);
    }
    /**
     * Generate a canvas image representation and download it locally
     * The name of the image is canvas_drawing_ + the current local Date and Time the image was created
     * Methods for standalone creation of the images in this method are left here for backwards compatibility
     *
     * @param returnedDataType A DOMString indicating the image format. The default type is image/png.
     * @param downloadData? The created string or Blob (IE).
     * @param customFileName? The name of the file that should be downloaded
     */
    downloadCanvasImage(returnedDataType = 'image/png', downloadData, customFileName) {
        // @ts-ignore
        if (window.navigator.msSaveOrOpenBlob === undefined) {
            const downloadLink = document.createElement('a');
            downloadLink.setAttribute('href', downloadData ? downloadData : this.generateCanvasDataUrl(returnedDataType));
            const fileName = customFileName ? customFileName
                : (this.downloadedFileName ? this.downloadedFileName : 'canvas_drawing_' + new Date().valueOf());
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
    }
    /**
     * Save the canvas blob (IE) locally
     * @param blob
     * @param returnedDataType
     */
    _saveCanvasBlob(blob, returnedDataType = 'image/png') {
        // @ts-ignore
        window.navigator.msSaveOrOpenBlob(blob, 'canvas_drawing_' +
            new Date().valueOf() + this._generateDataTypeString(returnedDataType));
    }
    /**
     * This method generates a canvas url string or a canvas blob with the presented data type
     * A callback function is then invoked since the blob creation must be done via a callback
     *
     * @param callback
     * @param returnedDataType
     * @param returnedDataQuality
     */
    generateCanvasData(callback, returnedDataType = 'image/png', returnedDataQuality = 1) {
        // @ts-ignore
        if (window.navigator.msSaveOrOpenBlob === undefined) {
            callback && callback(this.generateCanvasDataUrl(returnedDataType, returnedDataQuality));
        }
        else {
            this.generateCanvasBlob(callback, returnedDataType, returnedDataQuality);
        }
    }
    /**
     * Local method to invoke saving of the canvas data when clicked on the canvas Save button
     * This method will emit the generated data with the specified Event Emitter
     *
     * @param returnedDataType
     */
    saveLocal(returnedDataType = 'image/png') {
        this.generateCanvasData((generatedData) => {
            this.onSave.emit(generatedData);
            if (this.shouldDownloadDrawing) {
                this.downloadCanvasImage(returnedDataType, generatedData);
            }
        });
    }
    _generateDataTypeString(returnedDataType) {
        if (returnedDataType) {
            return '.' + returnedDataType.split('/')[1];
        }
        return '';
    }
    /**
     * Toggles the color picker window, delegating the showColorPicker Input to the ColorPickerComponent.
     * If no value is supplied (null/undefined) the current value will be negated and used.
     * @param value
     */
    toggleStrokeColorPicker(value) {
        this.showStrokeColorPicker = !this._isNullOrUndefined(value) ? value : !this.showStrokeColorPicker;
    }
    /**
     * Toggles the color picker window, delegating the showColorPicker Input to the ColorPickerComponent.
     * If no value is supplied (null/undefined) the current value will be negated and used.
     * @param value
     */
    toggleFillColorPicker(value) {
        this.showFillColorPicker = !this._isNullOrUndefined(value) ? value : !this.showFillColorPicker;
    }
    /**
     * Toggles the shape selector window, delegating the showShapeSelector Input to the CanvasWhiteboardShapeSelectorComponent.
     * If no value is supplied (null/undefined) the current value will be negated and used.
     * @param value
     */
    toggleShapeSelector(value) {
        this.showShapeSelector = !this._isNullOrUndefined(value) ? value : !this.showShapeSelector;
    }
    selectShape(newShapeBlueprint) {
        this.selectedShapeConstructor = newShapeBlueprint;
    }
    /**
     * Returns a deep copy of the current drawing history for the canvas.
     * The deep copy is returned because we don't want anyone to mutate the current history
     */
    getDrawingHistory() {
        return cloneDeep(this._updateHistory);
    }
    /**
     * Unsubscribe from a given subscription if it is active
     * @param subscription
     */
    _unsubscribe(subscription) {
        if (subscription) {
            subscription.unsubscribe();
        }
    }
    _generateUUID() {
        return this._random4() + this._random4() + '-' + this._random4() + '-' + this._random4() + '-' +
            this._random4() + '-' + this._random4() + this._random4() + this._random4();
    }
    _random4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    /**
     * Unsubscribe from the service observables
     */
    ngOnDestroy() {
        this._unsubscribe(this._resizeSubscription);
        this._unsubscribe(this._registeredShapesSubscription);
        this._canvasWhiteboardServiceSubscriptions.forEach(subscription => this._unsubscribe(subscription));
    }
}
CanvasWhiteboardComponent.ɵfac = function CanvasWhiteboardComponent_Factory(t) { return new (t || CanvasWhiteboardComponent)(i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.CanvasWhiteboardService), i0.ɵɵdirectiveInject(i2.CanvasWhiteboardShapeService)); };
CanvasWhiteboardComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CanvasWhiteboardComponent, selectors: [["canvas-whiteboard"]], viewQuery: function CanvasWhiteboardComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 7);
        i0.ɵɵviewQuery(_c1, 7);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.canvas = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._incompleteShapesCanvas = _t.first);
    } }, inputs: { options: "options", batchUpdateTimeoutDuration: "batchUpdateTimeoutDuration", imageUrl: "imageUrl", aspectRatio: "aspectRatio", drawButtonClass: "drawButtonClass", clearButtonClass: "clearButtonClass", undoButtonClass: "undoButtonClass", redoButtonClass: "redoButtonClass", saveDataButtonClass: "saveDataButtonClass", drawButtonText: "drawButtonText", clearButtonText: "clearButtonText", undoButtonText: "undoButtonText", redoButtonText: "redoButtonText", saveDataButtonText: "saveDataButtonText", strokeColorPickerText: "strokeColorPickerText", fillColorPickerText: "fillColorPickerText", drawButtonEnabled: "drawButtonEnabled", clearButtonEnabled: "clearButtonEnabled", undoButtonEnabled: "undoButtonEnabled", redoButtonEnabled: "redoButtonEnabled", saveDataButtonEnabled: "saveDataButtonEnabled", shouldDownloadDrawing: "shouldDownloadDrawing", colorPickerEnabled: "colorPickerEnabled", strokeColorPickerEnabled: "strokeColorPickerEnabled", fillColorPickerEnabled: "fillColorPickerEnabled", lineWidth: "lineWidth", strokeColor: "strokeColor", startingColor: "startingColor", scaleFactor: "scaleFactor", drawingEnabled: "drawingEnabled", showStrokeColorPicker: "showStrokeColorPicker", showFillColorPicker: "showFillColorPicker", downloadedFileName: "downloadedFileName", lineJoin: "lineJoin", lineCap: "lineCap", shapeSelectorEnabled: "shapeSelectorEnabled", showShapeSelector: "showShapeSelector", fillColor: "fillColor" }, outputs: { onClear: "onClear", onUndo: "onUndo", onRedo: "onRedo", onBatchUpdate: "onBatchUpdate", onImageLoaded: "onImageLoaded", onSave: "onSave" }, features: [i0.ɵɵNgOnChangesFeature], decls: 14, vars: 8, consts: [[1, "canvas_wrapper_div"], [1, "canvas_whiteboard_buttons"], [3, "showShapeSelector", "selectedShapeConstructor", "shapeOptions", "onToggleShapeSelector", "onShapeSelected", 4, "ngIf"], [3, "previewText", "showColorPicker", "selectedColor", "onToggleColorPicker", "onColorSelected", 4, "ngIf"], ["class", "canvas_whiteboard_button canvas_whiteboard_button-draw", "type", "button", 3, "canvas_whiteboard_button-draw_animated", "click", 4, "ngIf"], ["type", "button", "class", "canvas_whiteboard_button canvas_whiteboard_button-clear", 3, "click", 4, "ngIf"], ["type", "button", "class", "canvas_whiteboard_button canvas_whiteboard_button-undo", 3, "click", 4, "ngIf"], ["type", "button", "class", "canvas_whiteboard_button canvas_whiteboard_button-redo", 3, "click", 4, "ngIf"], ["type", "button", "class", "canvas_whiteboard_button canvas_whiteboard_button-save", 3, "click", 4, "ngIf"], [1, "canvas_whiteboard"], ["canvas", ""], [1, "incomplete_shapes_canvas_whiteboard", 3, "mousedown", "mouseup", "mousemove", "mouseout", "touchstart", "touchmove", "touchend", "touchcancel"], ["incompleteShapesCanvas", ""], [3, "showShapeSelector", "selectedShapeConstructor", "shapeOptions", "onToggleShapeSelector", "onShapeSelected"], [3, "previewText", "showColorPicker", "selectedColor", "onToggleColorPicker", "onColorSelected"], ["type", "button", 1, "canvas_whiteboard_button", "canvas_whiteboard_button-draw", 3, "click"], ["aria-hidden", "true"], ["type", "button", 1, "canvas_whiteboard_button", "canvas_whiteboard_button-clear", 3, "click"], ["type", "button", 1, "canvas_whiteboard_button", "canvas_whiteboard_button-undo", 3, "click"], ["type", "button", 1, "canvas_whiteboard_button", "canvas_whiteboard_button-redo", 3, "click"], ["type", "button", 1, "canvas_whiteboard_button", "canvas_whiteboard_button-save", 3, "click"]], template: function CanvasWhiteboardComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
        i0.ɵɵtemplate(2, CanvasWhiteboardComponent_canvas_whiteboard_shape_selector_2_Template, 1, 3, "canvas-whiteboard-shape-selector", 2);
        i0.ɵɵtemplate(3, CanvasWhiteboardComponent_canvas_whiteboard_colorpicker_3_Template, 1, 3, "canvas-whiteboard-colorpicker", 3);
        i0.ɵɵtemplate(4, CanvasWhiteboardComponent_canvas_whiteboard_colorpicker_4_Template, 1, 3, "canvas-whiteboard-colorpicker", 3);
        i0.ɵɵtemplate(5, CanvasWhiteboardComponent_button_5_Template, 3, 5, "button", 4);
        i0.ɵɵtemplate(6, CanvasWhiteboardComponent_button_6_Template, 3, 3, "button", 5);
        i0.ɵɵtemplate(7, CanvasWhiteboardComponent_button_7_Template, 3, 3, "button", 6);
        i0.ɵɵtemplate(8, CanvasWhiteboardComponent_button_8_Template, 3, 3, "button", 7);
        i0.ɵɵtemplate(9, CanvasWhiteboardComponent_button_9_Template, 3, 3, "button", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(10, "canvas", 9, 10);
        i0.ɵɵelementStart(12, "canvas", 11, 12);
        i0.ɵɵlistener("mousedown", function CanvasWhiteboardComponent_Template_canvas_mousedown_12_listener($event) { return ctx.canvasUserEvents($event); })("mouseup", function CanvasWhiteboardComponent_Template_canvas_mouseup_12_listener($event) { return ctx.canvasUserEvents($event); })("mousemove", function CanvasWhiteboardComponent_Template_canvas_mousemove_12_listener($event) { return ctx.canvasUserEvents($event); })("mouseout", function CanvasWhiteboardComponent_Template_canvas_mouseout_12_listener($event) { return ctx.canvasUserEvents($event); })("touchstart", function CanvasWhiteboardComponent_Template_canvas_touchstart_12_listener($event) { return ctx.canvasUserEvents($event); })("touchmove", function CanvasWhiteboardComponent_Template_canvas_touchmove_12_listener($event) { return ctx.canvasUserEvents($event); })("touchend", function CanvasWhiteboardComponent_Template_canvas_touchend_12_listener($event) { return ctx.canvasUserEvents($event); })("touchcancel", function CanvasWhiteboardComponent_Template_canvas_touchcancel_12_listener($event) { return ctx.canvasUserEvents($event); });
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.shapeSelectorEnabled);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.colorPickerEnabled || ctx.fillColorPickerEnabled);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.colorPickerEnabled || ctx.strokeColorPickerEnabled);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.drawButtonEnabled);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.clearButtonEnabled);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.undoButtonEnabled);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.redoButtonEnabled);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.saveDataButtonEnabled);
    } }, dependencies: [i3.NgIf, i4.CanvasWhiteboardColorPickerComponent, i5.CanvasWhiteboardShapeSelectorComponent], styles: [".canvas_whiteboard_button[_ngcontent-%COMP%]{display:inline-block;outline:0px;padding-top:7px;margin-bottom:0;font-size:14px;font-weight:400;line-height:1.42857143;text-align:center;white-space:nowrap;vertical-align:middle;touch-action:manipulation;cursor:pointer;-webkit-user-select:none;user-select:none;background-image:none;border:1px solid transparent;border-radius:4px}.canvas_whiteboard_buttons[_ngcontent-%COMP%]{z-index:3}@media (max-width: 400px){.canvas_whiteboard_buttons[_ngcontent-%COMP%]{position:absolute;top:0;width:100%;text-align:center}}@media (min-width: 401px){.canvas_whiteboard_buttons[_ngcontent-%COMP%]{position:absolute;right:0%;color:#fff}}.canvas_whiteboard_buttons[_ngcontent-%COMP%]{padding:5px}.canvas_whiteboard_buttons[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{margin:5px}.canvas_whiteboard_button-draw_animated[_ngcontent-%COMP%]{-webkit-animation:_ngcontent-%COMP%_pulsate 1s ease-out;-webkit-animation-iteration-count:infinite}@keyframes _ngcontent-%COMP%_pulsate{0%{-webkit-transform:scale(.1,.1);opacity:0}50%{opacity:1}to{-webkit-transform:scale(1.2,1.2);opacity:0}}.canvas_wrapper_div[_ngcontent-%COMP%]{width:100%;height:100%;border:.5px solid #e2e2e2}.canvas_whiteboard_button-clear[_ngcontent-%COMP%]{padding-top:5px}.canvas_whiteboard[_ngcontent-%COMP%]{position:absolute;z-index:1}.incomplete_shapes_canvas_whiteboard[_ngcontent-%COMP%]{position:absolute;z-index:2}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CanvasWhiteboardComponent, [{
        type: Component,
        args: [{ selector: 'canvas-whiteboard', template: `
    <div class="canvas_wrapper_div">
      <div class="canvas_whiteboard_buttons">
        <canvas-whiteboard-shape-selector *ngIf="shapeSelectorEnabled"
                                          [showShapeSelector]="showShapeSelector"
                                          [selectedShapeConstructor]="selectedShapeConstructor"
                                          [shapeOptions]="generateShapePreviewOptions()"
                                          (onToggleShapeSelector)="toggleShapeSelector($event)"
                                          (onShapeSelected)="selectShape($event)"></canvas-whiteboard-shape-selector>

        <canvas-whiteboard-colorpicker *ngIf="colorPickerEnabled || fillColorPickerEnabled"
                                       [previewText]="fillColorPickerText"
                                       [showColorPicker]="showFillColorPicker"
                                       [selectedColor]="fillColor"
                                       (onToggleColorPicker)="toggleFillColorPicker($event)"
                                       (onColorSelected)="changeFillColor($event)">
        </canvas-whiteboard-colorpicker>

        <canvas-whiteboard-colorpicker *ngIf="colorPickerEnabled || strokeColorPickerEnabled"
                                       [previewText]="strokeColorPickerText"
                                       [showColorPicker]="showStrokeColorPicker"
                                       [selectedColor]="strokeColor"
                                       (onToggleColorPicker)="toggleStrokeColorPicker($event)"
                                       (onColorSelected)="changeStrokeColor($event)">
        </canvas-whiteboard-colorpicker>


        <button *ngIf="drawButtonEnabled" (click)="toggleDrawingEnabled()"
                [class.canvas_whiteboard_button-draw_animated]="getDrawingEnabled()"
                class="canvas_whiteboard_button canvas_whiteboard_button-draw" type="button">
          <i [class]="drawButtonClass" aria-hidden="true"></i> {{drawButtonText}}
        </button>

        <button *ngIf="clearButtonEnabled" (click)="clearCanvasLocal()" type="button"
                class="canvas_whiteboard_button canvas_whiteboard_button-clear">
          <i [class]="clearButtonClass" aria-hidden="true"></i> {{clearButtonText}}
        </button>

        <button *ngIf="undoButtonEnabled" (click)="undoLocal()" type="button"
                class="canvas_whiteboard_button canvas_whiteboard_button-undo">
          <i [class]="undoButtonClass" aria-hidden="true"></i> {{undoButtonText}}
        </button>

        <button *ngIf="redoButtonEnabled" (click)="redoLocal()" type="button"
                class="canvas_whiteboard_button canvas_whiteboard_button-redo">
          <i [class]="redoButtonClass" aria-hidden="true"></i> {{redoButtonText}}
        </button>
        <button *ngIf="saveDataButtonEnabled" (click)="saveLocal()" type="button"
                class="canvas_whiteboard_button canvas_whiteboard_button-save">
          <i [class]="saveDataButtonClass" aria-hidden="true"></i> {{saveDataButtonText}}
        </button>
      </div>
      <canvas #canvas class="canvas_whiteboard"></canvas>
      <canvas #incompleteShapesCanvas class="incomplete_shapes_canvas_whiteboard"
              (mousedown)="canvasUserEvents($event)" (mouseup)="canvasUserEvents($event)"
              (mousemove)="canvasUserEvents($event)" (mouseout)="canvasUserEvents($event)"
              (touchstart)="canvasUserEvents($event)" (touchmove)="canvasUserEvents($event)"
              (touchend)="canvasUserEvents($event)" (touchcancel)="canvasUserEvents($event)"></canvas>
    </div>
  `, styles: [".canvas_whiteboard_button{display:inline-block;outline:0px;padding-top:7px;margin-bottom:0;font-size:14px;font-weight:400;line-height:1.42857143;text-align:center;white-space:nowrap;vertical-align:middle;touch-action:manipulation;cursor:pointer;-webkit-user-select:none;user-select:none;background-image:none;border:1px solid transparent;border-radius:4px}.canvas_whiteboard_buttons{z-index:3}@media (max-width: 400px){.canvas_whiteboard_buttons{position:absolute;top:0;width:100%;text-align:center}}@media (min-width: 401px){.canvas_whiteboard_buttons{position:absolute;right:0%;color:#fff}}.canvas_whiteboard_buttons{padding:5px}.canvas_whiteboard_buttons>button{margin:5px}.canvas_whiteboard_button-draw_animated{-webkit-animation:pulsate 1s ease-out;-webkit-animation-iteration-count:infinite}@keyframes pulsate{0%{-webkit-transform:scale(.1,.1);opacity:0}50%{opacity:1}to{-webkit-transform:scale(1.2,1.2);opacity:0}}.canvas_wrapper_div{width:100%;height:100%;border:.5px solid #e2e2e2}.canvas_whiteboard_button-clear{padding-top:5px}.canvas_whiteboard{position:absolute;z-index:1}.incomplete_shapes_canvas_whiteboard{position:absolute;z-index:2}\n"] }]
    }], function () { return [{ type: i0.NgZone }, { type: i0.ChangeDetectorRef }, { type: i1.CanvasWhiteboardService }, { type: i2.CanvasWhiteboardShapeService }]; }, { options: [{
            type: Input
        }], batchUpdateTimeoutDuration: [{
            type: Input
        }], imageUrl: [{
            type: Input
        }], aspectRatio: [{
            type: Input
        }], drawButtonClass: [{
            type: Input
        }], clearButtonClass: [{
            type: Input
        }], undoButtonClass: [{
            type: Input
        }], redoButtonClass: [{
            type: Input
        }], saveDataButtonClass: [{
            type: Input
        }], drawButtonText: [{
            type: Input
        }], clearButtonText: [{
            type: Input
        }], undoButtonText: [{
            type: Input
        }], redoButtonText: [{
            type: Input
        }], saveDataButtonText: [{
            type: Input
        }], strokeColorPickerText: [{
            type: Input
        }], fillColorPickerText: [{
            type: Input
        }], drawButtonEnabled: [{
            type: Input
        }], clearButtonEnabled: [{
            type: Input
        }], undoButtonEnabled: [{
            type: Input
        }], redoButtonEnabled: [{
            type: Input
        }], saveDataButtonEnabled: [{
            type: Input
        }], shouldDownloadDrawing: [{
            type: Input
        }], colorPickerEnabled: [{
            type: Input
        }], strokeColorPickerEnabled: [{
            type: Input
        }], fillColorPickerEnabled: [{
            type: Input
        }], lineWidth: [{
            type: Input
        }], strokeColor: [{
            type: Input
        }], startingColor: [{
            type: Input
        }], scaleFactor: [{
            type: Input
        }], drawingEnabled: [{
            type: Input
        }], showStrokeColorPicker: [{
            type: Input
        }], showFillColorPicker: [{
            type: Input
        }], downloadedFileName: [{
            type: Input
        }], lineJoin: [{
            type: Input
        }], lineCap: [{
            type: Input
        }], shapeSelectorEnabled: [{
            type: Input
        }], showShapeSelector: [{
            type: Input
        }], fillColor: [{
            type: Input
        }], onClear: [{
            type: Output
        }], onUndo: [{
            type: Output
        }], onRedo: [{
            type: Output
        }], onBatchUpdate: [{
            type: Output
        }], onImageLoaded: [{
            type: Output
        }], onSave: [{
            type: Output
        }], canvas: [{
            type: ViewChild,
            args: ['canvas', { static: true }]
        }], _incompleteShapesCanvas: [{
            type: ViewChild,
            args: ['incompleteShapesCanvas', { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FudmFzLXdoaXRlYm9hcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmcyLWNhbnZhcy13aGl0ZWJvYXJkL3NyYy9saWIvY2FudmFzLXdoaXRlYm9hcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osU0FBUyxFQUlWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFJNUMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFeEUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDeEYsT0FBTyxFQUFFLFNBQVMsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE1BQU0sV0FBVyxDQUFDOzs7Ozs7Ozs7OztJQVF2Qyw0REFLMEU7SUFEeEMscVFBQXlCLGVBQUEsbUNBQTJCLENBQUEsSUFBQyw0T0FDbEMsZUFBQSwyQkFBbUIsQ0FBQSxJQURlO0lBQ2IsaUJBQW1DOzs7SUFKM0UsNERBQXVDLDZEQUFBLHNEQUFBOzs7O0lBTXpFLHlEQUsyRTtJQUQ1QywyUEFBdUIsZUFBQSxxQ0FBNkIsQ0FBQSxJQUFDLHNPQUNsQyxlQUFBLCtCQUF1QixDQUFBLElBRFc7SUFFcEYsaUJBQWdDOzs7SUFMRCx3REFBbUMsK0NBQUEsbUNBQUE7Ozs7SUFPbEUseURBSzZFO0lBRDlDLDJQQUF1QixlQUFBLHVDQUErQixDQUFBLElBQUMs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d0JBQXdCO2tCQUFoQyxLQUFLO1lBQ0csc0JBQXNCO2tCQUE5QixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFDRyxhQUFhO2tCQUFyQixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUNHLGNBQWM7a0JBQXRCLEtBQUs7WUFDRyxxQkFBcUI7a0JBQTdCLEtBQUs7WUFDRyxtQkFBbUI7a0JBQTNCLEtBQUs7WUFDRyxrQkFBa0I7a0JBQTFCLEtBQUs7WUFFRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLO1lBQ0csb0JBQW9CO2tCQUE1QixLQUFLO1lBQ0csaUJBQWlCO2tCQUF6QixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUVJLE9BQU87a0JBQWhCLE1BQU07WUFDRyxNQUFNO2tCQUFmLE1BQU07WUFDRyxNQUFNO2tCQUFmLE1BQU07WUFDRyxhQUFhO2tCQUF0QixNQUFNO1lBQ0csYUFBYTtrQkFBdEIsTUFBTTtZQUNHLE1BQU07a0JBQWYsTUFBTTtZQUVnQyxNQUFNO2tCQUE1QyxTQUFTO21CQUFDLFFBQVEsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFHMEIsdUJBQXVCO2tCQUFyRixTQUFTO21CQUFDLHdCQUF3QixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBWaWV3Q2hpbGQsXG4gIEVsZW1lbnRSZWYsXG4gIE9uSW5pdCxcbiAgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQsIE5nWm9uZSwgQ2hhbmdlRGV0ZWN0b3JSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYW52YXNXaGl0ZWJvYXJkVXBkYXRlLCBDYW52YXNXaGl0ZWJvYXJkVXBkYXRlVHlwZSB9IGZyb20gJy4vY2FudmFzLXdoaXRlYm9hcmQtdXBkYXRlLm1vZGVsJztcbmltcG9ydCB7IERFRkFVTFRfU1RZTEVTIH0gZnJvbSAnLi90ZW1wbGF0ZSc7XG5pbXBvcnQgeyBDYW52YXNXaGl0ZWJvYXJkU2VydmljZSB9IGZyb20gJy4vY2FudmFzLXdoaXRlYm9hcmQuc2VydmljZSc7XG5pbXBvcnQgeyBDYW52YXNXaGl0ZWJvYXJkT3B0aW9ucyB9IGZyb20gJy4vY2FudmFzLXdoaXRlYm9hcmQtb3B0aW9ucyc7XG5pbXBvcnQgeyBDYW52YXNXaGl0ZWJvYXJkU2hhcGUgfSBmcm9tICcuL3NoYXBlcy9jYW52YXMtd2hpdGVib2FyZC1zaGFwZSc7XG5pbXBvcnQgeyBDYW52YXNXaGl0ZWJvYXJkUG9pbnQgfSBmcm9tICcuL2NhbnZhcy13aGl0ZWJvYXJkLXBvaW50Lm1vZGVsJztcbmltcG9ydCB7IENhbnZhc1doaXRlYm9hcmRTaGFwZVNlcnZpY2UsIElOZXdDYW52YXNXaGl0ZWJvYXJkU2hhcGUgfSBmcm9tICcuL3NoYXBlcy9jYW52YXMtd2hpdGVib2FyZC1zaGFwZS5zZXJ2aWNlJztcbmltcG9ydCB7IENhbnZhc1doaXRlYm9hcmRTaGFwZU9wdGlvbnMgfSBmcm9tICcuL3NoYXBlcy9jYW52YXMtd2hpdGVib2FyZC1zaGFwZS1vcHRpb25zJztcbmltcG9ydCB7IGZyb21FdmVudCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGRpc3RpbmN0VW50aWxDaGFuZ2VkIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgY2xvbmVEZWVwLCBpc0VxdWFsIH0gZnJvbSAnbG9kYXNoLWVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2FudmFzLXdoaXRlYm9hcmQnLFxuICB0ZW1wbGF0ZTpcbiAgICBgXG4gICAgPGRpdiBjbGFzcz1cImNhbnZhc193cmFwcGVyX2RpdlwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNhbnZhc193aGl0ZWJvYXJkX2J1dHRvbnNcIj5cbiAgICAgICAgPGNhbnZhcy13aGl0ZWJvYXJkLXNoYXBlLXNlbGVjdG9yICpuZ0lmPVwic2hhcGVTZWxlY3RvckVuYWJsZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3Nob3dTaGFwZVNlbGVjdG9yXT1cInNob3dTaGFwZVNlbGVjdG9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzZWxlY3RlZFNoYXBlQ29uc3RydWN0b3JdPVwic2VsZWN0ZWRTaGFwZUNvbnN0cnVjdG9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzaGFwZU9wdGlvbnNdPVwiZ2VuZXJhdGVTaGFwZVByZXZpZXdPcHRpb25zKClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uVG9nZ2xlU2hhcGVTZWxlY3Rvcik9XCJ0b2dnbGVTaGFwZVNlbGVjdG9yKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uU2hhcGVTZWxlY3RlZCk9XCJzZWxlY3RTaGFwZSgkZXZlbnQpXCI+PC9jYW52YXMtd2hpdGVib2FyZC1zaGFwZS1zZWxlY3Rvcj5cblxuICAgICAgICA8Y2FudmFzLXdoaXRlYm9hcmQtY29sb3JwaWNrZXIgKm5nSWY9XCJjb2xvclBpY2tlckVuYWJsZWQgfHwgZmlsbENvbG9yUGlja2VyRW5hYmxlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcHJldmlld1RleHRdPVwiZmlsbENvbG9yUGlja2VyVGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc2hvd0NvbG9yUGlja2VyXT1cInNob3dGaWxsQ29sb3JQaWNrZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3NlbGVjdGVkQ29sb3JdPVwiZmlsbENvbG9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvblRvZ2dsZUNvbG9yUGlja2VyKT1cInRvZ2dsZUZpbGxDb2xvclBpY2tlcigkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkNvbG9yU2VsZWN0ZWQpPVwiY2hhbmdlRmlsbENvbG9yKCRldmVudClcIj5cbiAgICAgICAgPC9jYW52YXMtd2hpdGVib2FyZC1jb2xvcnBpY2tlcj5cblxuICAgICAgICA8Y2FudmFzLXdoaXRlYm9hcmQtY29sb3JwaWNrZXIgKm5nSWY9XCJjb2xvclBpY2tlckVuYWJsZWQgfHwgc3Ryb2tlQ29sb3JQaWNrZXJFbmFibGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtwcmV2aWV3VGV4dF09XCJzdHJva2VDb2xvclBpY2tlclRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3Nob3dDb2xvclBpY2tlcl09XCJzaG93U3Ryb2tlQ29sb3JQaWNrZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3NlbGVjdGVkQ29sb3JdPVwic3Ryb2tlQ29sb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uVG9nZ2xlQ29sb3JQaWNrZXIpPVwidG9nZ2xlU3Ryb2tlQ29sb3JQaWNrZXIoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25Db2xvclNlbGVjdGVkKT1cImNoYW5nZVN0cm9rZUNvbG9yKCRldmVudClcIj5cbiAgICAgICAgPC9jYW52YXMtd2hpdGVib2FyZC1jb2xvcnBpY2tlcj5cblxuXG4gICAgICAgIDxidXR0b24gKm5nSWY9XCJkcmF3QnV0dG9uRW5hYmxlZFwiIChjbGljayk9XCJ0b2dnbGVEcmF3aW5nRW5hYmxlZCgpXCJcbiAgICAgICAgICAgICAgICBbY2xhc3MuY2FudmFzX3doaXRlYm9hcmRfYnV0dG9uLWRyYXdfYW5pbWF0ZWRdPVwiZ2V0RHJhd2luZ0VuYWJsZWQoKVwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJjYW52YXNfd2hpdGVib2FyZF9idXR0b24gY2FudmFzX3doaXRlYm9hcmRfYnV0dG9uLWRyYXdcIiB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgPGkgW2NsYXNzXT1cImRyYXdCdXR0b25DbGFzc1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4ge3tkcmF3QnV0dG9uVGV4dH19XG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDxidXR0b24gKm5nSWY9XCJjbGVhckJ1dHRvbkVuYWJsZWRcIiAoY2xpY2spPVwiY2xlYXJDYW52YXNMb2NhbCgpXCIgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJjYW52YXNfd2hpdGVib2FyZF9idXR0b24gY2FudmFzX3doaXRlYm9hcmRfYnV0dG9uLWNsZWFyXCI+XG4gICAgICAgICAgPGkgW2NsYXNzXT1cImNsZWFyQnV0dG9uQ2xhc3NcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+IHt7Y2xlYXJCdXR0b25UZXh0fX1cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPGJ1dHRvbiAqbmdJZj1cInVuZG9CdXR0b25FbmFibGVkXCIgKGNsaWNrKT1cInVuZG9Mb2NhbCgpXCIgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJjYW52YXNfd2hpdGVib2FyZF9idXR0b24gY2FudmFzX3doaXRlYm9hcmRfYnV0dG9uLXVuZG9cIj5cbiAgICAgICAgICA8aSBbY2xhc3NdPVwidW5kb0J1dHRvbkNsYXNzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiB7e3VuZG9CdXR0b25UZXh0fX1cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPGJ1dHRvbiAqbmdJZj1cInJlZG9CdXR0b25FbmFibGVkXCIgKGNsaWNrKT1cInJlZG9Mb2NhbCgpXCIgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJjYW52YXNfd2hpdGVib2FyZF9idXR0b24gY2FudmFzX3doaXRlYm9hcmRfYnV0dG9uLXJlZG9cIj5cbiAgICAgICAgICA8aSBbY2xhc3NdPVwicmVkb0J1dHRvbkNsYXNzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiB7e3JlZG9CdXR0b25UZXh0fX1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gKm5nSWY9XCJzYXZlRGF0YUJ1dHRvbkVuYWJsZWRcIiAoY2xpY2spPVwic2F2ZUxvY2FsKClcIiB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImNhbnZhc193aGl0ZWJvYXJkX2J1dHRvbiBjYW52YXNfd2hpdGVib2FyZF9idXR0b24tc2F2ZVwiPlxuICAgICAgICAgIDxpIFtjbGFzc109XCJzYXZlRGF0YUJ1dHRvbkNsYXNzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiB7e3NhdmVEYXRhQnV0dG9uVGV4dH19XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8Y2FudmFzICNjYW52YXMgY2xhc3M9XCJjYW52YXNfd2hpdGVib2FyZFwiPjwvY2FudmFzPlxuICAgICAgPGNhbnZhcyAjaW5jb21wbGV0ZVNoYXBlc0NhbnZhcyBjbGFzcz1cImluY29tcGxldGVfc2hhcGVzX2NhbnZhc193aGl0ZWJvYXJkXCJcbiAgICAgICAgICAgICAgKG1vdXNlZG93bik9XCJjYW52YXNVc2VyRXZlbnRzKCRldmVudClcIiAobW91c2V1cCk9XCJjYW52YXNVc2VyRXZlbnRzKCRldmVudClcIlxuICAgICAgICAgICAgICAobW91c2Vtb3ZlKT1cImNhbnZhc1VzZXJFdmVudHMoJGV2ZW50KVwiIChtb3VzZW91dCk9XCJjYW52YXNVc2VyRXZlbnRzKCRldmVudClcIlxuICAgICAgICAgICAgICAodG91Y2hzdGFydCk9XCJjYW52YXNVc2VyRXZlbnRzKCRldmVudClcIiAodG91Y2htb3ZlKT1cImNhbnZhc1VzZXJFdmVudHMoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICh0b3VjaGVuZCk9XCJjYW52YXNVc2VyRXZlbnRzKCRldmVudClcIiAodG91Y2hjYW5jZWwpPVwiY2FudmFzVXNlckV2ZW50cygkZXZlbnQpXCI+PC9jYW52YXM+XG4gICAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlczogW0RFRkFVTFRfU1RZTEVTXVxufSlcbmV4cG9ydCBjbGFzcyBDYW52YXNXaGl0ZWJvYXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIG9wdGlvbnM6IENhbnZhc1doaXRlYm9hcmRPcHRpb25zO1xuXG4gIC8vIE51bWJlciBvZiBtcyB0byB3YWl0IGJlZm9yZSBzZW5kaW5nIG91dCB0aGUgdXBkYXRlcyBhcyBhbiBhcnJheVxuICBASW5wdXQoKSBiYXRjaFVwZGF0ZVRpbWVvdXREdXJhdGlvbiA9IDEwMDtcblxuICBwcml2YXRlIF9pbWFnZVVybDogc3RyaW5nO1xuICBASW5wdXQoKSBzZXQgaW1hZ2VVcmwoaW1hZ2VVcmw6IHN0cmluZykge1xuICAgIHRoaXMuX2ltYWdlVXJsID0gaW1hZ2VVcmw7XG4gICAgdGhpcy5faW1hZ2VFbGVtZW50ID0gbnVsbDtcbiAgICB0aGlzLl9yZWRyYXdIaXN0b3J5KCk7XG4gIH1cblxuICBnZXQgaW1hZ2VVcmwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5faW1hZ2VVcmw7XG4gIH1cblxuICBASW5wdXQoKSBhc3BlY3RSYXRpbzogbnVtYmVyO1xuICBASW5wdXQoKSBkcmF3QnV0dG9uQ2xhc3M6IHN0cmluZztcbiAgQElucHV0KCkgY2xlYXJCdXR0b25DbGFzczogc3RyaW5nO1xuICBASW5wdXQoKSB1bmRvQnV0dG9uQ2xhc3M6IHN0cmluZztcbiAgQElucHV0KCkgcmVkb0J1dHRvbkNsYXNzOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNhdmVEYXRhQnV0dG9uQ2xhc3M6IHN0cmluZztcbiAgQElucHV0KCkgZHJhd0J1dHRvblRleHQgPSAnJztcbiAgQElucHV0KCkgY2xlYXJCdXR0b25UZXh0ID0gJyc7XG4gIEBJbnB1dCgpIHVuZG9CdXR0b25UZXh0ID0gJyc7XG4gIEBJbnB1dCgpIHJlZG9CdXR0b25UZXh0ID0gJyc7XG4gIEBJbnB1dCgpIHNhdmVEYXRhQnV0dG9uVGV4dCA9ICcnO1xuICBASW5wdXQoKSBzdHJva2VDb2xvclBpY2tlclRleHQgPSAnU3Ryb2tlJztcbiAgQElucHV0KCkgZmlsbENvbG9yUGlja2VyVGV4dCA9ICdGaWxsJztcbiAgQElucHV0KCkgZHJhd0J1dHRvbkVuYWJsZWQgPSB0cnVlO1xuICBASW5wdXQoKSBjbGVhckJ1dHRvbkVuYWJsZWQgPSB0cnVlO1xuICBASW5wdXQoKSB1bmRvQnV0dG9uRW5hYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSByZWRvQnV0dG9uRW5hYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBzYXZlRGF0YUJ1dHRvbkVuYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgc2hvdWxkRG93bmxvYWREcmF3aW5nID0gdHJ1ZTtcbiAgLyoqIEBkZXByZWNhdGVkLiBSZXBsYWNlZCB3aXRoIHN0cm9rZUNvbG9yUGlja2VyRW5hYmxlZCBhbmQgZmlsbENvbG9yUGlja2VyRW5hYmxlZCBpbnB1dHMgKi9cbiAgQElucHV0KCkgY29sb3JQaWNrZXJFbmFibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHN0cm9rZUNvbG9yUGlja2VyRW5hYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBmaWxsQ29sb3JQaWNrZXJFbmFibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGxpbmVXaWR0aCA9IDI7XG4gIEBJbnB1dCgpIHN0cm9rZUNvbG9yID0gJ3JnYmEoMCwgMCwgMCwgMSknO1xuICBASW5wdXQoKSBzdGFydGluZ0NvbG9yID0gJyNmZmYnO1xuICBASW5wdXQoKSBzY2FsZUZhY3RvciA9IDA7XG4gIEBJbnB1dCgpIGRyYXdpbmdFbmFibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIHNob3dTdHJva2VDb2xvclBpY2tlciA9IGZhbHNlO1xuICBASW5wdXQoKSBzaG93RmlsbENvbG9yUGlja2VyID0gZmFsc2U7XG4gIEBJbnB1dCgpIGRvd25sb2FkZWRGaWxlTmFtZTogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIGxpbmVKb2luID0gJ3JvdW5kJztcbiAgQElucHV0KCkgbGluZUNhcCA9ICdyb3VuZCc7XG4gIEBJbnB1dCgpIHNoYXBlU2VsZWN0b3JFbmFibGVkID0gdHJ1ZTtcbiAgQElucHV0KCkgc2hvd1NoYXBlU2VsZWN0b3IgPSBmYWxzZTtcbiAgQElucHV0KCkgZmlsbENvbG9yID0gJ3JnYmEoMCwwLDAsMCknO1xuXG4gIEBPdXRwdXQoKSBvbkNsZWFyID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBvblVuZG8gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIG9uUmVkbyA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgb25CYXRjaFVwZGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FudmFzV2hpdGVib2FyZFVwZGF0ZVtdPigpO1xuICBAT3V0cHV0KCkgb25JbWFnZUxvYWRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgb25TYXZlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmcgfCBCbG9iPigpO1xuXG4gIEBWaWV3Q2hpbGQoJ2NhbnZhcycsIHsgc3RhdGljOiB0cnVlIH0pIGNhbnZhczogRWxlbWVudFJlZjtcbiAgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuXG4gIEBWaWV3Q2hpbGQoJ2luY29tcGxldGVTaGFwZXNDYW52YXMnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwcml2YXRlIF9pbmNvbXBsZXRlU2hhcGVzQ2FudmFzOiBFbGVtZW50UmVmO1xuICBwcml2YXRlIF9pbmNvbXBsZXRlU2hhcGVzQ2FudmFzQ29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICBwcml2YXRlIF9pbmNvbXBsZXRlU2hhcGVzTWFwOiBNYXA8c3RyaW5nLCBDYW52YXNXaGl0ZWJvYXJkU2hhcGU+O1xuXG4gIHByaXZhdGUgX2ltYWdlRWxlbWVudDogYW55O1xuXG4gIHByaXZhdGUgX2NhbkRyYXcgPSB0cnVlO1xuXG4gIHByaXZhdGUgX2NsaWVudERyYWdnaW5nID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBfdXBkYXRlSGlzdG9yeTogQ2FudmFzV2hpdGVib2FyZFVwZGF0ZVtdID0gW107XG4gIHByaXZhdGUgX2xhc3RVVUlEOiBzdHJpbmc7XG4gIHByaXZhdGUgX3NoYXBlc01hcDogTWFwPHN0cmluZywgQ2FudmFzV2hpdGVib2FyZFNoYXBlPjtcblxuICBwcml2YXRlIF91bmRvU3RhY2s6IHN0cmluZ1tdID0gW107IC8vIFN0b3JlcyB0aGUgdmFsdWUgb2Ygc3RhcnQgYW5kIGNvdW50IGZvciBlYWNoIGNvbnRpbnVvdXMgc3Ryb2tlXG4gIHByaXZhdGUgX3JlZG9TdGFjazogc3RyaW5nW10gPSBbXTtcbiAgcHJpdmF0ZSBfYmF0Y2hVcGRhdGVzOiBDYW52YXNXaGl0ZWJvYXJkVXBkYXRlW10gPSBbXTtcbiAgcHJpdmF0ZSBfdXBkYXRlc05vdERyYXduOiBhbnkgPSBbXTtcblxuICBwcml2YXRlIF91cGRhdGVUaW1lb3V0OiBhbnk7XG5cbiAgcHJpdmF0ZSBfY2FudmFzV2hpdGVib2FyZFNlcnZpY2VTdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuICBwcml2YXRlIF9yZXNpemVTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBfcmVnaXN0ZXJlZFNoYXBlc1N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIHNlbGVjdGVkU2hhcGVDb25zdHJ1Y3RvcjogSU5ld0NhbnZhc1doaXRlYm9hcmRTaGFwZTxDYW52YXNXaGl0ZWJvYXJkU2hhcGU+O1xuICBjYW52YXNXaGl0ZWJvYXJkU2hhcGVQcmV2aWV3T3B0aW9uczogQ2FudmFzV2hpdGVib2FyZFNoYXBlT3B0aW9ucztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5nWm9uZTogTmdab25lLFxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgY2FudmFzV2hpdGVib2FyZFNlcnZpY2U6IENhbnZhc1doaXRlYm9hcmRTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2FudmFzV2hpdGVib2FyZFNoYXBlU2VydmljZTogQ2FudmFzV2hpdGVib2FyZFNoYXBlU2VydmljZSkge1xuICAgIHRoaXMuX3NoYXBlc01hcCA9IG5ldyBNYXA8c3RyaW5nLCBDYW52YXNXaGl0ZWJvYXJkU2hhcGU+KCk7XG4gICAgdGhpcy5faW5jb21wbGV0ZVNoYXBlc01hcCA9IG5ldyBNYXA8c3RyaW5nLCBDYW52YXNXaGl0ZWJvYXJkU2hhcGU+KCk7XG4gICAgdGhpcy5jYW52YXNXaGl0ZWJvYXJkU2hhcGVQcmV2aWV3T3B0aW9ucyA9IHRoaXMuZ2VuZXJhdGVTaGFwZVByZXZpZXdPcHRpb25zKCk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSB0aGUgY2FudmFzIGRyYXdpbmcgY29udGV4dC4gSWYgd2UgaGF2ZSBhbiBhc3BlY3QgcmF0aW8gc2V0IHVwLCB0aGUgY2FudmFzIHdpbGwgcmVzaXplXG4gICAqIGFjY29yZGluZyB0byB0aGUgYXNwZWN0IHJhdGlvLlxuICAgKi9cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5faW5pdElucHV0c0Zyb21PcHRpb25zKHRoaXMub3B0aW9ucyk7XG4gICAgdGhpcy5faW5pdENhbnZhc0V2ZW50TGlzdGVuZXJzKCk7XG4gICAgdGhpcy5faW5pdENhbnZhc1NlcnZpY2VPYnNlcnZhYmxlcygpO1xuICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLm5hdGl2ZUVsZW1lbnQuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICB0aGlzLl9pbmNvbXBsZXRlU2hhcGVzQ2FudmFzQ29udGV4dCA9IHRoaXMuX2luY29tcGxldGVTaGFwZXNDYW52YXMubmF0aXZlRWxlbWVudC5nZXRDb250ZXh0KCcyZCcpO1xuICB9XG5cbiAgLyoqXG4gICAqIElmIGFuIGltYWdlIGV4aXN0cyBhbmQgaXQncyB1cmwgY2hhbmdlcywgd2UgbmVlZCB0byByZWRyYXcgdGhlIG5ldyBpbWFnZSBvbiB0aGUgY2FudmFzLlxuICAgKi9cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogYW55KTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMub3B0aW9ucyAmJiAhaXNFcXVhbChjaGFuZ2VzLm9wdGlvbnMuY3VycmVudFZhbHVlLCBjaGFuZ2VzLm9wdGlvbnMucHJldmlvdXNWYWx1ZSkpIHtcbiAgICAgIHRoaXMuX2luaXRJbnB1dHNGcm9tT3B0aW9ucyhjaGFuZ2VzLm9wdGlvbnMuY3VycmVudFZhbHVlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVjYWxjdWxhdGUgdGhlIHdpZHRoIGFuZCBoZWlnaHQgb2YgdGhlIGNhbnZhcyBhZnRlciB0aGUgdmlldyBoYXMgYmVlbiBmdWxseSBpbml0aWFsaXplZFxuICAgKi9cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX2NhbGN1bGF0ZUNhbnZhc1dpZHRoQW5kSGVpZ2h0KCk7XG4gICAgdGhpcy5fcmVkcmF3SGlzdG9yeSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIHJlYWRzIHRoZSBvcHRpb25zIHdoaWNoIGFyZSBoZWxwZnVsIHNpbmNlIHRoZXkgY2FuIGJlIHJlYWxseSBsb25nIHdoZW4gc3BlY2lmaWVkIGluIEhUTUxcbiAgICogVGhpcyBtZXRob2QgaXMgYWxzbyBjYWxsZWQgZXZlcnl0aW1lIHRoZSBvcHRpb25zIG9iamVjdCBjaGFuZ2VzXG4gICAqIEZvciBzZWN1cml0eSByZWFzb25zIHdlIG11c3QgY2hlY2sgZWFjaCBpdGVtIG9uIGl0cyBvd24gc2luY2UgaWYgd2UgaXRlcmF0ZSB0aGUga2V5c1xuICAgKiB3ZSBtYXkgYmUgaW5qZWN0ZWQgd2l0aCBtYWxpY2lvdXMgdmFsdWVzXG4gICAqXG4gICAqIEBwYXJhbSBvcHRpb25zXG4gICAqL1xuICBwcml2YXRlIF9pbml0SW5wdXRzRnJvbU9wdGlvbnMob3B0aW9uczogQ2FudmFzV2hpdGVib2FyZE9wdGlvbnMpOiB2b2lkIHtcbiAgICBpZiAob3B0aW9ucykge1xuICAgICAgaWYgKCF0aGlzLl9pc051bGxPclVuZGVmaW5lZChvcHRpb25zLmJhdGNoVXBkYXRlVGltZW91dER1cmF0aW9uKSkge1xuICAgICAgICB0aGlzLmJhdGNoVXBkYXRlVGltZW91dER1cmF0aW9uID0gb3B0aW9ucy5iYXRjaFVwZGF0ZVRpbWVvdXREdXJhdGlvbjtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5faXNOdWxsT3JVbmRlZmluZWQob3B0aW9ucy5pbWFnZVVybCkpIHtcbiAgICAgICAgdGhpcy5pbWFnZVVybCA9IG9wdGlvbnMuaW1hZ2VVcmw7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuX2lzTnVsbE9yVW5kZWZpbmVkKG9wdGlvbnMuYXNwZWN0UmF0aW8pKSB7XG4gICAgICAgIHRoaXMuYXNwZWN0UmF0aW8gPSBvcHRpb25zLmFzcGVjdFJhdGlvO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLl9pc051bGxPclVuZGVmaW5lZChvcHRpb25zLmRyYXdCdXR0b25DbGFzcykpIHtcbiAgICAgICAgdGhpcy5kcmF3QnV0dG9uQ2xhc3MgPSBvcHRpb25zLmRyYXdCdXR0b25DbGFzcztcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5faXNOdWxsT3JVbmRlZmluZWQob3B0aW9ucy5jbGVhckJ1dHRvbkNsYXNzKSkge1xuICAgICAgICB0aGlzLmNsZWFyQnV0dG9uQ2xhc3MgPSBvcHRpb25zLmNsZWFyQnV0dG9uQ2xhc3M7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuX2lzTnVsbE9yVW5kZWZpbmVkKG9wdGlvbnMudW5kb0J1dHRvbkNsYXNzKSkge1xuICAgICAgICB0aGlzLnVuZG9CdXR0b25DbGFzcyA9IG9wdGlvbnMudW5kb0J1dHRvbkNsYXNzO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLl9pc051bGxPclVuZGVmaW5lZChvcHRpb25zLnJlZG9CdXR0b25DbGFzcykpIHtcbiAgICAgICAgdGhpcy5yZWRvQnV0dG9uQ2xhc3MgPSBvcHRpb25zLnJlZG9CdXR0b25DbGFzcztcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5faXNOdWxsT3JVbmRlZmluZWQob3B0aW9ucy5zYXZlRGF0YUJ1dHRvbkNsYXNzKSkge1xuICAgICAgICB0aGlzLnNhdmVEYXRhQnV0dG9uQ2xhc3MgPSBvcHRpb25zLnNhdmVEYXRhQnV0dG9uQ2xhc3M7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuX2lzTnVsbE9yVW5kZWZpbmVkKG9wdGlvbnMuZHJhd0J1dHRvblRleHQpKSB7XG4gICAgICAgIHRoaXMuZHJhd0J1dHRvblRleHQgPSBvcHRpb25zLmRyYXdCdXR0b25UZXh0O1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLl9pc051bGxPclVuZGVmaW5lZChvcHRpb25zLmNsZWFyQnV0dG9uVGV4dCkpIHtcbiAgICAgICAgdGhpcy5jbGVhckJ1dHRvblRleHQgPSBvcHRpb25zLmNsZWFyQnV0dG9uVGV4dDtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5faXNOdWxsT3JVbmRlZmluZWQob3B0aW9ucy51bmRvQnV0dG9uVGV4dCkpIHtcbiAgICAgICAgdGhpcy51bmRvQnV0dG9uVGV4dCA9IG9wdGlvbnMudW5kb0J1dHRvblRleHQ7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuX2lzTnVsbE9yVW5kZWZpbmVkKG9wdGlvbnMucmVkb0J1dHRvblRleHQpKSB7XG4gICAgICAgIHRoaXMucmVkb0J1dHRvblRleHQgPSBvcHRpb25zLnJlZG9CdXR0b25UZXh0O1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLl9pc051bGxPclVuZGVmaW5lZChvcHRpb25zLnNhdmVEYXRhQnV0dG9uVGV4dCkpIHtcbiAgICAgICAgdGhpcy5zYXZlRGF0YUJ1dHRvblRleHQgPSBvcHRpb25zLnNhdmVEYXRhQnV0dG9uVGV4dDtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5faXNOdWxsT3JVbmRlZmluZWQob3B0aW9ucy5zdHJva2VDb2xvclBpY2tlclRleHQpKSB7XG4gICAgICAgIHRoaXMuc3Ryb2tlQ29sb3JQaWNrZXJUZXh0ID0gb3B0aW9ucy5zdHJva2VDb2xvclBpY2tlclRleHQ7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuX2lzTnVsbE9yVW5kZWZpbmVkKG9wdGlvbnMuZmlsbENvbG9yUGlja2VyVGV4dCkpIHtcbiAgICAgICAgdGhpcy5maWxsQ29sb3JQaWNrZXJUZXh0ID0gb3B0aW9ucy5maWxsQ29sb3JQaWNrZXJUZXh0O1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLl9pc051bGxPclVuZGVmaW5lZChvcHRpb25zLmRyYXdCdXR0b25FbmFibGVkKSkge1xuICAgICAgICB0aGlzLmRyYXdCdXR0b25FbmFibGVkID0gb3B0aW9ucy5kcmF3QnV0dG9uRW5hYmxlZDtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5faXNOdWxsT3JVbmRlZmluZWQob3B0aW9ucy5jbGVhckJ1dHRvbkVuYWJsZWQpKSB7XG4gICAgICAgIHRoaXMuY2xlYXJCdXR0b25FbmFibGVkID0gb3B0aW9ucy5jbGVhckJ1dHRvbkVuYWJsZWQ7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuX2lzTnVsbE9yVW5kZWZpbmVkKG9wdGlvbnMudW5kb0J1dHRvbkVuYWJsZWQpKSB7XG4gICAgICAgIHRoaXMudW5kb0J1dHRvbkVuYWJsZWQgPSBvcHRpb25zLnVuZG9CdXR0b25FbmFibGVkO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLl9pc051bGxPclVuZGVmaW5lZChvcHRpb25zLnJlZG9CdXR0b25FbmFibGVkKSkge1xuICAgICAgICB0aGlzLnJlZG9CdXR0b25FbmFibGVkID0gb3B0aW9ucy5yZWRvQnV0dG9uRW5hYmxlZDtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5faXNOdWxsT3JVbmRlZmluZWQob3B0aW9ucy5zYXZlRGF0YUJ1dHRvbkVuYWJsZWQpKSB7XG4gICAgICAgIHRoaXMuc2F2ZURhdGFCdXR0b25FbmFibGVkID0gb3B0aW9ucy5zYXZlRGF0YUJ1dHRvbkVuYWJsZWQ7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuX2lzTnVsbE9yVW5kZWZpbmVkKG9wdGlvbnMuY29sb3JQaWNrZXJFbmFibGVkKSkge1xuICAgICAgICB0aGlzLmNvbG9yUGlja2VyRW5hYmxlZCA9IG9wdGlvbnMuY29sb3JQaWNrZXJFbmFibGVkO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLl9pc051bGxPclVuZGVmaW5lZChvcHRpb25zLnN0cm9rZUNvbG9yUGlja2VyRW5hYmxlZCkpIHtcbiAgICAgICAgdGhpcy5zdHJva2VDb2xvclBpY2tlckVuYWJsZWQgPSBvcHRpb25zLnN0cm9rZUNvbG9yUGlja2VyRW5hYmxlZDtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5faXNOdWxsT3JVbmRlZmluZWQob3B0aW9ucy5maWxsQ29sb3JQaWNrZXJFbmFibGVkKSkge1xuICAgICAgICB0aGlzLmZpbGxDb2xvclBpY2tlckVuYWJsZWQgPSBvcHRpb25zLmZpbGxDb2xvclBpY2tlckVuYWJsZWQ7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuX2lzTnVsbE9yVW5kZWZpbmVkKG9wdGlvbnMubGluZVdpZHRoKSkge1xuICAgICAgICB0aGlzLmxpbmVXaWR0aCA9IG9wdGlvbnMubGluZVdpZHRoO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLl9pc051bGxPclVuZGVmaW5lZChvcHRpb25zLnN0cm9rZUNvbG9yKSkge1xuICAgICAgICB0aGlzLnN0cm9rZUNvbG9yID0gb3B0aW9ucy5zdHJva2VDb2xvcjtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5faXNOdWxsT3JVbmRlZmluZWQob3B0aW9ucy5zaG91bGREb3dubG9hZERyYXdpbmcpKSB7XG4gICAgICAgIHRoaXMuc2hvdWxkRG93bmxvYWREcmF3aW5nID0gb3B0aW9ucy5zaG91bGREb3dubG9hZERyYXdpbmc7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuX2lzTnVsbE9yVW5kZWZpbmVkKG9wdGlvbnMuc3RhcnRpbmdDb2xvcikpIHtcbiAgICAgICAgdGhpcy5zdGFydGluZ0NvbG9yID0gb3B0aW9ucy5zdGFydGluZ0NvbG9yO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLl9pc051bGxPclVuZGVmaW5lZChvcHRpb25zLnNjYWxlRmFjdG9yKSkge1xuICAgICAgICB0aGlzLnNjYWxlRmFjdG9yID0gb3B0aW9ucy5zY2FsZUZhY3RvcjtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5faXNOdWxsT3JVbmRlZmluZWQob3B0aW9ucy5kcmF3aW5nRW5hYmxlZCkpIHtcbiAgICAgICAgdGhpcy5kcmF3aW5nRW5hYmxlZCA9IG9wdGlvbnMuZHJhd2luZ0VuYWJsZWQ7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuX2lzTnVsbE9yVW5kZWZpbmVkKG9wdGlvbnMuZG93bmxvYWRlZEZpbGVOYW1lKSkge1xuICAgICAgICB0aGlzLmRvd25sb2FkZWRGaWxlTmFtZSA9IG9wdGlvbnMuZG93bmxvYWRlZEZpbGVOYW1lO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLl9pc051bGxPclVuZGVmaW5lZChvcHRpb25zLmxpbmVKb2luKSkge1xuICAgICAgICB0aGlzLmxpbmVKb2luID0gb3B0aW9ucy5saW5lSm9pbjtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5faXNOdWxsT3JVbmRlZmluZWQob3B0aW9ucy5saW5lQ2FwKSkge1xuICAgICAgICB0aGlzLmxpbmVDYXAgPSBvcHRpb25zLmxpbmVDYXA7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuX2lzTnVsbE9yVW5kZWZpbmVkKG9wdGlvbnMuc2hhcGVTZWxlY3RvckVuYWJsZWQpKSB7XG4gICAgICAgIHRoaXMuc2hhcGVTZWxlY3RvckVuYWJsZWQgPSBvcHRpb25zLnNoYXBlU2VsZWN0b3JFbmFibGVkO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLl9pc051bGxPclVuZGVmaW5lZChvcHRpb25zLnNob3dTaGFwZVNlbGVjdG9yKSkge1xuICAgICAgICB0aGlzLnNob3dTaGFwZVNlbGVjdG9yID0gb3B0aW9ucy5zaG93U2hhcGVTZWxlY3RvcjtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5faXNOdWxsT3JVbmRlZmluZWQob3B0aW9ucy5maWxsQ29sb3IpKSB7XG4gICAgICAgIHRoaXMuZmlsbENvbG9yID0gb3B0aW9ucy5maWxsQ29sb3I7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuX2lzTnVsbE9yVW5kZWZpbmVkKG9wdGlvbnMuc2hvd1N0cm9rZUNvbG9yUGlja2VyKSkge1xuICAgICAgICB0aGlzLnNob3dTdHJva2VDb2xvclBpY2tlciA9IG9wdGlvbnMuc2hvd1N0cm9rZUNvbG9yUGlja2VyO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLl9pc051bGxPclVuZGVmaW5lZChvcHRpb25zLnNob3dGaWxsQ29sb3JQaWNrZXIpKSB7XG4gICAgICAgIHRoaXMuc2hvd0ZpbGxDb2xvclBpY2tlciA9IG9wdGlvbnMuc2hvd0ZpbGxDb2xvclBpY2tlcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9pc051bGxPclVuZGVmaW5lZChwcm9wZXJ0eTogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHByb3BlcnR5ID09PSBudWxsIHx8IHByb3BlcnR5ID09PSB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogSW5pdCBnbG9iYWwgd2luZG93IGxpc3RlbmVycyBsaWtlIHJlc2l6ZSBhbmQga2V5ZG93blxuICAgKi9cbiAgcHJpdmF0ZSBfaW5pdENhbnZhc0V2ZW50TGlzdGVuZXJzKCk6IHZvaWQge1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHRoaXMuX3Jlc2l6ZVN1YnNjcmlwdGlvbiA9IGZyb21FdmVudCh3aW5kb3csICdyZXNpemUnKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBkZWJvdW5jZVRpbWUoMjAwKSxcbiAgICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3JlZHJhd0NhbnZhc09uUmVzaXplKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9jYW52YXNLZXlEb3duLmJpbmQodGhpcyksIGZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdWJzY3JpYmVzIHRvIG5ldyBzaWduYWxzIGluIHRoZSBjYW52YXMgd2hpdGVib2FyZCBzZXJ2aWNlIGFuZCBleGVjdXRlcyBtZXRob2RzIGFjY29yZGluZ2x5XG4gICAqIEJlY2F1c2Ugb2YgY2lyY3VsYXIgcHVibGlzaGluZyBhbmQgc3Vic2NyaWJpbmcsIHRoZSBjYW52YXMgbWV0aG9kcyBkbyBub3QgdXNlIHRoZSBzZXJ2aWNlIHdoZW5cbiAgICogbG9jYWwgYWN0aW9ucyBhcmUgY29tcGxldGVkIChFeC4gY2xpY2tpbmcgdW5kbyBmcm9tIHRoZSBidXR0b24gaW5zaWRlIHRoaXMgY29tcG9uZW50KVxuICAgKi9cbiAgcHJpdmF0ZSBfaW5pdENhbnZhc1NlcnZpY2VPYnNlcnZhYmxlcygpOiB2b2lkIHtcbiAgICB0aGlzLl9jYW52YXNXaGl0ZWJvYXJkU2VydmljZVN1YnNjcmlwdGlvbnMucHVzaCh0aGlzLmNhbnZhc1doaXRlYm9hcmRTZXJ2aWNlLmNhbnZhc0RyYXdTdWJqZWN0JFxuICAgICAgLnN1YnNjcmliZSh1cGRhdGVzID0+IHRoaXMuZHJhd1VwZGF0ZXModXBkYXRlcykpKTtcbiAgICB0aGlzLl9jYW52YXNXaGl0ZWJvYXJkU2VydmljZVN1YnNjcmlwdGlvbnMucHVzaCh0aGlzLmNhbnZhc1doaXRlYm9hcmRTZXJ2aWNlLmNhbnZhc0NsZWFyU3ViamVjdCRcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jbGVhckNhbnZhcygpKSk7XG4gICAgdGhpcy5fY2FudmFzV2hpdGVib2FyZFNlcnZpY2VTdWJzY3JpcHRpb25zLnB1c2godGhpcy5jYW52YXNXaGl0ZWJvYXJkU2VydmljZS5jYW52YXNVbmRvU3ViamVjdCRcbiAgICAgIC5zdWJzY3JpYmUoKHVwZGF0ZVVVRCkgPT4gdGhpcy5fdW5kb0NhbnZhcyh1cGRhdGVVVUQpKSk7XG4gICAgdGhpcy5fY2FudmFzV2hpdGVib2FyZFNlcnZpY2VTdWJzY3JpcHRpb25zLnB1c2godGhpcy5jYW52YXNXaGl0ZWJvYXJkU2VydmljZS5jYW52YXNSZWRvU3ViamVjdCRcbiAgICAgIC5zdWJzY3JpYmUoKHVwZGF0ZVVVRCkgPT4gdGhpcy5fcmVkb0NhbnZhcyh1cGRhdGVVVUQpKSk7XG5cbiAgICB0aGlzLl9yZWdpc3RlcmVkU2hhcGVzU3Vic2NyaXB0aW9uID0gdGhpcy5jYW52YXNXaGl0ZWJvYXJkU2hhcGVTZXJ2aWNlLnJlZ2lzdGVyZWRTaGFwZXMkLnN1YnNjcmliZSgoc2hhcGVzKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuc2VsZWN0ZWRTaGFwZUNvbnN0cnVjdG9yIHx8ICF0aGlzLmNhbnZhc1doaXRlYm9hcmRTaGFwZVNlcnZpY2UuaXNSZWdpc3RlcmVkU2hhcGUodGhpcy5zZWxlY3RlZFNoYXBlQ29uc3RydWN0b3IpKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRTaGFwZUNvbnN0cnVjdG9yID0gc2hhcGVzWzBdO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZSB0aGUgY2FudmFzIHdpZHRoIGFuZCBoZWlnaHQgZnJvbSBpdCdzIHBhcmVudCBjb250YWluZXIgd2lkdGggYW5kIGhlaWdodCAodXNlIGFzcGVjdCByYXRpbyBpZiBuZWVkZWQpXG4gICAqL1xuICBwcml2YXRlIF9jYWxjdWxhdGVDYW52YXNXaWR0aEFuZEhlaWdodCgpOiB2b2lkIHtcbiAgICB0aGlzLmNvbnRleHQuY2FudmFzLndpZHRoID0gdGhpcy5jYW52YXMubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlLmNsaWVudFdpZHRoO1xuICAgIGlmICh0aGlzLmFzcGVjdFJhdGlvKSB7XG4gICAgICB0aGlzLmNvbnRleHQuY2FudmFzLmhlaWdodCA9IHRoaXMuY2FudmFzLm5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZS5jbGllbnRXaWR0aCAqIHRoaXMuYXNwZWN0UmF0aW87XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29udGV4dC5jYW52YXMuaGVpZ2h0ID0gdGhpcy5jYW52YXMubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlLmNsaWVudEhlaWdodDtcbiAgICB9XG5cbiAgICB0aGlzLl9pbmNvbXBsZXRlU2hhcGVzQ2FudmFzQ29udGV4dC5jYW52YXMud2lkdGggPSB0aGlzLmNvbnRleHQuY2FudmFzLndpZHRoO1xuICAgIHRoaXMuX2luY29tcGxldGVTaGFwZXNDYW52YXNDb250ZXh0LmNhbnZhcy5oZWlnaHQgPSB0aGlzLmNvbnRleHQuY2FudmFzLmhlaWdodDtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkIGFuIGltYWdlIGFuZCBkcmF3IGl0IG9uIHRoZSBjYW52YXMgKGlmIGFuIGltYWdlIGV4aXN0cylcbiAgICogQHBhcmFtIGNhbGxiYWNrRm4gQSBmdW5jdGlvbiB0aGF0IGlzIGNhbGxlZCBhZnRlciB0aGUgaW1hZ2UgbG9hZGluZyBpcyBmaW5pc2hlZFxuICAgKiBAcmV0dXJuIEVtaXRzIGEgdmFsdWUgd2hlbiB0aGUgaW1hZ2UgaGFzIGJlZW4gbG9hZGVkLlxuICAgKi9cbiAgcHJpdmF0ZSBfbG9hZEltYWdlKGNhbGxiYWNrRm4/OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLl9jYW5EcmF3ID0gZmFsc2U7XG5cbiAgICAvLyBJZiB3ZSBhbHJlYWR5IGhhdmUgdGhlIGltYWdlIHRoZXJlIGlzIG5vIG5lZWQgdG8gYWNxdWlyZSBpdFxuICAgIGlmICh0aGlzLl9pbWFnZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMuX2NhbkRyYXcgPSB0cnVlO1xuICAgICAgY2FsbGJhY2tGbiAmJiBjYWxsYmFja0ZuKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5faW1hZ2VFbGVtZW50ID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5faW1hZ2VFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICB0aGlzLl9jYW5EcmF3ID0gdHJ1ZTtcbiAgICAgIGNhbGxiYWNrRm4gJiYgY2FsbGJhY2tGbigpO1xuICAgICAgdGhpcy5vbkltYWdlTG9hZGVkLmVtaXQodHJ1ZSk7XG4gICAgfSk7XG4gICAgdGhpcy5faW1hZ2VFbGVtZW50LnNyYyA9IHRoaXMuaW1hZ2VVcmw7XG4gIH1cblxuICAvKipcbiAgICogU2VuZHMgYSBub3RpZmljYXRpb24gYWZ0ZXIgY2xlYXJpbmcgdGhlIGNhbnZhc1xuICAgKiBUaGlzIG1ldGhvZCBzaG91bGQgb25seSBiZSBjYWxsZWQgZnJvbSB0aGUgY2xlYXIgYnV0dG9uIGluIHRoaXMgY29tcG9uZW50IHNpbmNlIGl0IHdpbGwgZW1pdCBhbiBjbGVhciBldmVudFxuICAgKiBJZiB0aGUgY2xpZW50IGNhbGxzIHRoaXMgbWV0aG9kIGhlIG1heSBjcmVhdGUgYSBjaXJjdWxhciBjbGVhciBhY3Rpb24gd2hpY2ggbWF5IGNhdXNlIGRhbmdlci5cbiAgICovXG4gIGNsZWFyQ2FudmFzTG9jYWwoKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhckNhbnZhcygpO1xuICAgIHRoaXMub25DbGVhci5lbWl0KHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFycyBhbGwgY29udGVudCBvbiB0aGUgY2FudmFzLlxuICAgKi9cbiAgY2xlYXJDYW52YXMoKTogdm9pZCB7XG4gICAgdGhpcy5fcmVtb3ZlQ2FudmFzRGF0YSgpO1xuICAgIHRoaXMuX3JlZG9TdGFjayA9IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIHJlc2V0cyB0aGUgc3RhdGUgb2YgdGhlIGNhbnZhcyBhbmQgcmVkcmF3cyBpdC5cbiAgICogSXQgY2FsbHMgYSBjYWxsYmFjayBmdW5jdGlvbiBhZnRlciByZWRyYXdpbmdcbiAgICogQHBhcmFtIGNhbGxiYWNrRm5cbiAgICovXG4gIHByaXZhdGUgX3JlbW92ZUNhbnZhc0RhdGEoY2FsbGJhY2tGbj86IGFueSk6IHZvaWQge1xuICAgIHRoaXMuX3NoYXBlc01hcCA9IG5ldyBNYXA8c3RyaW5nLCBDYW52YXNXaGl0ZWJvYXJkU2hhcGU+KCk7XG4gICAgdGhpcy5fY2xpZW50RHJhZ2dpbmcgPSBmYWxzZTtcbiAgICB0aGlzLl91cGRhdGVIaXN0b3J5ID0gW107XG4gICAgdGhpcy5fdW5kb1N0YWNrID0gW107XG4gICAgdGhpcy5fcmVkcmF3QmFja2dyb3VuZChjYWxsYmFja0ZuKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhcnMgdGhlIGNhbnZhcyBhbmQgcmVkcmF3cyB0aGUgaW1hZ2UgaWYgdGhlIHVybCBleGlzdHMuXG4gICAqIEBwYXJhbSBjYWxsYmFja0ZuIEEgZnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgYWZ0ZXIgdGhlIGJhY2tncm91bmQgaXMgcmVkcmF3blxuICAgKiBAcmV0dXJuIEVtaXRzIGEgdmFsdWUgd2hlbiB0aGUgY2xlYXJpbmcgaXMgZmluaXNoZWRcbiAgICovXG4gIHByaXZhdGUgX3JlZHJhd0JhY2tncm91bmQoY2FsbGJhY2tGbj86IGFueSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNvbnRleHQpIHtcbiAgICAgIGlmICh0aGlzLmltYWdlVXJsKSB7XG4gICAgICAgIHRoaXMuX2xvYWRJbWFnZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5jb250ZXh0LnNhdmUoKTtcbiAgICAgICAgICB0aGlzLl9kcmF3SW1hZ2UodGhpcy5jb250ZXh0LCB0aGlzLl9pbWFnZUVsZW1lbnQsIDAsIDAsIHRoaXMuY29udGV4dC5jYW52YXMud2lkdGgsIHRoaXMuY29udGV4dC5jYW52YXMuaGVpZ2h0LCAwLjUsIDAuNSk7XG4gICAgICAgICAgdGhpcy5jb250ZXh0LnJlc3RvcmUoKTtcbiAgICAgICAgICB0aGlzLl9kcmF3TWlzc2luZ1VwZGF0ZXMoKTtcbiAgICAgICAgICBjYWxsYmFja0ZuICYmIGNhbGxiYWNrRm4oKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMuY29udGV4dC5jYW52YXMud2lkdGgsIHRoaXMuY29udGV4dC5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5fZHJhd1N0YXJ0aW5nQ29sb3IoKTtcbiAgICAgICAgY2FsbGJhY2tGbiAmJiBjYWxsYmFja0ZuKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZHJhd1N0YXJ0aW5nQ29sb3IoKTogdm9pZCB7XG4gICAgY29uc3QgcHJldmlvdXNGaWxsU3R5bGUgPSB0aGlzLmNvbnRleHQuZmlsbFN0eWxlO1xuICAgIHRoaXMuY29udGV4dC5zYXZlKCk7XG5cbiAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5zdGFydGluZ0NvbG9yO1xuICAgIHRoaXMuY29udGV4dC5maWxsUmVjdCgwLCAwLCB0aGlzLmNvbnRleHQuY2FudmFzLndpZHRoLCB0aGlzLmNvbnRleHQuY2FudmFzLmhlaWdodCk7XG4gICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IHByZXZpb3VzRmlsbFN0eWxlO1xuXG4gICAgdGhpcy5jb250ZXh0LnJlc3RvcmUoKTtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIFVzZSBnZXREcmF3aW5nRW5hYmxlZCgpOiBib29sZWFuXG4gICAqL1xuICBnZXRTaG91bGREcmF3KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmdldERyYXdpbmdFbmFibGVkKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHZhbHVlIG9mIHdoZXRoZXIgdGhlIHVzZXIgY2xpY2tlZCB0aGUgZHJhdyBidXR0b24gb24gdGhlIGNhbnZhcy5cbiAgICovXG4gIGdldERyYXdpbmdFbmFibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmRyYXdpbmdFbmFibGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZXMgZHJhd2luZyBvbiB0aGUgY2FudmFzLiBJdCBpcyBjYWxsZWQgdmlhIHRoZSBkcmF3IGJ1dHRvbiBvbiB0aGUgY2FudmFzLlxuICAgKi9cbiAgdG9nZ2xlRHJhd2luZ0VuYWJsZWQoKTogdm9pZCB7XG4gICAgdGhpcy5kcmF3aW5nRW5hYmxlZCA9ICF0aGlzLmRyYXdpbmdFbmFibGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBpZiBkcmF3aW5nIGlzIGVuYWJsZWQgZnJvbSB0aGUgY2xpZW50IHVzaW5nIHRoZSBjYW52YXNcbiAgICogQHBhcmFtIGRyYXdpbmdFbmFibGVkXG4gICAqL1xuICBzZXREcmF3aW5nRW5hYmxlZChkcmF3aW5nRW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZHJhd2luZ0VuYWJsZWQgPSBkcmF3aW5nRW5hYmxlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBQbGVhc2UgdXNlIHRoZSBjaGFuZ2VTdHJva2VDb2xvcihuZXdTdHJva2VDb2xvcjogc3RyaW5nKTogdm9pZCBtZXRob2RcbiAgICovXG4gIGNoYW5nZUNvbG9yKG5ld1N0cm9rZUNvbG9yOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmNoYW5nZVN0cm9rZUNvbG9yKG5ld1N0cm9rZUNvbG9yKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXBsYWNlcyB0aGUgZHJhd2luZyBjb2xvciB3aXRoIGEgbmV3IGNvbG9yXG4gICAqIFRoZSBmb3JtYXQgc2hvdWxkIGJlIChcIiNmZmZmZmZcIiBvciBcInJnYihyLGcsYixhPylcIilcbiAgICogVGhpcyBtZXRob2QgaXMgcHVibGljIHNvIHRoYXQgYW55b25lIGNhbiBhY2Nlc3MgdGhlIGNhbnZhcyBhbmQgY2hhbmdlIHRoZSBzdHJva2UgY29sb3JcbiAgICpcbiAgICogQHBhcmFtIG5ld1N0cm9rZUNvbG9yIFRoZSBuZXcgc3Ryb2tlIGNvbG9yXG4gICAqL1xuICBjaGFuZ2VTdHJva2VDb2xvcihuZXdTdHJva2VDb2xvcjogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zdHJva2VDb2xvciA9IG5ld1N0cm9rZUNvbG9yO1xuXG4gICAgdGhpcy5jYW52YXNXaGl0ZWJvYXJkU2hhcGVQcmV2aWV3T3B0aW9ucyA9IHRoaXMuZ2VuZXJhdGVTaGFwZVByZXZpZXdPcHRpb25zKCk7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICAvKipcbiAgICogUmVwbGFjZXMgdGhlIGZpbGwgY29sb3Igd2l0aCBhIG5ldyBjb2xvclxuICAgKiBUaGUgZm9ybWF0IHNob3VsZCBiZSAoXCIjZmZmZmZmXCIgb3IgXCJyZ2IocixnLGIsYT8pXCIpXG4gICAqIFRoaXMgbWV0aG9kIGlzIHB1YmxpYyBzbyB0aGF0IGFueW9uZSBjYW4gYWNjZXNzIHRoZSBjYW52YXMgYW5kIGNoYW5nZSB0aGUgZmlsbCBjb2xvclxuICAgKlxuICAgKiBAcGFyYW0gbmV3RmlsbENvbG9yIFRoZSBuZXcgZmlsbCBjb2xvclxuICAgKi9cbiAgY2hhbmdlRmlsbENvbG9yKG5ld0ZpbGxDb2xvcjogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5maWxsQ29sb3IgPSBuZXdGaWxsQ29sb3I7XG4gICAgdGhpcy5jYW52YXNXaGl0ZWJvYXJkU2hhcGVQcmV2aWV3T3B0aW9ucyA9IHRoaXMuZ2VuZXJhdGVTaGFwZVByZXZpZXdPcHRpb25zKCk7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgaXMgaW52b2tlZCBieSB0aGUgdW5kbyBidXR0b24gb24gdGhlIGNhbnZhcyBzY3JlZW5cbiAgICogSXQgY2FsbHMgdGhlIGdsb2JhbCB1bmRvIG1ldGhvZCBhbmQgZW1pdHMgYSBub3RpZmljYXRpb24gYWZ0ZXIgdW5kb2luZy5cbiAgICogVGhpcyBtZXRob2Qgc2hvdWxkIG9ubHkgYmUgY2FsbGVkIGZyb20gdGhlIHVuZG8gYnV0dG9uIGluIHRoaXMgY29tcG9uZW50IHNpbmNlIGl0IHdpbGwgZW1pdCBhbiB1bmRvIGV2ZW50XG4gICAqIElmIHRoZSBjbGllbnQgY2FsbHMgdGhpcyBtZXRob2QgaGUgbWF5IGNyZWF0ZSBhIGNpcmN1bGFyIHVuZG8gYWN0aW9uIHdoaWNoIG1heSBjYXVzZSBkYW5nZXIuXG4gICAqL1xuICB1bmRvTG9jYWwoKTogdm9pZCB7XG4gICAgdGhpcy51bmRvKCh1cGRhdGVVVUlEKSA9PiB7XG4gICAgICB0aGlzLl9yZWRvU3RhY2sucHVzaCh1cGRhdGVVVUlEKTtcbiAgICAgIHRoaXMub25VbmRvLmVtaXQodXBkYXRlVVVJRCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2RzIHNlbGVjdHMgdGhlIGxhc3QgdXVpZCBwcmVwYXJlcyBpdCBmb3IgdW5kb2luZyAobWFraW5nIHRoZSB3aG9sZSB1cGRhdGUgc2VxdWVuY2UgaW52aXNpYmxlKVxuICAgKiBUaGlzIG1ldGhvZCBjYW4gYmUgY2FsbGVkIGlmIHRoZSBjYW52YXMgY29tcG9uZW50IGlzIGEgVmlld0NoaWxkIG9mIHNvbWUgb3RoZXIgY29tcG9uZW50LlxuICAgKiBUaGlzIG1ldGhvZCB3aWxsIHdvcmsgZXZlbiBpZiB0aGUgdW5kbyBidXR0b24gaGFzIGJlZW4gZGlzYWJsZWRcbiAgICovXG4gIHVuZG8oY2FsbGJhY2tGbj86ICh1cGRhdGVVVUlEOiBzdHJpbmcpID0+IHZvaWQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX3VuZG9TdGFjay5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB1cGRhdGVVVUlEID0gdGhpcy5fdW5kb1N0YWNrLnBvcCgpO1xuICAgIHRoaXMuX3VuZG9DYW52YXModXBkYXRlVVVJRCk7XG4gICAgY2FsbGJhY2tGbiAmJiBjYWxsYmFja0ZuKHVwZGF0ZVVVSUQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIHRha2VzIGFuIFVVSUQgZm9yIGFuIHVwZGF0ZSwgYW5kIHJlZHJhd3MgdGhlIGNhbnZhcyBieSBtYWtpbmcgYWxsIHVwZGF0ZXMgd2l0aCB0aGF0IHV1aWQgaW52aXNpYmxlXG4gICAqIEBwYXJhbSB1cGRhdGVVVUlEXG4gICAqL1xuICBwcml2YXRlIF91bmRvQ2FudmFzKHVwZGF0ZVVVSUQ6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9zaGFwZXNNYXAuaGFzKHVwZGF0ZVVVSUQpKSB7XG4gICAgICBjb25zdCBzaGFwZSA9IHRoaXMuX3NoYXBlc01hcC5nZXQodXBkYXRlVVVJRCk7XG4gICAgICBzaGFwZS5pc1Zpc2libGUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZHJhd0FsbFNoYXBlcygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIGJ5IHRoZSByZWRvIGJ1dHRvbiBvbiB0aGUgY2FudmFzIHNjcmVlblxuICAgKiBJdCBjYWxscyB0aGUgZ2xvYmFsIHJlZG8gbWV0aG9kIGFuZCBlbWl0cyBhIG5vdGlmaWNhdGlvbiBhZnRlciByZWRvaW5nXG4gICAqIFRoaXMgbWV0aG9kIHNob3VsZCBvbmx5IGJlIGNhbGxlZCBmcm9tIHRoZSByZWRvIGJ1dHRvbiBpbiB0aGlzIGNvbXBvbmVudCBzaW5jZSBpdCB3aWxsIGVtaXQgYW4gcmVkbyBldmVudFxuICAgKiBJZiB0aGUgY2xpZW50IGNhbGxzIHRoaXMgbWV0aG9kIGhlIG1heSBjcmVhdGUgYSBjaXJjdWxhciByZWRvIGFjdGlvbiB3aGljaCBtYXkgY2F1c2UgZGFuZ2VyLlxuICAgKi9cbiAgcmVkb0xvY2FsKCk6IHZvaWQge1xuICAgIHRoaXMucmVkbygodXBkYXRlVVVJRCkgPT4ge1xuICAgICAgdGhpcy5fdW5kb1N0YWNrLnB1c2godXBkYXRlVVVJRCk7XG4gICAgICB0aGlzLm9uUmVkby5lbWl0KHVwZGF0ZVVVSUQpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kcyBzZWxlY3RzIHRoZSBsYXN0IHV1aWQgcHJlcGFyZXMgaXQgZm9yIHJlZG9pbmcgKG1ha2luZyB0aGUgd2hvbGUgdXBkYXRlIHNlcXVlbmNlIHZpc2libGUpXG4gICAqIFRoaXMgbWV0aG9kIGNhbiBiZSBjYWxsZWQgaWYgdGhlIGNhbnZhcyBjb21wb25lbnQgaXMgYSBWaWV3Q2hpbGQgb2Ygc29tZSBvdGhlciBjb21wb25lbnQuXG4gICAqIFRoaXMgbWV0aG9kIHdpbGwgd29yayBldmVuIGlmIHRoZSByZWRvIGJ1dHRvbiBoYXMgYmVlbiBkaXNhYmxlZFxuICAgKi9cbiAgcmVkbyhjYWxsYmFja0ZuPzogYW55KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9yZWRvU3RhY2subGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdXBkYXRlVVVJRCA9IHRoaXMuX3JlZG9TdGFjay5wb3AoKTtcbiAgICB0aGlzLl9yZWRvQ2FudmFzKHVwZGF0ZVVVSUQpO1xuICAgIGNhbGxiYWNrRm4gJiYgY2FsbGJhY2tGbih1cGRhdGVVVUlEKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCB0YWtlcyBhbiBVVUlEIGZvciBhbiB1cGRhdGUsIGFuZCByZWRyYXdzIHRoZSBjYW52YXMgYnkgbWFraW5nIGFsbCB1cGRhdGVzIHdpdGggdGhhdCB1dWlkIHZpc2libGVcbiAgICogQHBhcmFtIHVwZGF0ZVVVSURcbiAgICovXG4gIHByaXZhdGUgX3JlZG9DYW52YXModXBkYXRlVVVJRDogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3NoYXBlc01hcC5oYXModXBkYXRlVVVJRCkpIHtcbiAgICAgIGNvbnN0IHNoYXBlID0gdGhpcy5fc2hhcGVzTWFwLmdldCh1cGRhdGVVVUlEKTtcbiAgICAgIHNoYXBlLmlzVmlzaWJsZSA9IHRydWU7XG5cbiAgICAgIHRoaXMuZHJhd0FsbFNoYXBlcygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDYXRjaGVzIHRoZSBNb3VzZSBhbmQgVG91Y2ggZXZlbnRzIG1hZGUgb24gdGhlIGNhbnZhcy5cbiAgICogSWYgZHJhd2luZyBpcyBkaXNhYmxlZCAoSWYgYW4gaW1hZ2UgZXhpc3RzIGJ1dCBpdCdzIG5vdCBsb2FkZWQsIG9yIHRoZSB1c2VyIGRpZCBub3QgY2xpY2sgRHJhdyksXG4gICAqIHRoaXMgZnVuY3Rpb24gZG9lcyBub3RoaW5nLlxuICAgKlxuICAgKiBJZiBhIFwibW91c2Vkb3duIHwgdG91Y2hzdGFydFwiIGV2ZW50IGlzIHRyaWdnZXJlZCwgZHJhZ2dpbmcgd2lsbCBiZSBzZXQgdG8gdHJ1ZSBhbmQgYW4gQ2FudmFzV2hpdGVib2FyZFVwZGF0ZSBvYmplY3RcbiAgICogb2YgdHlwZSBcInN0YXJ0XCIgd2lsbCBiZSBkcmF3biBhbmQgdGhlbiBzZW50IGFzIGFuIHVwZGF0ZSB0byBhbGwgcmVjZWl2aW5nIGVuZHMuXG4gICAqXG4gICAqIElmIGEgXCJtb3VzZW1vdmUgfCB0b3VjaG1vdmVcIiBldmVudCBpcyB0cmlnZ2VyZWQgYW5kIHRoZSBjbGllbnQgaXMgZHJhZ2dpbmcsIGFuIENhbnZhc1doaXRlYm9hcmRVcGRhdGUgb2JqZWN0XG4gICAqIG9mIHR5cGUgXCJkcmFnXCIgd2lsbCBiZSBkcmF3biBhbmQgdGhlbiBzZW50IGFzIGFuIHVwZGF0ZSB0byBhbGwgcmVjZWl2aW5nIGVuZHMuXG4gICAqXG4gICAqIElmIGEgXCJtb3VzZXVwLCBtb3VzZW91dCB8IHRvdWNoZW5kLCB0b3VjaGNhbmNlbFwiIGV2ZW50IGlzIHRyaWdnZXJlZCwgZHJhZ2dpbmcgd2lsbCBiZSBzZXQgdG8gZmFsc2UgYW5kXG4gICAqIGFuIENhbnZhc1doaXRlYm9hcmRVcGRhdGUgb2JqZWN0IG9mIHR5cGUgXCJzdG9wXCIgd2lsbCBiZSBkcmF3biBhbmQgdGhlbiBzZW50IGFzIGFuIHVwZGF0ZSB0byBhbGwgcmVjZWl2aW5nIGVuZHMuXG4gICAqXG4gICAqL1xuICBjYW52YXNVc2VyRXZlbnRzKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICAvLyBJZ25vcmUgYWxsIGlmIHdlIGRpZG4ndCBjbGljayB0aGUgX2RyYXchIGJ1dHRvbiBvciB0aGUgaW1hZ2UgZGlkIG5vdCBsb2FkXG4gICAgaWYgKCF0aGlzLmRyYXdpbmdFbmFibGVkIHx8ICF0aGlzLl9jYW5EcmF3KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gSWdub3JlIG1vdXNlIG1vdmUgRXZlbnRzIGlmIHdlJ3JlIG5vdCBkcmFnZ2luZ1xuICAgIGlmICghdGhpcy5fY2xpZW50RHJhZ2dpbmdcbiAgICAgICYmIChldmVudC50eXBlID09PSAnbW91c2Vtb3ZlJ1xuICAgICAgICB8fCBldmVudC50eXBlID09PSAndG91Y2htb3ZlJ1xuICAgICAgICB8fCBldmVudC50eXBlID09PSAnbW91c2VvdXQnXG4gICAgICAgIHx8IGV2ZW50LnR5cGUgPT09ICd0b3VjaGNhbmNlbCdcbiAgICAgICAgfHwgZXZlbnQudHlwZSA9PT0gJ21vdXNldXAnXG4gICAgICAgIHx8IGV2ZW50LnR5cGUgPT09ICd0b3VjaGVuZCdcbiAgICAgICAgfHwgZXZlbnQudHlwZSA9PT0gJ21vdXNlb3V0JykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQudGFyZ2V0ID09IHRoaXMuX2luY29tcGxldGVTaGFwZXNDYW52YXMubmF0aXZlRWxlbWVudCB8fCBldmVudC50YXJnZXQgPT0gdGhpcy5jYW52YXMubmF0aXZlRWxlbWVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBsZXQgdXBkYXRlOiBDYW52YXNXaGl0ZWJvYXJkVXBkYXRlO1xuICAgIGxldCB1cGRhdGVUeXBlOiBudW1iZXI7XG4gICAgY29uc3QgZXZlbnRQb3NpdGlvbjogQ2FudmFzV2hpdGVib2FyZFBvaW50ID0gdGhpcy5fZ2V0Q2FudmFzRXZlbnRQb3NpdGlvbihldmVudCk7XG4gICAgdXBkYXRlID0gbmV3IENhbnZhc1doaXRlYm9hcmRVcGRhdGUoZXZlbnRQb3NpdGlvbi54LCBldmVudFBvc2l0aW9uLnkpO1xuXG4gICAgc3dpdGNoIChldmVudC50eXBlKSB7XG4gICAgICBjYXNlICdtb3VzZWRvd24nOlxuICAgICAgY2FzZSAndG91Y2hzdGFydCc6XG4gICAgICAgIHRoaXMuX2NsaWVudERyYWdnaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fbGFzdFVVSUQgPSB0aGlzLl9nZW5lcmF0ZVVVSUQoKTtcbiAgICAgICAgdXBkYXRlVHlwZSA9IENhbnZhc1doaXRlYm9hcmRVcGRhdGVUeXBlLlNUQVJUO1xuICAgICAgICB0aGlzLl9yZWRvU3RhY2sgPSBbXTtcblxuICAgICAgICB0aGlzLl9hZGRDdXJyZW50U2hhcGVEYXRhVG9BblVwZGF0ZSh1cGRhdGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ21vdXNlbW92ZSc6XG4gICAgICBjYXNlICd0b3VjaG1vdmUnOlxuICAgICAgICBpZiAoIXRoaXMuX2NsaWVudERyYWdnaW5nKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHVwZGF0ZVR5cGUgPSBDYW52YXNXaGl0ZWJvYXJkVXBkYXRlVHlwZS5EUkFHO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3RvdWNoY2FuY2VsJzpcbiAgICAgIGNhc2UgJ21vdXNldXAnOlxuICAgICAgY2FzZSAndG91Y2hlbmQnOlxuICAgICAgY2FzZSAnbW91c2VvdXQnOlxuICAgICAgICB0aGlzLl9jbGllbnREcmFnZ2luZyA9IGZhbHNlO1xuICAgICAgICB1cGRhdGVUeXBlID0gQ2FudmFzV2hpdGVib2FyZFVwZGF0ZVR5cGUuU1RPUDtcbiAgICAgICAgdGhpcy5fdW5kb1N0YWNrLnB1c2godGhpcy5fbGFzdFVVSUQpO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICB1cGRhdGUuVVVJRCA9IHRoaXMuX2xhc3RVVUlEO1xuICAgIHVwZGF0ZS50eXBlID0gdXBkYXRlVHlwZTtcblxuICAgIHRoaXMuX2RyYXcodXBkYXRlKTtcbiAgICB0aGlzLl9wcmVwYXJlVG9TZW5kVXBkYXRlKHVwZGF0ZSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBjb29yZGluYXRlcyAoeCx5KSBmcm9tIGEgZ2l2ZW4gZXZlbnRcbiAgICogSWYgaXQgaXMgYSB0b3VjaCBldmVudCwgZ2V0IHRoZSB0b3VjaCBwb3NpdGlvbnNcbiAgICogSWYgd2UgcmVsZWFzZWQgdGhlIHRvdWNoLCB0aGUgcG9zaXRpb24gd2lsbCBiZSBwbGFjZWQgaW4gdGhlIGNoYW5nZWRUb3VjaGVzIG9iamVjdFxuICAgKiBJZiBpdCBpcyBub3QgYSB0b3VjaCBldmVudCwgdXNlIHRoZSBvcmlnaW5hbCBtb3VzZSBldmVudCByZWNlaXZlZFxuICAgKiBAcGFyYW0gZXZlbnREYXRhXG4gICAqL1xuICBwcml2YXRlIF9nZXRDYW52YXNFdmVudFBvc2l0aW9uKGV2ZW50RGF0YTogYW55KTogQ2FudmFzV2hpdGVib2FyZFBvaW50IHtcbiAgICBjb25zdCBjYW52YXNCb3VuZGluZ1JlY3QgPSB0aGlzLmNvbnRleHQuY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgbGV0IGhhc1RvdWNoZXMgPSAoZXZlbnREYXRhLnRvdWNoZXMgJiYgZXZlbnREYXRhLnRvdWNoZXMubGVuZ3RoKSA/IGV2ZW50RGF0YS50b3VjaGVzWzBdIDogbnVsbDtcbiAgICBpZiAoIWhhc1RvdWNoZXMpIHtcbiAgICAgIGhhc1RvdWNoZXMgPSAoZXZlbnREYXRhLmNoYW5nZWRUb3VjaGVzICYmIGV2ZW50RGF0YS5jaGFuZ2VkVG91Y2hlcy5sZW5ndGgpID8gZXZlbnREYXRhLmNoYW5nZWRUb3VjaGVzWzBdIDogbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBldmVudCA9IGhhc1RvdWNoZXMgPyBoYXNUb3VjaGVzIDogZXZlbnREYXRhO1xuXG4gICAgY29uc3Qgc2NhbGVXaWR0aCA9IGNhbnZhc0JvdW5kaW5nUmVjdC53aWR0aCAvIHRoaXMuY29udGV4dC5jYW52YXMud2lkdGg7XG4gICAgY29uc3Qgc2NhbGVIZWlnaHQgPSBjYW52YXNCb3VuZGluZ1JlY3QuaGVpZ2h0IC8gdGhpcy5jb250ZXh0LmNhbnZhcy5oZWlnaHQ7XG5cbiAgICBsZXQgeFBvc2l0aW9uID0gKGV2ZW50LmNsaWVudFggLSBjYW52YXNCb3VuZGluZ1JlY3QubGVmdCk7XG4gICAgbGV0IHlQb3NpdGlvbiA9IChldmVudC5jbGllbnRZIC0gY2FudmFzQm91bmRpbmdSZWN0LnRvcCk7XG5cbiAgICB4UG9zaXRpb24gLz0gdGhpcy5zY2FsZUZhY3RvciA/IHRoaXMuc2NhbGVGYWN0b3IgOiBzY2FsZVdpZHRoO1xuICAgIHlQb3NpdGlvbiAvPSB0aGlzLnNjYWxlRmFjdG9yID8gdGhpcy5zY2FsZUZhY3RvciA6IHNjYWxlSGVpZ2h0O1xuXG4gICAgcmV0dXJuIG5ldyBDYW52YXNXaGl0ZWJvYXJkUG9pbnQoeFBvc2l0aW9uIC8gdGhpcy5jb250ZXh0LmNhbnZhcy53aWR0aCwgeVBvc2l0aW9uIC8gdGhpcy5jb250ZXh0LmNhbnZhcy5oZWlnaHQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB1cGRhdGUgY29vcmRpbmF0ZXMgb24gdGhlIGNhbnZhcyBhcmUgbWFwcGVkIHNvIHRoYXQgYWxsIHJlY2VpdmluZyBlbmRzXG4gICAqIGNhbiByZXZlcnNlIHRoZSBtYXBwaW5nIGFuZCBnZXQgdGhlIHNhbWUgcG9zaXRpb24gYXMgdGhlIG9uZSB0aGF0XG4gICAqIHdhcyBkcmF3biBvbiB0aGlzIHVwZGF0ZS5cbiAgICpcbiAgICogQHBhcmFtIHVwZGF0ZSBUaGUgQ2FudmFzV2hpdGVib2FyZFVwZGF0ZSBvYmplY3QuXG4gICAqL1xuICBwcml2YXRlIF9wcmVwYXJlVG9TZW5kVXBkYXRlKHVwZGF0ZTogQ2FudmFzV2hpdGVib2FyZFVwZGF0ZSk6IHZvaWQge1xuICAgIHRoaXMuX3ByZXBhcmVVcGRhdGVGb3JCYXRjaERpc3BhdGNoKHVwZGF0ZSk7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBDYXRjaGVzIHRoZSBLZXkgVXAgZXZlbnRzIG1hZGUgb24gdGhlIGNhbnZhcy5cbiAgICogSWYgdGhlIGN0cmxLZXkgb3IgY29tbWFuZEtleShtYWNPUykgd2FzIGhlbGQgYW5kIHRoZSBrZXlDb2RlIGlzIDkwICh6KSwgYW4gdW5kbyBhY3Rpb24gd2lsbCBiZSBwZXJmb3JtZWRcbiAgICogSWYgdGhlIGN0cmxLZXkgb3IgY29tbWFuZEtleShtYWNPUykgd2FzIGhlbGQgYW5kIHRoZSBrZXlDb2RlIGlzIDg5ICh5KSwgYSByZWRvIGFjdGlvbiB3aWxsIGJlIHBlcmZvcm1lZFxuICAgKiBJZiB0aGUgY3RybEtleSBvciBjb21tYW5kS2V5KG1hY09TKSB3YXMgaGVsZCBhbmQgdGhlIGtleUNvZGUgaXMgODMgKHMpIG9yIDExNShTKSwgYSBzYXZlIGFjdGlvbiB3aWxsIGJlIHBlcmZvcm1lZFxuICAgKlxuICAgKiBAcGFyYW0gZXZlbnQgVGhlIGV2ZW50IHRoYXQgb2NjdXJyZWQuXG4gICAqL1xuICBwcml2YXRlIF9jYW52YXNLZXlEb3duKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICBpZiAoZXZlbnQuY3RybEtleSB8fCBldmVudC5tZXRhS2V5KSB7XG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gOTAgJiYgdGhpcy51bmRvQnV0dG9uRW5hYmxlZCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnVuZG8oKTtcbiAgICAgIH1cbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSA4OSAmJiB0aGlzLnJlZG9CdXR0b25FbmFibGVkKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMucmVkbygpO1xuICAgICAgfVxuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDgzIHx8IGV2ZW50LmtleUNvZGUgPT09IDExNSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnNhdmVMb2NhbCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBPbiB3aW5kb3cgcmVzaXplLCByZWNhbGN1bGF0ZSB0aGUgY2FudmFzIGRpbWVuc2lvbnMgYW5kIHJlZHJhdyB0aGUgaGlzdG9yeVxuICAgKi9cbiAgcHJpdmF0ZSBfcmVkcmF3Q2FudmFzT25SZXNpemUoKTogdm9pZCB7XG4gICAgdGhpcy5fY2FsY3VsYXRlQ2FudmFzV2lkdGhBbmRIZWlnaHQoKTtcbiAgICB0aGlzLl9yZWRyYXdIaXN0b3J5KCk7XG4gIH1cblxuICAvKipcbiAgICogUmVkcmF3IHRoZSBzYXZlZCBoaXN0b3J5IGFmdGVyIHJlc2V0dGluZyB0aGUgY2FudmFzIHN0YXRlXG4gICAqL1xuICBwcml2YXRlIF9yZWRyYXdIaXN0b3J5KCk6IHZvaWQge1xuICAgIGNvbnN0IHVwZGF0ZXNUb0RyYXcgPSBbXS5jb25jYXQodGhpcy5fdXBkYXRlSGlzdG9yeSk7XG5cbiAgICB0aGlzLl9yZW1vdmVDYW52YXNEYXRhKCgpID0+IHtcbiAgICAgIHVwZGF0ZXNUb0RyYXcuZm9yRWFjaCgodXBkYXRlOiBDYW52YXNXaGl0ZWJvYXJkVXBkYXRlKSA9PiB7XG4gICAgICAgIHRoaXMuX2RyYXcodXBkYXRlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIERyYXdzIGEgQ2FudmFzV2hpdGVib2FyZFVwZGF0ZSBvYmplY3Qgb24gdGhlIGNhbnZhcy5cbiAgICogVGhlIGNvb3JkaW5hdGVzIGFyZSBmaXJzdCByZXZlcnNlIG1hcHBlZCBzbyB0aGF0IHRoZXkgY2FuIGJlIGRyYXduIGluIHRoZSBwcm9wZXIgcGxhY2UuIFRoZSB1cGRhdGVcbiAgICogaXMgYWZ0ZXJ3YXJkcyBhZGRlZCB0byB0aGUgdW5kb1N0YWNrIHNvIHRoYXQgaXQgY2FuIGJlXG4gICAqXG4gICAqIElmIHRoZSBDYW52YXNXaGl0ZWJvYXJkVXBkYXRlIFR5cGUgaXMgXCJzdGFydFwiLCBhIG5ldyBcInNlbGVjdGVkU2hhcGVcIiBpcyBjcmVhdGVkLlxuICAgKiBJZiB0aGUgQ2FudmFzV2hpdGVib2FyZFVwZGF0ZSBUeXBlIGlzIFwiZHJhZ1wiLCB0aGUgc2hhcGUgaXMgdGFrZW4gZnJvbSB0aGUgc2hhcGVzTWFwIGFuZCB0aGVuIGl0J3MgdXBkYXRlZC5cbiAgICogQWZ0ZXJ3YXJkcyB0aGUgY29udGV4dCBpcyB1c2VkIHRvIGRyYXcgdGhlIHNoYXBlIG9uIHRoZSBjYW52YXMuXG4gICAqIFRoaXMgZnVuY3Rpb24gc2F2ZXMgdGhlIGxhc3QgWCBhbmQgWSBjb29yZGluYXRlcyB0aGF0IHdlcmUgZHJhd24uXG4gICAqXG4gICAqIEBwYXJhbSB1cGRhdGUgVGhlIHVwZGF0ZSBvYmplY3QuXG4gICAqL1xuICBwcml2YXRlIF9kcmF3KHVwZGF0ZTogQ2FudmFzV2hpdGVib2FyZFVwZGF0ZSk6IHZvaWQge1xuICAgIHRoaXMuX3VwZGF0ZUhpc3RvcnkucHVzaCh1cGRhdGUpO1xuXG4gICAgLy8gbWFwIHRoZSBjYW52YXMgY29vcmRpbmF0ZXMgdG8gb3VyIGNhbnZhcyBzaXplIHNpbmNlIHRoZXkgYXJlIHNjYWxlZC5cbiAgICB1cGRhdGUgPSBPYmplY3QuYXNzaWduKG5ldyBDYW52YXNXaGl0ZWJvYXJkVXBkYXRlKCksXG4gICAgICB1cGRhdGUsXG4gICAgICB7XG4gICAgICAgIHg6IHVwZGF0ZS54ICogdGhpcy5jb250ZXh0LmNhbnZhcy53aWR0aCxcbiAgICAgICAgeTogdXBkYXRlLnkgKiB0aGlzLmNvbnRleHQuY2FudmFzLmhlaWdodFxuICAgICAgfSk7XG5cbiAgICBpZiAodXBkYXRlLnR5cGUgPT09IENhbnZhc1doaXRlYm9hcmRVcGRhdGVUeXBlLlNUQVJUKSB7XG4gICAgICBjb25zdCB1cGRhdGVTaGFwZUNvbnN0cnVjdG9yID0gdGhpcy5jYW52YXNXaGl0ZWJvYXJkU2hhcGVTZXJ2aWNlLmdldFNoYXBlQ29uc3RydWN0b3JGcm9tU2hhcGVOYW1lKHVwZGF0ZS5zZWxlY3RlZFNoYXBlKTtcbiAgICAgIGNvbnN0IHNoYXBlID0gbmV3IHVwZGF0ZVNoYXBlQ29uc3RydWN0b3IoXG4gICAgICAgIG5ldyBDYW52YXNXaGl0ZWJvYXJkUG9pbnQodXBkYXRlLngsIHVwZGF0ZS55KSxcbiAgICAgICAgT2JqZWN0LmFzc2lnbihuZXcgQ2FudmFzV2hpdGVib2FyZFNoYXBlT3B0aW9ucygpLCB1cGRhdGUuc2VsZWN0ZWRTaGFwZU9wdGlvbnMpXG4gICAgICApO1xuICAgICAgdGhpcy5faW5jb21wbGV0ZVNoYXBlc01hcC5zZXQodXBkYXRlLlVVSUQsIHNoYXBlKTtcbiAgICAgIHRoaXMuX2RyYXdJbmNvbXBsZXRlU2hhcGVzKCk7XG4gICAgfSBlbHNlIGlmICh1cGRhdGUudHlwZSA9PT0gQ2FudmFzV2hpdGVib2FyZFVwZGF0ZVR5cGUuRFJBRykge1xuICAgICAgY29uc3Qgc2hhcGUgPSB0aGlzLl9pbmNvbXBsZXRlU2hhcGVzTWFwLmdldCh1cGRhdGUuVVVJRCk7XG4gICAgICBzaGFwZSAmJiBzaGFwZS5vblVwZGF0ZVJlY2VpdmVkKHVwZGF0ZSk7XG4gICAgICB0aGlzLl9kcmF3SW5jb21wbGV0ZVNoYXBlcygpO1xuICAgIH0gZWxzZSBpZiAoQ2FudmFzV2hpdGVib2FyZFVwZGF0ZVR5cGUuU1RPUCkge1xuICAgICAgY29uc3Qgc2hhcGUgPSB0aGlzLl9pbmNvbXBsZXRlU2hhcGVzTWFwLmdldCh1cGRhdGUuVVVJRCk7XG4gICAgICBzaGFwZSAmJiBzaGFwZS5vblN0b3BSZWNlaXZlZCh1cGRhdGUpO1xuXG4gICAgICB0aGlzLl9zaGFwZXNNYXAuc2V0KHVwZGF0ZS5VVUlELCBzaGFwZSk7XG4gICAgICB0aGlzLl9pbmNvbXBsZXRlU2hhcGVzTWFwLmRlbGV0ZSh1cGRhdGUuVVVJRCk7XG4gICAgICB0aGlzLl9zd2FwQ29tcGxldGVkU2hhcGVUb0FjdHVhbENhbnZhcyhzaGFwZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZHJhd0luY29tcGxldGVTaGFwZXMoKTogdm9pZCB7XG4gICAgdGhpcy5fcmVzZXRJbmNvbXBsZXRlU2hhcGVDYW52YXMoKTtcbiAgICB0aGlzLl9pbmNvbXBsZXRlU2hhcGVzTWFwLmZvckVhY2goKHNoYXBlKSA9PiB7XG4gICAgICBpZiAoc2hhcGUuaXNWaXNpYmxlKSB7XG4gICAgICAgIHNoYXBlLmRyYXcodGhpcy5faW5jb21wbGV0ZVNoYXBlc0NhbnZhc0NvbnRleHQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfc3dhcENvbXBsZXRlZFNoYXBlVG9BY3R1YWxDYW52YXMoc2hhcGU6IENhbnZhc1doaXRlYm9hcmRTaGFwZSk6IHZvaWQge1xuICAgIHRoaXMuX2RyYXdJbmNvbXBsZXRlU2hhcGVzKCk7XG4gICAgaWYgKHNoYXBlLmlzVmlzaWJsZSkge1xuICAgICAgc2hhcGUuZHJhdyh0aGlzLmNvbnRleHQpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3Jlc2V0SW5jb21wbGV0ZVNoYXBlQ2FudmFzKCk6IHZvaWQge1xuICAgIHRoaXMuX2luY29tcGxldGVTaGFwZXNDYW52YXNDb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLl9pbmNvbXBsZXRlU2hhcGVzQ2FudmFzQ29udGV4dC5jYW52YXMud2lkdGgsXG4gICAgICB0aGlzLl9pbmNvbXBsZXRlU2hhcGVzQ2FudmFzQ29udGV4dC5jYW52YXMuaGVpZ2h0KTtcbiAgICB0aGlzLl9pbmNvbXBsZXRlU2hhcGVzQ2FudmFzQ29udGV4dC5maWxsU3R5bGUgPSAndHJhbnNwYXJlbnQnO1xuICAgIHRoaXMuX2luY29tcGxldGVTaGFwZXNDYW52YXNDb250ZXh0LmZpbGxSZWN0KDAsIDAsIHRoaXMuX2luY29tcGxldGVTaGFwZXNDYW52YXNDb250ZXh0LmNhbnZhcy53aWR0aCxcbiAgICAgIHRoaXMuX2luY29tcGxldGVTaGFwZXNDYW52YXNDb250ZXh0LmNhbnZhcy5oZWlnaHQpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSBldmVyeXRoaW5nIGZyb20gdGhlIHNjcmVlbiwgcmVkcmF3IHRoZSBiYWNrZ3JvdW5kLCBhbmQgdGhlbiByZWRyYXcgYWxsIHRoZSBzaGFwZXMgZnJvbSB0aGUgc2hhcGVzTWFwXG4gICAqL1xuICBkcmF3QWxsU2hhcGVzKCk6IHZvaWQge1xuICAgIHRoaXMuX3JlZHJhd0JhY2tncm91bmQoKCkgPT4ge1xuICAgICAgdGhpcy5fc2hhcGVzTWFwLmZvckVhY2goKHNoYXBlOiBDYW52YXNXaGl0ZWJvYXJkU2hhcGUpID0+IHtcbiAgICAgICAgaWYgKHNoYXBlLmlzVmlzaWJsZSkge1xuICAgICAgICAgIHNoYXBlLmRyYXcodGhpcy5jb250ZXh0KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9hZGRDdXJyZW50U2hhcGVEYXRhVG9BblVwZGF0ZSh1cGRhdGU6IENhbnZhc1doaXRlYm9hcmRVcGRhdGUpOiB2b2lkIHtcbiAgICBpZiAoIXVwZGF0ZS5zZWxlY3RlZFNoYXBlKSB7XG4gICAgICB1cGRhdGUuc2VsZWN0ZWRTaGFwZSA9IChuZXcgdGhpcy5zZWxlY3RlZFNoYXBlQ29uc3RydWN0b3IpLmdldFNoYXBlTmFtZSgpO1xuICAgIH1cblxuICAgIGlmICghdXBkYXRlLnNlbGVjdGVkU2hhcGVPcHRpb25zKSB7XG4gICAgICAvLyBNYWtlIGEgZGVlcCBjb3B5IHNpbmNlIHdlIGRvbid0IHdhbnQgc29tZSBTaGFwZSBpbXBsZW1lbnRhdGlvbiB0byBjaGFuZ2Ugc29tZXRoaW5nIGJ5IGFjY2lkZW50XG4gICAgICB1cGRhdGUuc2VsZWN0ZWRTaGFwZU9wdGlvbnMgPSBPYmplY3QuYXNzaWduKG5ldyBDYW52YXNXaGl0ZWJvYXJkU2hhcGVPcHRpb25zKCksXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVTaGFwZVByZXZpZXdPcHRpb25zKCksIHsgbGluZVdpZHRoOiB0aGlzLmxpbmVXaWR0aCB9KTtcbiAgICB9XG4gIH1cblxuICBnZW5lcmF0ZVNoYXBlUHJldmlld09wdGlvbnMoKTogQ2FudmFzV2hpdGVib2FyZFNoYXBlT3B0aW9ucyB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IENhbnZhc1doaXRlYm9hcmRTaGFwZU9wdGlvbnMoKSxcbiAgICAgIHtcbiAgICAgICAgc2hvdWxkRmlsbFNoYXBlOiAhIXRoaXMuZmlsbENvbG9yLFxuICAgICAgICBmaWxsU3R5bGU6IHRoaXMuZmlsbENvbG9yLFxuICAgICAgICBzdHJva2VTdHlsZTogdGhpcy5zdHJva2VDb2xvcixcbiAgICAgICAgbGluZVdpZHRoOiAyLFxuICAgICAgICBsaW5lSm9pbjogdGhpcy5saW5lSm9pbixcbiAgICAgICAgbGluZUNhcDogdGhpcy5saW5lQ2FwXG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kcyB0aGUgdXBkYXRlIHRvIGFsbCByZWNlaXZpbmcgZW5kcyBhcyBhbiBFdmVudCBlbWl0LiBUaGlzIGlzIGRvbmUgYXMgYSBiYXRjaCBvcGVyYXRpb24gKG1lYW5pbmdcbiAgICogbXVsdGlwbGUgdXBkYXRlcyBhcmUgc2VudCBhdCB0aGUgc2FtZSB0aW1lKS4gSWYgdGhpcyBtZXRob2QgaXMgY2FsbGVkLCBhZnRlciAxMDAgbXMgYWxsIHVwZGF0ZXNcbiAgICogdGhhdCB3ZXJlIG1hZGUgYXQgdGhhdCB0aW1lIHdpbGwgYmUgcGFja2VkIHVwIHRvZ2V0aGVyIGFuZCBzZW50IHRvIHRoZSByZWNlaXZlci5cbiAgICpcbiAgICogQHBhcmFtIHVwZGF0ZSBUaGUgdXBkYXRlIG9iamVjdC5cbiAgICogQHJldHVybiBFbWl0cyBhbiBBcnJheSBvZiBVcGRhdGVzIHdoZW4gdGhlIGJhdGNoLlxuICAgKi9cbiAgcHJpdmF0ZSBfcHJlcGFyZVVwZGF0ZUZvckJhdGNoRGlzcGF0Y2godXBkYXRlOiBDYW52YXNXaGl0ZWJvYXJkVXBkYXRlKTogdm9pZCB7XG4gICAgdGhpcy5fYmF0Y2hVcGRhdGVzLnB1c2goY2xvbmVEZWVwKHVwZGF0ZSkpO1xuICAgIGlmICghdGhpcy5fdXBkYXRlVGltZW91dCkge1xuICAgICAgdGhpcy5fdXBkYXRlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLm9uQmF0Y2hVcGRhdGUuZW1pdCh0aGlzLl9iYXRjaFVwZGF0ZXMpO1xuICAgICAgICB0aGlzLl9iYXRjaFVwZGF0ZXMgPSBbXTtcbiAgICAgICAgdGhpcy5fdXBkYXRlVGltZW91dCA9IG51bGw7XG4gICAgICB9LCB0aGlzLmJhdGNoVXBkYXRlVGltZW91dER1cmF0aW9uKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRHJhd3MgYW4gQXJyYXkgb2YgVXBkYXRlcyBvbiB0aGUgY2FudmFzLlxuICAgKlxuICAgKiBAcGFyYW0gdXBkYXRlcyBUaGUgYXJyYXkgd2l0aCBVcGRhdGVzLlxuICAgKi9cbiAgZHJhd1VwZGF0ZXModXBkYXRlczogQ2FudmFzV2hpdGVib2FyZFVwZGF0ZVtdKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2NhbkRyYXcpIHtcbiAgICAgIHRoaXMuX2RyYXdNaXNzaW5nVXBkYXRlcygpO1xuICAgICAgdXBkYXRlcy5mb3JFYWNoKCh1cGRhdGU6IENhbnZhc1doaXRlYm9hcmRVcGRhdGUpID0+IHtcbiAgICAgICAgdGhpcy5fZHJhdyh1cGRhdGUpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3VwZGF0ZXNOb3REcmF3biA9IHRoaXMuX3VwZGF0ZXNOb3REcmF3bi5jb25jYXQodXBkYXRlcyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERyYXcgYW55IG1pc3NpbmcgdXBkYXRlcyB0aGF0IHdlcmUgcmVjZWl2ZWQgYmVmb3JlIHRoZSBpbWFnZSB3YXMgbG9hZGVkXG4gICAqL1xuICBwcml2YXRlIF9kcmF3TWlzc2luZ1VwZGF0ZXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3VwZGF0ZXNOb3REcmF3bi5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCB1cGRhdGVzVG9EcmF3ID0gdGhpcy5fdXBkYXRlc05vdERyYXduO1xuICAgICAgdGhpcy5fdXBkYXRlc05vdERyYXduID0gW107XG5cbiAgICAgIHVwZGF0ZXNUb0RyYXcuZm9yRWFjaCgodXBkYXRlOiBDYW52YXNXaGl0ZWJvYXJkVXBkYXRlKSA9PiB7XG4gICAgICAgIHRoaXMuX2RyYXcodXBkYXRlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEcmF3cyBhbiBpbWFnZSBvbiB0aGUgY2FudmFzXG4gICAqXG4gICAqIEBwYXJhbSBjb250ZXh0IFRoZSBjb250ZXh0IHVzZWQgdG8gZHJhdyB0aGUgaW1hZ2Ugb24gdGhlIGNhbnZhcy5cbiAgICogQHBhcmFtIGltYWdlIFRoZSBpbWFnZSB0byBkcmF3LlxuICAgKiBAcGFyYW0geCBUaGUgWCBjb29yZGluYXRlIGZvciB0aGUgc3RhcnRpbmcgZHJhdyBwb3NpdGlvbi5cbiAgICogQHBhcmFtIHkgVGhlIFkgY29vcmRpbmF0ZSBmb3IgdGhlIHN0YXJ0aW5nIGRyYXcgcG9zaXRpb24uXG4gICAqIEBwYXJhbSB3aWR0aCBUaGUgd2lkdGggb2YgdGhlIGltYWdlIHRoYXQgd2lsbCBiZSBkcmF3bi5cbiAgICogQHBhcmFtIGhlaWdodCBUaGUgaGVpZ2h0IG9mIHRoZSBpbWFnZSB0aGF0IHdpbGwgYmUgZHJhd24uXG4gICAqIEBwYXJhbSBvZmZzZXRYIFRoZSBvZmZzZXRYIGlmIHRoZSBpbWFnZSBzaXplIGlzIGxhcmdlciB0aGFuIHRoZSBjYW52YXMgKGFzcGVjdCBSYXRpbylcbiAgICogQHBhcmFtIG9mZnNldFkgVGhlIG9mZnNldFkgaWYgdGhlIGltYWdlIHNpemUgaXMgbGFyZ2VyIHRoYW4gdGhlIGNhbnZhcyAoYXNwZWN0IFJhdGlvKVxuICAgKi9cbiAgcHJpdmF0ZSBfZHJhd0ltYWdlKGNvbnRleHQ6IGFueSwgaW1hZ2U6IGFueSwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBvZmZzZXRYOiBudW1iZXIsIG9mZnNldFk6IG51bWJlcik6IHZvaWQge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XG4gICAgICB4ID0geSA9IDA7XG4gICAgICB3aWR0aCA9IGNvbnRleHQuY2FudmFzLndpZHRoO1xuICAgICAgaGVpZ2h0ID0gY29udGV4dC5jYW52YXMuaGVpZ2h0O1xuICAgIH1cblxuICAgIG9mZnNldFggPSB0eXBlb2Ygb2Zmc2V0WCA9PT0gJ251bWJlcicgPyBvZmZzZXRYIDogMC41O1xuICAgIG9mZnNldFkgPSB0eXBlb2Ygb2Zmc2V0WSA9PT0gJ251bWJlcicgPyBvZmZzZXRZIDogMC41O1xuXG4gICAgaWYgKG9mZnNldFggPCAwKSB7XG4gICAgICBvZmZzZXRYID0gMDtcbiAgICB9XG4gICAgaWYgKG9mZnNldFkgPCAwKSB7XG4gICAgICBvZmZzZXRZID0gMDtcbiAgICB9XG4gICAgaWYgKG9mZnNldFggPiAxKSB7XG4gICAgICBvZmZzZXRYID0gMTtcbiAgICB9XG4gICAgaWYgKG9mZnNldFkgPiAxKSB7XG4gICAgICBvZmZzZXRZID0gMTtcbiAgICB9XG5cbiAgICBjb25zdCBpbWFnZVdpZHRoID0gaW1hZ2Uud2lkdGg7XG4gICAgY29uc3QgaW1hZ2VIZWlnaHQgPSBpbWFnZS5oZWlnaHQ7XG4gICAgY29uc3QgcmFkaXVzID0gTWF0aC5taW4od2lkdGggLyBpbWFnZVdpZHRoLCBoZWlnaHQgLyBpbWFnZUhlaWdodCk7XG4gICAgbGV0IG5ld1dpZHRoID0gaW1hZ2VXaWR0aCAqIHJhZGl1cztcbiAgICBsZXQgbmV3SGVpZ2h0ID0gaW1hZ2VIZWlnaHQgKiByYWRpdXM7XG4gICAgbGV0IGZpbmFsRHJhd1g6IGFueTtcbiAgICBsZXQgZmluYWxEcmF3WTogYW55O1xuICAgIGxldCBmaW5hbERyYXdXaWR0aDogYW55O1xuICAgIGxldCBmaW5hbERyYXdIZWlnaHQ6IGFueTtcbiAgICBsZXQgYXNwZWN0UmF0aW8gPSAxO1xuXG4gICAgLy8gZGVjaWRlIHdoaWNoIGdhcCB0byBmaWxsXG4gICAgaWYgKG5ld1dpZHRoIDwgd2lkdGgpIHtcbiAgICAgIGFzcGVjdFJhdGlvID0gd2lkdGggLyBuZXdXaWR0aDtcbiAgICB9XG4gICAgaWYgKE1hdGguYWJzKGFzcGVjdFJhdGlvIC0gMSkgPCAxZS0xNCAmJiBuZXdIZWlnaHQgPCBoZWlnaHQpIHtcbiAgICAgIGFzcGVjdFJhdGlvID0gaGVpZ2h0IC8gbmV3SGVpZ2h0O1xuICAgIH1cbiAgICBuZXdXaWR0aCAqPSBhc3BlY3RSYXRpbztcbiAgICBuZXdIZWlnaHQgKj0gYXNwZWN0UmF0aW87XG5cbiAgICAvLyBjYWxjdWxhdGUgc291cmNlIHJlY3RhbmdsZVxuICAgIGZpbmFsRHJhd1dpZHRoID0gaW1hZ2VXaWR0aCAvIChuZXdXaWR0aCAvIHdpZHRoKTtcbiAgICBmaW5hbERyYXdIZWlnaHQgPSBpbWFnZUhlaWdodCAvIChuZXdIZWlnaHQgLyBoZWlnaHQpO1xuXG4gICAgZmluYWxEcmF3WCA9IChpbWFnZVdpZHRoIC0gZmluYWxEcmF3V2lkdGgpICogb2Zmc2V0WDtcbiAgICBmaW5hbERyYXdZID0gKGltYWdlSGVpZ2h0IC0gZmluYWxEcmF3SGVpZ2h0KSAqIG9mZnNldFk7XG5cbiAgICAvLyBtYWtlIHN1cmUgdGhlIHNvdXJjZSByZWN0YW5nbGUgaXMgdmFsaWRcbiAgICBpZiAoZmluYWxEcmF3WCA8IDApIHtcbiAgICAgIGZpbmFsRHJhd1ggPSAwO1xuICAgIH1cbiAgICBpZiAoZmluYWxEcmF3WSA8IDApIHtcbiAgICAgIGZpbmFsRHJhd1kgPSAwO1xuICAgIH1cbiAgICBpZiAoZmluYWxEcmF3V2lkdGggPiBpbWFnZVdpZHRoKSB7XG4gICAgICBmaW5hbERyYXdXaWR0aCA9IGltYWdlV2lkdGg7XG4gICAgfVxuICAgIGlmIChmaW5hbERyYXdIZWlnaHQgPiBpbWFnZUhlaWdodCkge1xuICAgICAgZmluYWxEcmF3SGVpZ2h0ID0gaW1hZ2VIZWlnaHQ7XG4gICAgfVxuXG4gICAgLy8gZmlsbCB0aGUgaW1hZ2UgaW4gZGVzdGluYXRpb24gcmVjdGFuZ2xlXG4gICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UsIGZpbmFsRHJhd1gsIGZpbmFsRHJhd1ksIGZpbmFsRHJhd1dpZHRoLCBmaW5hbERyYXdIZWlnaHQsIHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBIVE1MQ2FudmFzRWxlbWVudC50b0RhdGFVUkwoKSBtZXRob2QgcmV0dXJucyBhIGRhdGEgVVJJIGNvbnRhaW5pbmcgYSByZXByZXNlbnRhdGlvbiBvZiB0aGUgaW1hZ2UgaW4gdGhlIGZvcm1hdCBzcGVjaWZpZWQgYnkgdGhlIHR5cGUgcGFyYW1ldGVyIChkZWZhdWx0cyB0byBQTkcpLlxuICAgKiBUaGUgcmV0dXJuZWQgaW1hZ2UgaXMgaW4gYSByZXNvbHV0aW9uIG9mIDk2IGRwaS5cbiAgICogSWYgdGhlIGhlaWdodCBvciB3aWR0aCBvZiB0aGUgY2FudmFzIGlzIDAsIHRoZSBzdHJpbmcgXCJkYXRhOixcIiBpcyByZXR1cm5lZC5cbiAgICogSWYgdGhlIHJlcXVlc3RlZCB0eXBlIGlzIG5vdCBpbWFnZS9wbmcsIGJ1dCB0aGUgcmV0dXJuZWQgdmFsdWUgc3RhcnRzIHdpdGggZGF0YTppbWFnZS9wbmcsIHRoZW4gdGhlIHJlcXVlc3RlZCB0eXBlIGlzIG5vdCBzdXBwb3J0ZWQuXG4gICAqIENocm9tZSBhbHNvIHN1cHBvcnRzIHRoZSBpbWFnZS93ZWJwIHR5cGUuXG4gICAqXG4gICAqIEBwYXJhbSByZXR1cm5lZERhdGFUeXBlIEEgRE9NU3RyaW5nIGluZGljYXRpbmcgdGhlIGltYWdlIGZvcm1hdC4gVGhlIGRlZmF1bHQgZm9ybWF0IHR5cGUgaXMgaW1hZ2UvcG5nLlxuICAgKiBAcGFyYW0gcmV0dXJuZWREYXRhUXVhbGl0eSBBIE51bWJlciBiZXR3ZWVuIDAgYW5kIDEgaW5kaWNhdGluZyBpbWFnZSBxdWFsaXR5IGlmIHRoZSByZXF1ZXN0ZWQgdHlwZSBpcyBpbWFnZS9qcGVnIG9yIGltYWdlL3dlYnAuXG4gICBJZiB0aGlzIGFyZ3VtZW50IGlzIGFueXRoaW5nIGVsc2UsIHRoZSBkZWZhdWx0IHZhbHVlIGZvciBpbWFnZSBxdWFsaXR5IGlzIHVzZWQuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIDAuOTIuIE90aGVyIGFyZ3VtZW50cyBhcmUgaWdub3JlZC5cbiAgICovXG4gIGdlbmVyYXRlQ2FudmFzRGF0YVVybChyZXR1cm5lZERhdGFUeXBlOiBzdHJpbmcgPSAnaW1hZ2UvcG5nJywgcmV0dXJuZWREYXRhUXVhbGl0eTogbnVtYmVyID0gMSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dC5jYW52YXMudG9EYXRhVVJMKHJldHVybmVkRGF0YVR5cGUsIHJldHVybmVkRGF0YVF1YWxpdHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlIGEgQmxvYiBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSBjb250ZW50IGRyYXduIG9uIHRoZSBjYW52YXMuXG4gICAqIFRoaXMgZmlsZSBtYXkgYmUgY2FjaGVkIG9uIHRoZSBkaXNrIG9yIHN0b3JlZCBpbiBtZW1vcnkgYXQgdGhlIGRpc2NyZXRpb24gb2YgdGhlIHVzZXIgYWdlbnQuXG4gICAqIElmIHR5cGUgaXMgbm90IHNwZWNpZmllZCwgdGhlIGltYWdlIHR5cGUgaXMgaW1hZ2UvcG5nLiBUaGUgY3JlYXRlZCBpbWFnZSBpcyBpbiBhIHJlc29sdXRpb24gb2YgOTZkcGkuXG4gICAqIFRoZSB0aGlyZCBhcmd1bWVudCBpcyB1c2VkIHdpdGggaW1hZ2UvanBlZyBpbWFnZXMgdG8gc3BlY2lmeSB0aGUgcXVhbGl0eSBvZiB0aGUgb3V0cHV0LlxuICAgKlxuICAgKiBAcGFyYW0gY2FsbGJhY2tGbiBUaGUgZnVuY3Rpb24gdGhhdCBzaG91bGQgYmUgZXhlY3V0ZWQgd2hlbiB0aGUgYmxvYiBpcyBjcmVhdGVkLiBTaG91bGQgYWNjZXB0IGEgcGFyYW1ldGVyIEJsb2IgKGZvciB0aGUgcmVzdWx0KS5cbiAgICogQHBhcmFtIHJldHVybmVkRGF0YVR5cGUgQSBET01TdHJpbmcgaW5kaWNhdGluZyB0aGUgaW1hZ2UgZm9ybWF0LiBUaGUgZGVmYXVsdCB0eXBlIGlzIGltYWdlL3BuZy5cbiAgICogQHBhcmFtIHJldHVybmVkRGF0YVF1YWxpdHkgQSBOdW1iZXIgYmV0d2VlbiAwIGFuZCAxIGluZGljYXRpbmcgaW1hZ2UgcXVhbGl0eSBpZiB0aGUgcmVxdWVzdGVkIHR5cGUgaXMgaW1hZ2UvanBlZyBvciBpbWFnZS93ZWJwLlxuICAgSWYgdGhpcyBhcmd1bWVudCBpcyBhbnl0aGluZyBlbHNlLCB0aGUgZGVmYXVsdCB2YWx1ZSBmb3IgaW1hZ2UgcXVhbGl0eSBpcyB1c2VkLiBPdGhlciBhcmd1bWVudHMgYXJlIGlnbm9yZWQuXG4gICAqL1xuICBnZW5lcmF0ZUNhbnZhc0Jsb2IoY2FsbGJhY2tGbjogYW55LCByZXR1cm5lZERhdGFUeXBlOiBzdHJpbmcgPSAnaW1hZ2UvcG5nJywgcmV0dXJuZWREYXRhUXVhbGl0eTogbnVtYmVyID0gMSk6IHZvaWQge1xuICAgIGxldCB0b0Jsb2JNZXRob2Q6IEZ1bmN0aW9uO1xuXG4gICAgaWYgKHR5cGVvZiB0aGlzLmNvbnRleHQuY2FudmFzLnRvQmxvYiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRvQmxvYk1ldGhvZCA9IHRoaXMuY29udGV4dC5jYW52YXMudG9CbG9iLmJpbmQodGhpcy5jb250ZXh0LmNhbnZhcyk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgKHRoaXMuY29udGV4dC5jYW52YXMgYXMgYW55KS5tc1RvQmxvYiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIEZvciBJRVxuICAgICAgdG9CbG9iTWV0aG9kID0gKGNhbGxiYWNrKSA9PiB7XG4gICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKCh0aGlzLmNvbnRleHQuY2FudmFzIGFzIGFueSkubXNUb0Jsb2IoKSk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIHRvQmxvYk1ldGhvZCAmJiB0b0Jsb2JNZXRob2QoKGJsb2I6IEJsb2IpID0+IHtcbiAgICAgIGNhbGxiYWNrRm4gJiYgY2FsbGJhY2tGbihibG9iLCByZXR1cm5lZERhdGFUeXBlKTtcbiAgICB9LCByZXR1cm5lZERhdGFUeXBlLCByZXR1cm5lZERhdGFRdWFsaXR5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZSBhIGNhbnZhcyBpbWFnZSByZXByZXNlbnRhdGlvbiBhbmQgZG93bmxvYWQgaXQgbG9jYWxseVxuICAgKiBUaGUgbmFtZSBvZiB0aGUgaW1hZ2UgaXMgY2FudmFzX2RyYXdpbmdfICsgdGhlIGN1cnJlbnQgbG9jYWwgRGF0ZSBhbmQgVGltZSB0aGUgaW1hZ2Ugd2FzIGNyZWF0ZWRcbiAgICogTWV0aG9kcyBmb3Igc3RhbmRhbG9uZSBjcmVhdGlvbiBvZiB0aGUgaW1hZ2VzIGluIHRoaXMgbWV0aG9kIGFyZSBsZWZ0IGhlcmUgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG4gICAqXG4gICAqIEBwYXJhbSByZXR1cm5lZERhdGFUeXBlIEEgRE9NU3RyaW5nIGluZGljYXRpbmcgdGhlIGltYWdlIGZvcm1hdC4gVGhlIGRlZmF1bHQgdHlwZSBpcyBpbWFnZS9wbmcuXG4gICAqIEBwYXJhbSBkb3dubG9hZERhdGE/IFRoZSBjcmVhdGVkIHN0cmluZyBvciBCbG9iIChJRSkuXG4gICAqIEBwYXJhbSBjdXN0b21GaWxlTmFtZT8gVGhlIG5hbWUgb2YgdGhlIGZpbGUgdGhhdCBzaG91bGQgYmUgZG93bmxvYWRlZFxuICAgKi9cbiAgZG93bmxvYWRDYW52YXNJbWFnZShyZXR1cm5lZERhdGFUeXBlOiBzdHJpbmcgPSAnaW1hZ2UvcG5nJywgZG93bmxvYWREYXRhPzogc3RyaW5nIHwgQmxvYiwgY3VzdG9tRmlsZU5hbWU/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgaWYgKHdpbmRvdy5uYXZpZ2F0b3IubXNTYXZlT3JPcGVuQmxvYiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBkb3dubG9hZExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICBkb3dubG9hZExpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgZG93bmxvYWREYXRhID8gZG93bmxvYWREYXRhIGFzIHN0cmluZyA6IHRoaXMuZ2VuZXJhdGVDYW52YXNEYXRhVXJsKHJldHVybmVkRGF0YVR5cGUpKTtcblxuICAgICAgY29uc3QgZmlsZU5hbWUgPSBjdXN0b21GaWxlTmFtZSA/IGN1c3RvbUZpbGVOYW1lXG4gICAgICAgIDogKHRoaXMuZG93bmxvYWRlZEZpbGVOYW1lID8gdGhpcy5kb3dubG9hZGVkRmlsZU5hbWUgOiAnY2FudmFzX2RyYXdpbmdfJyArIG5ldyBEYXRlKCkudmFsdWVPZigpKTtcblxuICAgICAgZG93bmxvYWRMaW5rLnNldEF0dHJpYnV0ZSgnZG93bmxvYWQnLCBmaWxlTmFtZSArIHRoaXMuX2dlbmVyYXRlRGF0YVR5cGVTdHJpbmcocmV0dXJuZWREYXRhVHlwZSkpO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkb3dubG9hZExpbmspO1xuICAgICAgZG93bmxvYWRMaW5rLmNsaWNrKCk7XG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRvd25sb2FkTGluayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIElFLXNwZWNpZmljIGNvZGVcbiAgICAgIGlmIChkb3dubG9hZERhdGEpIHtcbiAgICAgICAgdGhpcy5fc2F2ZUNhbnZhc0Jsb2IoZG93bmxvYWREYXRhIGFzIEJsb2IsIHJldHVybmVkRGF0YVR5cGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUNhbnZhc0Jsb2IodGhpcy5fc2F2ZUNhbnZhc0Jsb2IuYmluZCh0aGlzKSwgcmV0dXJuZWREYXRhVHlwZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNhdmUgdGhlIGNhbnZhcyBibG9iIChJRSkgbG9jYWxseVxuICAgKiBAcGFyYW0gYmxvYlxuICAgKiBAcGFyYW0gcmV0dXJuZWREYXRhVHlwZVxuICAgKi9cbiAgcHJpdmF0ZSBfc2F2ZUNhbnZhc0Jsb2IoYmxvYjogQmxvYiwgcmV0dXJuZWREYXRhVHlwZTogc3RyaW5nID0gJ2ltYWdlL3BuZycpOiB2b2lkIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgd2luZG93Lm5hdmlnYXRvci5tc1NhdmVPck9wZW5CbG9iKGJsb2IsICdjYW52YXNfZHJhd2luZ18nICtcbiAgICAgIG5ldyBEYXRlKCkudmFsdWVPZigpICsgdGhpcy5fZ2VuZXJhdGVEYXRhVHlwZVN0cmluZyhyZXR1cm5lZERhdGFUeXBlKSk7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgZ2VuZXJhdGVzIGEgY2FudmFzIHVybCBzdHJpbmcgb3IgYSBjYW52YXMgYmxvYiB3aXRoIHRoZSBwcmVzZW50ZWQgZGF0YSB0eXBlXG4gICAqIEEgY2FsbGJhY2sgZnVuY3Rpb24gaXMgdGhlbiBpbnZva2VkIHNpbmNlIHRoZSBibG9iIGNyZWF0aW9uIG11c3QgYmUgZG9uZSB2aWEgYSBjYWxsYmFja1xuICAgKlxuICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICogQHBhcmFtIHJldHVybmVkRGF0YVR5cGVcbiAgICogQHBhcmFtIHJldHVybmVkRGF0YVF1YWxpdHlcbiAgICovXG4gIGdlbmVyYXRlQ2FudmFzRGF0YShjYWxsYmFjazogYW55LCByZXR1cm5lZERhdGFUeXBlOiBzdHJpbmcgPSAnaW1hZ2UvcG5nJywgcmV0dXJuZWREYXRhUXVhbGl0eTogbnVtYmVyID0gMSk6IHZvaWQge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBpZiAod2luZG93Lm5hdmlnYXRvci5tc1NhdmVPck9wZW5CbG9iID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKHRoaXMuZ2VuZXJhdGVDYW52YXNEYXRhVXJsKHJldHVybmVkRGF0YVR5cGUsIHJldHVybmVkRGF0YVF1YWxpdHkpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5nZW5lcmF0ZUNhbnZhc0Jsb2IoY2FsbGJhY2ssIHJldHVybmVkRGF0YVR5cGUsIHJldHVybmVkRGF0YVF1YWxpdHkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBMb2NhbCBtZXRob2QgdG8gaW52b2tlIHNhdmluZyBvZiB0aGUgY2FudmFzIGRhdGEgd2hlbiBjbGlja2VkIG9uIHRoZSBjYW52YXMgU2F2ZSBidXR0b25cbiAgICogVGhpcyBtZXRob2Qgd2lsbCBlbWl0IHRoZSBnZW5lcmF0ZWQgZGF0YSB3aXRoIHRoZSBzcGVjaWZpZWQgRXZlbnQgRW1pdHRlclxuICAgKlxuICAgKiBAcGFyYW0gcmV0dXJuZWREYXRhVHlwZVxuICAgKi9cbiAgc2F2ZUxvY2FsKHJldHVybmVkRGF0YVR5cGU6IHN0cmluZyA9ICdpbWFnZS9wbmcnKTogdm9pZCB7XG4gICAgdGhpcy5nZW5lcmF0ZUNhbnZhc0RhdGEoKGdlbmVyYXRlZERhdGE6IHN0cmluZyB8IEJsb2IpID0+IHtcbiAgICAgIHRoaXMub25TYXZlLmVtaXQoZ2VuZXJhdGVkRGF0YSk7XG5cbiAgICAgIGlmICh0aGlzLnNob3VsZERvd25sb2FkRHJhd2luZykge1xuICAgICAgICB0aGlzLmRvd25sb2FkQ2FudmFzSW1hZ2UocmV0dXJuZWREYXRhVHlwZSwgZ2VuZXJhdGVkRGF0YSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9nZW5lcmF0ZURhdGFUeXBlU3RyaW5nKHJldHVybmVkRGF0YVR5cGU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKHJldHVybmVkRGF0YVR5cGUpIHtcbiAgICAgIHJldHVybiAnLicgKyByZXR1cm5lZERhdGFUeXBlLnNwbGl0KCcvJylbMV07XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZXMgdGhlIGNvbG9yIHBpY2tlciB3aW5kb3csIGRlbGVnYXRpbmcgdGhlIHNob3dDb2xvclBpY2tlciBJbnB1dCB0byB0aGUgQ29sb3JQaWNrZXJDb21wb25lbnQuXG4gICAqIElmIG5vIHZhbHVlIGlzIHN1cHBsaWVkIChudWxsL3VuZGVmaW5lZCkgdGhlIGN1cnJlbnQgdmFsdWUgd2lsbCBiZSBuZWdhdGVkIGFuZCB1c2VkLlxuICAgKiBAcGFyYW0gdmFsdWVcbiAgICovXG4gIHRvZ2dsZVN0cm9rZUNvbG9yUGlja2VyKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5zaG93U3Ryb2tlQ29sb3JQaWNrZXIgPSAhdGhpcy5faXNOdWxsT3JVbmRlZmluZWQodmFsdWUpID8gdmFsdWUgOiAhdGhpcy5zaG93U3Ryb2tlQ29sb3JQaWNrZXI7XG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlcyB0aGUgY29sb3IgcGlja2VyIHdpbmRvdywgZGVsZWdhdGluZyB0aGUgc2hvd0NvbG9yUGlja2VyIElucHV0IHRvIHRoZSBDb2xvclBpY2tlckNvbXBvbmVudC5cbiAgICogSWYgbm8gdmFsdWUgaXMgc3VwcGxpZWQgKG51bGwvdW5kZWZpbmVkKSB0aGUgY3VycmVudCB2YWx1ZSB3aWxsIGJlIG5lZ2F0ZWQgYW5kIHVzZWQuXG4gICAqIEBwYXJhbSB2YWx1ZVxuICAgKi9cbiAgdG9nZ2xlRmlsbENvbG9yUGlja2VyKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5zaG93RmlsbENvbG9yUGlja2VyID0gIXRoaXMuX2lzTnVsbE9yVW5kZWZpbmVkKHZhbHVlKSA/IHZhbHVlIDogIXRoaXMuc2hvd0ZpbGxDb2xvclBpY2tlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGVzIHRoZSBzaGFwZSBzZWxlY3RvciB3aW5kb3csIGRlbGVnYXRpbmcgdGhlIHNob3dTaGFwZVNlbGVjdG9yIElucHV0IHRvIHRoZSBDYW52YXNXaGl0ZWJvYXJkU2hhcGVTZWxlY3RvckNvbXBvbmVudC5cbiAgICogSWYgbm8gdmFsdWUgaXMgc3VwcGxpZWQgKG51bGwvdW5kZWZpbmVkKSB0aGUgY3VycmVudCB2YWx1ZSB3aWxsIGJlIG5lZ2F0ZWQgYW5kIHVzZWQuXG4gICAqIEBwYXJhbSB2YWx1ZVxuICAgKi9cbiAgdG9nZ2xlU2hhcGVTZWxlY3Rvcih2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuc2hvd1NoYXBlU2VsZWN0b3IgPSAhdGhpcy5faXNOdWxsT3JVbmRlZmluZWQodmFsdWUpID8gdmFsdWUgOiAhdGhpcy5zaG93U2hhcGVTZWxlY3RvcjtcbiAgfVxuXG4gIHNlbGVjdFNoYXBlKG5ld1NoYXBlQmx1ZXByaW50OiBJTmV3Q2FudmFzV2hpdGVib2FyZFNoYXBlPENhbnZhc1doaXRlYm9hcmRTaGFwZT4pOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdGVkU2hhcGVDb25zdHJ1Y3RvciA9IG5ld1NoYXBlQmx1ZXByaW50O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBkZWVwIGNvcHkgb2YgdGhlIGN1cnJlbnQgZHJhd2luZyBoaXN0b3J5IGZvciB0aGUgY2FudmFzLlxuICAgKiBUaGUgZGVlcCBjb3B5IGlzIHJldHVybmVkIGJlY2F1c2Ugd2UgZG9uJ3Qgd2FudCBhbnlvbmUgdG8gbXV0YXRlIHRoZSBjdXJyZW50IGhpc3RvcnlcbiAgICovXG4gIGdldERyYXdpbmdIaXN0b3J5KCk6IENhbnZhc1doaXRlYm9hcmRVcGRhdGVbXSB7XG4gICAgcmV0dXJuIGNsb25lRGVlcCh0aGlzLl91cGRhdGVIaXN0b3J5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbnN1YnNjcmliZSBmcm9tIGEgZ2l2ZW4gc3Vic2NyaXB0aW9uIGlmIGl0IGlzIGFjdGl2ZVxuICAgKiBAcGFyYW0gc3Vic2NyaXB0aW9uXG4gICAqL1xuICBwcml2YXRlIF91bnN1YnNjcmliZShzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbik6IHZvaWQge1xuICAgIGlmIChzdWJzY3JpcHRpb24pIHtcbiAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2dlbmVyYXRlVVVJRCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9yYW5kb200KCkgKyB0aGlzLl9yYW5kb200KCkgKyAnLScgKyB0aGlzLl9yYW5kb200KCkgKyAnLScgKyB0aGlzLl9yYW5kb200KCkgKyAnLScgK1xuICAgICAgdGhpcy5fcmFuZG9tNCgpICsgJy0nICsgdGhpcy5fcmFuZG9tNCgpICsgdGhpcy5fcmFuZG9tNCgpICsgdGhpcy5fcmFuZG9tNCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmFuZG9tNCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBNYXRoLmZsb29yKCgxICsgTWF0aC5yYW5kb20oKSkgKiAweDEwMDAwKVxuICAgICAgLnRvU3RyaW5nKDE2KVxuICAgICAgLnN1YnN0cmluZygxKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbnN1YnNjcmliZSBmcm9tIHRoZSBzZXJ2aWNlIG9ic2VydmFibGVzXG4gICAqL1xuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl91bnN1YnNjcmliZSh0aGlzLl9yZXNpemVTdWJzY3JpcHRpb24pO1xuICAgIHRoaXMuX3Vuc3Vic2NyaWJlKHRoaXMuX3JlZ2lzdGVyZWRTaGFwZXNTdWJzY3JpcHRpb24pO1xuICAgIHRoaXMuX2NhbnZhc1doaXRlYm9hcmRTZXJ2aWNlU3Vic2NyaXB0aW9ucy5mb3JFYWNoKHN1YnNjcmlwdGlvbiA9PiB0aGlzLl91bnN1YnNjcmliZShzdWJzY3JpcHRpb24pKTtcbiAgfVxufVxuIl19