import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  overflow: scroll;
  height: 200px;
  width: auto;
`;

const CardStyles = styled.div`
  height: 200px;
  width: 32vw;
  background-color: orange;
  border-radius: 25px;
  margin-left: 20px;
  overflow: hidden;
`;
const Image = styled.div`
  margin-top: -70px;
  margin-left: 20px;
  /* background-color: red; */
  height: 100%;
  background-image: url("https://lh3.googleusercontent.com/hlBSLg6wsi_GQ7cCKMnUJpPAWDUca1c8j05JhSnIcKbpQrFh_onZp_-4b9LZcrp672vcvcL6NlzwrhGiShLRpAJHObOvalZH62h6_h35MhmSYIAqh3WQmtrU5rjPsxy_Pg-3rPGB7NB5mqD4GkVcvhHbHsEZfUD6-cb4zHXCpJuyPrmgaN5qUMImxvNT5AexQtVEezGsa0UPrVfYvRnO5L2_jrlQsi40kgyP-tQurQ98jbItgGHI20zs3NIYnJJKlGFcUUbjTULSAN3N-MwmW0wijet-pHQvGAWG2ISk3YDNHJAeMMxPvnYWz4jDuEP4HZYs4s4o4x2hgWyOeMoWUaHfA6wQp-TetSn9-cGe1c8Z3qC1kepX227zXO3Y1OeGeWi6OxIgRrvbbdfO2tOOaz4Lx6-wlH4qBzDLqKbe6alDTbfS5q0K9u9sX6kGWsNevXANWjurHbmzF6mzGrP4qHofmZKNJYLlMbbXYQSQ8AA74Zj8tWSwpTVQAQBgZS25GojkNtSZk9ZftvyPAS71u5royY2qrVFnALDEsZCL5lX4ERlTwSHl4TtmRKWrZyG4DxCCnsxw8belLRk5exl4wp1jdyAMr43Gr4x30cr-QvCAeuy_gyPLsMyVFfxzAPYGa51RozNSgzbGubPIosVLMz7zRtHlcEdNJCUDZA34QAW9Md4jOohd4x6U2vjENw=w537-h664-no?authuser=0");
  background-repeat: no-repeat;

  background-size: 120px 170px;
  object-fit: fill;
`;
const CardText = styled.p`
  margin-top: 30px;
  margin-left: 10px;
  width: 50%;
  font-weight: bold;
  color: white;
`;

const CardTextSecondary = styled.p`
  margin-top: 10px;
  margin-left: 10px;
  width: 50%;
  font-size: 12px;
  color: white;
`;

const Card = () => {
  return (
    <CardContainer>
      <CardStyles>
        <CardText>Cold & Cough</CardText>
        <CardTextSecondary>10 Doctors</CardTextSecondary>
        <Image></Image>
      </CardStyles>
      <CardStyles>
        <CardText>Cold & Cough</CardText>
        <CardTextSecondary>10 Doctors</CardTextSecondary>
      </CardStyles>
    </CardContainer>
  );
};

export default Card;
