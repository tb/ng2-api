"use strict";
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var api_helpers_1 = require('./api-helpers');
var ApiService = (function () {
    function ApiService(http, path) {
        this.http = http;
        this.path = path;
    }
    ApiService.prototype.serialize = function (model) {
        return JSON.stringify(model);
    };
    ApiService.prototype.deserialize = function (data) {
        return data;
    };
    ApiService.prototype.find = function (id) {
        var _this = this;
        return this.http.get(api_helpers_1.ApiHelpers.interpolate(this.path + "/:id", { id: id })).map(function (res) { return _this.deserialize(res.json()); });
    };
    ApiService.prototype.findAll = function (search) {
        var _this = this;
        var interpolatedPath = api_helpers_1.ApiHelpers.interpolate(this.path, search, true);
        var requestOptions = new http_1.RequestOptions({ search: api_helpers_1.ApiHelpers.toSearch(search) });
        return this.http.get(interpolatedPath, requestOptions).map(function (res) {
            return res.json().map(function (item) {
                return _this.deserialize(item);
            });
        });
    };
    ApiService.prototype.create = function (model) {
        var _this = this;
        return this.http.post(this.path, this.serialize(model))
            .map(function (res) { return _this.deserialize(res.json()); });
    };
    ApiService.prototype.update = function (model) {
        var _this = this;
        return this.http.put(api_helpers_1.ApiHelpers.interpolate(this.path + "/:id", model), this.serialize(model)).map(function (res) { return _this.deserialize(res.json()); });
    };
    ApiService.prototype.delete = function (model) {
        return this.http.delete(api_helpers_1.ApiHelpers.interpolate(this.path + "/:id", model)).map(function (res) { return res.ok; });
    };
    return ApiService;
}());
exports.ApiService = ApiService;
