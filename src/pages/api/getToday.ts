import { JsonApi } from './baseApi';

export interface dateApi {
  today: string;
}

export const getDB = async (): Promise<dateApi> => {
  const a = await JsonApi.get('/date', {
    headers: {
      Authorization: '',
    },
  });
  return a.data;
};
