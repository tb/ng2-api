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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLXNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcGktc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQXVDLGVBQWUsQ0FBQyxDQUFBO0FBRXZELFFBQU8sdUJBQXVCLENBQUMsQ0FBQTtBQUMvQiw0QkFBeUIsZUFBZSxDQUFDLENBQUE7QUFHekM7SUFDRSxvQkFBc0IsSUFBYSxFQUNiLElBQVk7UUFEWixTQUFJLEdBQUosSUFBSSxDQUFTO1FBQ2IsU0FBSSxHQUFKLElBQUksQ0FBUTtJQUNsQyxDQUFDO0lBRUQsOEJBQVMsR0FBVCxVQUFVLEtBQVE7UUFDaEIsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELGdDQUFXLEdBQVgsVUFBWSxJQUFTO1FBQ25CLE1BQU0sQ0FBSSxJQUFJLENBQUM7SUFDakIsQ0FBQztJQUVELHlCQUFJLEdBQUosVUFBSyxFQUFpQjtRQUF0QixpQkFJQztRQUhDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDbEIsd0JBQVUsQ0FBQyxXQUFXLENBQUksSUFBSSxDQUFDLElBQUksU0FBTSxFQUFFLEVBQUMsSUFBQSxFQUFFLEVBQUMsQ0FBQyxDQUNqRCxDQUFDLEdBQUcsQ0FBQyxVQUFDLEdBQWEsSUFBSyxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQTVCLENBQTRCLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRUQsNEJBQU8sR0FBUCxVQUFRLE1BQVk7UUFBcEIsaUJBWUM7UUFYQyxJQUFJLGdCQUFnQixHQUFHLHdCQUFVLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3ZFLElBQUksY0FBYyxHQUFHLElBQUkscUJBQWMsQ0FBQyxFQUFDLE1BQU0sRUFBRSx3QkFBVSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBQyxDQUFDLENBQUM7UUFFL0UsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUNsQixnQkFBZ0IsRUFDaEIsY0FBYyxDQUNmLENBQUMsR0FBRyxDQUFDLFVBQUMsR0FBYTtZQUNsQixNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFDLElBQVM7Z0JBQzlCLE1BQU0sQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2hDLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsMkJBQU0sR0FBTixVQUFPLEtBQVE7UUFBZixpQkFHQztRQUZDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDcEQsR0FBRyxDQUFDLFVBQUMsR0FBYSxJQUFLLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBNUIsQ0FBNEIsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRCwyQkFBTSxHQUFOLFVBQU8sS0FBUTtRQUFmLGlCQUtDO1FBSkMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUNsQix3QkFBVSxDQUFDLFdBQVcsQ0FBSSxJQUFJLENBQUMsSUFBSSxTQUFNLEVBQUUsS0FBSyxDQUFDLEVBQ2pELElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQ3RCLENBQUMsR0FBRyxDQUFDLFVBQUMsR0FBYSxJQUFLLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBNUIsQ0FBNEIsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRCwyQkFBTSxHQUFOLFVBQU8sS0FBUTtRQUNiLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FDckIsd0JBQVUsQ0FBQyxXQUFXLENBQUksSUFBSSxDQUFDLElBQUksU0FBTSxFQUFFLEtBQUssQ0FBQyxDQUNsRCxDQUFDLEdBQUcsQ0FBQyxVQUFDLEdBQWEsSUFBSyxPQUFBLEdBQUcsQ0FBQyxFQUFFLEVBQU4sQ0FBTSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUNILGlCQUFDO0FBQUQsQ0FBQyxBQWxERCxJQWtEQztBQWxEWSxrQkFBVSxhQWtEdEIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UmVzcG9uc2UsIFJlcXVlc3RPcHRpb25zfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcbmltcG9ydCB7QXBpSGVscGVyc30gZnJvbSAnLi9hcGktaGVscGVycyc7XG5pbXBvcnQge0FwaUh0dHB9IGZyb20gJy4vYXBpLWh0dHAnO1xuXG5leHBvcnQgY2xhc3MgQXBpU2VydmljZTxUPiB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBodHRwOiBBcGlIdHRwLFxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgcGF0aDogc3RyaW5nKSB7XG4gIH1cblxuICBzZXJpYWxpemUobW9kZWw6IFQpOiBzdHJpbmcge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShtb2RlbCk7XG4gIH1cblxuICBkZXNlcmlhbGl6ZShkYXRhOiBhbnkpOiBUIHtcbiAgICByZXR1cm4gPFQ+ZGF0YTtcbiAgfVxuXG4gIGZpbmQoaWQ6IG51bWJlcnxzdHJpbmcpOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChcbiAgICAgIEFwaUhlbHBlcnMuaW50ZXJwb2xhdGUoYCR7dGhpcy5wYXRofS86aWRgLCB7aWR9KVxuICAgICkubWFwKChyZXM6IFJlc3BvbnNlKSA9PiB0aGlzLmRlc2VyaWFsaXplKHJlcy5qc29uKCkpKTtcbiAgfVxuXG4gIGZpbmRBbGwoc2VhcmNoPzogYW55KTogT2JzZXJ2YWJsZTxUW10+IHtcbiAgICBsZXQgaW50ZXJwb2xhdGVkUGF0aCA9IEFwaUhlbHBlcnMuaW50ZXJwb2xhdGUodGhpcy5wYXRoLCBzZWFyY2gsIHRydWUpO1xuICAgIGxldCByZXF1ZXN0T3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7c2VhcmNoOiBBcGlIZWxwZXJzLnRvU2VhcmNoKHNlYXJjaCl9KTtcblxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KFxuICAgICAgaW50ZXJwb2xhdGVkUGF0aCxcbiAgICAgIHJlcXVlc3RPcHRpb25zXG4gICAgKS5tYXAoKHJlczogUmVzcG9uc2UpID0+IHtcbiAgICAgIHJldHVybiByZXMuanNvbigpLm1hcCgoaXRlbTogYW55KSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlc2VyaWFsaXplKGl0ZW0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGUobW9kZWw6IFQpOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5wYXRoLCB0aGlzLnNlcmlhbGl6ZShtb2RlbCkpXG4gICAgICAubWFwKChyZXM6IFJlc3BvbnNlKSA9PiB0aGlzLmRlc2VyaWFsaXplKHJlcy5qc29uKCkpKTtcbiAgfVxuXG4gIHVwZGF0ZShtb2RlbDogVCk6IE9ic2VydmFibGU8VD4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAucHV0KFxuICAgICAgQXBpSGVscGVycy5pbnRlcnBvbGF0ZShgJHt0aGlzLnBhdGh9LzppZGAsIG1vZGVsKSxcbiAgICAgIHRoaXMuc2VyaWFsaXplKG1vZGVsKVxuICAgICkubWFwKChyZXM6IFJlc3BvbnNlKSA9PiB0aGlzLmRlc2VyaWFsaXplKHJlcy5qc29uKCkpKTtcbiAgfVxuXG4gIGRlbGV0ZShtb2RlbDogVCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKFxuICAgICAgQXBpSGVscGVycy5pbnRlcnBvbGF0ZShgJHt0aGlzLnBhdGh9LzppZGAsIG1vZGVsKVxuICAgICkubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMub2spO1xuICB9XG59XG4iXX0=