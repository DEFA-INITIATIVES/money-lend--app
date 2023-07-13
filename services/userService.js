import http from './httpService';
import {BASE_URL} from '../config';

export function authenticateUser(data) {
  return http.post(`${BASE_URL}/api/users/login`, data);
}

export function registerUser(data) {
  return http.post(`${BASE_URL}/api/users/register`, data);
}

export function forgotPassword(data) {
  return http.post(`${BASE_URL}/api/users/register/forgot-password`, data);
}

export function resetPassword(data) {
  return http.post(`${BASE_URL}/api/users/register/reset-password`, {
    resetPin: data.resetPin,
    newPassword: data.newPassword,
  });
}

export function AddLoan(data) {
  return http.post(`${BASE_URL}/api/users/register/loan/${data._id}`, {
    principal: data.principal,
    interestRate: data.interestRate,
    loanLife: data.loanLife,
    modeOfPayment: data.modeOfPayment,
    reason: data.reason,
    termsAndConditions: true,
  });
}

export function payLoan(data) {
  return http.post(`${BASE_URL}/api/users/register/payment/${data._id}`, {
    amount: parseInt(data.amount),
  });
}
