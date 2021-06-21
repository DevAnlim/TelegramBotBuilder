import { $host } from './index';

export const signUp = async data => {
  const response = await $host.post('/api/signUp', data);
  return response;
};

export const signIn = async data => {
  const response = await $host.post('/api/signIn', data);
  return response;
};

export const isUserAuthorized = async () => {
  const response = await $host.get('/api/isAuthorized');
  return response;
};
