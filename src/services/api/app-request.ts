import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';
import {pickBy} from 'lodash';
import {api, apiUploadFile} from './api-service';
import {IResponse} from '../../models';
import {Logger} from '../../utils/logger.ts';

export class _AppRequest {
  api: AxiosInstance;

  apiUploadFile: AxiosInstance;

  abortController: AbortController;

  constructor() {
    this.api = api;
    this.apiUploadFile = apiUploadFile;
    this.abortController = new AbortController();
  }

  async get<R>(url: string, params?: any): Promise<IResponse<R>> {
    try {
      const {signal} = this.abortController;
      const config: AxiosRequestConfig = {
        params: pickBy(params, value => value !== undefined || null),
        signal,
      };
      const {data} = await this.api.get<IResponse<R>>(url, config);
      return data;
    } catch (error: any) {
      this.errorHandle(error);
      throw error;
    }
  }

  async post<R>(url: string, body?: any, params?: any): Promise<IResponse<R>> {
    try {
      const {signal} = this.abortController;
      const config: AxiosRequestConfig = {
        params: pickBy(params, value => value !== undefined || null),
        signal,
      };
      const {data} = await this.api.post<IResponse<R>>(url, body, config);
      return data;
    } catch (error: any) {
      this.errorHandle(error);
      throw error;
    }
  }

  async put<R>(url: string, body?: any, params?: any): Promise<IResponse<R>> {
    try {
      const {signal} = this.abortController;
      const config: AxiosRequestConfig = {
        params: pickBy(params, value => value !== undefined || null),
        signal,
      };
      const {data} = await this.api.put(url, body, config);
      return data;
    } catch (error: any) {
      this.errorHandle(error);
      throw error;
    }
  }

  async delete<R>(url: string, params?: any): Promise<IResponse<R>> {
    try {
      const {signal} = this.abortController;
      const config: AxiosRequestConfig = {
        params: pickBy(params, value => value !== undefined || null),
        signal,
      };

      return await this.api.delete(url, config);
    } catch (error: any) {
      this.errorHandle(error);
      throw error;
    }
  }

  async uploadFile<R>(
    url: string,
    body?: any,
  ): Promise<AxiosResponse<IResponse<R>, any>> {
    try {
      const {signal} = this.abortController;
      const config: AxiosRequestConfig = {signal};

      return await this.apiUploadFile.post(url, body, config);
    } catch (error: any) {
      this.errorHandle(error);
      throw error;
    }
  }

  abortRequest() {
    this.abortController.abort();
  }

  // eslint-disable-next-line class-methods-use-this
  protected errorHandle(error: any) {
    if (axios.isAxiosError<IResponse<any>>(error)) {
      // Access the status code and error message
      Logger.error(`Status Code: ${typeof error.response?.status}`);
      Logger.error(`Error Data: ${error.response?.data}`);
    } else {
      // Handle non-Axios errors
      Logger.error(`Non-Axios Error: ${error.message}`);
    }
  }
}

export const AppRequest = new _AppRequest();
