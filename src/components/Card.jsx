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
  background-image: url("https://photos.google.com/share/AF1QipOoLInNKOkihDGWFHcS0tJROLfORw-V804cvxlw0DA4StShcbvt5fNSXeTI073-Eg?key=OGVEOW1oWTRGSmRfVFdXdHJRNkV4QXI5bG8ybGxn");
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
