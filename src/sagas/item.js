import {take, put, call, fork} from 'redux-saga/effects';
import {itemActions} from '../features/item/itemSlice';
import ApiHelper from '../helpers/ApiHelper';

const {request, success, failure, deleteItem} = itemActions;

function callGetRequest(url, data, headers) {
  return ApiHelper.get(url, data, headers);
}

function callPostRequest(url, data, headers) {
  return ApiHelper.post(url, data, headers);
}

function callDeleteRequest(url, headers) {
  return ApiHelper.delete(url, headers);
}

function* watchRequest() {
  while (true) {
    const {payload} = yield take(request);

    try {
      let response;

      const {url, data, header, requestType} = payload;

      if (requestType === 'POST') {
        response = yield call(callPostRequest, url, data, header, requestType);
        yield put(success(response));
      } else if (requestType === 'DELETE') {
        console.log('URL FOR DELETE IS :' + url);
        response = yield call(callDeleteRequest, url, header);
        yield put(deleteItem({data}));
      } else {
        response = yield call(callGetRequest, payload.url, {});
        yield put(success(response));
      }
    } catch (error) {
      yield put(failure(error));
    }
  }
}

export default function* root() {
  yield fork(watchRequest);
}
