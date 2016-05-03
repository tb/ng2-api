import {URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';

export class ApiHelpers {
  static interpolate(string: string, params: any, deleteParam: boolean = false): string {
    return string.replace(/:([a-zA-Z]+[\w-]*)/g, (match, key) => {
      if (params.hasOwnProperty(key)) {
        let value = params[key];
        if (deleteParam) {
          delete params[key];
        }
        return value;
      } else {
        return match;
      }
    });
  }

  static toSearch(params: any): URLSearchParams {
    let urlSearchParams = new URLSearchParams();
    for (let key in params) {
      let value = params[key];
      if (!!value) {
        urlSearchParams.set(key, params[key]);
      }
    }
    return urlSearchParams;
  }
}