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
        headers.set(this.authHeaderName, this.authHeaderPrefix + " " + this.token);
        this.requestOptions = new http_1.RequestOptions({ headers: headers });
    }
    Object.defineProperty(ApiConfig.prototype, "token", {
        get: function () {
            return localStorage.getItem(this.tokenName);
        },
        set: function (token) {
            this.requestOptions.headers.set(this.authHeaderName, this.authHeaderPrefix + " " + token);
            localStorage.setItem(this.tokenName, token);
        },
        enumerable: true,
        configurable: true
    });
    ApiConfig = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [Object])
    ], ApiConfig);
    return ApiConfig;
}());
exports.ApiConfig = ApiConfig;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9hcGktY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMscUJBQXNDLGVBQWUsQ0FBQyxDQUFBO0FBR3REO0lBUUUsbUJBQVksTUFBWTtRQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFdBQVcsSUFBSSxrQkFBa0IsQ0FBQztRQUM1RCxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLElBQUksT0FBTyxDQUFDO1FBQzdDLElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDLGNBQWMsSUFBSSxlQUFlLENBQUM7UUFDL0QsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsSUFBSSxRQUFRLENBQUM7UUFFNUQsSUFBSSxPQUFPLEdBQVksSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDOUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFLLElBQUksQ0FBQyxnQkFBZ0IsU0FBSSxJQUFJLENBQUMsS0FBTyxDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLHFCQUFjLENBQUMsRUFBQyxTQUFBLE9BQU8sRUFBQyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELHNCQUFJLDRCQUFLO2FBQVQ7WUFDRSxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDOUMsQ0FBQzthQUVELFVBQVUsS0FBYTtZQUNyQixJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBSyxJQUFJLENBQUMsZ0JBQWdCLFNBQUksS0FBTyxDQUFDLENBQUM7WUFDMUYsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzlDLENBQUM7OztPQUxBO0lBeEJIO1FBQUMsaUJBQVUsRUFBRTs7aUJBQUE7SUE4QmIsZ0JBQUM7QUFBRCxDQUFDLEFBN0JELElBNkJDO0FBN0JZLGlCQUFTLFlBNkJyQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SGVhZGVycywgUmVxdWVzdE9wdGlvbnN9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXBpQ29uZmlnIHtcbiAgYmFzZVVybDogc3RyaW5nO1xuICBjb250ZW50VHlwZTogc3RyaW5nO1xuICB0b2tlbk5hbWU6IHN0cmluZztcbiAgYXV0aEhlYWRlck5hbWU6IHN0cmluZztcbiAgYXV0aEhlYWRlclByZWZpeDogc3RyaW5nO1xuICByZXF1ZXN0T3B0aW9uczogUmVxdWVzdE9wdGlvbnM7XG5cbiAgY29uc3RydWN0b3IoY29uZmlnPzogYW55KSB7XG4gICAgdGhpcy5iYXNlVXJsID0gY29uZmlnLmJhc2VVcmwgfHwgJyc7XG4gICAgdGhpcy5jb250ZW50VHlwZSA9IGNvbmZpZy5jb250ZW50VHlwZSB8fCAnYXBwbGljYXRpb24vanNvbic7XG4gICAgdGhpcy50b2tlbk5hbWUgPSBjb25maWcudG9rZW5OYW1lIHx8ICd0b2tlbic7XG4gICAgdGhpcy5hdXRoSGVhZGVyTmFtZSA9IGNvbmZpZy5hdXRoSGVhZGVyTmFtZSB8fCAnQXV0aG9yaXphdGlvbic7XG4gICAgdGhpcy5hdXRoSGVhZGVyUHJlZml4ID0gY29uZmlnLmF1dGhIZWFkZXJQcmVmaXggfHwgJ0JlYXJlcic7XG5cbiAgICBsZXQgaGVhZGVyczogSGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgaGVhZGVycy5zZXQoJ0NvbnRlbnQtVHlwZScsIHRoaXMuY29udGVudFR5cGUpO1xuICAgIGhlYWRlcnMuc2V0KHRoaXMuYXV0aEhlYWRlck5hbWUsIGAke3RoaXMuYXV0aEhlYWRlclByZWZpeH0gJHt0aGlzLnRva2VufWApO1xuICAgIHRoaXMucmVxdWVzdE9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoe2hlYWRlcnN9KTtcbiAgfVxuXG4gIGdldCB0b2tlbigpOiBzdHJpbmcge1xuICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLnRva2VuTmFtZSk7XG4gIH1cblxuICBzZXQgdG9rZW4odG9rZW46IHN0cmluZykge1xuICAgIHRoaXMucmVxdWVzdE9wdGlvbnMuaGVhZGVycy5zZXQodGhpcy5hdXRoSGVhZGVyTmFtZSwgYCR7dGhpcy5hdXRoSGVhZGVyUHJlZml4fSAke3Rva2VufWApO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMudG9rZW5OYW1lLCB0b2tlbik7XG4gIH1cbn1cbiJdfQ==