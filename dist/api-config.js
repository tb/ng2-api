"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var ApiConfig = (function () {
    function ApiConfig(config) {
        this.baseUrl = config.baseUrl || '';
        this.contentType = config.contentType || 'application/json';
        this.tokenName = config.tokenName || 'token';
        this.authHeaderName = config.authHeaderName || 'Authorization';
        this.authHeaderPrefix = config.authHeaderPrefix || 'Bearer';
        var headers = new http_1.Headers();
        headers.set('Content-Type', this.contentType);
        headers.set(this.authHeaderName, this.authHeaderPrefix + " " + localStorage.getItem(this.tokenName));
        this.requestOptions = new http_1.RequestOptions({ headers: headers });
    }
    ApiConfig = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [Object])
    ], ApiConfig);
    return ApiConfig;
}());
exports.ApiConfig = ApiConfig;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9hcGktY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMscUJBQXNDLGVBQWUsQ0FBQyxDQUFBO0FBR3REO0lBUUUsbUJBQVksTUFBWTtRQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFdBQVcsSUFBSSxrQkFBa0IsQ0FBQztRQUM1RCxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLElBQUksT0FBTyxDQUFDO1FBQzdDLElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDLGNBQWMsSUFBSSxlQUFlLENBQUM7UUFDL0QsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsSUFBSSxRQUFRLENBQUM7UUFFNUQsSUFBSSxPQUFPLEdBQVksSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDOUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFLLElBQUksQ0FBQyxnQkFBZ0IsU0FBSSxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUcsQ0FBQyxDQUFDO1FBQ3JHLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxxQkFBYyxDQUFDLEVBQUMsU0FBQSxPQUFPLEVBQUMsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFwQkg7UUFBQyxpQkFBVSxFQUFFOztpQkFBQTtJQXFCYixnQkFBQztBQUFELENBQUMsQUFwQkQsSUFvQkM7QUFwQlksaUJBQVMsWUFvQnJCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtIZWFkZXJzLCBSZXF1ZXN0T3B0aW9uc30gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBcGlDb25maWcge1xuICBiYXNlVXJsOiBzdHJpbmc7XG4gIGNvbnRlbnRUeXBlOiBzdHJpbmc7XG4gIHRva2VuTmFtZTogc3RyaW5nO1xuICBhdXRoSGVhZGVyTmFtZTogc3RyaW5nO1xuICBhdXRoSGVhZGVyUHJlZml4OiBzdHJpbmc7XG4gIHJlcXVlc3RPcHRpb25zOiBSZXF1ZXN0T3B0aW9ucztcblxuICBjb25zdHJ1Y3Rvcihjb25maWc/OiBhbnkpIHtcbiAgICB0aGlzLmJhc2VVcmwgPSBjb25maWcuYmFzZVVybCB8fCAnJztcbiAgICB0aGlzLmNvbnRlbnRUeXBlID0gY29uZmlnLmNvbnRlbnRUeXBlIHx8ICdhcHBsaWNhdGlvbi9qc29uJztcbiAgICB0aGlzLnRva2VuTmFtZSA9IGNvbmZpZy50b2tlbk5hbWUgfHwgJ3Rva2VuJztcbiAgICB0aGlzLmF1dGhIZWFkZXJOYW1lID0gY29uZmlnLmF1dGhIZWFkZXJOYW1lIHx8ICdBdXRob3JpemF0aW9uJztcbiAgICB0aGlzLmF1dGhIZWFkZXJQcmVmaXggPSBjb25maWcuYXV0aEhlYWRlclByZWZpeCB8fCAnQmVhcmVyJztcblxuICAgIGxldCBoZWFkZXJzOiBIZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICBoZWFkZXJzLnNldCgnQ29udGVudC1UeXBlJywgdGhpcy5jb250ZW50VHlwZSk7XG4gICAgaGVhZGVycy5zZXQodGhpcy5hdXRoSGVhZGVyTmFtZSwgYCR7dGhpcy5hdXRoSGVhZGVyUHJlZml4fSAke2xvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMudG9rZW5OYW1lKX1gKTtcbiAgICB0aGlzLnJlcXVlc3RPcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHtoZWFkZXJzfSk7XG4gIH1cbn1cbiJdfQ==