"use strict";
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var api_helpers_1 = require('./api-helpers');
var ApiService = (function () {
    function ApiService(http, path, config) {
        if (config === void 0) { config = {}; }
        this.http = http;
        this.path = path;
        this.config = config;
    }
    ApiService.prototype.serialize = function (model) {
        return JSON.stringify(model);
    };
    ApiService.prototype.deserialize = function (data) {
        return (this.config.objectRoot ? data[this.config.objectRoot] || data : data);
    };
    ApiService.prototype.extractArray = function (data) {
        return (this.config.arrayRoot ? data[this.config.arrayRoot] : data);
    };
    ApiService.prototype.find = function (id) {
        var _this = this;
        var requestOptions = new http_1.RequestOptions({ body: '' });
        return this.http.get(api_helpers_1.ApiHelpers.interpolate(this.path + "/:id", { id: id }), requestOptions).map(function (res) { return _this.deserialize(res.json()); });
    };
    ApiService.prototype.findAll = function (search) {
        var _this = this;
        var interpolatedPath = api_helpers_1.ApiHelpers.interpolate(this.path, search, true);
        var requestOptions = new http_1.RequestOptions({
            body: '',
            search: api_helpers_1.ApiHelpers.toSearch(search)
        });
        return this.http.get(interpolatedPath, requestOptions).map(function (res) {
            return _this.extractArray(res.json()).map(function (item) {
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
        var requestOptions = new http_1.RequestOptions({ body: '' });
        return this.http.delete(api_helpers_1.ApiHelpers.interpolate(this.path + "/:id", model), requestOptions).map(function (res) { return res.ok; });
    };
    return ApiService;
}());
exports.ApiService = ApiService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLXNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvYXBpLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUF1QyxlQUFlLENBQUMsQ0FBQTtBQUV2RCxRQUFPLHVCQUF1QixDQUFDLENBQUE7QUFDL0IsNEJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBR3pDO0lBR0Usb0JBQXNCLElBQWEsRUFDYixJQUFZLEVBQ3RCLE1BQWdCO1FBQWhCLHNCQUFnQixHQUFoQixXQUFnQjtRQUZOLFNBQUksR0FBSixJQUFJLENBQVM7UUFDYixTQUFJLEdBQUosSUFBSSxDQUFRO1FBRWhDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCw4QkFBUyxHQUFULFVBQVUsS0FBUTtRQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsZ0NBQVcsR0FBWCxVQUFZLElBQVM7UUFDbkIsTUFBTSxDQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUUsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ2pGLENBQUM7SUFFRCxpQ0FBWSxHQUFaLFVBQWEsSUFBUztRQUNwQixNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRUQseUJBQUksR0FBSixVQUFLLEVBQWlCO1FBQXRCLGlCQU9DO1FBTkMsSUFBSSxjQUFjLEdBQUcsSUFBSSxxQkFBYyxDQUFDLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBQyxDQUFDLENBQUM7UUFFcEQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUNsQix3QkFBVSxDQUFDLFdBQVcsQ0FBSSxJQUFJLENBQUMsSUFBSSxTQUFNLEVBQUUsRUFBQyxJQUFBLEVBQUUsRUFBQyxDQUFDLEVBQ2hELGNBQWMsQ0FDZixDQUFDLEdBQUcsQ0FBQyxVQUFDLEdBQWEsSUFBSyxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQTVCLENBQTRCLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRUQsNEJBQU8sR0FBUCxVQUFRLE1BQVk7UUFBcEIsaUJBZUM7UUFkQyxJQUFJLGdCQUFnQixHQUFHLHdCQUFVLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3ZFLElBQUksY0FBYyxHQUFHLElBQUkscUJBQWMsQ0FBQztZQUN0QyxJQUFJLEVBQUUsRUFBRTtZQUNSLE1BQU0sRUFBRSx3QkFBVSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7U0FDcEMsQ0FBQyxDQUFDO1FBRUgsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUNsQixnQkFBZ0IsRUFDaEIsY0FBYyxDQUNmLENBQUMsR0FBRyxDQUFDLFVBQUMsR0FBYTtZQUNsQixNQUFNLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxJQUFTO2dCQUNqRCxNQUFNLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoQyxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELDJCQUFNLEdBQU4sVUFBTyxLQUFRO1FBQWYsaUJBR0M7UUFGQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3BELEdBQUcsQ0FBQyxVQUFDLEdBQWEsSUFBSyxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQTVCLENBQTRCLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQsMkJBQU0sR0FBTixVQUFPLEtBQVE7UUFBZixpQkFLQztRQUpDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDbEIsd0JBQVUsQ0FBQyxXQUFXLENBQUksSUFBSSxDQUFDLElBQUksU0FBTSxFQUFFLEtBQUssQ0FBQyxFQUNqRCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUN0QixDQUFDLEdBQUcsQ0FBQyxVQUFDLEdBQWEsSUFBSyxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQTVCLENBQTRCLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRUQsMkJBQU0sR0FBTixVQUFPLEtBQVE7UUFDYixJQUFJLGNBQWMsR0FBRyxJQUFJLHFCQUFjLENBQUMsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFDLENBQUMsQ0FBQztRQUVwRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQ3JCLHdCQUFVLENBQUMsV0FBVyxDQUFJLElBQUksQ0FBQyxJQUFJLFNBQU0sRUFBRSxLQUFLLENBQUMsRUFDakQsY0FBYyxDQUNmLENBQUMsR0FBRyxDQUFDLFVBQUMsR0FBYSxJQUFLLE9BQUEsR0FBRyxDQUFDLEVBQUUsRUFBTixDQUFNLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQUFDLEFBbkVELElBbUVDO0FBbkVZLGtCQUFVLGFBbUV0QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtSZXNwb25zZSwgUmVxdWVzdE9wdGlvbnN9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuaW1wb3J0IHtBcGlIZWxwZXJzfSBmcm9tICcuL2FwaS1oZWxwZXJzJztcbmltcG9ydCB7QXBpSHR0cH0gZnJvbSAnLi9hcGktaHR0cCc7XG5cbmV4cG9ydCBjbGFzcyBBcGlTZXJ2aWNlPFQ+IHtcbiAgY29uZmlnOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGh0dHA6IEFwaUh0dHAsXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBwYXRoOiBzdHJpbmcsXG4gICAgICAgICAgICAgIGNvbmZpZzogYW55ID0ge30pIHtcbiAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgfVxuXG4gIHNlcmlhbGl6ZShtb2RlbDogVCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG1vZGVsKTtcbiAgfVxuXG4gIGRlc2VyaWFsaXplKGRhdGE6IGFueSk6IFQge1xuICAgIHJldHVybiA8VD4odGhpcy5jb25maWcub2JqZWN0Um9vdCA/IGRhdGFbdGhpcy5jb25maWcub2JqZWN0Um9vdF18fGRhdGEgOiBkYXRhKTtcbiAgfVxuXG4gIGV4dHJhY3RBcnJheShkYXRhOiBhbnkpOiBhbnkge1xuICAgIHJldHVybiAodGhpcy5jb25maWcuYXJyYXlSb290ID8gZGF0YVt0aGlzLmNvbmZpZy5hcnJheVJvb3RdIDogZGF0YSk7XG4gIH1cblxuICBmaW5kKGlkOiBudW1iZXJ8c3RyaW5nKTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgbGV0IHJlcXVlc3RPcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHtib2R5OiAnJ30pO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoXG4gICAgICBBcGlIZWxwZXJzLmludGVycG9sYXRlKGAke3RoaXMucGF0aH0vOmlkYCwge2lkfSksXG4gICAgICByZXF1ZXN0T3B0aW9uc1xuICAgICkubWFwKChyZXM6IFJlc3BvbnNlKSA9PiB0aGlzLmRlc2VyaWFsaXplKHJlcy5qc29uKCkpKTtcbiAgfVxuXG4gIGZpbmRBbGwoc2VhcmNoPzogYW55KTogT2JzZXJ2YWJsZTxUW10+IHtcbiAgICBsZXQgaW50ZXJwb2xhdGVkUGF0aCA9IEFwaUhlbHBlcnMuaW50ZXJwb2xhdGUodGhpcy5wYXRoLCBzZWFyY2gsIHRydWUpO1xuICAgIGxldCByZXF1ZXN0T3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7XG4gICAgICBib2R5OiAnJyxcbiAgICAgIHNlYXJjaDogQXBpSGVscGVycy50b1NlYXJjaChzZWFyY2gpXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChcbiAgICAgIGludGVycG9sYXRlZFBhdGgsXG4gICAgICByZXF1ZXN0T3B0aW9uc1xuICAgICkubWFwKChyZXM6IFJlc3BvbnNlKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5leHRyYWN0QXJyYXkocmVzLmpzb24oKSkubWFwKChpdGVtOiBhbnkpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVzZXJpYWxpemUoaXRlbSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZShtb2RlbDogVCk6IE9ic2VydmFibGU8VD4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLnBhdGgsIHRoaXMuc2VyaWFsaXplKG1vZGVsKSlcbiAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IHRoaXMuZGVzZXJpYWxpemUocmVzLmpzb24oKSkpO1xuICB9XG5cbiAgdXBkYXRlKG1vZGVsOiBUKTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQoXG4gICAgICBBcGlIZWxwZXJzLmludGVycG9sYXRlKGAke3RoaXMucGF0aH0vOmlkYCwgbW9kZWwpLFxuICAgICAgdGhpcy5zZXJpYWxpemUobW9kZWwpXG4gICAgKS5tYXAoKHJlczogUmVzcG9uc2UpID0+IHRoaXMuZGVzZXJpYWxpemUocmVzLmpzb24oKSkpO1xuICB9XG5cbiAgZGVsZXRlKG1vZGVsOiBUKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgbGV0IHJlcXVlc3RPcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHtib2R5OiAnJ30pO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUoXG4gICAgICBBcGlIZWxwZXJzLmludGVycG9sYXRlKGAke3RoaXMucGF0aH0vOmlkYCwgbW9kZWwpLFxuICAgICAgcmVxdWVzdE9wdGlvbnNcbiAgICApLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLm9rKTtcbiAgfVxufVxuIl19