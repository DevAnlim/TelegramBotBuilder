import { $host } from './index';

export const initializeBot = async data => {
  const response = await $host.post('/api/bot/init', data);
  return response;
};
