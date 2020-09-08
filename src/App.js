import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import "./App.css";
import styled from "styled-components";

import MenuIcon from "./components/MenuIcon";
import SearchField from "./components/SearchField";
import Nav from "./components/nav";
import Card from "./components/Card";
import DoctorListItem from "./components/DoctorListItem";
import ExpandedMenu from "./components/ExpandedMenu";
import DoctorDetailsPage from "./Pages/doctorDetailsPage";
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

// function App() {
//   const [toggle, setToggle] = useState(false);
//   return (
//     <div className="App">
//       <div onClick={() => setToggle(!toggle)}>
//         <MenuIcon isexpanded={toggle}></MenuIcon>
//       </div>
//       {toggle ? <ExpandedMenu></ExpandedMenu> : null}

//       <HeaderText>Find Your Consultation</HeaderText>
//       <SearchField></SearchField>
//       <CategoriesText>Categories</CategoriesText>
//       <Nav></Nav>
//       <Card></Card>

//       <CategoriesText>Doctors</CategoriesText>

//       <DoctorListItem></DoctorListItem>
//     </div>
//   );
// }
// export default App;

function About() {
  return (
    <div>
      <DoctorDetailsPage></DoctorDetailsPage>
      <Link to="/">GO BACK</Link>
    </div>
  );
}

function Home() {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      {/* <h1>Home</h1> */}
      <div className="App">
        <div onClick={() => setToggle(!toggle)}>
          <MenuIcon isexpanded={toggle}></MenuIcon>
        </div>
        {toggle ? <ExpandedMenu></ExpandedMenu> : null}
        <HeaderText>Find Your Consultation</HeaderText>{" "}
        <SearchField></SearchField>
        <CategoriesText>Categories</CategoriesText>
        <Nav></Nav>
        <Card></Card>
        <CategoriesText>Doctors</CategoriesText>
        <Link to="/about">
          <DoctorListItem></DoctorListItem>
        </Link>
      </div>
    </div>
  );
}
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/about">
          <About></About>
        </Route>

        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}
export default App;
