import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 20px;
  height: 80px;
  width: 80vw;
  max-width: 500px;
  border-radius: 5px;
  background-color: #ffecd7;
`;

const ImageAndNameContainer = styled.div`
  display: flex;

  align-items: center;

  height: 80px;
  width: 70%;
`;

const TextContainer = styled.div`
  display: block;

  height: 40px;

  margin-left: 10px;
`;
const ImageContainer = styled.div`
  display: block;
  background-color: blue;
  height: 40px;
  width: 40px;
  border-radius: 10px;
  margin-left: 10px;
  overflow: hidden;
`;

const Image = styled.img`
  height: 60px;
  width: 40px;

  background-color: #fbb97b;
`;

const H1text = styled.div`
  font-size: 16px;
  color: #fbb97b;
  font-weight: bold;
`;

const H2text = styled.div`
  font-size: 12px;
`;

const CTA = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  height: 25px;
  width: 40px;
  background-color: #fbb97b;
  color: white;
  font-size: 12px;
  border-radius: 5px;
`;

const DoctorListItem = () => {
  return (
    <Container>
      <ImageAndNameContainer>
        <ImageContainer>
          <Image src="https://i.ibb.co/whsd8sX/doc-all-by-himself.png"></Image>
        </ImageContainer>

        <TextContainer>
          <H1text>Dr.Stefani Albert</H1text>
          <H2text>Internist</H2text>
        </TextContainer>
      </ImageAndNameContainer>
      <CTA>Call</CTA>
    </Container>
  );
};

export default DoctorListItem;
