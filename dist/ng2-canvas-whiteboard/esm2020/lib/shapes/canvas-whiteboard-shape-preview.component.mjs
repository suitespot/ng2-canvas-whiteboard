import { Component, Input, ViewChild } from '@angular/core';
import { CanvasWhiteboardPoint } from '../canvas-whiteboard-point.model';
import { CanvasWhiteboardShapeOptions } from './canvas-whiteboard-shape-options';
import * as i0 from "@angular/core";
const _c0 = ["canvasWhiteboardShapePreview"];
export class CanvasWhiteboardShapePreviewComponent {
    ngAfterViewInit() {
        this.drawShapePreview();
    }
    ngOnChanges(changes) {
        if (changes.shapeConstructor || changes.shapeOptions) {
            this.drawShapePreview();
        }
    }
    drawShapePreview() {
        if (!this.canvas) {
            return;
        }
        const context = this.canvas.nativeElement.getContext('2d');
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        const concreteShape = new this.shapeConstructor(new CanvasWhiteboardPoint(0, 0), Object.assign(new CanvasWhiteboardShapeOptions(), this.shapeOptions));
        concreteShape.drawPreview(context);
    }
}
CanvasWhiteboardShapePreviewComponent.ɵfac = function CanvasWhiteboardShapePreviewComponent_Factory(t) { return new (t || CanvasWhiteboardShapePreviewComponent)(); };
CanvasWhiteboardShapePreviewComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CanvasWhiteboardShapePreviewComponent, selectors: [["canvas-whiteboard-shape-preview"]], viewQuery: function CanvasWhiteboardShapePreviewComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.canvas = _t.first);
    } }, inputs: { shapeConstructor: "shapeConstructor", shapeOptions: "shapeOptions" }, features: [i0.ɵɵNgOnChangesFeature], decls: 2, vars: 0, consts: [["width", "50px", "height", "50px", 1, "canvas-whiteboard-shape-preview-canvas"], ["canvasWhiteboardShapePreview", ""]], template: function CanvasWhiteboardShapePreviewComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "canvas", 0, 1);
    } }, styles: [".canvas-whiteboard-shape-preview-canvas[_ngcontent-%COMP%]{cursor:pointer}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CanvasWhiteboardShapePreviewComponent, [{
        type: Component,
        args: [{ selector: 'canvas-whiteboard-shape-preview', template: `
    <canvas #canvasWhiteboardShapePreview width="50px" height="50px"
            class="canvas-whiteboard-shape-preview-canvas"></canvas>
  `, styles: [".canvas-whiteboard-shape-preview-canvas{cursor:pointer}\n"] }]
    }], null, { shapeConstructor: [{
            type: Input
        }], shapeOptions: [{
            type: Input
        }], canvas: [{
            type: ViewChild,
            args: ['canvasWhiteboardShapePreview']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FudmFzLXdoaXRlYm9hcmQtc2hhcGUtcHJldmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZzItY2FudmFzLXdoaXRlYm9hcmQvc3JjL2xpYi9zaGFwZXMvY2FudmFzLXdoaXRlYm9hcmQtc2hhcGUtcHJldmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxLQUFLLEVBQ0wsU0FBUyxFQUlWLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOzs7QUFjakYsTUFBTSxPQUFPLHFDQUFxQztJQU1oRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxnQkFBZ0IsSUFBSSxPQUFPLENBQUMsWUFBWSxFQUFFO1lBQ3BELElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQztJQUVELGdCQUFnQjtRQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hCLE9BQU87U0FDUjtRQUVELE1BQU0sT0FBTyxHQUE2QixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckYsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFckUsTUFBTSxhQUFhLEdBQUcsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQzdDLElBQUkscUJBQXFCLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUMvQixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksNEJBQTRCLEVBQUUsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQ3JFLENBQUM7UUFFRixhQUFhLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7OzBIQTlCVSxxQ0FBcUM7d0ZBQXJDLHFDQUFxQzs7Ozs7O1FBVDlDLCtCQUNnRTs7dUZBUXZELHFDQUFxQztjQVpqRCxTQUFTOzJCQUNFLGlDQUFpQyxZQUNqQzs7O0dBR1Q7Z0JBUWlCLGdCQUFnQjtrQkFBakMsS0FBSztZQUNZLFlBQVk7a0JBQTdCLEtBQUs7WUFFcUMsTUFBTTtrQkFBaEQsU0FBUzttQkFBQyw4QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBWaWV3Q2hpbGQsXG4gIEFmdGVyVmlld0luaXQsXG4gIE9uQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElOZXdDYW52YXNXaGl0ZWJvYXJkU2hhcGUgfSBmcm9tICcuL2NhbnZhcy13aGl0ZWJvYXJkLXNoYXBlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2FudmFzV2hpdGVib2FyZFNoYXBlIH0gZnJvbSAnLi9jYW52YXMtd2hpdGVib2FyZC1zaGFwZSc7XG5pbXBvcnQgeyBDYW52YXNXaGl0ZWJvYXJkUG9pbnQgfSBmcm9tICcuLi9jYW52YXMtd2hpdGVib2FyZC1wb2ludC5tb2RlbCc7XG5pbXBvcnQgeyBDYW52YXNXaGl0ZWJvYXJkU2hhcGVPcHRpb25zIH0gZnJvbSAnLi9jYW52YXMtd2hpdGVib2FyZC1zaGFwZS1vcHRpb25zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2FudmFzLXdoaXRlYm9hcmQtc2hhcGUtcHJldmlldycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGNhbnZhcyAjY2FudmFzV2hpdGVib2FyZFNoYXBlUHJldmlldyB3aWR0aD1cIjUwcHhcIiBoZWlnaHQ9XCI1MHB4XCJcbiAgICAgICAgICAgIGNsYXNzPVwiY2FudmFzLXdoaXRlYm9hcmQtc2hhcGUtcHJldmlldy1jYW52YXNcIj48L2NhbnZhcz5cbiAgYCxcbiAgc3R5bGVzOiBbYFxuICAgIC5jYW52YXMtd2hpdGVib2FyZC1zaGFwZS1wcmV2aWV3LWNhbnZhcyB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICBgXVxufSlcbmV4cG9ydCBjbGFzcyBDYW52YXNXaGl0ZWJvYXJkU2hhcGVQcmV2aWV3Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgcmVhZG9ubHkgc2hhcGVDb25zdHJ1Y3RvcjogSU5ld0NhbnZhc1doaXRlYm9hcmRTaGFwZTxDYW52YXNXaGl0ZWJvYXJkU2hhcGU+O1xuICBASW5wdXQoKSByZWFkb25seSBzaGFwZU9wdGlvbnM6IENhbnZhc1doaXRlYm9hcmRTaGFwZU9wdGlvbnM7XG5cbiAgQFZpZXdDaGlsZCgnY2FudmFzV2hpdGVib2FyZFNoYXBlUHJldmlldycpIGNhbnZhczogRWxlbWVudFJlZjtcblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5kcmF3U2hhcGVQcmV2aWV3KCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMuc2hhcGVDb25zdHJ1Y3RvciB8fCBjaGFuZ2VzLnNoYXBlT3B0aW9ucykge1xuICAgICAgdGhpcy5kcmF3U2hhcGVQcmV2aWV3KCk7XG4gICAgfVxuICB9XG5cbiAgZHJhd1NoYXBlUHJldmlldygpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuY2FudmFzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEID0gdGhpcy5jYW52YXMubmF0aXZlRWxlbWVudC5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIGNvbnRleHQuY2FudmFzLndpZHRoLCBjb250ZXh0LmNhbnZhcy5oZWlnaHQpO1xuXG4gICAgY29uc3QgY29uY3JldGVTaGFwZSA9IG5ldyB0aGlzLnNoYXBlQ29uc3RydWN0b3IoXG4gICAgICBuZXcgQ2FudmFzV2hpdGVib2FyZFBvaW50KDAsIDApLFxuICAgICAgT2JqZWN0LmFzc2lnbihuZXcgQ2FudmFzV2hpdGVib2FyZFNoYXBlT3B0aW9ucygpLCB0aGlzLnNoYXBlT3B0aW9ucylcbiAgICApO1xuXG4gICAgY29uY3JldGVTaGFwZS5kcmF3UHJldmlldyhjb250ZXh0KTtcbiAgfVxufVxuIl19