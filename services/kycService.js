import http from './httpService';

export function validateNinNumber(data) {
  return http.post(`${data.kycLink}`, {
    api_key: '76473a37cfaf53c749a2071a5a6a1be3',
    action: 'validate',
    nin: data.ninNumber,
  });
}

export function validateContact(data) {
  return http.post(`${data.kycLink}`, {
    api_key: '76473a37cfaf53c749a2071a5a6a1be3',
    action: 'phone',
    phonenumber: data.contact,
  });
}
