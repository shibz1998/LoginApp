//Keeping constants

// export const kApiUrlEndpoint = 'https://jsonplaceholder.typicode.com';
export const kApiUrlEndpoint = 'http://localhost:3000/api';

export const kApiTodos = '/todos';
export const kApiUserSignup = '/Users';
export const kApiUserLogin = '/Users/login';
export const kApiPostItems = '/items';
export const kApiGetItems = '/items';

export const ERROR_NETWORK_NOT_AVAILBLE = {
  title: 'Oops!',
  message:
    'Slow or no internet connection. Please check your internet settings',
};

export const ERROR_WRONG_CREDENTIALS = {
  title: 'Oops!',
  message:
    'Credentials doesnt match. Please try again with correct credentials.',
};
