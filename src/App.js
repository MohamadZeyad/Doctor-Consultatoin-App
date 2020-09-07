import React, { useState } from "react";

import "./App.css";
import styled from "styled-components";

import Div from "./components/div";
import MenuIcon from "./components/MenuIcon";
import SearchField from "./components/SearchField";
import Nav from "./components/nav";
import Card from "./components/Card";
import DoctorListItem from "./components/DoctorListItem";

const HeaderText = styled.h1`
  width: 70vw;
  margin-left: 20px;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const CategoriesText = styled.h2`
  margin-top: 40px;
  margin-left: 20px;
`;
// const Menu = styled.div`
//   margin-top: -0px;
//   position: absolute;
//   height: 600px;
//   width: 200px;
//   background-color: lightgrey;
// `;

function App() {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="App">
      <div onClick={() => setToggle(!toggle)}>
        <MenuIcon isexpanded={toggle}></MenuIcon>
      </div>

      <HeaderText>Find Your Consultation</HeaderText>
      <SearchField></SearchField>
      <CategoriesText>Categories</CategoriesText>
      <Nav></Nav>
      <Card></Card>

      <CategoriesText>Doctors</CategoriesText>
      <DoctorListItem></DoctorListItem>
    </div>
  );
}

export default App;
