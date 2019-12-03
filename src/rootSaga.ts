import { takeLatest } from "redux-saga/effects";
import { QUOTE_REQUEST } from "./constants/actions";
import { sagaFetchDataRequest } from "./sagas";

export function* rootSagas() {
  yield takeLatest(QUOTE_REQUEST, sagaFetchDataRequest);
}
