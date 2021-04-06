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
    url("https://images.unsplash.com/photo-1486485764572-92b96f21882a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDJ8fHBpenphfGVufDB8fDB8&auto=format&fit=crop&w=800&q=60");
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

const OrderNow = () => {
  return (
    <Container>
      <Image />
      <Div>
        <Span>OrderNow</Span>
      </Div>
    </Container>
  );
};

export default OrderNow;
