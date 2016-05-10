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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLWhlbHBlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcGktaGVscGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQThCLGVBQWUsQ0FBQyxDQUFBO0FBQzlDLFFBQU8sdUJBQXVCLENBQUMsQ0FBQTtBQUUvQjtJQUFBO0lBeUJBLENBQUM7SUF4QlEsc0JBQVcsR0FBbEIsVUFBbUIsTUFBYyxFQUFFLE1BQVcsRUFBRSxXQUE0QjtRQUE1QiwyQkFBNEIsR0FBNUIsbUJBQTRCO1FBQzFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLHFCQUFxQixFQUFFLFVBQUMsS0FBSyxFQUFFLEdBQUc7WUFDdEQsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQy9CLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDeEIsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztvQkFDaEIsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3JCLENBQUM7Z0JBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUNmLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ2YsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLG1CQUFRLEdBQWYsVUFBZ0IsTUFBVztRQUN6QixJQUFJLGVBQWUsR0FBRyxJQUFJLHNCQUFlLEVBQUUsQ0FBQztRQUM1QyxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN4QixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDWixlQUFlLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN4QyxDQUFDO1FBQ0gsQ0FBQztRQUNELE1BQU0sQ0FBQyxlQUFlLENBQUM7SUFDekIsQ0FBQztJQUNILGlCQUFDO0FBQUQsQ0FBQyxBQXpCRCxJQXlCQztBQXpCWSxrQkFBVSxhQXlCdEIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VVJMU2VhcmNoUGFyYW1zfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcblxuZXhwb3J0IGNsYXNzIEFwaUhlbHBlcnMge1xuICBzdGF0aWMgaW50ZXJwb2xhdGUoc3RyaW5nOiBzdHJpbmcsIHBhcmFtczogYW55LCBkZWxldGVQYXJhbTogYm9vbGVhbiA9IGZhbHNlKTogc3RyaW5nIHtcbiAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoLzooW2EtekEtWl0rW1xcdy1dKikvZywgKG1hdGNoLCBrZXkpID0+IHtcbiAgICAgIGlmIChwYXJhbXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBsZXQgdmFsdWUgPSBwYXJhbXNba2V5XTtcbiAgICAgICAgaWYgKGRlbGV0ZVBhcmFtKSB7XG4gICAgICAgICAgZGVsZXRlIHBhcmFtc1trZXldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBtYXRjaDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyB0b1NlYXJjaChwYXJhbXM6IGFueSk6IFVSTFNlYXJjaFBhcmFtcyB7XG4gICAgbGV0IHVybFNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcbiAgICBmb3IgKGxldCBrZXkgaW4gcGFyYW1zKSB7XG4gICAgICBsZXQgdmFsdWUgPSBwYXJhbXNba2V5XTtcbiAgICAgIGlmICghIXZhbHVlKSB7XG4gICAgICAgIHVybFNlYXJjaFBhcmFtcy5zZXQoa2V5LCBwYXJhbXNba2V5XSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB1cmxTZWFyY2hQYXJhbXM7XG4gIH1cbn1cbiJdfQ==