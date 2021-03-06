/* tslint:disable */
/* eslint-disable */
/**
 * Notion
 * Used internally by Notion
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * Single block in page
 * @export
 * @interface Block
 */
export interface Block {
    /**
     * 
     * @type {string}
     * @memberof Block
     */
    role: string;
    /**
     * 
     * @type {Value}
     * @memberof Block
     */
    value: Value;
}
/**
 * 
 * @export
 * @interface GetRecordValuesRequests
 */
export interface GetRecordValuesRequests {
    /**
     * 
     * @type {string}
     * @memberof GetRecordValuesRequests
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof GetRecordValuesRequests
     */
    table: string;
}
/**
 * 
 * @export
 * @interface GetSignedFileUrlsUrls
 */
export interface GetSignedFileUrlsUrls {
    /**
     * 
     * @type {string}
     * @memberof GetSignedFileUrlsUrls
     */
    url: string;
    /**
     * 
     * @type {GetRecordValuesRequests}
     * @memberof GetSignedFileUrlsUrls
     */
    permissionRecord: GetRecordValuesRequests;
}
/**
 * 
 * @export
 * @interface InlineObject
 */
export interface InlineObject {
    /**
     * Notion page id
     * @type {string}
     * @memberof InlineObject
     */
    pageId: string;
    /**
     * 
     * @type {number}
     * @memberof InlineObject
     */
    limit: number;
    /**
     * 
     * @type {object}
     * @memberof InlineObject
     */
    cursor: object;
    /**
     * 
     * @type {number}
     * @memberof InlineObject
     */
    chunkNumber: number;
    /**
     * 
     * @type {boolean}
     * @memberof InlineObject
     */
    verticalColumns: boolean;
}
/**
 * 
 * @export
 * @interface InlineObject1
 */
export interface InlineObject1 {
    /**
     * 
     * @type {string}
     * @memberof InlineObject1
     */
    collectionId: string;
    /**
     * 
     * @type {string}
     * @memberof InlineObject1
     */
    collectionViewId: string;
    /**
     * 
     * @type {QueryCollectionLoader}
     * @memberof InlineObject1
     */
    loader: QueryCollectionLoader;
    /**
     * 
     * @type {QueryCollectionQuery}
     * @memberof InlineObject1
     */
    query: QueryCollectionQuery;
}
/**
 * 
 * @export
 * @interface InlineObject2
 */
export interface InlineObject2 {
    /**
     * 
     * @type {Array<GetRecordValuesRequests>}
     * @memberof InlineObject2
     */
    requests: Array<GetRecordValuesRequests>;
}
/**
 * 
 * @export
 * @interface InlineObject3
 */
export interface InlineObject3 {
    /**
     * 
     * @type {Array<GetSignedFileUrlsUrls>}
     * @memberof InlineObject3
     */
    urls: Array<GetSignedFileUrlsUrls>;
}
/**
 * 
 * @export
 * @interface InlineResponse200
 */
export interface InlineResponse200 {
    /**
     * 
     * @type {RecordMap}
     * @memberof InlineResponse200
     */
    recordMap: RecordMap;
    /**
     * 
     * @type {object}
     * @memberof InlineResponse200
     */
    cursor: object;
}
/**
 * 
 * @export
 * @interface InlineResponse2001
 */
export interface InlineResponse2001 {
    /**
     * 
     * @type {RecordMap}
     * @memberof InlineResponse2001
     */
    recordMap: RecordMap;
    /**
     * 
     * @type {Results}
     * @memberof InlineResponse2001
     */
    result: Results;
}
/**
 * 
 * @export
 * @interface InlineResponse2002
 */
export interface InlineResponse2002 {
    /**
     * 
     * @type {Array<InlineResponse2002Results>}
     * @memberof InlineResponse2002
     */
    results: Array<InlineResponse2002Results>;
}
/**
 * 
 * @export
 * @interface InlineResponse2002Results
 */
export interface InlineResponse2002Results {
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2002Results
     */
    role: string;
    /**
     * 
     * @type {InlineResponse2002Value}
     * @memberof InlineResponse2002Results
     */
    value: InlineResponse2002Value;
}
/**
 * 
 * @export
 * @interface InlineResponse2002Value
 */
export interface InlineResponse2002Value {
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2002Value
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2002Value
     */
    given_name: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2002Value
     */
    family_name: string;
}
/**
 * 
 * @export
 * @interface InlineResponse2003
 */
export interface InlineResponse2003 {
    /**
     * 
     * @type {Array<string>}
     * @memberof InlineResponse2003
     */
    signedUrls: Array<string>;
}
/**
 * 
 * @export
 * @interface QueryCollectionLoader
 */
