import React from "react";

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
function App() {
  return (
    <div className="App">
      <MenuIcon></MenuIcon>
      <HeaderText>Find Your Consultation</HeaderText>
      <SearchField></SearchField>
      <CategoriesText>Categories</CategoriesText>
      <Nav></Nav>
      <Card></Card>
      <CategoriesText>Doctors</CategoriesText>
      <DoctorListItem></DoctorListItem>
      <img src="https://filedn.com/ltOdFv1aqz1YIFhf4gTY8D7/ingus-info/BLOGS/Photography-stocks3/stock-photography-slider.jpg"></img>
      <img src="https://lh3.googleusercontent.com/qfh_mX-af4SwkI9lE-ofYGDnsHiNpon2cR0K3cXy1eVStZJK9GJJDbh5a2n3qwXyMpm4rM3LdhmtxKJzl_gBJko6zCwfUjWw8b2itUoY7-tTLPtdpUCBchpCsVWrbi_DNm3ME3H4u1_HLft7qURt5By4hB-lnKtGd50Cluq0WRO1OxE0sgiqqGsEn5VwTY4xb7FnK713fRAWNGQIpMVS9bUV3SQjYgqfT1njlXM35L8GDNytWUJaZ3FqwLuByjsMwkSV3ze6dp2TiYf7jrTof9iOPbSFKcJK3ZdDfd3k1Gy3VjjEGvzPBcD8DOzvRKFyg7TEXQ9xd0Eovqv8BdtY1_UlP41CXynOrrlSsLQPNv32B3xyaaqsPOTo023RF1iFHi_AhQTq_fbj-R7Tfg3Bvc5mSYkSUPP6XtWD3UPj_j9rtSgtvVjA2vq-d9BcUT8Ich3WkjdtFZxLE6QqkR02MfoPU5tFO8vQKGAiZ-XrcjQ-qZMiZpX__zGwAidks2Hou2vmo3_4cC20kboQ7zBPClQ2LL8Ko7M9tod5-cus0Zz-hu5cFFxHEQ5M6tCHteW6YewgPTDtaNOsZ4yaRtGzj_8-HDV7XxTdV3btWBPAwGPg7lv-6iYmSSWMahymuvahl-bAa0PltWcyuoRKCUraTgAI74SkQKLHcQC_UihlValMO3QZL_bO8Cl0y5ORtQ=w537-h664-no?authuser=0"></img>
    </div>
  );
}

export default App;
