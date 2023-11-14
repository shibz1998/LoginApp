import {configureStore} from '@reduxjs/toolkit';
import {createLogger} from 'redux-logger';
import userReducer from './features/user/userSlice';
import itemReducer from './features/item/itemSlice';

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
    item: itemReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});
