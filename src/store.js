import {configureStore} from '@reduxjs/toolkit';
import {createLogger} from 'redux-logger';
import userReducer from './features/user/userSlice';

const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;
const logger = createLogger({
  predicate: () => isDebuggingInChrome,
  collapsed: true,
  duration: true,
  diff: true,
});
export default configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});
