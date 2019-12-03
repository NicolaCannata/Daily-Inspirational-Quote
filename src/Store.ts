export interface Store {
  /* QuotesList?: Quote[]; */
  //@ts-ignore
  QuoteObject:? Quote
  isLoading?: boolean;
  error?: Error;
}

interface Quote {
  content?: string;
  author?: string;
}
