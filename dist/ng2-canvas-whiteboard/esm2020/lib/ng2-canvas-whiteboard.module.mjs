import { NgModule } from '@angular/core';
import { CanvasWhiteboardComponent } from './canvas-whiteboard.component';
import { CommonModule } from '@angular/common';
import { CanvasWhiteboardColorPickerComponent } from './canvas-whiteboard-colorpicker.component';
import { CanvasWhiteboardShapeSelectorComponent } from './shapes/canvas-whiteboard-shape-selector.component';
import { CanvasWhiteboardShapePreviewComponent } from './shapes/canvas-whiteboard-shape-preview.component';
import { CanvasWhiteboardService } from './canvas-whiteboard.service';
import { CanvasWhiteboardShapeService } from './shapes/canvas-whiteboard-shape.service';
import * as i0 from "@angular/core";
export class CanvasWhiteboardModule {
}
CanvasWhiteboardModule.ɵfac = function CanvasWhiteboardModule_Factory(t) { return new (t || CanvasWhiteboardModule)(); };
CanvasWhiteboardModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: CanvasWhiteboardModule });
CanvasWhiteboardModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
        CanvasWhiteboardService,
        CanvasWhiteboardShapeService
    ], imports: [CommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CanvasWhiteboardModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    CanvasWhiteboardComponent,
                    CanvasWhiteboardColorPickerComponent,
                    CanvasWhiteboardShapeSelectorComponent,
                    CanvasWhiteboardShapePreviewComponent
                ],
                imports: [
                    CommonModule
                ],
                providers: [
                    CanvasWhiteboardService,
                    CanvasWhiteboardShapeService
                ],
                exports: [CanvasWhiteboardComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CanvasWhiteboardModule, { declarations: [CanvasWhiteboardComponent,
        CanvasWhiteboardColorPickerComponent,
        CanvasWhiteboardShapeSelectorComponent,
        CanvasWhiteboardShapePreviewComponent], imports: [CommonModule], exports: [CanvasWhiteboardComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLWNhbnZhcy13aGl0ZWJvYXJkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nMi1jYW52YXMtd2hpdGVib2FyZC9zcmMvbGliL25nMi1jYW52YXMtd2hpdGVib2FyZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMxRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDakcsT0FBTyxFQUFFLHNDQUFzQyxFQUFFLE1BQU0scURBQXFELENBQUM7QUFDN0csT0FBTyxFQUFFLHFDQUFxQyxFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDM0csT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDdEUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sMENBQTBDLENBQUM7O0FBa0J4RixNQUFNLE9BQU8sc0JBQXNCOzs0RkFBdEIsc0JBQXNCO3dFQUF0QixzQkFBc0I7NkVBTnRCO1FBQ1QsdUJBQXVCO1FBQ3ZCLDRCQUE0QjtLQUM3QixZQUxDLFlBQVk7dUZBUUgsc0JBQXNCO2NBaEJsQyxRQUFRO2VBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLHlCQUF5QjtvQkFDekIsb0NBQW9DO29CQUNwQyxzQ0FBc0M7b0JBQ3RDLHFDQUFxQztpQkFDdEM7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLFlBQVk7aUJBQ2I7Z0JBQ0QsU0FBUyxFQUFFO29CQUNULHVCQUF1QjtvQkFDdkIsNEJBQTRCO2lCQUM3QjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQzthQUNyQzs7d0ZBQ1ksc0JBQXNCLG1CQWQvQix5QkFBeUI7UUFDekIsb0NBQW9DO1FBQ3BDLHNDQUFzQztRQUN0QyxxQ0FBcUMsYUFHckMsWUFBWSxhQU1KLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYW52YXNXaGl0ZWJvYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9jYW52YXMtd2hpdGVib2FyZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENhbnZhc1doaXRlYm9hcmRDb2xvclBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vY2FudmFzLXdoaXRlYm9hcmQtY29sb3JwaWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7IENhbnZhc1doaXRlYm9hcmRTaGFwZVNlbGVjdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9zaGFwZXMvY2FudmFzLXdoaXRlYm9hcmQtc2hhcGUtc2VsZWN0b3IuY29tcG9uZW50JztcbmltcG9ydCB7IENhbnZhc1doaXRlYm9hcmRTaGFwZVByZXZpZXdDb21wb25lbnQgfSBmcm9tICcuL3NoYXBlcy9jYW52YXMtd2hpdGVib2FyZC1zaGFwZS1wcmV2aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYW52YXNXaGl0ZWJvYXJkU2VydmljZSB9IGZyb20gJy4vY2FudmFzLXdoaXRlYm9hcmQuc2VydmljZSc7XG5pbXBvcnQgeyBDYW52YXNXaGl0ZWJvYXJkU2hhcGVTZXJ2aWNlIH0gZnJvbSAnLi9zaGFwZXMvY2FudmFzLXdoaXRlYm9hcmQtc2hhcGUuc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIENhbnZhc1doaXRlYm9hcmRDb21wb25lbnQsXG4gICAgQ2FudmFzV2hpdGVib2FyZENvbG9yUGlja2VyQ29tcG9uZW50LFxuICAgIENhbnZhc1doaXRlYm9hcmRTaGFwZVNlbGVjdG9yQ29tcG9uZW50LFxuICAgIENhbnZhc1doaXRlYm9hcmRTaGFwZVByZXZpZXdDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBDYW52YXNXaGl0ZWJvYXJkU2VydmljZSxcbiAgICBDYW52YXNXaGl0ZWJvYXJkU2hhcGVTZXJ2aWNlXG4gIF0sXG4gIGV4cG9ydHM6IFtDYW52YXNXaGl0ZWJvYXJkQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBDYW52YXNXaGl0ZWJvYXJkTW9kdWxlIHtcblxufVxuIl19