export interface QueryCollectionLoader {
    /**
     * 
     * @type {number}
     * @memberof QueryCollectionLoader
     */
    limit?: number;
    /**
     * 
     * @type {boolean}
     * @memberof QueryCollectionLoader
     */
    loadContentCover?: boolean;
    /**
     * 
     * @type {string}
     * @memberof QueryCollectionLoader
     */
    type?: QueryCollectionLoaderTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof QueryCollectionLoader
     */
    userTimeZone?: string;
}

/**
    * @export
    * @enum {string}
    */
export enum QueryCollectionLoaderTypeEnum {
    Table = 'table'
}

/**
 * 
 * @export
 * @interface QueryCollectionQuery
 */
export interface QueryCollectionQuery {
    /**
     * 
     * @type {Array<QueryCollectionQueryAggregations>}
     * @memberof QueryCollectionQuery
     */
    aggregations: Array<QueryCollectionQueryAggregations>;
    /**
     * 
     * @type {Array<QueryCollectionQuerySort>}
     * @memberof QueryCollectionQuery
     */
    sort?: Array<QueryCollectionQuerySort>;
}
/**
 * 
 * @export
 * @interface QueryCollectionQueryAggregations
 */
export interface QueryCollectionQueryAggregations {
    /**
     * 
     * @type {string}
     * @memberof QueryCollectionQueryAggregations
     */
    aggregator: string;
    /**
     * 
     * @type {string}
     * @memberof QueryCollectionQueryAggregations
     */
    property: string;
}
/**
 * 
 * @export
 * @interface QueryCollectionQuerySort
 */
export interface QueryCollectionQuerySort {
    /**
     * 
     * @type {string}
     * @memberof QueryCollectionQuerySort
     */
    property: string;
    /**
     * 
     * @type {string}
     * @memberof QueryCollectionQuerySort
     */
    direction: QueryCollectionQuerySortDirectionEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum QueryCollectionQuerySortDirectionEnum {
    Descending = 'descending',
    Ascending = 'ascending'
}

/**
 * Information on a single page
 * @export
 * @interface RecordMap
 */
export interface RecordMap {
    /**
     * 
     * @type {{ [key: string]: Block; }}
     * @memberof RecordMap
     */
    block: { [key: string]: Block; };
    /**
     * 
     * @type {object}
     * @memberof RecordMap
     */
    space: object;
    /**
     * 
     * @type {object}
     * @memberof RecordMap
     */
    collection_view: object;
    /**
     * 
     * @type {{ [key: string]: Block; }}
     * @memberof RecordMap
     */
    collection: { [key: string]: Block; };
}
/**
 * The result of filtering the table
 * @export
 * @interface Results
 */
export interface Results {
    /**
     * 
     * @type {ResultsAggregationResults}
     * @memberof Results
     */
    aggregationResults: ResultsAggregationResults;
    /**
     * 
     * @type {string}
     * @memberof Results
     */
    type: ResultsTypeEnum;
    /**
     * 
     * @type {Array<string>}
     * @memberof Results
     */
    blockIds: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof Results
     */
    total: number;
}

/**
    * @export
    * @enum {string}
    */
export enum ResultsTypeEnum {
    Table = 'table'
}

/**
 * 
 * @export
 * @interface ResultsAggregationResults
 */
export interface ResultsAggregationResults {
    /**
     * 
     * @type {string}
     * @memberof ResultsAggregationResults
     */
    type?: ResultsAggregationResultsTypeEnum;
    /**
     * 
     * @type {number | string}
     * @memberof ResultsAggregationResults
     */
    value?: number | string;
}

/**
    * @export
    * @enum {string}
    */
export enum ResultsAggregationResultsTypeEnum {
    Number = 'number'
}

/**
 * Table schema
 * @export
 * @interface Schema
 */
export interface Schema {
    /**
     * 
     * @type {string}
     * @memberof Schema
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Schema
     */
    type: SchemaTypeEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum SchemaTypeEnum {
    Text = 'text',
    Date = 'date',
    Person = 'person',
    Checkbox = 'checkbox',
    Title = 'title'
}

/**
 * Information on a single block
 * @export
 * @interface Value
 */
export interface Value {
    [key: string]: object | any;

