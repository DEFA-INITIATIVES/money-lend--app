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

export function availableCredit() {
  return http.get(
    `https://www.socnetsolutions.com/projects/bulk/payments/socnet.php?api_key=732f4403d8abeaa9f7b100b679d0d83a&action=wallet_balance`,
  );
}

export function requestLoan(data) {
  return http.get(`https://www.socnetsolutions.com/projects/bulk/payments/socnet.php?api_key=732f4403d8abeaa9f7b100b679d0d83a&msisdn=${data.contact}&amo
  unt=${data.amount}&action=withdraw`);
}
