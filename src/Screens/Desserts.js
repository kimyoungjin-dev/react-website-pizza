import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100%;
`;

const Image = styled.img`
  height: 100vh;
  width: 100%;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.1)),
    url("https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fHBpenphfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60");
  background-position: center center;
  background-size: contain;
  position: absolute;
  z-index: -1;
`;

const Div = styled.div`
  height: 100%;
  width: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
`;

const Span = styled.span`
  font-size: 100px;
  color: black;
`;

const Desserts = () => {
  return (
    <Container>
      <Image />
      <Div>
        <Span>Desserts</Span>
      </Div>
    </Container>
  );
};

export default Desserts;
