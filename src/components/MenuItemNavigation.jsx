import React from "react";
import styled from "styled-components";
import { ReactComponent as BookIcon } from "../book.svg";
const ItemContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 40px;
  width: 100%;
  /* background-color: red; */
  padding: 10px 0px;
`;

// const Icon = styled.svg`
//   height: 30px;
//   width: 30%;
//   background-color: blue;
// `;
const Text = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  width: 70%;
  /* background-color: yellow; */
`;

const MenuItemNavigation = ({ icon, text }) => {
  return (
    <ItemContainer>
      <BookIcon></BookIcon>
      <Text>About</Text>
    </ItemContainer>
  );
};

export default MenuItemNavigation;
