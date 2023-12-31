/// <reference path="./custom.d.ts" />
// tslint:disable
/**
 * backend/api/v2beta1/experiment.proto
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: version not set
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import * as url from 'url';
import * as portableFetch from 'portable-fetch';
import { Configuration } from './configuration';

const BASE_PATH = 'http://localhost'.replace(/\/+$/, '');

/**
 *
 * @export
 */
export const COLLECTION_FORMATS = {
  csv: ',',
  ssv: ' ',
  tsv: '\t',
  pipes: '|',
};

/**
 *
 * @export
 * @interface FetchAPI
 */
export interface FetchAPI {
  (url: string, init?: any): Promise<Response>;
}

/**
 *
 * @export
 * @interface FetchArgs
 */
export interface FetchArgs {
  url: string;
  options: any;
}

/**
 *
 * @export
 * @class BaseAPI
 */
export class BaseAPI {
  protected configuration: Configuration;

  constructor(
    configuration?: Configuration,
    protected basePath: string = BASE_PATH,
    protected fetch: FetchAPI = portableFetch,
  ) {
    if (configuration) {
      this.configuration = configuration;
      this.basePath = configuration.basePath || this.basePath;
    }
  }
}

/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export class RequiredError extends Error {
  name: 'RequiredError';
  constructor(public field: string, msg?: string) {
    super(msg);
  }
}

/**
 *
 * @export
 * @interface V2beta1Experiment
 */
export interface V2beta1Experiment {
  /**
   * Output. Unique experiment ID. Generated by API server.
   * @type {string}
   * @memberof V2beta1Experiment
   */
  experiment_id?: string;
  /**
   * Required input field. Unique experiment name provided by user.
   * @type {string}
   * @memberof V2beta1Experiment
   */
  display_name?: string;
  /**
   * Optional input field. Describes the purpose of the experiment.
   * @type {string}
   * @memberof V2beta1Experiment
   */
  description?: string;
  /**
   * Output. The time that the experiment was created.
   * @type {Date}
   * @memberof V2beta1Experiment
   */
  created_at?: Date;
  /**
   * Optional input field. Specify the namespace this experiment belongs to.
   * @type {string}
   * @memberof V2beta1Experiment
   */
  namespace?: string;
  /**
   * Output. Specifies whether this experiment is in archived or available state.
   * @type {V2beta1ExperimentStorageState}
   * @memberof V2beta1Experiment
   */
  storage_state?: V2beta1ExperimentStorageState;
}

/**
 * Describes whether an entity is available or archived.   - STORAGE_STATE_UNSPECIFIED: Default state. This state in not used  - AVAILABLE: Entity is available.  - ARCHIVED: Entity is archived.
 * @export
 * @enum {string}
 */
export enum V2beta1ExperimentStorageState {
  STORAGESTATEUNSPECIFIED = <any>'STORAGE_STATE_UNSPECIFIED',
  AVAILABLE = <any>'AVAILABLE',
  ARCHIVED = <any>'ARCHIVED',
}

/**
 *
 * @export
 * @interface V2beta1ListExperimentsResponse
 */
export interface V2beta1ListExperimentsResponse {
  /**
   * A list of experiments returned.
   * @type {Array<V2beta1Experiment>}
   * @memberof V2beta1ListExperimentsResponse
   */
  experiments?: Array<V2beta1Experiment>;
  /**
   * The number of experiments for the given query.
   * @type {number}
   * @memberof V2beta1ListExperimentsResponse
   */
  total_size?: number;
  /**
   * The token to list the next page of experiments.
   * @type {string}
   * @memberof V2beta1ListExperimentsResponse
   */
  next_page_token?: string;
}

/**
 * ExperimentServiceApi - fetch parameter creator
 * @export
 */
