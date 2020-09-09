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
//CONTAINERS
const BackArrowContainer = styled.div`
  margin-top: 30px;
  margin-left: 10px;
`;

const doctorDetailsPage = () => {
  return (
    <div>
      <BackArrowContainer>
        <Link to="/">
          <BackArrow></BackArrow>
        </Link>
      </BackArrowContainer>
      <DoctorInfoSection></DoctorInfoSection>
    </div>
  );
};

export default doctorDetailsPage;
