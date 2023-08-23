import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';
import {api, apiGet, apiPost} from '../service';
import {IApiList, IApiItem} from '../types';

export const useApiList = (page: number): IApiList =>
  useSWR(`${api}/${page > 1 ? `?page=${page}` : ''}`, apiGet);

export const useApiItem = (id: string): IApiItem =>
  useSWR(`${api}/${id}/`, apiGet);

export const useApiEdit = (id: string) =>
  useSWRMutation(`${api}/${id}/`, apiPost, {revalidate: false});