    /**
     * 
     * @type {string}
     * @memberof Value
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof Value
     */
    parent_id: string;
    /**
     * 
     * @type {string}
     * @memberof Value
     */
    collection_id?: string;
    /**
     * 
     * @type {string}
     * @memberof Value
     */
    type: ValueTypeEnum;
    /**
     * 
     * @type {{ [key: string]: Schema; }}
     * @memberof Value
     */
    schema?: { [key: string]: Schema; };
    /**
     * Properties of table row
     * @type {{ [key: string]: object; }}
     * @memberof Value
     */
    properties?: { [key: string]: object; };
}

/**
    * @export
    * @enum {string}
    */
export enum ValueTypeEnum {
    Page = 'page',
    Tweet = 'tweet',
    CollectionView = 'collection_view',
    Table = 'table',
    BulletedList = 'bulleted_list',
    NumberedList = 'numbered_list',
    Divider = 'divider',
    Text = 'text',
    Image = 'image',
    Video = 'video',
    Embed = 'embed',
    Header = 'header',
    SubHeader = 'sub_header',
    SubSubHeader = 'sub_sub_header',
    Code = 'code',
    Quote = 'quote',
    Callout = 'callout',
    Equation = 'equation'
}


/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get various information from id & table
         * @param {InlineObject2} inlineObject2 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRecordValues: async (inlineObject2: InlineObject2, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'inlineObject2' is not null or undefined
            assertParamExists('getRecordValues', 'inlineObject2', inlineObject2)
            const localVarPath = `/getRecordValues`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(inlineObject2, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get endpoint to asset file
         * @param {InlineObject3} inlineObject3 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSignedFileUrls: async (inlineObject3: InlineObject3, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'inlineObject3' is not null or undefined
            assertParamExists('getSignedFileUrls', 'inlineObject3', inlineObject3)
            const localVarPath = `/getSignedFileUrls`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(inlineObject3, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get page data
         * @param {InlineObject} inlineObject 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        loadPageChunk: async (inlineObject: InlineObject, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'inlineObject' is not null or undefined
            assertParamExists('loadPageChunk', 'inlineObject', inlineObject)
            const localVarPath = `/loadPageChunk`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(inlineObject, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get table data
         * @param {InlineObject1} inlineObject1 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        queryCollection: async (inlineObject1: InlineObject1, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'inlineObject1' is not null or undefined
            assertParamExists('queryCollection', 'inlineObject1', inlineObject1)
            const localVarPath = `/queryCollection`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(inlineObject1, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DefaultApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Get various information from id & table
         * @param {InlineObject2} inlineObject2 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRecordValues(inlineObject2: InlineObject2, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse2002>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRecordValues(inlineObject2, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get endpoint to asset file
         * @param {InlineObject3} inlineObject3 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSignedFileUrls(inlineObject3: InlineObject3, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse2003>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSignedFileUrls(inlineObject3, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get page data
         * @param {InlineObject} inlineObject 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async loadPageChunk(inlineObject: InlineObject, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse200>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.loadPageChunk(inlineObject, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get table data
         * @param {InlineObject1} inlineObject1 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async queryCollection(inlineObject1: InlineObject1, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse2001>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.queryCollection(inlineObject1, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DefaultApiFp(configuration)
    return {
        /**
         * 
         * @summary Get various information from id & table
         * @param {InlineObject2} inlineObject2 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRecordValues(inlineObject2: InlineObject2, options?: any): AxiosPromise<InlineResponse2002> {
            return localVarFp.getRecordValues(inlineObject2, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get endpoint to asset file
         * @param {InlineObject3} inlineObject3 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSignedFileUrls(inlineObject3: InlineObject3, options?: any): AxiosPromise<InlineResponse2003> {
            return localVarFp.getSignedFileUrls(inlineObject3, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get page data
         * @param {InlineObject} inlineObject 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        loadPageChunk(inlineObject: InlineObject, options?: any): AxiosPromise<InlineResponse200> {
            return localVarFp.loadPageChunk(inlineObject, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get table data
         * @param {InlineObject1} inlineObject1 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        queryCollection(inlineObject1: InlineObject1, options?: any): AxiosPromise<InlineResponse2001> {
            return localVarFp.queryCollection(inlineObject1, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
    /**
     * 
     * @summary Get various information from id & table
     * @param {InlineObject2} inlineObject2 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public getRecordValues(inlineObject2: InlineObject2, options?: any) {
        return DefaultApiFp(this.configuration).getRecordValues(inlineObject2, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get endpoint to asset file
     * @param {InlineObject3} inlineObject3 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public getSignedFileUrls(inlineObject3: InlineObject3, options?: any) {
        return DefaultApiFp(this.configuration).getSignedFileUrls(inlineObject3, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get page data
     * @param {InlineObject} inlineObject 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public loadPageChunk(inlineObject: InlineObject, options?: any) {
        return DefaultApiFp(this.configuration).loadPageChunk(inlineObject, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get table data
     * @param {InlineObject1} inlineObject1 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public queryCollection(inlineObject1: InlineObject1, options?: any) {
        return DefaultApiFp(this.configuration).queryCollection(inlineObject1, options).then((request) => request(this.axios, this.basePath));
    }
}


