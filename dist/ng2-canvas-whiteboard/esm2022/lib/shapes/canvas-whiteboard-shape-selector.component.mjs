import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./canvas-whiteboard-shape.service";
import * as i2 from "@angular/common";
import * as i3 from "./canvas-whiteboard-shape-preview.component";
function CanvasWhiteboardShapeSelectorComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵlistener("click", function CanvasWhiteboardShapeSelectorComponent_div_0_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.toggleShapeSelector($event)); });
    i0.ɵɵelement(1, "canvas-whiteboard-shape-preview", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("shapeConstructor", ctx_r0.selectedShapeConstructor)("shapeOptions", ctx_r0.shapeOptions);
} }
function CanvasWhiteboardShapeSelectorComponent_div_1_canvas_whiteboard_shape_preview_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "canvas-whiteboard-shape-preview", 6);
    i0.ɵɵlistener("click", function CanvasWhiteboardShapeSelectorComponent_div_1_canvas_whiteboard_shape_preview_1_Template_canvas_whiteboard_shape_preview_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r7); const shapeConstructor_r5 = restoredCtx.$implicit; const ctx_r6 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r6.selectShape(shapeConstructor_r5)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const shapeConstructor_r5 = ctx.$implicit;
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("shapeConstructor", shapeConstructor_r5)("shapeOptions", ctx_r4.shapeOptions);
} }
function CanvasWhiteboardShapeSelectorComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵtemplate(1, CanvasWhiteboardShapeSelectorComponent_div_1_canvas_whiteboard_shape_preview_1_Template, 1, 2, "canvas-whiteboard-shape-preview", 5);
    i0.ɵɵpipe(2, "async");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(2, 1, ctx_r1.registeredShapes$));
} }
export class CanvasWhiteboardShapeSelectorComponent {
    constructor(elementRef, canvasWhiteboardShapeService) {
        this.elementRef = elementRef;
        this.canvasWhiteboardShapeService = canvasWhiteboardShapeService;
        this.showShapeSelector = false;
        this.onToggleShapeSelector = new EventEmitter();
        this.onShapeSelected = new EventEmitter();
        this.registeredShapes$ = this.canvasWhiteboardShapeService.registeredShapes$;
    }
    selectShape(shape) {
        this.onShapeSelected.emit(shape);
        this.toggleShapeSelector(null);
    }
    closeOnExternalClick(event) {
        if (!this.elementRef.nativeElement.contains(event.target) && this.showShapeSelector) {
            this.onToggleShapeSelector.emit(false);
        }
    }
    toggleShapeSelector(event) {
        if (event) {
            event.preventDefault();
        }
        this.onToggleShapeSelector.emit(!this.showShapeSelector);
    }
    static { this.ɵfac = function CanvasWhiteboardShapeSelectorComponent_Factory(t) { return new (t || CanvasWhiteboardShapeSelectorComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.CanvasWhiteboardShapeService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CanvasWhiteboardShapeSelectorComponent, selectors: [["canvas-whiteboard-shape-selector"]], hostBindings: function CanvasWhiteboardShapeSelectorComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("mousedown", function CanvasWhiteboardShapeSelectorComponent_mousedown_HostBindingHandler($event) { return ctx.closeOnExternalClick($event); }, false, i0.ɵɵresolveDocument)("touchstart", function CanvasWhiteboardShapeSelectorComponent_touchstart_HostBindingHandler($event) { return ctx.closeOnExternalClick($event); }, false, i0.ɵɵresolveDocument);
        } }, inputs: { showShapeSelector: "showShapeSelector", selectedShapeConstructor: "selectedShapeConstructor", shapeOptions: "shapeOptions" }, outputs: { onToggleShapeSelector: "onToggleShapeSelector", onShapeSelected: "onShapeSelected" }, decls: 2, vars: 2, consts: [["class", "canvas-whiteboard-shape-selector-selected-preview", 3, "click", 4, "ngIf"], ["class", "canvas-whiteboard-shape-selector-wrapper", 4, "ngIf"], [1, "canvas-whiteboard-shape-selector-selected-preview", 3, "click"], [3, "shapeConstructor", "shapeOptions"], [1, "canvas-whiteboard-shape-selector-wrapper"], [3, "shapeConstructor", "shapeOptions", "click", 4, "ngFor", "ngForOf"], [3, "shapeConstructor", "shapeOptions", "click"]], template: function CanvasWhiteboardShapeSelectorComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CanvasWhiteboardShapeSelectorComponent_div_0_Template, 2, 2, "div", 0);
            i0.ɵɵtemplate(1, CanvasWhiteboardShapeSelectorComponent_div_1_Template, 3, 3, "div", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", !ctx.showShapeSelector);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.showShapeSelector);
        } }, dependencies: [i2.NgForOf, i2.NgIf, i3.CanvasWhiteboardShapePreviewComponent, i2.AsyncPipe], styles: [".canvas-whiteboard-shape-selector-selected-preview[_ngcontent-%COMP%]{vertical-align:bottom;display:inline-block}.canvas-whiteboard-shape-selector-wrapper[_ngcontent-%COMP%]{display:block;padding:4px;border:1px solid #afafaf}"] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CanvasWhiteboardShapeSelectorComponent, [{
        type: Component,
        args: [{ selector: 'canvas-whiteboard-shape-selector', host: {
                    '(document:mousedown)': 'closeOnExternalClick($event)',
                    '(document:touchstart)': 'closeOnExternalClick($event)'
                }, template: `
    <div *ngIf="!showShapeSelector" (click)="toggleShapeSelector($event)"
         class="canvas-whiteboard-shape-selector-selected-preview">
      <canvas-whiteboard-shape-preview [shapeConstructor]="selectedShapeConstructor"
                                       [shapeOptions]="shapeOptions"></canvas-whiteboard-shape-preview>
    </div>
    <div class="canvas-whiteboard-shape-selector-wrapper" *ngIf="showShapeSelector">
      <canvas-whiteboard-shape-preview *ngFor="let shapeConstructor of registeredShapes$ | async"
                                       [shapeConstructor]="shapeConstructor"
                                       [shapeOptions]="shapeOptions"
                                       (click)="selectShape(shapeConstructor)"></canvas-whiteboard-shape-preview>
    </div>
  `, styles: [".canvas-whiteboard-shape-selector-selected-preview{vertical-align:bottom;display:inline-block}.canvas-whiteboard-shape-selector-wrapper{display:block;padding:4px;border:1px solid #afafaf}\n"] }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.CanvasWhiteboardShapeService }]; }, { showShapeSelector: [{
            type: Input
        }], selectedShapeConstructor: [{
            type: Input
        }], shapeOptions: [{
            type: Input
        }], onToggleShapeSelector: [{
            type: Output
        }], onShapeSelected: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FudmFzLXdoaXRlYm9hcmQtc2hhcGUtc2VsZWN0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmcyLWNhbnZhcy13aGl0ZWJvYXJkL3NyYy9saWIvc2hhcGVzL2NhbnZhcy13aGl0ZWJvYXJkLXNoYXBlLXNlbGVjdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNQLE1BQU0sZUFBZSxDQUFDOzs7Ozs7O0lBYW5CLDhCQUMrRDtJQUQvQixzTEFBUyxlQUFBLGtDQUEyQixDQUFBLElBQUM7SUFFbkUscURBQ2lHO0lBQ25HLGlCQUFNOzs7SUFGNkIsZUFBNkM7SUFBN0Msa0VBQTZDLHFDQUFBOzs7O0lBSTlFLDBEQUd5RTtJQUF4QyxzVEFBUyxlQUFBLHVDQUE2QixDQUFBLElBQUM7SUFBQyxpQkFBa0M7Ozs7SUFGMUUsc0RBQXFDLHFDQUFBOzs7SUFGeEUsOEJBQWdGO0lBQzlFLHFKQUcyRzs7SUFDN0csaUJBQU07OztJQUowRCxlQUE0QjtJQUE1Qix3RUFBNEI7O0FBd0JoRyxNQUFNLE9BQU8sc0NBQXNDO0lBVWpELFlBQW9CLFVBQXNCLEVBQ3RCLDRCQUEwRDtRQUQxRCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGlDQUE0QixHQUE1Qiw0QkFBNEIsQ0FBOEI7UUFWNUQsc0JBQWlCLEdBQVksS0FBSyxDQUFDO1FBSTNDLDBCQUFxQixHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFDcEQsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBb0QsQ0FBQztRQU0vRixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLDRCQUE0QixDQUFDLGlCQUFpQixDQUFDO0lBQy9FLENBQUM7SUFFRCxXQUFXLENBQUMsS0FBdUQ7UUFDakUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxvQkFBb0IsQ0FBQyxLQUFLO1FBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUNuRixJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3hDO0lBQ0gsQ0FBQztJQUVELG1CQUFtQixDQUFDLEtBQVk7UUFDOUIsSUFBSSxLQUFLLEVBQUU7WUFDVCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDeEI7UUFFRCxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDM0QsQ0FBQzt1R0FoQ1Usc0NBQXNDO29FQUF0QyxzQ0FBc0M7cUlBQXRDLGdDQUE0QiwrSUFBNUIsZ0NBQTRCOztZQTlCckMsdUZBSU07WUFDTix1RkFLTTs7WUFWQSw2Q0FBd0I7WUFLeUIsZUFBdUI7WUFBdkIsNENBQXVCOzs7dUZBeUJyRSxzQ0FBc0M7Y0FyQ2xELFNBQVM7MkJBQ0Usa0NBQWtDLFFBQ3RDO29CQUNKLHNCQUFzQixFQUFFLDhCQUE4QjtvQkFDdEQsdUJBQXVCLEVBQUUsOEJBQThCO2lCQUN4RCxZQUNTOzs7Ozs7Ozs7Ozs7R0FZVDt3R0FvQmlCLGlCQUFpQjtrQkFBbEMsS0FBSztZQUNZLHdCQUF3QjtrQkFBekMsS0FBSztZQUNZLFlBQVk7a0JBQTdCLEtBQUs7WUFFSSxxQkFBcUI7a0JBQTlCLE1BQU07WUFDRyxlQUFlO2tCQUF4QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPdXRwdXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYW52YXNXaGl0ZWJvYXJkU2hhcGVTZXJ2aWNlLCBJTmV3Q2FudmFzV2hpdGVib2FyZFNoYXBlIH0gZnJvbSAnLi9jYW52YXMtd2hpdGVib2FyZC1zaGFwZS5zZXJ2aWNlJztcbmltcG9ydCB7IENhbnZhc1doaXRlYm9hcmRTaGFwZSB9IGZyb20gJy4vY2FudmFzLXdoaXRlYm9hcmQtc2hhcGUnO1xuaW1wb3J0IHsgQ2FudmFzV2hpdGVib2FyZFNoYXBlT3B0aW9ucyB9IGZyb20gJy4vY2FudmFzLXdoaXRlYm9hcmQtc2hhcGUtb3B0aW9ucyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NhbnZhcy13aGl0ZWJvYXJkLXNoYXBlLXNlbGVjdG9yJyxcbiAgaG9zdDoge1xuICAgICcoZG9jdW1lbnQ6bW91c2Vkb3duKSc6ICdjbG9zZU9uRXh0ZXJuYWxDbGljaygkZXZlbnQpJyxcbiAgICAnKGRvY3VtZW50OnRvdWNoc3RhcnQpJzogJ2Nsb3NlT25FeHRlcm5hbENsaWNrKCRldmVudCknXG4gIH0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiAqbmdJZj1cIiFzaG93U2hhcGVTZWxlY3RvclwiIChjbGljayk9XCJ0b2dnbGVTaGFwZVNlbGVjdG9yKCRldmVudClcIlxuICAgICAgICAgY2xhc3M9XCJjYW52YXMtd2hpdGVib2FyZC1zaGFwZS1zZWxlY3Rvci1zZWxlY3RlZC1wcmV2aWV3XCI+XG4gICAgICA8Y2FudmFzLXdoaXRlYm9hcmQtc2hhcGUtcHJldmlldyBbc2hhcGVDb25zdHJ1Y3Rvcl09XCJzZWxlY3RlZFNoYXBlQ29uc3RydWN0b3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3NoYXBlT3B0aW9uc109XCJzaGFwZU9wdGlvbnNcIj48L2NhbnZhcy13aGl0ZWJvYXJkLXNoYXBlLXByZXZpZXc+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNhbnZhcy13aGl0ZWJvYXJkLXNoYXBlLXNlbGVjdG9yLXdyYXBwZXJcIiAqbmdJZj1cInNob3dTaGFwZVNlbGVjdG9yXCI+XG4gICAgICA8Y2FudmFzLXdoaXRlYm9hcmQtc2hhcGUtcHJldmlldyAqbmdGb3I9XCJsZXQgc2hhcGVDb25zdHJ1Y3RvciBvZiByZWdpc3RlcmVkU2hhcGVzJCB8IGFzeW5jXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzaGFwZUNvbnN0cnVjdG9yXT1cInNoYXBlQ29uc3RydWN0b3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3NoYXBlT3B0aW9uc109XCJzaGFwZU9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInNlbGVjdFNoYXBlKHNoYXBlQ29uc3RydWN0b3IpXCI+PC9jYW52YXMtd2hpdGVib2FyZC1zaGFwZS1wcmV2aWV3PlxuICAgIDwvZGl2PlxuICBgLFxuICBzdHlsZXM6IFtgXG4gICAgLmNhbnZhcy13aGl0ZWJvYXJkLXNoYXBlLXNlbGVjdG9yLXNlbGVjdGVkLXByZXZpZXcge1xuICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB9XG5cbiAgICAuY2FudmFzLXdoaXRlYm9hcmQtc2hhcGUtc2VsZWN0b3Itd3JhcHBlciB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNhZmFmYWY7XG4gICAgfVxuXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDQwMXB4KSB7XG4gICAgICAuY2FudmFzLXdoaXRlYm9hcmQtc2hhcGUtc2VsZWN0b3Itd3JhcHBlciB7XG4gICAgICB9XG4gICAgfVxuICBgXVxufSlcbmV4cG9ydCBjbGFzcyBDYW52YXNXaGl0ZWJvYXJkU2hhcGVTZWxlY3RvckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHJlYWRvbmx5IHNob3dTaGFwZVNlbGVjdG9yOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHJlYWRvbmx5IHNlbGVjdGVkU2hhcGVDb25zdHJ1Y3RvcjogSU5ld0NhbnZhc1doaXRlYm9hcmRTaGFwZTxDYW52YXNXaGl0ZWJvYXJkU2hhcGU+O1xuICBASW5wdXQoKSByZWFkb25seSBzaGFwZU9wdGlvbnM6IENhbnZhc1doaXRlYm9hcmRTaGFwZU9wdGlvbnM7XG5cbiAgQE91dHB1dCgpIG9uVG9nZ2xlU2hhcGVTZWxlY3RvciA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgQE91dHB1dCgpIG9uU2hhcGVTZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXI8SU5ld0NhbnZhc1doaXRlYm9hcmRTaGFwZTxDYW52YXNXaGl0ZWJvYXJkU2hhcGU+PigpO1xuXG4gIHJlZ2lzdGVyZWRTaGFwZXMkOiBPYnNlcnZhYmxlPElOZXdDYW52YXNXaGl0ZWJvYXJkU2hhcGU8Q2FudmFzV2hpdGVib2FyZFNoYXBlPltdPjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgY2FudmFzV2hpdGVib2FyZFNoYXBlU2VydmljZTogQ2FudmFzV2hpdGVib2FyZFNoYXBlU2VydmljZSkge1xuICAgIHRoaXMucmVnaXN0ZXJlZFNoYXBlcyQgPSB0aGlzLmNhbnZhc1doaXRlYm9hcmRTaGFwZVNlcnZpY2UucmVnaXN0ZXJlZFNoYXBlcyQ7XG4gIH1cblxuICBzZWxlY3RTaGFwZShzaGFwZTogSU5ld0NhbnZhc1doaXRlYm9hcmRTaGFwZTxDYW52YXNXaGl0ZWJvYXJkU2hhcGU+KTogdm9pZCB7XG4gICAgdGhpcy5vblNoYXBlU2VsZWN0ZWQuZW1pdChzaGFwZSk7XG4gICAgdGhpcy50b2dnbGVTaGFwZVNlbGVjdG9yKG51bGwpO1xuICB9XG5cbiAgY2xvc2VPbkV4dGVybmFsQ2xpY2soZXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgJiYgdGhpcy5zaG93U2hhcGVTZWxlY3Rvcikge1xuICAgICAgdGhpcy5vblRvZ2dsZVNoYXBlU2VsZWN0b3IuZW1pdChmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlU2hhcGVTZWxlY3RvcihldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgdGhpcy5vblRvZ2dsZVNoYXBlU2VsZWN0b3IuZW1pdCghdGhpcy5zaG93U2hhcGVTZWxlY3Rvcik7XG4gIH1cbn1cbiJdfQ==