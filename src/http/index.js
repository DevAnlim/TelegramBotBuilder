import axios from 'axios';

export const $host = axios.create({
  baseURL: 'http://localhost:8080/',
});

export const $authHost = axios.create({
  baseURL: 'http://localhost:8080/',
});
