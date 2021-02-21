import React, { useState } from "react";
import styled from "styled-components";

const NavBar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <Nav>
      <Logo href="">
        Forest<span>Park</span>
      </Logo>
      <Hamburger onClick={() => setMenuIsOpen(!menuIsOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu menuIsOpen={menuIsOpen}>
        <MenuLink href="">Menu 1</MenuLink>
        <MenuLink href="">Menu 2</MenuLink>
        <MenuLink href="">Menu 3</MenuLink>
        <MenuLink href="">Menu 4</MenuLink>
      </Menu>
    </Nav>
  );
};

const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: white;
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    background: #7b7fda;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 750px) {
    display: flex;
  } ;
`;

const MenuLink = styled.div`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #67bc96;
  transition: all 0.2s ease-in;
  font-size: 0.9rem;

  &:hover {
    color: #7b7fda;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 750px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ menuIsOpen }) => (menuIsOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
  } ;
`;

const Logo = styled.div`
  padding: 1rem 0;
  color: #7b7fda;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;

  span {
    font-weight: 300;
    font-size: 1.3rem;
  }
`;

export default NavBar;
