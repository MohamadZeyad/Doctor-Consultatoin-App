import React from "react";
import styled from "styled-components";
import MenuItemNavigation from "./MenuItemNavigation";
const Menu = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -55px;

  position: absolute;

  height: 100vh;
  width: 60vw;
  background-color: white;

  box-shadow: 0 0.2px 15.2px -25px rgba(0, 0, 0, 0.041),
    0 1.2px 25.9px -25px rgba(0, 0, 0, 0.071),
    0 3.1px 34px -25px rgba(0, 0, 0, 0.092),
    0 6.2px 40.6px -25px rgba(0, 0, 0, 0.107),
    0 10.8px 46.2px -25px rgba(0, 0, 0, 0.117),
    0 17.6px 51.5px -25px rgba(0, 0, 0, 0.124),
    0 27.8px 56.9px -25px rgba(0, 0, 0, 0.13),
    0 43.9px 63px -25px rgba(0, 0, 0, 0.136),
    0 72.4px 70.3px -25px rgba(0, 0, 0, 0.142),
    0 100px 80px -25px rgba(0, 0, 0, 0.15);
`;

const ItemsContainer = styled.div`
  /* background-color: grey; */
  margin-top: 100px;
  height: 500px;
  width: 80%;
`;

const ExpandedMenu = () => {
  return (
    <Menu>
      <ItemsContainer>
        <MenuItemNavigation></MenuItemNavigation>
        <MenuItemNavigation></MenuItemNavigation>
        <MenuItemNavigation></MenuItemNavigation>
        <MenuItemNavigation></MenuItemNavigation>
      </ItemsContainer>
    </Menu>
  );
};

export default ExpandedMenu;
