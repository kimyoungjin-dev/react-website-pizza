import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.1)),
    url("https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cGl6emF8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60");
  background-position: center center;
  background-size: cover;
`;

const Content = styled.div`
  height: calc(100vh - 80px);
  width: 100vw;
  padding: 0rem calc((100vw - 1300px) / 2);
`;

const Item = styled.div`
  height: 100vh;
  max-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  flex-direction: column;
  color: white;
  font-weight: bold;
  line-height: 1;
  text-transform: uppercase;
  width: 650px;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

const H1 = styled.h1`
  font-size: clamp(2.5rem, 10vh, 5rem);
  letter-spacing: 3px;
  box-shadow: 3px 5px yellow;
  margin-bottom: 1rem;
`;

const P = styled.p`
  font-size: clamp(2rem, 2.5vh, 3rem);
  margin-bottom: 2rem;
`;

const Btn = styled.button`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  background-color: red;
  color: white;
  border-radius: 3px;
  border: none;
  outline: none;
  transition: 0.2s ease-in-out;

  &:hover {
    background-color: #ffc500;
    transition: 0.6s ease-in-out;
    cursor: pointer;
    color: #000;
  }
`;

const Home = () => {
  return (
    <Container>
      <Content>
        <Item>
          <H1>Greatest</H1>
          <P>pizza ever</P>
          <Btn>Place Order</Btn>
        </Item>
      </Content>
    </Container>
  );
};

export default Home;
