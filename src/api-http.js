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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLWh0dHAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcGktaHR0cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLHFCQUE2QyxlQUFlLENBQUMsQ0FBQTtBQUU3RCw0QkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsMkJBQXdCLGNBQWMsQ0FBQyxDQUFBO0FBR3ZDO0lBQ0UsaUJBQW9CLFNBQW9CLEVBQ3BCLElBQVU7UUFEVixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLFNBQUksR0FBSixJQUFJLENBQU07SUFDOUIsQ0FBQztJQUVELHFCQUFHLEdBQUgsVUFBSSxJQUFZLEVBQUUsTUFBZ0I7UUFBaEIsc0JBQWdCLEdBQWhCLFdBQWdCO1FBQ2hDLElBQUksZ0JBQWdCLEdBQUcsd0JBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzVELE1BQU0sQ0FBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sU0FBSSxnQkFBa0IsQ0FBQztJQUN6RCxDQUFDO0lBRUQsZ0NBQWMsR0FBZCxVQUFlLE9BQXdCO1FBQ3JDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELHFCQUFHLEdBQUgsVUFBSSxHQUFXLEVBQUUsT0FBd0I7UUFDdkMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFRCxzQkFBSSxHQUFKLFVBQUssR0FBVyxFQUFFLElBQVksRUFBRSxPQUF3QjtRQUN0RCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFFRCxxQkFBRyxHQUFILFVBQUksR0FBVyxFQUFFLElBQVksRUFBRSxPQUF3QjtRQUNyRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFFRCx1QkFBSyxHQUFMLFVBQU0sR0FBVyxFQUFFLElBQVksRUFBRSxPQUF3QjtRQUN2RCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFRCx3QkFBTSxHQUFOLFVBQU8sR0FBVyxFQUFFLE9BQXdCO1FBQzFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBakNIO1FBQUMsaUJBQVUsRUFBRTs7ZUFBQTtJQWtDYixjQUFDO0FBQUQsQ0FBQyxBQWpDRCxJQWlDQztBQWpDWSxlQUFPLFVBaUNuQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SHR0cCwgUmVzcG9uc2UsIFJlcXVlc3RPcHRpb25zfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7QXBpSGVscGVyc30gZnJvbSAnLi9hcGktaGVscGVycyc7XG5pbXBvcnQge0FwaUNvbmZpZ30gZnJvbSAnLi9hcGktY29uZmlnJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFwaUh0dHAge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwaUNvbmZpZzogQXBpQ29uZmlnLFxuICAgICAgICAgICAgICBwcml2YXRlIGh0dHA6IEh0dHApIHtcbiAgfVxuXG4gIHVybChwYXRoOiBzdHJpbmcsIHBhcmFtczogYW55ID0ge30pOiBzdHJpbmcge1xuICAgIGxldCBpbnRlcnBvbGF0ZWRQYXRoID0gQXBpSGVscGVycy5pbnRlcnBvbGF0ZShwYXRoLCBwYXJhbXMpO1xuICAgIHJldHVybiBgJHt0aGlzLmFwaUNvbmZpZy5iYXNlVXJsfS8ke2ludGVycG9sYXRlZFBhdGh9YDtcbiAgfVxuXG4gIHJlcXVlc3RPcHRpb25zKG9wdGlvbnM/OiBSZXF1ZXN0T3B0aW9ucyk6IFJlcXVlc3RPcHRpb25zIHtcbiAgICByZXR1cm4gdGhpcy5hcGlDb25maWcucmVxdWVzdE9wdGlvbnMubWVyZ2Uob3B0aW9ucyk7XG4gIH1cblxuICBnZXQodXJsOiBzdHJpbmcsIG9wdGlvbnM/OiBSZXF1ZXN0T3B0aW9ucyk6IE9ic2VydmFibGU8UmVzcG9uc2U+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLnVybCh1cmwpLCB0aGlzLnJlcXVlc3RPcHRpb25zKG9wdGlvbnMpKTtcbiAgfVxuXG4gIHBvc3QodXJsOiBzdHJpbmcsIGJvZHk6IHN0cmluZywgb3B0aW9ucz86IFJlcXVlc3RPcHRpb25zKTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLnVybCh1cmwpLCBib2R5LCB0aGlzLnJlcXVlc3RPcHRpb25zKG9wdGlvbnMpKTtcbiAgfVxuXG4gIHB1dCh1cmw6IHN0cmluZywgYm9keTogc3RyaW5nLCBvcHRpb25zPzogUmVxdWVzdE9wdGlvbnMpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQodGhpcy51cmwodXJsKSwgYm9keSwgdGhpcy5yZXF1ZXN0T3B0aW9ucyhvcHRpb25zKSk7XG4gIH1cblxuICBwYXRjaCh1cmw6IHN0cmluZywgYm9keTogc3RyaW5nLCBvcHRpb25zPzogUmVxdWVzdE9wdGlvbnMpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wYXRjaCh0aGlzLnVybCh1cmwpLCBib2R5LCB0aGlzLnJlcXVlc3RPcHRpb25zKG9wdGlvbnMpKTtcbiAgfVxuXG4gIGRlbGV0ZSh1cmw6IHN0cmluZywgb3B0aW9ucz86IFJlcXVlc3RPcHRpb25zKTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKHRoaXMudXJsKHVybCksIHRoaXMucmVxdWVzdE9wdGlvbnMob3B0aW9ucykpO1xuICB9XG59XG4iXX0=