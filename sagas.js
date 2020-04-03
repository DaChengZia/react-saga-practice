import { delay } from 'redux-saga'
import { put, takeEvery, all } from 'redux-saga/effects'
import axios from 'axios';
import { initAction, changeName } from './action';

function* getResponse() {
    try{
      const res = yield axios.get("https://jsonplaceholder.typicode.com/users/1");
      const action = initAction(res.data);
      yield put(action);
      yield delay(2000);
      const actionChange = changeName(res.data);
      yield put(actionChange);}
    catch(e) {
      console.log('请求失败！')
    }
}

function* watchIncrementAsync() {
  yield takeEvery('GET_RESPONSE',getResponse)
}

export default function* rootSaga() {
  yield all([
    watchIncrementAsync()
  ])
}