import { Component, Output, EventEmitter, ViewChild, Input } from '@angular/core';
import * as i0 from "@angular/core";
const _c0 = ["canvaswhiteboardcolorpicker"];
export class CanvasWhiteboardColorPickerComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.selectedColor = 'rgba(0,0,0,1)';
        this.showColorPicker = false;
        this.onToggleColorPicker = new EventEmitter();
        this.onColorSelected = new EventEmitter();
        this.onSecondaryColorSelected = new EventEmitter();
    }
    /**
     * Initialize the canvas drawing context. If we have an aspect ratio set up, the canvas will resize
     * according to the aspect ratio.
     */
    ngOnInit() {
        this._context = this.canvas.nativeElement.getContext('2d');
        this.createColorPalette();
    }
    createColorPalette() {
        let gradient = this._context.createLinearGradient(0, 0, this._context.canvas.width, 0);
        gradient.addColorStop(0, 'rgb(255, 0, 0)');
        gradient.addColorStop(0.15, 'rgb(255, 0, 255)');
        gradient.addColorStop(0.33, 'rgb(0, 0, 255)');
        gradient.addColorStop(0.49, 'rgb(0, 255, 255)');
        gradient.addColorStop(0.67, 'rgb(0, 255, 0)');
        gradient.addColorStop(0.84, 'rgb(255, 255, 0)');
        gradient.addColorStop(1, 'rgb(255, 0, 0)');
        this._context.fillStyle = gradient;
        this._context.fillRect(0, 0, this._context.canvas.width, this._context.canvas.height);
        gradient = this._context.createLinearGradient(0, 0, 0, this._context.canvas.height);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0)');
        gradient.addColorStop(0.5, 'rgba(0, 0, 0, 0)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 1)');
        this._context.fillStyle = gradient;
        this._context.fillRect(0, 0, this._context.canvas.width, this._context.canvas.height);
    }
    closeOnExternalClick(event) {
        if (!this.elementRef.nativeElement.contains(event.target) && this.showColorPicker) {
            this.onToggleColorPicker.emit(false);
        }
    }
    toggleColorPicker(event) {
        if (event) {
            event.preventDefault();
        }
        this.onToggleColorPicker.emit(!this.showColorPicker);
    }
    determineColorFromCanvas(event) {
        const canvasRect = this._context.canvas.getBoundingClientRect();
        const imageData = this._context.getImageData(event.clientX - canvasRect.left, event.clientY - canvasRect.top, 1, 1);
        return `rgba(${imageData.data[0]}, ${imageData.data[1]}, ${imageData.data[2]}, ${imageData.data[3]})`;
    }
    selectColor(color) {
        this.onColorSelected.emit(color);
        this.toggleColorPicker(null);
    }
    static { this.ɵfac = function CanvasWhiteboardColorPickerComponent_Factory(t) { return new (t || CanvasWhiteboardColorPickerComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CanvasWhiteboardColorPickerComponent, selectors: [["canvas-whiteboard-colorpicker"]], viewQuery: function CanvasWhiteboardColorPickerComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.canvas = _t.first);
        } }, hostBindings: function CanvasWhiteboardColorPickerComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("mousedown", function CanvasWhiteboardColorPickerComponent_mousedown_HostBindingHandler($event) { return ctx.closeOnExternalClick($event); }, false, i0.ɵɵresolveDocument)("touchstart", function CanvasWhiteboardColorPickerComponent_touchstart_HostBindingHandler($event) { return ctx.closeOnExternalClick($event); }, false, i0.ɵɵresolveDocument);
        } }, inputs: { previewText: "previewText", selectedColor: "selectedColor", showColorPicker: "showColorPicker" }, outputs: { onToggleColorPicker: "onToggleColorPicker", onColorSelected: "onColorSelected", onSecondaryColorSelected: "onSecondaryColorSelected" }, decls: 9, vars: 5, consts: [[1, "canvas-whiteboard-colorpicker-input", 3, "hidden", "click"], [1, "selected-color-type-wrapper"], [1, "selected-color-preview"], [1, "canvas-whiteboard-colorpicker-wrapper", 3, "hidden"], [1, "transparent-color", 3, "click"], ["width", "284", "height", "155", 1, "canvas-whiteboard-colorpicker", 3, "click"], ["canvaswhiteboardcolorpicker", ""]], template: function CanvasWhiteboardColorPickerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵlistener("click", function CanvasWhiteboardColorPickerComponent_Template_div_click_0_listener($event) { return ctx.toggleColorPicker($event); });
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(3, "div", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "div", 3)(5, "div", 4);
            i0.ɵɵlistener("click", function CanvasWhiteboardColorPickerComponent_Template_div_click_5_listener() { return ctx.selectColor("transparent"); });
            i0.ɵɵtext(6, "Transparent");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "canvas", 5, 6);
            i0.ɵɵlistener("click", function CanvasWhiteboardColorPickerComponent_Template_canvas_click_7_listener($event) { return ctx.selectColor(ctx.determineColorFromCanvas($event)); });
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵproperty("hidden", ctx.showColorPicker);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.previewText);
            i0.ɵɵadvance(1);
            i0.ɵɵstyleProp("background", ctx.selectedColor);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("hidden", !ctx.showColorPicker);
        } }, styles: [".selected-color-preview[_ngcontent-%COMP%]{width:100%;height:20%;position:absolute;bottom:0;left:0}.selected-color-type-wrapper[_ngcontent-%COMP%]{display:inline-block;height:100%;width:100%;text-align:center;font-size:14px;color:#000}.transparent-color[_ngcontent-%COMP%]{font-size:14px}.canvas-whiteboard-colorpicker-wrapper[_ngcontent-%COMP%]{border:1px solid #afafaf;color:#000}@media (min-width: 401px){.canvas-whiteboard-colorpicker-wrapper[_ngcontent-%COMP%]{position:absolute}}.canvas-whiteboard-colorpicker-input[_ngcontent-%COMP%]{display:inline-block;position:relative;width:44px;height:44px;margin:5px;cursor:pointer;color:#000}"] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CanvasWhiteboardColorPickerComponent, [{
        type: Component,
        args: [{ selector: 'canvas-whiteboard-colorpicker', host: {
                    '(document:mousedown)': 'closeOnExternalClick($event)',
                    '(document:touchstart)': 'closeOnExternalClick($event)'
                }, template: `
    <div [hidden]="showColorPicker" class="canvas-whiteboard-colorpicker-input"
         (click)="toggleColorPicker($event)">
      <div class="selected-color-type-wrapper">{{previewText}}</div>
      <div class="selected-color-preview" [style.background]="selectedColor"></div>
    </div>
    <div [hidden]="!showColorPicker" class="canvas-whiteboard-colorpicker-wrapper">
      <div (click)="selectColor('transparent')" class="transparent-color">Transparent</div>
      <canvas #canvaswhiteboardcolorpicker class="canvas-whiteboard-colorpicker" width="284" height="155"
              (click)="selectColor(determineColorFromCanvas($event))"></canvas>
    </div>
  `, styles: [".selected-color-preview{width:100%;height:20%;position:absolute;bottom:0;left:0}.selected-color-type-wrapper{display:inline-block;height:100%;width:100%;text-align:center;font-size:14px;color:#000}.transparent-color{font-size:14px}.canvas-whiteboard-colorpicker-wrapper{border:1px solid #afafaf;color:#000}@media (min-width: 401px){.canvas-whiteboard-colorpicker-wrapper{position:absolute}}.canvas-whiteboard-colorpicker-input{display:inline-block;position:relative;width:44px;height:44px;margin:5px;cursor:pointer;color:#000}\n"] }]
    }], function () { return [{ type: i0.ElementRef }]; }, { previewText: [{
            type: Input
        }], selectedColor: [{
            type: Input
        }], canvas: [{
            type: ViewChild,
            args: ['canvaswhiteboardcolorpicker', { static: true }]
        }], showColorPicker: [{
            type: Input
        }], onToggleColorPicker: [{
            type: Output
        }], onColorSelected: [{
            type: Output
        }], onSecondaryColorSelected: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FudmFzLXdoaXRlYm9hcmQtY29sb3JwaWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmcyLWNhbnZhcy13aGl0ZWJvYXJkL3NyYy9saWIvY2FudmFzLXdoaXRlYm9hcmQtY29sb3JwaWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsTUFBTSxFQUNOLFlBQVksRUFBVSxTQUFTLEVBQWMsS0FBSyxFQUNuRCxNQUFNLGVBQWUsQ0FBQzs7O0FBZ0V2QixNQUFNLE9BQU8sb0NBQW9DO0lBYS9DLFlBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFWeEIsa0JBQWEsR0FBVyxlQUFlLENBQUM7UUFHeEMsb0JBQWUsR0FBWSxLQUFLLENBQUM7UUFHekMsd0JBQW1CLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUNsRCxvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDN0MsNkJBQXdCLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztJQUdoRSxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxrQkFBa0I7UUFDaEIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN2RixRQUFRLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzNDLFFBQVEsQ0FBQyxZQUFZ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LEtBQWE7UUFDdkIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9CLENBQUM7cUdBdkVVLG9DQUFvQztvRUFBcEMsb0NBQW9DOzs7Ozs7bUlBQXBDLGdDQUE0Qiw2SUFBNUIsZ0NBQTRCOztZQXZEckMsOEJBQ3lDO1lBQXBDLG9IQUFTLDZCQUF5QixJQUFDO1lBQ3RDLDhCQUF5QztZQUFBLFlBQWU7WUFBQSxpQkFBTTtZQUM5RCx5QkFBNkU7WUFDL0UsaUJBQU07WUFDTiw4QkFBK0UsYUFBQTtZQUN4RSw4R0FBUyxnQkFBWSxhQUFhLENBQUMsSUFBQztZQUEyQiwyQkFBVztZQUFBLGlCQUFNO1lBQ3JGLG9DQUNnRTtZQUF4RCx1SEFBUyxnQkFBWSxvQ0FBZ0MsQ0FBQyxJQUFDO1lBQUMsaUJBQVMsRUFBQTs7WUFSdEUsNENBQTBCO1lBRVksZUFBZTtZQUFmLHFDQUFlO1lBQ3BCLGVBQWtDO1lBQWxDLCtDQUFrQztZQUVuRSxlQUEyQjtZQUEzQiw2Q0FBMkI7Ozt1RkFrRHZCLG9DQUFvQztjQTlEaEQsU0FBUzsyQkFDRSwrQkFBK0IsUUFDbkM7b0JBQ0osc0JBQXNCLEVBQUUsOEJBQThCO29CQUN0RCx1QkFBdUIsRUFBRSw4QkFBOEI7aUJBQ3hELFlBQ1M7Ozs7Ozs7Ozs7O0dBV1Q7NkRBK0NRLFdBQVc7a0JBQW5CLEtBQUs7WUFDWSxhQUFhO2tCQUE5QixLQUFLO1lBQ29ELE1BQU07a0JBQS9ELFNBQVM7bUJBQUMsNkJBQTZCLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDO1lBRXRDLGVBQWU7a0JBQWhDLEtBQUs7WUFHSSxtQkFBbUI7a0JBQTVCLE1BQU07WUFDRyxlQUFlO2tCQUF4QixNQUFNO1lBQ0csd0JBQXdCO2tCQUFqQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlciwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIElucHV0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjYW52YXMtd2hpdGVib2FyZC1jb2xvcnBpY2tlcicsXG4gIGhvc3Q6IHtcbiAgICAnKGRvY3VtZW50Om1vdXNlZG93biknOiAnY2xvc2VPbkV4dGVybmFsQ2xpY2soJGV2ZW50KScsXG4gICAgJyhkb2N1bWVudDp0b3VjaHN0YXJ0KSc6ICdjbG9zZU9uRXh0ZXJuYWxDbGljaygkZXZlbnQpJ1xuICB9LFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgW2hpZGRlbl09XCJzaG93Q29sb3JQaWNrZXJcIiBjbGFzcz1cImNhbnZhcy13aGl0ZWJvYXJkLWNvbG9ycGlja2VyLWlucHV0XCJcbiAgICAgICAgIChjbGljayk9XCJ0b2dnbGVDb2xvclBpY2tlcigkZXZlbnQpXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwic2VsZWN0ZWQtY29sb3ItdHlwZS13cmFwcGVyXCI+e3twcmV2aWV3VGV4dH19PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwic2VsZWN0ZWQtY29sb3ItcHJldmlld1wiIFtzdHlsZS5iYWNrZ3JvdW5kXT1cInNlbGVjdGVkQ29sb3JcIj48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IFtoaWRkZW5dPVwiIXNob3dDb2xvclBpY2tlclwiIGNsYXNzPVwiY2FudmFzLXdoaXRlYm9hcmQtY29sb3JwaWNrZXItd3JhcHBlclwiPlxuICAgICAgPGRpdiAoY2xpY2spPVwic2VsZWN0Q29sb3IoJ3RyYW5zcGFyZW50JylcIiBjbGFzcz1cInRyYW5zcGFyZW50LWNvbG9yXCI+VHJhbnNwYXJlbnQ8L2Rpdj5cbiAgICAgIDxjYW52YXMgI2NhbnZhc3doaXRlYm9hcmRjb2xvcnBpY2tlciBjbGFzcz1cImNhbnZhcy13aGl0ZWJvYXJkLWNvbG9ycGlja2VyXCIgd2lkdGg9XCIyODRcIiBoZWlnaHQ9XCIxNTVcIlxuICAgICAgICAgICAgICAoY2xpY2spPVwic2VsZWN0Q29sb3IoZGV0ZXJtaW5lQ29sb3JGcm9tQ2FudmFzKCRldmVudCkpXCI+PC9jYW52YXM+XG4gICAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlczogW2BcbiAgICAuc2VsZWN0ZWQtY29sb3ItcHJldmlldyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMjAlO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICB9XG5cbiAgICAuc2VsZWN0ZWQtY29sb3ItdHlwZS13cmFwcGVyIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgY29sb3I6ICMwMDA7XG4gICAgfVxuXG4gICAgLnRyYW5zcGFyZW50LWNvbG9yIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG5cbiAgICAuY2FudmFzLXdoaXRlYm9hcmQtY29sb3JwaWNrZXItd3JhcHBlciB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjYWZhZmFmO1xuICAgICAgY29sb3I6ICMwMDA7XG4gICAgfVxuXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDQwMXB4KSB7XG4gICAgICAuY2FudmFzLXdoaXRlYm9hcmQtY29sb3JwaWNrZXItd3JhcHBlciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY2FudmFzLXdoaXRlYm9hcmQtY29sb3JwaWNrZXItaW5wdXQge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgd2lkdGg6IDQ0cHg7XG4gICAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgICBtYXJnaW46IDVweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGNvbG9yOiAjMDAwO1xuICAgIH1cbiAgYF1cbn0pXG5leHBvcnQgY2xhc3MgQ2FudmFzV2hpdGVib2FyZENvbG9yUGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBwcmV2aWV3VGV4dDogc3RyaW5nO1xuICBASW5wdXQoKSByZWFkb25seSBzZWxlY3RlZENvbG9yOiBzdHJpbmcgPSAncmdiYSgwLDAsMCwxKSc7XG4gIEBWaWV3Q2hpbGQoJ2NhbnZhc3doaXRlYm9hcmRjb2xvcnBpY2tlcicsIHtzdGF0aWM6IHRydWV9KSBjYW52YXM6IEVsZW1lbnRSZWY7XG5cbiAgQElucHV0KCkgcmVhZG9ubHkgc2hvd0NvbG9yUGlja2VyOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2NvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcblxuICBAT3V0cHV0KCkgb25Ub2dnbGVDb2xvclBpY2tlciA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgQE91dHB1dCgpIG9uQ29sb3JTZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBAT3V0cHV0KCkgb25TZWNvbmRhcnlDb2xvclNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSB0aGUgY2FudmFzIGRyYXdpbmcgY29udGV4dC4gSWYgd2UgaGF2ZSBhbiBhc3BlY3QgcmF0aW8gc2V0IHVwLCB0aGUgY2FudmFzIHdpbGwgcmVzaXplXG4gICAqIGFjY29yZGluZyB0byB0aGUgYXNwZWN0IHJhdGlvLlxuICAgKi9cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fY29udGV4dCA9IHRoaXMuY2FudmFzLm5hdGl2ZUVsZW1lbnQuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICB0aGlzLmNyZWF0ZUNvbG9yUGFsZXR0ZSgpO1xuICB9XG5cbiAgY3JlYXRlQ29sb3JQYWxldHRlKCk6IHZvaWQge1xuICAgIGxldCBncmFkaWVudCA9IHRoaXMuX2NvbnRleHQuY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgMCwgdGhpcy5fY29udGV4dC5jYW52YXMud2lkdGgsIDApO1xuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLCAncmdiKDI1NSwgMCwgMCknKTtcbiAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMC4xNSwgJ3JnYigyNTUsIDAsIDI1NSknKTtcbiAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMC4zMywgJ3JnYigwLCAwLCAyNTUpJyk7XG4gICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDAuNDksICdyZ2IoMCwgMjU1LCAyNTUpJyk7XG4gICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDAuNjcsICdyZ2IoMCwgMjU1LCAwKScpO1xuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLjg0LCAncmdiKDI1NSwgMjU1LCAwKScpO1xuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgxLCAncmdiKDI1NSwgMCwgMCknKTtcbiAgICB0aGlzLl9jb250ZXh0LmZpbGxTdHlsZSA9IGdyYWRpZW50O1xuICAgIHRoaXMuX2NvbnRleHQuZmlsbFJlY3QoMCwgMCwgdGhpcy5fY29udGV4dC5jYW52YXMud2lkdGgsIHRoaXMuX2NvbnRleHQuY2FudmFzLmhlaWdodCk7XG5cbiAgICBncmFkaWVudCA9IHRoaXMuX2NvbnRleHQuY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgMCwgMCwgdGhpcy5fY29udGV4dC5jYW52YXMuaGVpZ2h0KTtcbiAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMCwgJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMSknKTtcbiAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMC41LCAncmdiYSgyNTUsIDI1NSwgMjU1LCAwKScpO1xuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLjUsICdyZ2JhKDAsIDAsIDAsIDApJyk7XG4gICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDAsIDAsIDAsIDEpJyk7XG4gICAgdGhpcy5fY29udGV4dC5maWxsU3R5bGUgPSBncmFkaWVudDtcbiAgICB0aGlzLl9jb250ZXh0LmZpbGxSZWN0KDAsIDAsIHRoaXMuX2NvbnRleHQuY2FudmFzLndpZHRoLCB0aGlzLl9jb250ZXh0LmNhbnZhcy5oZWlnaHQpO1xuICB9XG5cbiAgY2xvc2VPbkV4dGVybmFsQ2xpY2soZXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgJiYgdGhpcy5zaG93Q29sb3JQaWNrZXIpIHtcbiAgICAgIHRoaXMub25Ub2dnbGVDb2xvclBpY2tlci5lbWl0KGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVDb2xvclBpY2tlcihldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgdGhpcy5vblRvZ2dsZUNvbG9yUGlja2VyLmVtaXQoIXRoaXMuc2hvd0NvbG9yUGlja2VyKTtcbiAgfVxuXG4gIGRldGVybWluZUNvbG9yRnJvbUNhbnZhcyhldmVudDogYW55KTogc3RyaW5nIHtcbiAgICBjb25zdCBjYW52YXNSZWN0ID0gdGhpcy5fY29udGV4dC5jYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgaW1hZ2VEYXRhID0gdGhpcy5fY29udGV4dC5nZXRJbWFnZURhdGEoZXZlbnQuY2xpZW50WCAtIGNhbnZhc1JlY3QubGVmdCxcbiAgICAgIGV2ZW50LmNsaWVudFkgLSBjYW52YXNSZWN0LnRvcCwgMSwgMSk7XG5cbiAgICByZXR1cm4gYHJnYmEoJHtpbWFnZURhdGEuZGF0YVswXX0sICR7aW1hZ2VEYXRhLmRhdGFbMV19LCAke2ltYWdlRGF0YS5kYXRhWzJdfSwgJHtpbWFnZURhdGEuZGF0YVszXX0pYDtcbiAgfVxuXG4gIHNlbGVjdENvbG9yKGNvbG9yOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ29sb3JTZWxlY3RlZC5lbWl0KGNvbG9yKTtcbiAgICB0aGlzLnRvZ2dsZUNvbG9yUGlja2VyKG51bGwpO1xuICB9XG59XG4iXX0=