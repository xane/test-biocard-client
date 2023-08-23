import {SWRResponse} from 'swr';

export interface IModDriver {
  driverId: string;
  name: string;
  url: string;
  givenName: string;
  familyName: string;
  dateOfBirth: string;
  nationality: string;
}

export interface IResDriver extends IModDriver {
  __id: string;
}

export interface IResDrivers extends Array<IResDriver> {}

export interface IResDataApiList {
  count: number;
  list: IResDrivers;
}

export interface IResDataApiItem {
  data: IResDriver;
}

export interface IApiList extends SWRResponse {
  data: IResDataApiList | undefined;
}

export interface IApiItem extends SWRResponse {
  data: IResDataApiItem | undefined;
}
