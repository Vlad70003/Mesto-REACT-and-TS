import { takeEvery, call, put } from "redux-saga/effects";
import { logIn, AUTHENTICATE} from '../actions';
import { serverLogin } from '../api';

export function* authenticateSaga(action) {
    const { email, password } = action.payload;
    const success = yield call(serverLogin, email, password);
    if (success.success) {
      let storage = localStorage;
      storage['userLogin'] = JSON.stringify([email, password, success.token]);
      yield put(logIn(email));
    } 
  }
  
  export function* authSaga() {
    yield takeEvery(AUTHENTICATE, authenticateSaga);
  }