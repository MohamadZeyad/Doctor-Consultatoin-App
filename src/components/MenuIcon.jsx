import React from "react";
import styled from "styled-components";

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 15px;
  margin-left: 20px;

  margin-top: 40px;
`;

const MenuLineLong = styled.div`
  height: 4px;
  width: 37px;
  background-color: black;
  z-index: 10;
`;

const MenuLineSmall = styled.div`
  height: 4px;
  width: 30px;
  background-color: black;
  z-index: 10;
`;
const Menu = styled.div`
  margin-top: 0px;
  margin-left: -20px;
  position: absolute;

  height: 600px;
  width: 200px;
  background-color: lightgrey;
`;
const MenuIcon = ({ isexpanded }) => {
  return (
    <MenuContainer>
      <MenuLineLong></MenuLineLong>
      <MenuLineSmall></MenuLineSmall>
      {isexpanded ? <Menu></Menu> : null}
    </MenuContainer>
  );
};

export default MenuIcon;
