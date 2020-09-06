import React from "react";
import styled from "styled-components";

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 20px;
  width: 90vw;
  max-width: 500px;
`;

const NavElement = styled.p`
  padding: 7px 15px;
  border-radius: 25px;
  color: grey;
  font-size: 14px;
  &:hover {
    color: #fbb97b;
    background-color: #ffecd7;
  }
  &:active {
    color: #fbb97b;
    background-color: #ffecd7;
  }
`;

const nav = () => {
  return (
    <NavContainer>
      <NavElement>Men</NavElement>
      <NavElement>Women</NavElement>
      <NavElement>Children</NavElement>
      <NavElement>Adults</NavElement>
    </NavContainer>
  );
};

export default nav;
