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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwaS1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6QyxxQkFBc0MsZUFBZSxDQUFDLENBQUE7QUFHdEQ7SUFRRSxtQkFBWSxNQUFZO1FBQ3RCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsV0FBVyxJQUFJLGtCQUFrQixDQUFDO1FBQzVELElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsSUFBSSxPQUFPLENBQUM7UUFDN0MsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUMsY0FBYyxJQUFJLGVBQWUsQ0FBQztRQUMvRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixJQUFJLFFBQVEsQ0FBQztRQUU1RCxJQUFJLE9BQU8sR0FBWSxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM5QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUssSUFBSSxDQUFDLGdCQUFnQixTQUFJLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBRyxDQUFDLENBQUM7UUFDckcsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLHFCQUFjLENBQUMsRUFBQyxTQUFBLE9BQU8sRUFBQyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQXBCSDtRQUFDLGlCQUFVLEVBQUU7O2lCQUFBO0lBcUJiLGdCQUFDO0FBQUQsQ0FBQyxBQXBCRCxJQW9CQztBQXBCWSxpQkFBUyxZQW9CckIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0hlYWRlcnMsIFJlcXVlc3RPcHRpb25zfSBmcm9tICdAYW5ndWxhci9odHRwJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFwaUNvbmZpZyB7XG4gIGJhc2VVcmw6IHN0cmluZztcbiAgY29udGVudFR5cGU6IHN0cmluZztcbiAgdG9rZW5OYW1lOiBzdHJpbmc7XG4gIGF1dGhIZWFkZXJOYW1lOiBzdHJpbmc7XG4gIGF1dGhIZWFkZXJQcmVmaXg6IHN0cmluZztcbiAgcmVxdWVzdE9wdGlvbnM6IFJlcXVlc3RPcHRpb25zO1xuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZz86IGFueSkge1xuICAgIHRoaXMuYmFzZVVybCA9IGNvbmZpZy5iYXNlVXJsIHx8ICcnO1xuICAgIHRoaXMuY29udGVudFR5cGUgPSBjb25maWcuY29udGVudFR5cGUgfHwgJ2FwcGxpY2F0aW9uL2pzb24nO1xuICAgIHRoaXMudG9rZW5OYW1lID0gY29uZmlnLnRva2VuTmFtZSB8fCAndG9rZW4nO1xuICAgIHRoaXMuYXV0aEhlYWRlck5hbWUgPSBjb25maWcuYXV0aEhlYWRlck5hbWUgfHwgJ0F1dGhvcml6YXRpb24nO1xuICAgIHRoaXMuYXV0aEhlYWRlclByZWZpeCA9IGNvbmZpZy5hdXRoSGVhZGVyUHJlZml4IHx8ICdCZWFyZXInO1xuXG4gICAgbGV0IGhlYWRlcnM6IEhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgIGhlYWRlcnMuc2V0KCdDb250ZW50LVR5cGUnLCB0aGlzLmNvbnRlbnRUeXBlKTtcbiAgICBoZWFkZXJzLnNldCh0aGlzLmF1dGhIZWFkZXJOYW1lLCBgJHt0aGlzLmF1dGhIZWFkZXJQcmVmaXh9ICR7bG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy50b2tlbk5hbWUpfWApO1xuICAgIHRoaXMucmVxdWVzdE9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoe2hlYWRlcnN9KTtcbiAgfVxufVxuIl19