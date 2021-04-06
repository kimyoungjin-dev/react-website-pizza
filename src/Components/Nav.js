import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiFullPizza } from "react-icons/gi";

const NavContainer = styled.nav`
  height: 80px;
  display: flex;
  justify-content: center;
  font-weight: bold;
  background-color: red;
`;

const NavLink = styled(Link)`
  display: flex;
  font-size: 2rem;
  align-items: center;
  cursor: pointer;
  color: white;
  font-weight: 900;
  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;

const NavIcon = styled.div`
  position: absolute;
  top: 0;
  color: white;
  right: 0;
  cursor: pointer;
  p {
    transform: translate(-175%, 100%);
    font-weight: bold;
    font-size: 20px;
  }
`;

const Icon = styled(GiFullPizza)`
  font-size: 2.3rem;
  transform: translate(-50%, -15%);
`;

const Nav = ({ setIsOpen }) => {
  return (
    <NavContainer>
      <NavLink to="/">Pizza</NavLink>
      <NavIcon>
        <p>Menu</p>
        <Icon onClick={() => setIsOpen(true)} />
      </NavIcon>
    </NavContainer>
  );
};

export default Nav;
