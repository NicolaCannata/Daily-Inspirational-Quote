import { Store } from "../Store";
import {
  QUOTE_REQUEST,
  FETCH_QUOTE_SUCCESS,
  FETCH_QUOTE_FAILURE
} from "../constants/actions";
import { fetchQuoteError } from "../actions";

//@ts-ignore
export const reducer = (Store: Store = {}, action: any) => {
  //const prevQuoteList = Store.QuotesList || [];
  //const prevQuoteObject = Store.QuoteObject || {};
  switch (action.type) {
    case QUOTE_REQUEST:
      return {
        ...Store,
        isLoading: true
      };
    case FETCH_QUOTE_SUCCESS:
      return {
        ...Store,
        /* QuotesList: [...prevQuoteList, action.payload], */
        QuoteObject: {
          content: action.payload.content,
          author: action.payload.author
        },
        isLoading: false
      };
    case FETCH_QUOTE_FAILURE:
      return {
        ...Store,
        isLoading: false,
        error: Error
      };
  }
  return {
    ...Store
  };
};
