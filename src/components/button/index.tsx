import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { quoteRequest } from "../../actions";

export const Button = () => {
  const Button = styled.button`
    font-family: "Montserrat", sans-serif;
    padding: 5px;
    border-radius: 10px;
    border: 2px solid
    background-color: white
  `;

  const dispatch = useDispatch();

  const onClickCallApi = () => {
    dispatch(quoteRequest());
  };

  useEffect(() => {
    onClickCallApi();
  }, []);

  return (
    <div>
      <Button onClick={onClickCallApi}>Trust me and click here!</Button>
    </div>
  );
};
