import { call, put } from "redux-saga/effects";
import { fetchQuoteSuccess, fetchQuoteError } from "../actions";

const fetchApiData = async () => {
  const response = await fetch(`https://api.quotable.io/random`);
  return response.json();
};

export function* sagaFetchDataRequest() {
  try {
    const response = yield call(fetchApiData);
    yield put(
      fetchQuoteSuccess({ content: response.content, author: response.author })
    );
  } catch (error) {
    yield put(fetchQuoteError(error));
  }
}
