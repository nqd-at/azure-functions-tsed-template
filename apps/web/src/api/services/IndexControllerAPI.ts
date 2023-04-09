/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class IndexControllerAPI {

    /**
     * @returns string Success
     * @throws ApiError
     */
    public static indexControllerRenderHello(): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/rest',
        });
    }

    /**
     * @returns string Success
     * @throws ApiError
     */
    public static indexControllerRenderHelloName({
        name,
    }: {
        name: string,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/rest/{name}',
            path: {
                'name': name,
            },
        });
    }

}
