"use strict";
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var ApiHelpers = (function () {
    function ApiHelpers() {
    }
    ApiHelpers.interpolate = function (string, params, deleteParam) {
        if (deleteParam === void 0) { deleteParam = false; }
        return string.replace(/:([a-zA-Z]+[\w-]*)/g, function (match, key) {
            if (params.hasOwnProperty(key)) {
                var value = params[key];
                if (deleteParam) {
                    delete params[key];
                }
                return value;
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
exports.ApiHelpers = ApiHelpers;
