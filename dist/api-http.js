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
    function ApiHttp(config, http) {
        this.config = config;
        this.http = http;
    }
    ApiHttp.prototype.url = function (path, params) {
        if (params === void 0) { params = {}; }
        var interpolatedPath = api_helpers_1.ApiHelpers.interpolate(path, params);
        return this.config.baseUrl + "/" + interpolatedPath;
    };
    ApiHttp.prototype.requestOptions = function (options) {
        return this.config.requestOptions.merge(options);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLWh0dHAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvYXBpLWh0dHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6QyxxQkFBNkMsZUFBZSxDQUFDLENBQUE7QUFFN0QsNEJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLDJCQUF3QixjQUFjLENBQUMsQ0FBQTtBQUd2QztJQUNFLGlCQUFtQixNQUFpQixFQUNoQixJQUFVO1FBRFgsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUNoQixTQUFJLEdBQUosSUFBSSxDQUFNO0lBQzlCLENBQUM7SUFFRCxxQkFBRyxHQUFILFVBQUksSUFBWSxFQUFFLE1BQWdCO1FBQWhCLHNCQUFnQixHQUFoQixXQUFnQjtRQUNoQyxJQUFJLGdCQUFnQixHQUFHLHdCQUFVLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM1RCxNQUFNLENBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLFNBQUksZ0JBQWtCLENBQUM7SUFDdEQsQ0FBQztJQUVELGdDQUFjLEdBQWQsVUFBZSxPQUF3QjtRQUNyQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCxxQkFBRyxHQUFILFVBQUksR0FBVyxFQUFFLE9BQXdCO1FBQ3ZDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRUQsc0JBQUksR0FBSixVQUFLLEdBQVcsRUFBRSxJQUFZLEVBQUUsT0FBd0I7UUFDdEQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBRUQscUJBQUcsR0FBSCxVQUFJLEdBQVcsRUFBRSxJQUFZLEVBQUUsT0FBd0I7UUFDckQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBRUQsdUJBQUssR0FBTCxVQUFNLEdBQVcsRUFBRSxJQUFZLEVBQUUsT0FBd0I7UUFDdkQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBRUQsd0JBQU0sR0FBTixVQUFPLEdBQVcsRUFBRSxPQUF3QjtRQUMxQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQWpDSDtRQUFDLGlCQUFVLEVBQUU7O2VBQUE7SUFrQ2IsY0FBQztBQUFELENBQUMsQUFqQ0QsSUFpQ0M7QUFqQ1ksZUFBTyxVQWlDbkIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0h0dHAsIFJlc3BvbnNlLCBSZXF1ZXN0T3B0aW9uc30gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQge0FwaUhlbHBlcnN9IGZyb20gJy4vYXBpLWhlbHBlcnMnO1xuaW1wb3J0IHtBcGlDb25maWd9IGZyb20gJy4vYXBpLWNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBcGlIdHRwIHtcbiAgY29uc3RydWN0b3IocHVibGljIGNvbmZpZzogQXBpQ29uZmlnLFxuICAgICAgICAgICAgICBwcml2YXRlIGh0dHA6IEh0dHApIHtcbiAgfVxuXG4gIHVybChwYXRoOiBzdHJpbmcsIHBhcmFtczogYW55ID0ge30pOiBzdHJpbmcge1xuICAgIGxldCBpbnRlcnBvbGF0ZWRQYXRoID0gQXBpSGVscGVycy5pbnRlcnBvbGF0ZShwYXRoLCBwYXJhbXMpO1xuICAgIHJldHVybiBgJHt0aGlzLmNvbmZpZy5iYXNlVXJsfS8ke2ludGVycG9sYXRlZFBhdGh9YDtcbiAgfVxuXG4gIHJlcXVlc3RPcHRpb25zKG9wdGlvbnM/OiBSZXF1ZXN0T3B0aW9ucyk6IFJlcXVlc3RPcHRpb25zIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcucmVxdWVzdE9wdGlvbnMubWVyZ2Uob3B0aW9ucyk7XG4gIH1cblxuICBnZXQodXJsOiBzdHJpbmcsIG9wdGlvbnM/OiBSZXF1ZXN0T3B0aW9ucyk6IE9ic2VydmFibGU8UmVzcG9uc2U+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLnVybCh1cmwpLCB0aGlzLnJlcXVlc3RPcHRpb25zKG9wdGlvbnMpKTtcbiAgfVxuXG4gIHBvc3QodXJsOiBzdHJpbmcsIGJvZHk6IHN0cmluZywgb3B0aW9ucz86IFJlcXVlc3RPcHRpb25zKTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLnVybCh1cmwpLCBib2R5LCB0aGlzLnJlcXVlc3RPcHRpb25zKG9wdGlvbnMpKTtcbiAgfVxuXG4gIHB1dCh1cmw6IHN0cmluZywgYm9keTogc3RyaW5nLCBvcHRpb25zPzogUmVxdWVzdE9wdGlvbnMpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQodGhpcy51cmwodXJsKSwgYm9keSwgdGhpcy5yZXF1ZXN0T3B0aW9ucyhvcHRpb25zKSk7XG4gIH1cblxuICBwYXRjaCh1cmw6IHN0cmluZywgYm9keTogc3RyaW5nLCBvcHRpb25zPzogUmVxdWVzdE9wdGlvbnMpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wYXRjaCh0aGlzLnVybCh1cmwpLCBib2R5LCB0aGlzLnJlcXVlc3RPcHRpb25zKG9wdGlvbnMpKTtcbiAgfVxuXG4gIGRlbGV0ZSh1cmw6IHN0cmluZywgb3B0aW9ucz86IFJlcXVlc3RPcHRpb25zKTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKHRoaXMudXJsKHVybCksIHRoaXMucmVxdWVzdE9wdGlvbnMob3B0aW9ucykpO1xuICB9XG59XG4iXX0=