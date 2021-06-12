import { $host } from './index';

export const isUserAuthorized = async data => {
  const response = await $host.post('/api/isAuthorized', data);
  return response;
};
