import { createSelector } from "reselect";
import { Store } from "../Store";

const getState = (Store: Store) => Store;

export const selectorQuote = createSelector(
  getState,
  (Store): any => Store.QuoteObject || {}
);

export const selectorCheckLoading = createSelector(
  getState,
  (Store): any => Store.isLoading || null
);
