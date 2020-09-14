import React from "react";
import styled from "styled-components";

import { ReactComponent as BackArrow } from "../backArrow.svg";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import DoctorInfoSection from "../components/DoctorInfoSection";
import AboutSection from "../components/AboutSection";
import AddressSection from "../components/AddressSection";
//CONTAINERS
const BackArrowContainer = styled.div`
  margin-top: 30px;
  margin-left: 10px;
  margin-bottom: 20px;
`;

const doctorDetailsPage = () => {
  return (
    <div>
      <BackArrowContainer>
        <Link to="/">
          <BackArrow height="30px" width="30px"></BackArrow>
        </Link>
      </BackArrowContainer>
      <DoctorInfoSection></DoctorInfoSection>
      <AboutSection></AboutSection>
      <AddressSection></AddressSection>
      {/* <Pin></Pin> */}
    </div>
  );
};

export default doctorDetailsPage;
