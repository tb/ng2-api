var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var Observable_1 = require('rxjs/Observable');
var Api = (function () {
    function Api() {
    }
    Api.prototype.get = function (url, params) {
        return new Observable_1.Observable();
    };
    Api.prototype.put = function (url, params, data) {
        return new Observable_1.Observable();
    };
    Api.prototype.post = function (url, params, data) {
        return new Observable_1.Observable();
    };
    Api.prototype.delete = function (url, params, data) {
        return new Observable_1.Observable();
    };
    Api = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], Api);
    return Api;
})();
exports.Api = Api;
var ApiResource = (function () {
    function ApiResource(api, path) {
        this.api = api;
        this.path = path;
    }
    ApiResource.prototype.findAll = function () {
        return this.processResponse(this.api.get("" + this.path, {}));
    };
    ApiResource.prototype.find = function (id) {
        return this.processResponse(this.api.get(this.path + "/:id", { id: id }));
    };
    ApiResource.prototype.update = function (id, model) {
        return this.processResponse(this.api.put(this.path + "/:id", { id: id }, model));
    };
    ApiResource.prototype.create = function (model) {
        return this.processResponse(this.api.post("" + this.path, {}, model));
    };
    ApiResource.prototype.delete = function (id) {
        return this.processResponse(this.api.delete(this.path + "/:id", { id: id }, {}));
    };
    ApiResource.prototype.processResponse = function (observable) {
        var _this = this;
        return observable
            .map(function (res) { return _this.processSuccessResponse(res); })
            .catch(this.processErrorResponse);
    };
    ApiResource.prototype.serialize = function (model) {
        return JSON.stringify(model);
    };
    ApiResource.prototype.deserialize = function (res) {
        return res;
    };
    ApiResource.prototype.processSuccessResponse = function (res) {
        var _this = this;
        var data = res.json();
        if (data && Array === data.constructor) {
            return data.map(function (entry) { return _this.deserialize(entry); });
        }
        else {
            return this.deserialize(data);
        }
    };
    ApiResource.prototype.processErrorResponse = function (error) {
        return Observable_1.Observable.throw(new Error(error.json().join() || 'Server error'));
    };
    return ApiResource;
})();
exports.ApiResource = ApiResource;
//# sourceMappingURL=ng2-api.js.map