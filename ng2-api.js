"use strict";
var http_1 = require('angular2/http');
var ApiHelpers = (function () {
    function ApiHelpers() {
    }
    ApiHelpers.interpolate = function (string, params, deleteParam) {
        if (deleteParam === void 0) { deleteParam = false; }
        return string.replace(/:([a-zA-Z]+[\w-]*)/g, function (match, key) {
            if (params.hasOwnProperty(key)) {
                if (deleteParam) {
                    delete params[key];
                }
                return params[key];
            }
            else {
                return match;
            }
        });
    };
    ApiHelpers.toSearch = function (params) {
        var urlSearchParams = new http_1.URLSearchParams();
        for (var key in params) {
            var value = params[key];
            if (!!value) {
                urlSearchParams.set(key, params[key]);
            }
        }
        return urlSearchParams;
    };
    return ApiHelpers;
}());
var ApiService = (function () {
    function ApiService(http, apiUrl, path) {
        this.http = http;
        this.apiUrl = apiUrl;
        this.path = path;
    }
    ApiService.prototype.url = function (path, params) {
        if (params === void 0) { params = {}; }
        var interpolatedPath = ApiHelpers.interpolate(path, params);
        return this.apiUrl + "/" + interpolatedPath;
    };
    ApiService.prototype.requestOptions = function () {
        var headers = new http_1.Headers();
        headers.set('Content-Type', 'application/json');
        return new http_1.RequestOptions({ headers: headers });
    };
    ApiService.prototype.serialize = function (model) {
        return JSON.stringify(model);
    };
    ApiService.prototype.deserialize = function (res) {
        var data = res.json();
        if (data && Array === data.constructor) {
            return data.map(function (item) { return item; });
        }
        else {
            return data;
        }
    };
    ApiService.prototype.find = function (id) {
        return this.http.get(this.url(this.path + "/:id", { id: id }), this.requestOptions()).map(this.deserialize);
    };
    ApiService.prototype.findAll = function (search) {
        var interpolatedPath = ApiHelpers.interpolate(this.path, search, true);
        var requestOptions = new http_1.RequestOptions({
            search: ApiHelpers.toSearch(search)
        });
        return this.http.get(this.url(interpolatedPath), this.requestOptions().merge(requestOptions)).map(this.deserialize);
    };
    ApiService.prototype.create = function (model) {
        return this.http.post(this.url(this.path), this.serialize(model), this.requestOptions()).map(this.deserialize);
    };
    ApiService.prototype.update = function (model) {
        return this.http.put(this.url(this.path + "/:id", model), this.serialize(model), this.requestOptions()).map(this.deserialize);
    };
    ApiService.prototype.delete = function (model) {
        return this.http.delete(this.url(this.path + "/:id", model), this.requestOptions()).map(function (res) { return res.ok; });
    };
    return ApiService;
}());
exports.ApiService = ApiService;
//# sourceMappingURL=ng2-api.js.map