import http from './httpService';
import {BASE_URL} from '../config';

export function getStaticData() {
  return http.get(`${BASE_URL}/api/staticdata`);
}

export function sendNotification(data) {
  return http.post(`${BASE_URL}/api/notifications`, data);
}

export function getMessages(data) {
  return http.get(`${BASE_URL}/api/notifications/${data._id}`,);
}