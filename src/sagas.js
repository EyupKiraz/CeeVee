import { delay, put, takeEvery } from 'redux-saga/effects';
import { resetButton } from './actions';

function* setTimer(action) {
  try {
    yield delay(5000);
    yield put(resetButton());
  } catch (e) {
    yield put({ type: 'REQUEST_FAILED', payload: { error: e } });
  }
}

function* handleError({ payload }) {
  console.log(payload.error);
}

function* mySaga() {
  yield takeEvery('EMAIL_SENT', setTimer);
  yield takeEvery('REQUEST_FAILED', handleError);
}

export default mySaga;
