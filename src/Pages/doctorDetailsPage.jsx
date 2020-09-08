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

      <h1>doctorDetailsPage</h1>
    </div>
  );
};

export default doctorDetailsPage;
