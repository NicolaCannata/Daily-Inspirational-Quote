import React from "react";
import styled from "styled-components";
import { Button } from "./components/button";
import "./app.css";
import { Quote } from "./components/Quote";

const App: React.FC = () => {
  const Wrapper = styled.div`
    text-align: center;
    font-family: "Montserrat", sans-serif;
    color: white;
  `;

  const Title = styled.h1`
    font-family: "Questrial", sans-serif;
    font-size: 60px;
  `;

  return (
    <Wrapper>
      <Title>Your daily quote.</Title>
      <Button />
      <Quote />
    </Wrapper>
  );
};

export default App;