export const ExperimentServiceApiFetchParamCreator = function(configuration?: Configuration) {
  return {
    /**
     *
     * @summary Archives an experiment and the experiment's runs and recurring runs.
     * @param {string} experiment_id The ID of the experiment to be archived.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    archiveExperiment(experiment_id: string, options: any = {}): FetchArgs {
      // verify required parameter 'experiment_id' is not null or undefined
      if (experiment_id === null || experiment_id === undefined) {
        throw new RequiredError(
          'experiment_id',
          'Required parameter experiment_id was null or undefined when calling archiveExperiment.',
        );
      }
      const localVarPath = `/apis/v2beta1/experiments/{experiment_id}:archive`.replace(
        `{${'experiment_id'}}`,
        encodeURIComponent(String(experiment_id)),
      );
      const localVarUrlObj = url.parse(localVarPath, true);
      const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      localVarUrlObj.query = Object.assign(
        {},
        localVarUrlObj.query,
        localVarQueryParameter,
        options.query,
      );
      // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
      delete localVarUrlObj.search;
      localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

      return {
        url: url.format(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary Creates a new experiment.
     * @param {V2beta1Experiment} body The experiment to be created.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createExperiment(body: V2beta1Experiment, options: any = {}): FetchArgs {
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling createExperiment.',
        );
      }
      const localVarPath = `/apis/v2beta1/experiments`;
      const localVarUrlObj = url.parse(localVarPath, true);
      const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      localVarHeaderParameter['Content-Type'] = 'application/json';

      localVarUrlObj.query = Object.assign(
        {},
        localVarUrlObj.query,
        localVarQueryParameter,
        options.query,
      );
      // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
      delete localVarUrlObj.search;
      localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
      const needsSerialization =
        <any>'V2beta1Experiment' !== 'string' ||
        localVarRequestOptions.headers['Content-Type'] === 'application/json';
      localVarRequestOptions.body = needsSerialization ? JSON.stringify(body || {}) : body || '';

      return {
        url: url.format(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary Deletes an experiment without deleting the experiment's runs and recurring  runs. To avoid unexpected behaviors, delete an experiment's runs and recurring  runs before deleting the experiment.
     * @param {string} experiment_id The ID of the experiment to be deleted.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteExperiment(experiment_id: string, options: any = {}): FetchArgs {
      // verify required parameter 'experiment_id' is not null or undefined
      if (experiment_id === null || experiment_id === undefined) {
        throw new RequiredError(
          'experiment_id',
          'Required parameter experiment_id was null or undefined when calling deleteExperiment.',
        );
      }
      const localVarPath = `/apis/v2beta1/experiments/{experiment_id}`.replace(
        `{${'experiment_id'}}`,
        encodeURIComponent(String(experiment_id)),
      );
      const localVarUrlObj = url.parse(localVarPath, true);
      const localVarRequestOptions = Object.assign({ method: 'DELETE' }, options);
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      localVarUrlObj.query = Object.assign(
        {},
        localVarUrlObj.query,
        localVarQueryParameter,
        options.query,
      );
      // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
      delete localVarUrlObj.search;
      localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

      return {
        url: url.format(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary Finds a specific experiment by ID.
     * @param {string} experiment_id The ID of the experiment to be retrieved.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getExperiment(experiment_id: string, options: any = {}): FetchArgs {
      // verify required parameter 'experiment_id' is not null or undefined
      if (experiment_id === null || experiment_id === undefined) {
        throw new RequiredError(
          'experiment_id',
          'Required parameter experiment_id was null or undefined when calling getExperiment.',
        );
      }
      const localVarPath = `/apis/v2beta1/experiments/{experiment_id}`.replace(
        `{${'experiment_id'}}`,
        encodeURIComponent(String(experiment_id)),
      );
      const localVarUrlObj = url.parse(localVarPath, true);
      const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      localVarUrlObj.query = Object.assign(
        {},
        localVarUrlObj.query,
        localVarQueryParameter,
        options.query,
      );
      // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
      delete localVarUrlObj.search;
      localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

      return {
        url: url.format(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary Finds all experiments. Supports pagination, and sorting on certain fields.
     * @param {string} [page_token] A page token to request the next page of results. The token is acquried from the nextPageToken field of the response from the previous ListExperiments call or can be omitted when fetching the first page.
     * @param {number} [page_size] The number of experiments to be listed per page. If there are more experiments than this number, the response message will contain a nextPageToken field you can use to fetch the next page.
     * @param {string} [sort_by] Can be format of \&quot;field_name\&quot;, \&quot;field_name asc\&quot; or \&quot;field_name desc\&quot; Ascending by default.
     * @param {string} [filter] A url-encoded, JSON-serialized Filter protocol buffer (see [filter.proto](https://github.com/kubeflow/pipelines/blob/master/backend/api/v2beta1/api/filter.proto)).
     * @param {string} [namespace] Which namespace to filter the experiments on.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listExperiments(
      page_token?: string,
      page_size?: number,
      sort_by?: string,
      filter?: string,
      namespace?: string,
      options: any = {},
    ): FetchArgs {
      const localVarPath = `/apis/v2beta1/experiments`;
      const localVarUrlObj = url.parse(localVarPath, true);
      const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      if (page_token !== undefined) {
        localVarQueryParameter['page_token'] = page_token;
      }

      if (page_size !== undefined) {
        localVarQueryParameter['page_size'] = page_size;
      }

      if (sort_by !== undefined) {
        localVarQueryParameter['sort_by'] = sort_by;
      }

      if (filter !== undefined) {
        localVarQueryParameter['filter'] = filter;
      }

      if (namespace !== undefined) {
        localVarQueryParameter['namespace'] = namespace;
      }

      localVarUrlObj.query = Object.assign(
        {},
        localVarUrlObj.query,
        localVarQueryParameter,
        options.query,
      );
      // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
      delete localVarUrlObj.search;
      localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

      return {
        url: url.format(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary Restores an archived experiment. The experiment's archived runs and recurring runs will stay archived.
     * @param {string} experiment_id The ID of the experiment to be restored.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    unarchiveExperiment(experiment_id: string, options: any = {}): FetchArgs {
      // verify required parameter 'experiment_id' is not null or undefined
      if (experiment_id === null || experiment_id === undefined) {
        throw new RequiredError(
          'experiment_id',
          'Required parameter experiment_id was null or undefined when calling unarchiveExperiment.',
        );
      }
      const localVarPath = `/apis/v2beta1/experiments/{experiment_id}:unarchive`.replace(
        `{${'experiment_id'}}`,
        encodeURIComponent(String(experiment_id)),
      );
      const localVarUrlObj = url.parse(localVarPath, true);
      const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      localVarUrlObj.query = Object.assign(
        {},
        localVarUrlObj.query,
        localVarQueryParameter,
        options.query,
      );
      // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
      delete localVarUrlObj.search;
      localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

      return {
        url: url.format(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * ExperimentServiceApi - functional programming interface
 * @export
 */
export const ExperimentServiceApiFp = function(configuration?: Configuration) {
  return {
    /**
     *
     * @summary Archives an experiment and the experiment's runs and recurring runs.
     * @param {string} experiment_id The ID of the experiment to be archived.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    archiveExperiment(
      experiment_id: string,
      options?: any,
    ): (fetch?: FetchAPI, basePath?: string) => Promise<any> {
      const localVarFetchArgs = ExperimentServiceApiFetchParamCreator(
        configuration,
      ).archiveExperiment(experiment_id, options);
      return (fetch: FetchAPI = portableFetch, basePath: string = BASE_PATH) => {
        return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then(response => {
          if (response.status >= 200 && response.status < 300) {
            return response.json();
          } else {
            throw response;
          }
        });
      };
    },
    /**
     *
     * @summary Creates a new experiment.
     * @param {V2beta1Experiment} body The experiment to be created.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createExperiment(
      body: V2beta1Experiment,
      options?: any,
    ): (fetch?: FetchAPI, basePath?: string) => Promise<V2beta1Experiment> {
      const localVarFetchArgs = ExperimentServiceApiFetchParamCreator(
        configuration,
      ).createExperiment(body, options);
      return (fetch: FetchAPI = portableFetch, basePath: string = BASE_PATH) => {
        return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then(response => {
          if (response.status >= 200 && response.status < 300) {
            return response.json();
          } else {
            throw response;
          }
        });
      };
    },
    /**
     *
     * @summary Deletes an experiment without deleting the experiment's runs and recurring  runs. To avoid unexpected behaviors, delete an experiment's runs and recurring  runs before deleting the experiment.
     * @param {string} experiment_id The ID of the experiment to be deleted.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteExperiment(
      experiment_id: string,
      options?: any,
    ): (fetch?: FetchAPI, basePath?: string) => Promise<any> {
      const localVarFetchArgs = ExperimentServiceApiFetchParamCreator(
        configuration,
      ).deleteExperiment(experiment_id, options);
      return (fetch: FetchAPI = portableFetch, basePath: string = BASE_PATH) => {
        return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then(response => {
          if (response.status >= 200 && response.status < 300) {
            return response.json();
          } else {
            throw response;
          }
        });
      };
    },
    /**
     *
     * @summary Finds a specific experiment by ID.
     * @param {string} experiment_id The ID of the experiment to be retrieved.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getExperiment(
      experiment_id: string,
      options?: any,
    ): (fetch?: FetchAPI, basePath?: string) => Promise<V2beta1Experiment> {
      const localVarFetchArgs = ExperimentServiceApiFetchParamCreator(configuration).getExperiment(
        experiment_id,
        options,
      );
      return (fetch: FetchAPI = portableFetch, basePath: string = BASE_PATH) => {
        return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then(response => {
          if (response.status >= 200 && response.status < 300) {
            return response.json();
          } else {
            throw response;
          }
        });
      };
    },
    /**
     *
     * @summary Finds all experiments. Supports pagination, and sorting on certain fields.
     * @param {string} [page_token] A page token to request the next page of results. The token is acquried from the nextPageToken field of the response from the previous ListExperiments call or can be omitted when fetching the first page.
     * @param {number} [page_size] The number of experiments to be listed per page. If there are more experiments than this number, the response message will contain a nextPageToken field you can use to fetch the next page.
     * @param {string} [sort_by] Can be format of \&quot;field_name\&quot;, \&quot;field_name asc\&quot; or \&quot;field_name desc\&quot; Ascending by default.
     * @param {string} [filter] A url-encoded, JSON-serialized Filter protocol buffer (see [filter.proto](https://github.com/kubeflow/pipelines/blob/master/backend/api/v2beta1/api/filter.proto)).
     * @param {string} [namespace] Which namespace to filter the experiments on.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listExperiments(
      page_token?: string,
      page_size?: number,
      sort_by?: string,
      filter?: string,
      namespace?: string,
      options?: any,
    ): (fetch?: FetchAPI, basePath?: string) => Promise<V2beta1ListExperimentsResponse> {
      const localVarFetchArgs = ExperimentServiceApiFetchParamCreator(
        configuration,
      ).listExperiments(page_token, page_size, sort_by, filter, namespace, options);
      return (fetch: FetchAPI = portableFetch, basePath: string = BASE_PATH) => {
        return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then(response => {
          if (response.status >= 200 && response.status < 300) {
            return response.json();
          } else {
            throw response;
          }
        });
      };
    },
    /**
     *
     * @summary Restores an archived experiment. The experiment's archived runs and recurring runs will stay archived.
     * @param {string} experiment_id The ID of the experiment to be restored.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    unarchiveExperiment(
      experiment_id: string,
      options?: any,
    ): (fetch?: FetchAPI, basePath?: string) => Promise<any> {
      const localVarFetchArgs = ExperimentServiceApiFetchParamCreator(
        configuration,
      ).unarchiveExperiment(experiment_id, options);
      return (fetch: FetchAPI = portableFetch, basePath: string = BASE_PATH) => {
        return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then(response => {
          if (response.status >= 200 && response.status < 300) {
            return response.json();
          } else {
            throw response;
          }
        });
      };
    },
  };
};

/**
 * ExperimentServiceApi - factory interface
 * @export
 */
export const ExperimentServiceApiFactory = function(
  configuration?: Configuration,
  fetch?: FetchAPI,
  basePath?: string,
) {
  return {
    /**
     *
     * @summary Archives an experiment and the experiment's runs and recurring runs.
     * @param {string} experiment_id The ID of the experiment to be archived.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    archiveExperiment(experiment_id: string, options?: any) {
      return ExperimentServiceApiFp(configuration).archiveExperiment(experiment_id, options)(
        fetch,
        basePath,
      );
    },
    /**
     *
     * @summary Creates a new experiment.
     * @param {V2beta1Experiment} body The experiment to be created.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createExperiment(body: V2beta1Experiment, options?: any) {
      return ExperimentServiceApiFp(configuration).createExperiment(body, options)(fetch, basePath);
    },
    /**
     *
     * @summary Deletes an experiment without deleting the experiment's runs and recurring  runs. To avoid unexpected behaviors, delete an experiment's runs and recurring  runs before deleting the experiment.
     * @param {string} experiment_id The ID of the experiment to be deleted.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteExperiment(experiment_id: string, options?: any) {
      return ExperimentServiceApiFp(configuration).deleteExperiment(experiment_id, options)(
        fetch,
        basePath,
      );
    },
    /**
     *
     * @summary Finds a specific experiment by ID.
     * @param {string} experiment_id The ID of the experiment to be retrieved.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getExperiment(experiment_id: string, options?: any) {
      return ExperimentServiceApiFp(configuration).getExperiment(experiment_id, options)(
        fetch,
        basePath,
      );
    },
    /**
     *
     * @summary Finds all experiments. Supports pagination, and sorting on certain fields.
     * @param {string} [page_token] A page token to request the next page of results. The token is acquried from the nextPageToken field of the response from the previous ListExperiments call or can be omitted when fetching the first page.
     * @param {number} [page_size] The number of experiments to be listed per page. If there are more experiments than this number, the response message will contain a nextPageToken field you can use to fetch the next page.
     * @param {string} [sort_by] Can be format of \&quot;field_name\&quot;, \&quot;field_name asc\&quot; or \&quot;field_name desc\&quot; Ascending by default.
     * @param {string} [filter] A url-encoded, JSON-serialized Filter protocol buffer (see [filter.proto](https://github.com/kubeflow/pipelines/blob/master/backend/api/v2beta1/api/filter.proto)).
     * @param {string} [namespace] Which namespace to filter the experiments on.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listExperiments(
      page_token?: string,
      page_size?: number,
      sort_by?: string,
      filter?: string,
      namespace?: string,
      options?: any,
    ) {
      return ExperimentServiceApiFp(configuration).listExperiments(
        page_token,
        page_size,
        sort_by,
        filter,
        namespace,
        options,
      )(fetch, basePath);
    },
    /**
     *
     * @summary Restores an archived experiment. The experiment's archived runs and recurring runs will stay archived.
     * @param {string} experiment_id The ID of the experiment to be restored.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    unarchiveExperiment(experiment_id: string, options?: any) {
      return ExperimentServiceApiFp(configuration).unarchiveExperiment(experiment_id, options)(
        fetch,
        basePath,
      );
    },
  };
};

/**
 * ExperimentServiceApi - object-oriented interface
 * @export
 * @class ExperimentServiceApi
 * @extends {BaseAPI}
 */
export class ExperimentServiceApi extends BaseAPI {
  /**
   *
   * @summary Archives an experiment and the experiment's runs and recurring runs.
   * @param {string} experiment_id The ID of the experiment to be archived.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ExperimentServiceApi
   */
  public archiveExperiment(experiment_id: string, options?: any) {
    return ExperimentServiceApiFp(this.configuration).archiveExperiment(experiment_id, options)(
      this.fetch,
      this.basePath,
    );
  }

  /**
   *
   * @summary Creates a new experiment.
   * @param {V2beta1Experiment} body The experiment to be created.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ExperimentServiceApi
   */
  public createExperiment(body: V2beta1Experiment, options?: any) {
    return ExperimentServiceApiFp(this.configuration).createExperiment(body, options)(
      this.fetch,
      this.basePath,
    );
  }

  /**
   *
   * @summary Deletes an experiment without deleting the experiment's runs and recurring  runs. To avoid unexpected behaviors, delete an experiment's runs and recurring  runs before deleting the experiment.
   * @param {string} experiment_id The ID of the experiment to be deleted.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ExperimentServiceApi
   */
  public deleteExperiment(experiment_id: string, options?: any) {
    return ExperimentServiceApiFp(this.configuration).deleteExperiment(experiment_id, options)(
      this.fetch,
      this.basePath,
    );
  }

  /**
   *
   * @summary Finds a specific experiment by ID.
   * @param {string} experiment_id The ID of the experiment to be retrieved.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ExperimentServiceApi
   */
  public getExperiment(experiment_id: string, options?: any) {
    return ExperimentServiceApiFp(this.configuration).getExperiment(experiment_id, options)(
      this.fetch,
      this.basePath,
    );
  }

  /**
   *
   * @summary Finds all experiments. Supports pagination, and sorting on certain fields.
   * @param {string} [page_token] A page token to request the next page of results. The token is acquried from the nextPageToken field of the response from the previous ListExperiments call or can be omitted when fetching the first page.
   * @param {number} [page_size] The number of experiments to be listed per page. If there are more experiments than this number, the response message will contain a nextPageToken field you can use to fetch the next page.
   * @param {string} [sort_by] Can be format of \&quot;field_name\&quot;, \&quot;field_name asc\&quot; or \&quot;field_name desc\&quot; Ascending by default.
   * @param {string} [filter] A url-encoded, JSON-serialized Filter protocol buffer (see [filter.proto](https://github.com/kubeflow/pipelines/blob/master/backend/api/v2beta1/api/filter.proto)).
   * @param {string} [namespace] Which namespace to filter the experiments on.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ExperimentServiceApi
   */
  public listExperiments(
    page_token?: string,
    page_size?: number,
    sort_by?: string,
    filter?: string,
    namespace?: string,
    options?: any,
  ) {
    return ExperimentServiceApiFp(this.configuration).listExperiments(
      page_token,
      page_size,
      sort_by,
      filter,
      namespace,
      options,
    )(this.fetch, this.basePath);
  }

  /**
   *
   * @summary Restores an archived experiment. The experiment's archived runs and recurring runs will stay archived.
   * @param {string} experiment_id The ID of the experiment to be restored.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ExperimentServiceApi
   */
  public unarchiveExperiment(experiment_id: string, options?: any) {
    return ExperimentServiceApiFp(this.configuration).unarchiveExperiment(experiment_id, options)(
      this.fetch,
      this.basePath,
    );
  }
}
