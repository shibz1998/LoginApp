import {take, put, call, fork} from 'redux-saga/effects';

import {userActions} from '../features/user/userSlice';
import ApiHelper from '../helpers/ApiHelper';

const {request, success, failure, logout} = userActions;

function callPostRequest(url, data, headers) {
  return ApiHelper.post(url, data, headers);
}

function callLogoutRequest(url) {
  return ApiHelper.logoutUser(url);
}
function* watchRequest() {
  while (true) {
    console.log('Watch request Running');
    const {payload} = yield take(request);
    try {
      let response;

      if (payload.requestType) {
        response = yield call(callLogoutRequest, payload.url);
        yield put(logout());
      } else {
        response = yield call(callPostRequest, payload.url, payload.data);
        yield put(success(response));
      }
    } catch (err) {
      yield put(failure(err.message));
    }
  }
}

export default function* root() {
  yield fork(watchRequest);
}
