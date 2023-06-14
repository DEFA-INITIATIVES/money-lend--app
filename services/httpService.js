import axios from 'axios';

axios.interceptors.response.use(null, error => {
  const ExpectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status <= 500;

  if (!ExpectedError) {
    console.log(
      'AN unexpected error occurred, check your internet connectivity and try again...',
    );
  }

  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  patch: axios.patch,
};
