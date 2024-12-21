import {action, makeObservable, observable} from 'mobx';
import {pickBy} from 'lodash';
import {_AppRequest} from './app-request';
import {Code, IListDataResponse, IParams} from '../../models';

export class AppRequestListStore<T, P extends IParams> extends _AppRequest {
  url: string;

  hasNextPage: boolean;

  listData: T[];

  loading: boolean;

  loadMore: boolean;

  filterParams: P;

  constructor(url: string, initialParams: P) {
    super();
    this.url = url;
    this.hasNextPage = false;
    this.listData = [];
    this.loading = false;
    this.loadMore = false;
    this.filterParams = initialParams;

    makeObservable(this, {
      listData: observable,
      loading: observable,
      loadMore: observable,
      filterParams: observable,
      getListData: action,
      setListData: action,
      setLoading: action,
      setFilterParams: action,
    });
  }

  async getListData() {
    try {
      this.setLoading(true);

      const response = await this.get<IListDataResponse<T>>(
        this.url,
        pickBy(this.filterParams, value => value !== undefined || null),
      );

      if (response.code === Code.success && response.data) {
        this.hasNextPage = !response.data.last;
        this.setListData(response.data.content);
      }
    } finally {
      this.setLoading(false);
    }
  }

  async getMoreData() {
    try {
      if (this.loading || this.loadMore || !this.hasNextPage) return;
      this.setLoadMore(true);

      const params: IParams = {
        ...this.filterParams,
        page: this.filterParams.page + 1,
      };

      const response = await this.get<IListDataResponse<T>>(
        this.url,
        /* The purpose of this code is to filter an object (newParams)
         by removing key-value pairs where the value is either 'undefined' or 'null'. */
        pickBy(params, value => value !== undefined || null),
      );

      if (response.code === Code.success && response.data) {
        this.hasNextPage = !response.data.last;
        this.setListData([...this.listData, ...response.data.content]);
      }
    } finally {
      this.setLoadMore(false);
    }
  }

  setFilterParams(params: P) {
    this.filterParams = params;
  }

  setListData(data: T[]) {
    this.listData = data;
  }

  setLoadMore(status: boolean) {
    this.loadMore = status;
  }

  setLoading(status: boolean) {
    this.loading = status;
  }
}
