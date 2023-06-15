import http from './httpService';
import {BASE_URL} from '../config';

export function getStaticData() {
  return http.get(`${BASE_URL}/api/staticdata`);
}
