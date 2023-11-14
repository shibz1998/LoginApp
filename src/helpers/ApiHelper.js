import {kApiUrlEndpoint} from '../config/WebService';

class ApiHelper {
  get = async (url, data, headers) => {
    url = kApiUrlEndpoint + url;

    const response = await fetch(url).then(x => x.json());

    return new Promise((resolve, reject) => {
      this.handlePromise(resolve, reject, response);
    });
  };
  post = async (url, data, headers = {}) => {
    url = kApiUrlEndpoint + url;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...headers,
      },
      body: JSON.stringify(data),
    }).then(x => x.json());

    return new Promise((resolve, reject) => {
      this.handlePromise(resolve, reject, response);
    });
  };

  put = () => {};

  delete = async (url, headers = {}) => {
    url = kApiUrlEndpoint + url;

    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...headers,
      },
    }).then(x => x.json());

    return new Promise((resolve, reject) => {
      this.handlePromise(resolve, reject, response);
    });
  };

  handlePromise = (resolve, reject, response) => {
    if (response.error) {
      if (response.error.code === 'LOGIN_FAILED') {
        reject(ERROR_WRONG_CREDENTIALS);
      } else if (response.error.code === 'NETWORK_ISSUE') {
        reject(ERROR_NETWORK_NOT_AVAILBLE);
      } else {
        reject(response.error);
      }
    } else {
      resolve(response);
    }
  };
}
export default new ApiHelper();
