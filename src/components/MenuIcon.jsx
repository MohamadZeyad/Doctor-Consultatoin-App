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
`;

const MenuLineSmall = styled.div`
  height: 4px;
  width: 30px;
  background-color: black;
`;

const MenuIcon = () => {
  return (
    <MenuContainer>
      <MenuLineLong></MenuLineLong>
      <MenuLineSmall></MenuLineSmall>
    </MenuContainer>
  );
};

export default MenuIcon;
