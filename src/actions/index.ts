import {
  QUOTE_REQUEST,
  FETCH_QUOTE_SUCCESS,
  FETCH_QUOTE_FAILURE
} from "../constants/actions";

export const quoteRequest = () => ({
  type: QUOTE_REQUEST
});

export const fetchQuoteSuccess = (quote: any) => ({
  type: FETCH_QUOTE_SUCCESS,
  payload: quote
});

export const fetchQuoteError = (Error: any) => ({
  type: FETCH_QUOTE_FAILURE,
  payload: Error
});
