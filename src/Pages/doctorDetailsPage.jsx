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
import ActivitySection from "../components/ActivitySection";
//CONTAINERS
const BackArrowContainer = styled.div`
  margin-top: 30px;
  margin-left: 10px;
  margin-bottom: 20px;
`;

const DoctorDetailsPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  /* background-color: red; */
`;

const DoctorDetailsPageContainer = styled.div`
  height: 100vh;
  width: 90%;
  /* background-color: blue; */
`;

const doctorDetailsPage = () => {
  return (
    <DoctorDetailsPage>
      <DoctorDetailsPageContainer>
        <BackArrowContainer>
          <Link to="/">
            <BackArrow height="30px" width="30px"></BackArrow>
          </Link>
        </BackArrowContainer>
        <DoctorInfoSection></DoctorInfoSection>
        <AboutSection></AboutSection>
        <AddressSection></AddressSection>
        {/* <ActivitySection></ActivitySection> */}
      </DoctorDetailsPageContainer>
    </DoctorDetailsPage>
  );
};

export default doctorDetailsPage;
