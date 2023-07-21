import http from './httpService';
import {BASE_URL} from '../config';

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
    phonenumber: data.whatsAppContact,
  });
}

export function validateEmergencyContact(data) {
  return http.post(`${data.kycLink}`, {
    api_key: '76473a37cfaf53c749a2071a5a6a1be3',
    action: 'phone',
    phonenumber: data.emergencyContact,
  });
}

export function validateSecondEmergencyContact(data) {
  return http.post(`${data.kycLink}`, {
    api_key: '76473a37cfaf53c749a2071a5a6a1be3',
    action: ' phone',
    phonenumber: data.secondEmergencyContact,
  });
}

export function availableCredit() {
  return http.get(
    `https://www.socnetsolutions.com/projects/bulk/payments/socnet.php?api_key=732f4403d8abeaa9f7b100b679d0d83a&action=wallet_balance`,
  );
}

export function requestLoan(data) {
  return http.get(
    `https://www.socnetsolutions.com/projects/bulk/payments/socnet.php?api_key=732f4403d8abeaa9f7b100b679d0d83a&msisdn=${data.contact}&amount=${data.amount}&action=withdraw`,
  );
}

export function makePayment(data) {
  return http.get(
    `https://www.socnetsolutions.com/projects/bulk/payments/socnet.php?api_key=732f4403d8abeaa9f7b100b679d0d83a&msisdn=${data.contact}&amount=${data.amount}&action=deposit&notify_url=https://supacash.onrender.com/api/users/register/payment/${data._id}/${data.amount}`,
  );
}

export function sendOTP(data) {
  return http.get(
    `https://www.socnetsolutions.com/projects/bulk/amfphp/services/blast.php?username=METAVERSEUG&passwd=Metaverse@256&msg=${data.message}&numbers=${data.number}`,
  );
}
