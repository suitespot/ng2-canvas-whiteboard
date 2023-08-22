export var CanvasWhiteboardUpdateType;
(function (CanvasWhiteboardUpdateType) {
    CanvasWhiteboardUpdateType[CanvasWhiteboardUpdateType["START"] = 0] = "START";
    CanvasWhiteboardUpdateType[CanvasWhiteboardUpdateType["DRAG"] = 1] = "DRAG";
    CanvasWhiteboardUpdateType[CanvasWhiteboardUpdateType["STOP"] = 2] = "STOP";
})(CanvasWhiteboardUpdateType || (CanvasWhiteboardUpdateType = {}));
export class CanvasWhiteboardUpdate {
    static deserializeJson(json) {
        let parsedJson;
        try {
            parsedJson = JSON.parse(json);
            return new CanvasWhiteboardUpdate(parsedJson['x'], parsedJson['y'], parsedJson['type'], parsedJson['uuid'], parsedJson['selectedShape'], parsedJson['selectedShapeOptions']);
        }
        catch (e) {
            console.error("The canvas whiteboard update is not parseable");
            return null;
        }
    }
    constructor(x, y, type, UUID, selectedShape, selectedShapeOptions) {
        this.x = x;
        this.y = y;
        this.type = type;
        this.UUID = UUID;
        this.selectedShape = selectedShape;
        this.selectedShapeOptions = selectedShapeOptions;
    }
    stringify() {
        const objectToSerialize = {
            x: this.x.toFixed(3),
            y: this.y.toFixed(3),
            type: this.type,
            uuid: this.UUID,
            selectedShape: this.selectedShape
        };
        if (this.selectedShapeOptions) {
            objectToSerialize['selectedShapeOptions'] = this.selectedShapeOptions;
        }
        return JSON.stringify(objectToSerialize);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FudmFzLXdoaXRlYm9hcmQtdXBkYXRlLm1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmcyLWNhbnZhcy13aGl0ZWJvYXJkL3NyYy9saWIvY2FudmFzLXdoaXRlYm9hcmQtdXBkYXRlLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sQ0FBTixJQUFZLDBCQUlYO0FBSkQsV0FBWSwwQkFBMEI7SUFDcEMsNkVBQVMsQ0FBQTtJQUNULDJFQUFRLENBQUE7SUFDUiwyRUFBUSxDQUFBO0FBQ1YsQ0FBQyxFQUpXLDBCQUEwQixLQUExQiwwQkFBMEIsUUFJckM7QUFFRCxNQUFNLE9BQU8sc0JBQXNCO0lBU2pDLE1BQU0sQ0FBQyxlQUFlLENBQUMsSUFBUztRQUM5QixJQUFJLFVBQVUsQ0FBQztRQUNmLElBQUk7WUFDRixVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM5QixPQUFPLElBQUksc0JBQXNCLENBQy9CLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFDZixVQUFVLENBQUMsR0FBRyxDQUFDLEVBQ2YsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUNsQixVQUFVLENBQUMsTUFBTSxDQUFDLEVBQ2xCLFVBQVUsQ0FBQyxlQUFlLENBQUMsRUFDM0IsVUFBVSxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztTQUN2QztRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsT0FBTyxDQUFDLEtBQUssQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDO1lBQy9ELE9BQU8sSUFBSSxDQUFDO1NBQ2I7SUFDSCxDQUFDO0lBRUQsWUFBWSxDQUFVLEVBQ1YsQ0FBVSxFQUNWLElBQWlDLEVBQ2pDLElBQWEsRUFDYixhQUFzQixFQUN0QixvQkFBbUQ7UUFDN0QsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDWCxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNYLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxvQkFBb0IsQ0FBQztJQUNuRCxDQUFDO0lBRUQsU0FBUztRQUNQLE1BQU0saUJBQWlCLEdBQUc7WUFDeEIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNwQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtTQUNsQyxDQUFDO1FBRUYsSUFBSSxJQUFJLENBQUMsb0JBQW9CLEVBQUU7WUFDN0IsaUJBQWlCLENBQUMsc0JBQXNCLENBQUMsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUM7U0FDdkU7UUFFRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUMzQyxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NhbnZhc1doaXRlYm9hcmRTaGFwZU9wdGlvbnN9IGZyb20gXCIuL3NoYXBlcy9jYW52YXMtd2hpdGVib2FyZC1zaGFwZS1vcHRpb25zXCI7XG5cbmV4cG9ydCBlbnVtIENhbnZhc1doaXRlYm9hcmRVcGRhdGVUeXBlIHtcbiAgU1RBUlQgPSAwLFxuICBEUkFHID0gMSxcbiAgU1RPUCA9IDJcbn1cblxuZXhwb3J0IGNsYXNzIENhbnZhc1doaXRlYm9hcmRVcGRhdGUge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgdHlwZTogQ2FudmFzV2hpdGVib2FyZFVwZGF0ZVR5cGU7XG4gIFVVSUQ6IHN0cmluZztcblxuICBzZWxlY3RlZFNoYXBlOiBzdHJpbmc7XG4gIHNlbGVjdGVkU2hhcGVPcHRpb25zOiBDYW52YXNXaGl0ZWJvYXJkU2hhcGVPcHRpb25zO1xuXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUpzb24oanNvbjogYW55KTogQ2FudmFzV2hpdGVib2FyZFVwZGF0ZSB7XG4gICAgbGV0IHBhcnNlZEpzb247XG4gICAgdHJ5IHtcbiAgICAgIHBhcnNlZEpzb24gPSBKU09OLnBhcnNlKGpzb24pO1xuICAgICAgcmV0dXJuIG5ldyBDYW52YXNXaGl0ZWJvYXJkVXBkYXRlKFxuICAgICAgICBwYXJzZWRKc29uWyd4J10sXG4gICAgICAgIHBhcnNlZEpzb25bJ3knXSxcbiAgICAgICAgcGFyc2VkSnNvblsndHlwZSddLFxuICAgICAgICBwYXJzZWRKc29uWyd1dWlkJ10sXG4gICAgICAgIHBhcnNlZEpzb25bJ3NlbGVjdGVkU2hhcGUnXSxcbiAgICAgICAgcGFyc2VkSnNvblsnc2VsZWN0ZWRTaGFwZU9wdGlvbnMnXSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihcIlRoZSBjYW52YXMgd2hpdGVib2FyZCB1cGRhdGUgaXMgbm90IHBhcnNlYWJsZVwiKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHg/OiBudW1iZXIsXG4gICAgICAgICAgICAgIHk/OiBudW1iZXIsXG4gICAgICAgICAgICAgIHR5cGU/OiBDYW52YXNXaGl0ZWJvYXJkVXBkYXRlVHlwZSxcbiAgICAgICAgICAgICAgVVVJRD86IHN0cmluZyxcbiAgICAgICAgICAgICAgc2VsZWN0ZWRTaGFwZT86IHN0cmluZyxcbiAgICAgICAgICAgICAgc2VsZWN0ZWRTaGFwZU9wdGlvbnM/OiBDYW52YXNXaGl0ZWJvYXJkU2hhcGVPcHRpb25zKSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5VVUlEID0gVVVJRDtcbiAgICB0aGlzLnNlbGVjdGVkU2hhcGUgPSBzZWxlY3RlZFNoYXBlO1xuICAgIHRoaXMuc2VsZWN0ZWRTaGFwZU9wdGlvbnMgPSBzZWxlY3RlZFNoYXBlT3B0aW9ucztcbiAgfVxuXG4gIHN0cmluZ2lmeSgpOiBzdHJpbmcge1xuICAgIGNvbnN0IG9iamVjdFRvU2VyaWFsaXplID0ge1xuICAgICAgeDogdGhpcy54LnRvRml4ZWQoMyksXG4gICAgICB5OiB0aGlzLnkudG9GaXhlZCgzKSxcbiAgICAgIHR5cGU6IHRoaXMudHlwZSxcbiAgICAgIHV1aWQ6IHRoaXMuVVVJRCxcbiAgICAgIHNlbGVjdGVkU2hhcGU6IHRoaXMuc2VsZWN0ZWRTaGFwZVxuICAgIH07XG5cbiAgICBpZiAodGhpcy5zZWxlY3RlZFNoYXBlT3B0aW9ucykge1xuICAgICAgb2JqZWN0VG9TZXJpYWxpemVbJ3NlbGVjdGVkU2hhcGVPcHRpb25zJ10gPSB0aGlzLnNlbGVjdGVkU2hhcGVPcHRpb25zO1xuICAgIH1cblxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShvYmplY3RUb1NlcmlhbGl6ZSk7XG4gIH1cbn1cbiJdfQ==