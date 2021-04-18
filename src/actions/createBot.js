import sendRequest from './sendRequest';
import { server } from '../config';

export default async function createBot() {
  await sendRequest(`${server}/api/bot/create`, 'POST', {
    token: '1789798446:AAFbhqy-Elo0fW-siH6Z1E1acZgfwA1LGVo',
  }).then(res => console.log(res));
}
