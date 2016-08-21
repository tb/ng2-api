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
        var requestOptions = new http_1.RequestOptions({ body: '' });
        return this.http.delete(api_helpers_1.ApiHelpers.interpolate(this.path + "/:id", model), requestOptions).map(function (res) { return res.ok; });
    };
    return ApiService;
}());
exports.ApiService = ApiService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLXNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvYXBpLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUF1QyxlQUFlLENBQUMsQ0FBQTtBQUV2RCxRQUFPLHVCQUF1QixDQUFDLENBQUE7QUFDL0IsNEJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBR3pDO0lBQ0Usb0JBQXNCLElBQWEsRUFDYixJQUFZO1FBRFosU0FBSSxHQUFKLElBQUksQ0FBUztRQUNiLFNBQUksR0FBSixJQUFJLENBQVE7SUFDbEMsQ0FBQztJQUVELDhCQUFTLEdBQVQsVUFBVSxLQUFRO1FBQ2hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxnQ0FBVyxHQUFYLFVBQVksSUFBUztRQUNuQixNQUFNLENBQUksSUFBSSxDQUFDO0lBQ2pCLENBQUM7SUFFRCx5QkFBSSxHQUFKLFVBQUssRUFBaUI7UUFBdEIsaUJBT0M7UUFOQyxJQUFJLGNBQWMsR0FBRyxJQUFJLHFCQUFjLENBQUMsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFDLENBQUMsQ0FBQztRQUVwRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQ2xCLHdCQUFVLENBQUMsV0FBVyxDQUFJLElBQUksQ0FBQyxJQUFJLFNBQU0sRUFBRSxFQUFDLElBQUEsRUFBRSxFQUFDLENBQUMsRUFDaEQsY0FBYyxDQUNmLENBQUMsR0FBRyxDQUFDLFVBQUMsR0FBYSxJQUFLLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBNUIsQ0FBNEIsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRCw0QkFBTyxHQUFQLFVBQVEsTUFBWTtRQUFwQixpQkFlQztRQWRDLElBQUksZ0JBQWdCLEdBQUcsd0JBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdkUsSUFBSSxjQUFjLEdBQUcsSUFBSSxxQkFBYyxDQUFDO1lBQ3RDLElBQUksRUFBRSxFQUFFO1lBQ1IsTUFBTSxFQUFFLHdCQUFVLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztTQUNwQyxDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQ2xCLGdCQUFnQixFQUNoQixjQUFjLENBQ2YsQ0FBQyxHQUFHLENBQUMsVUFBQyxHQUFhO1lBQ2xCLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBUztnQkFDOUIsTUFBTSxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEMsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCwyQkFBTSxHQUFOLFVBQU8sS0FBUTtRQUFmLGlCQUdDO1FBRkMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNwRCxHQUFHLENBQUMsVUFBQyxHQUFhLElBQUssT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUE1QixDQUE0QixDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVELDJCQUFNLEdBQU4sVUFBTyxLQUFRO1FBQWYsaUJBS0M7UUFKQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQ2xCLHdCQUFVLENBQUMsV0FBVyxDQUFJLElBQUksQ0FBQyxJQUFJLFNBQU0sRUFBRSxLQUFLLENBQUMsRUFDakQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FDdEIsQ0FBQyxHQUFHLENBQUMsVUFBQyxHQUFhLElBQUssT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUE1QixDQUE0QixDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVELDJCQUFNLEdBQU4sVUFBTyxLQUFRO1FBQ2IsSUFBSSxjQUFjLEdBQUcsSUFBSSxxQkFBYyxDQUFDLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBQyxDQUFDLENBQUM7UUFFcEQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUNyQix3QkFBVSxDQUFDLFdBQVcsQ0FBSSxJQUFJLENBQUMsSUFBSSxTQUFNLEVBQUUsS0FBSyxDQUFDLEVBQ2pELGNBQWMsQ0FDZixDQUFDLEdBQUcsQ0FBQyxVQUFDLEdBQWEsSUFBSyxPQUFBLEdBQUcsQ0FBQyxFQUFFLEVBQU4sQ0FBTSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUNILGlCQUFDO0FBQUQsQ0FBQyxBQTNERCxJQTJEQztBQTNEWSxrQkFBVSxhQTJEdEIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UmVzcG9uc2UsIFJlcXVlc3RPcHRpb25zfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcbmltcG9ydCB7QXBpSGVscGVyc30gZnJvbSAnLi9hcGktaGVscGVycyc7XG5pbXBvcnQge0FwaUh0dHB9IGZyb20gJy4vYXBpLWh0dHAnO1xuXG5leHBvcnQgY2xhc3MgQXBpU2VydmljZTxUPiB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBodHRwOiBBcGlIdHRwLFxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgcGF0aDogc3RyaW5nKSB7XG4gIH1cblxuICBzZXJpYWxpemUobW9kZWw6IFQpOiBzdHJpbmcge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShtb2RlbCk7XG4gIH1cblxuICBkZXNlcmlhbGl6ZShkYXRhOiBhbnkpOiBUIHtcbiAgICByZXR1cm4gPFQ+ZGF0YTtcbiAgfVxuXG4gIGZpbmQoaWQ6IG51bWJlcnxzdHJpbmcpOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICBsZXQgcmVxdWVzdE9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoe2JvZHk6ICcnfSk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChcbiAgICAgIEFwaUhlbHBlcnMuaW50ZXJwb2xhdGUoYCR7dGhpcy5wYXRofS86aWRgLCB7aWR9KSxcbiAgICAgIHJlcXVlc3RPcHRpb25zXG4gICAgKS5tYXAoKHJlczogUmVzcG9uc2UpID0+IHRoaXMuZGVzZXJpYWxpemUocmVzLmpzb24oKSkpO1xuICB9XG5cbiAgZmluZEFsbChzZWFyY2g/OiBhbnkpOiBPYnNlcnZhYmxlPFRbXT4ge1xuICAgIGxldCBpbnRlcnBvbGF0ZWRQYXRoID0gQXBpSGVscGVycy5pbnRlcnBvbGF0ZSh0aGlzLnBhdGgsIHNlYXJjaCwgdHJ1ZSk7XG4gICAgbGV0IHJlcXVlc3RPcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHtcbiAgICAgIGJvZHk6ICcnLFxuICAgICAgc2VhcmNoOiBBcGlIZWxwZXJzLnRvU2VhcmNoKHNlYXJjaClcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KFxuICAgICAgaW50ZXJwb2xhdGVkUGF0aCxcbiAgICAgIHJlcXVlc3RPcHRpb25zXG4gICAgKS5tYXAoKHJlczogUmVzcG9uc2UpID0+IHtcbiAgICAgIHJldHVybiByZXMuanNvbigpLm1hcCgoaXRlbTogYW55KSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlc2VyaWFsaXplKGl0ZW0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGUobW9kZWw6IFQpOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5wYXRoLCB0aGlzLnNlcmlhbGl6ZShtb2RlbCkpXG4gICAgICAubWFwKChyZXM6IFJlc3BvbnNlKSA9PiB0aGlzLmRlc2VyaWFsaXplKHJlcy5qc29uKCkpKTtcbiAgfVxuXG4gIHVwZGF0ZShtb2RlbDogVCk6IE9ic2VydmFibGU8VD4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAucHV0KFxuICAgICAgQXBpSGVscGVycy5pbnRlcnBvbGF0ZShgJHt0aGlzLnBhdGh9LzppZGAsIG1vZGVsKSxcbiAgICAgIHRoaXMuc2VyaWFsaXplKG1vZGVsKVxuICAgICkubWFwKChyZXM6IFJlc3BvbnNlKSA9PiB0aGlzLmRlc2VyaWFsaXplKHJlcy5qc29uKCkpKTtcbiAgfVxuXG4gIGRlbGV0ZShtb2RlbDogVCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIGxldCByZXF1ZXN0T3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7Ym9keTogJyd9KTtcblxuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKFxuICAgICAgQXBpSGVscGVycy5pbnRlcnBvbGF0ZShgJHt0aGlzLnBhdGh9LzppZGAsIG1vZGVsKSxcbiAgICAgIHJlcXVlc3RPcHRpb25zXG4gICAgKS5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5vayk7XG4gIH1cbn1cbiJdfQ==