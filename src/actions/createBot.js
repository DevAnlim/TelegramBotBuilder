import sendRequest from './sendRequest';
import { server } from '../config';

export default async function createBot() {
  await sendRequest(`${server}/api/bot/create`, 'POST', {
    token: '5220999465:AAGUyHQJw5yGGEaCs37UsvCI_JUo-PH2M00',
  }).then(res => console.log(res));
}
