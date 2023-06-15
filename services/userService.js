import http from './httpService';
import {BASE_URL} from '../config';

export function authenticateUser(data) {
  return http.post(`${BASE_URL}/api/users/login`, data);
}

export function registerUser(data) {
  return http.post(`${BASE_URL}/api/users/register`, data);
}