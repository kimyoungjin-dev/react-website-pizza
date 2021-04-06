import React from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaPizzaSlice } from "react-icons/fa";

const Container = styled.div`
  background-color: yellow;
  position: fixed;
  z-index: 999;
  width: 350px;
  height: 100%;
  display: grid;
  align-items: center;
  top: 0;
  right: ${(props) => (props.isOpen ? 0 : "-1000px")};
  transition: 0.3s ease-in-out;

  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;

const PizzaIcon = styled(FaPizzaSlice)`
  font-size: 30px;
  position: absolute;
  top: 15px;
  left: 15px;
`;

const CloseIcon = styled(FaTimes)`
  font-size: 30px;
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
`;

const Menu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 80px);
  text-align: center;

  @media screen and (max-width: 400px) {
    grid-template-rows: repeat(3, 60px);
  }
`;

const SLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    color: red;
    transition: 0.2s ease-in-out;
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  background-color: black;
  outline: none;
  border: none;
  color: white;
  border-radius: 5px;
  padding: 1rem 2rem 1rem 2rem;
`;

const SliderBar = ({ isOpen, setIsOpen }) => {
  return (
    <Container isOpen={isOpen}>
      <PizzaIcon />
      <CloseIcon onClick={() => setIsOpen(false)} />
      <Menu onClick={() => setIsOpen(false)}>
        <SLink to="/">Pizza</SLink>
        <SLink to="/desserts">Desserts</SLink>
        <SLink to="/fullmenu">Full Menu</SLink>
      </Menu>
      <ButtonWrap>
        <Button>
          <SLink to="/ordernow">Order Now</SLink>
        </Button>
      </ButtonWrap>
    </Container>
  );
};

export default SliderBar;
