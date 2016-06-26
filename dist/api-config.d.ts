import { RequestOptions } from '@angular/http';
export declare class ApiConfig {
    baseUrl: string;
    contentType: string;
    tokenName: string;
    authHeaderName: string;
    authHeaderPrefix: string;
    requestOptions: RequestOptions;
    constructor(config?: any);
}
