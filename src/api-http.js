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
