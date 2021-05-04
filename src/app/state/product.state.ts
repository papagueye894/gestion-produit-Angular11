export enum DataStateEnum {
  LOADING,
  LOADED,
  ERROR
}

export interface AppDataState<T> {
  dataState: any;
  dataStateEnum;
  data?:T,
  errorMessage?:string
}
