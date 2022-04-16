import axios from 'axios';

export const JsonApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_DOMAIN,
  headers: { 'Content-Type': 'application/json' },
  responseType: 'json',
});
