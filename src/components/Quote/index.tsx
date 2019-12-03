import React from "react";

import { useSelector } from "react-redux";
import { selectorQuote, selectorCheckLoading } from "../../selectors";

export const Quote = () => {
  const myQuote = useSelector(selectorQuote);
  const ceckLoading = useSelector(selectorCheckLoading);

  return (
    <div>
      {ceckLoading === true ? (
        <div>
          <p>Wait please, we are working for you success</p>
        </div>
      ) : (
        <div>
          <p>Content: {myQuote.content}</p>
          <p>Author: {myQuote.author}</p>
        </div>
      )}
    </div>
  );
};
