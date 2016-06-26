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
var api_helpers_1 = require('./api-helpers');
var api_config_1 = require('./api-config');
var ApiHttp = (function () {
    function ApiHttp(apiConfig, http) {
        this.apiConfig = apiConfig;
        this.http = http;
    }
    ApiHttp.prototype.url = function (path, params) {
        if (params === void 0) { params = {}; }
        var interpolatedPath = api_helpers_1.ApiHelpers.interpolate(path, params);
        return this.apiConfig.baseUrl + "/" + interpolatedPath;
    };
    ApiHttp.prototype.requestOptions = function (options) {
        return this.apiConfig.requestOptions.merge(options);
    };
    ApiHttp.prototype.get = function (url, options) {
        return this.http.get(this.url(url), this.requestOptions(options));
    };
    ApiHttp.prototype.post = function (url, body, options) {
        return this.http.post(this.url(url), body, this.requestOptions(options));
    };
    ApiHttp.prototype.put = function (url, body, options) {
        return this.http.put(this.url(url), body, this.requestOptions(options));
    };
    ApiHttp.prototype.patch = function (url, body, options) {
        return this.http.patch(this.url(url), body, this.requestOptions(options));
    };
    ApiHttp.prototype.delete = function (url, options) {
        return this.http.delete(this.url(url), this.requestOptions(options));
    };
    ApiHttp = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [api_config_1.ApiConfig, http_1.Http])
    ], ApiHttp);
    return ApiHttp;
}());
exports.ApiHttp = ApiHttp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLWh0dHAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvYXBpLWh0dHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6QyxxQkFBNkMsZUFBZSxDQUFDLENBQUE7QUFFN0QsNEJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLDJCQUF3QixjQUFjLENBQUMsQ0FBQTtBQUd2QztJQUNFLGlCQUFvQixTQUFvQixFQUNwQixJQUFVO1FBRFYsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixTQUFJLEdBQUosSUFBSSxDQUFNO0lBQzlCLENBQUM7SUFFRCxxQkFBRyxHQUFILFVBQUksSUFBWSxFQUFFLE1BQWdCO1FBQWhCLHNCQUFnQixHQUFoQixXQUFnQjtRQUNoQyxJQUFJLGdCQUFnQixHQUFHLHdCQUFVLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM1RCxNQUFNLENBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLFNBQUksZ0JBQWtCLENBQUM7SUFDekQsQ0FBQztJQUVELGdDQUFjLEdBQWQsVUFBZSxPQUF3QjtRQUNyQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRCxxQkFBRyxHQUFILFVBQUksR0FBVyxFQUFFLE9BQXdCO1FBQ3ZDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRUQsc0JBQUksR0FBSixVQUFLLEdBQVcsRUFBRSxJQUFZLEVBQUUsT0FBd0I7UUFDdEQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBRUQscUJBQUcsR0FBSCxVQUFJLEdBQVcsRUFBRSxJQUFZLEVBQUUsT0FBd0I7UUFDckQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBRUQsdUJBQUssR0FBTCxVQUFNLEdBQVcsRUFBRSxJQUFZLEVBQUUsT0FBd0I7UUFDdkQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBRUQsd0JBQU0sR0FBTixVQUFPLEdBQVcsRUFBRSxPQUF3QjtRQUMxQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQWpDSDtRQUFDLGlCQUFVLEVBQUU7O2VBQUE7SUFrQ2IsY0FBQztBQUFELENBQUMsQUFqQ0QsSUFpQ0M7QUFqQ1ksZUFBTyxVQWlDbkIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0h0dHAsIFJlc3BvbnNlLCBSZXF1ZXN0T3B0aW9uc30gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQge0FwaUhlbHBlcnN9IGZyb20gJy4vYXBpLWhlbHBlcnMnO1xuaW1wb3J0IHtBcGlDb25maWd9IGZyb20gJy4vYXBpLWNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBcGlIdHRwIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGlDb25maWc6IEFwaUNvbmZpZyxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBodHRwOiBIdHRwKSB7XG4gIH1cblxuICB1cmwocGF0aDogc3RyaW5nLCBwYXJhbXM6IGFueSA9IHt9KTogc3RyaW5nIHtcbiAgICBsZXQgaW50ZXJwb2xhdGVkUGF0aCA9IEFwaUhlbHBlcnMuaW50ZXJwb2xhdGUocGF0aCwgcGFyYW1zKTtcbiAgICByZXR1cm4gYCR7dGhpcy5hcGlDb25maWcuYmFzZVVybH0vJHtpbnRlcnBvbGF0ZWRQYXRofWA7XG4gIH1cblxuICByZXF1ZXN0T3B0aW9ucyhvcHRpb25zPzogUmVxdWVzdE9wdGlvbnMpOiBSZXF1ZXN0T3B0aW9ucyB7XG4gICAgcmV0dXJuIHRoaXMuYXBpQ29uZmlnLnJlcXVlc3RPcHRpb25zLm1lcmdlKG9wdGlvbnMpO1xuICB9XG5cbiAgZ2V0KHVybDogc3RyaW5nLCBvcHRpb25zPzogUmVxdWVzdE9wdGlvbnMpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy51cmwodXJsKSwgdGhpcy5yZXF1ZXN0T3B0aW9ucyhvcHRpb25zKSk7XG4gIH1cblxuICBwb3N0KHVybDogc3RyaW5nLCBib2R5OiBzdHJpbmcsIG9wdGlvbnM/OiBSZXF1ZXN0T3B0aW9ucyk6IE9ic2VydmFibGU8UmVzcG9uc2U+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy51cmwodXJsKSwgYm9keSwgdGhpcy5yZXF1ZXN0T3B0aW9ucyhvcHRpb25zKSk7XG4gIH1cblxuICBwdXQodXJsOiBzdHJpbmcsIGJvZHk6IHN0cmluZywgb3B0aW9ucz86IFJlcXVlc3RPcHRpb25zKTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAucHV0KHRoaXMudXJsKHVybCksIGJvZHksIHRoaXMucmVxdWVzdE9wdGlvbnMob3B0aW9ucykpO1xuICB9XG5cbiAgcGF0Y2godXJsOiBzdHJpbmcsIGJvZHk6IHN0cmluZywgb3B0aW9ucz86IFJlcXVlc3RPcHRpb25zKTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAucGF0Y2godGhpcy51cmwodXJsKSwgYm9keSwgdGhpcy5yZXF1ZXN0T3B0aW9ucyhvcHRpb25zKSk7XG4gIH1cblxuICBkZWxldGUodXJsOiBzdHJpbmcsIG9wdGlvbnM/OiBSZXF1ZXN0T3B0aW9ucyk6IE9ic2VydmFibGU8UmVzcG9uc2U+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSh0aGlzLnVybCh1cmwpLCB0aGlzLnJlcXVlc3RPcHRpb25zKG9wdGlvbnMpKTtcbiAgfVxufVxuIl19