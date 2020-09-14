import React from "react";
import styled from "styled-components";
import { ReactComponent as Pin } from "../Pin.svg";

const AddressSectionContainer = styled.div`
  display: flex;
  height: 200px;
  width: 90wv;
  margin-left: 20px;
  /* background-color: red; */
`;
const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: blue; */
  height: 200px;
  width: 60%;
`;
const MapContainer = styled.div`
  /* background-color: pink; */
  height: 200px;
  width: 40%;
`;

const InformaionBlockContainer = styled.div`
  display: flex;
  /* background-color: "green"; */
  height: 100%;
  width: 100%;
`;

const InformaionBlock = (bg, headerText, paragraphText, icon) => {
  const DDD = styled(InformaionBlockContainer)`
    background-color: ${bg};
  `;
  const H1Text = styled.div`
    font-size: 18px;
    font-weight: bold;
    color: red;
  `;
  const ParagraphText = styled.div`
    font-size: 16px;
    font-weight: normal;
    color: red;
  `;
  const IconContainer = styled.div`
    height: 100%;
    width: 20%;
  `;

  const TextContainer = styled.div`
    height: 100%;
    width: 100%;
  `;

  return (
    <DDD>
      <IconContainer>{icon}</IconContainer>
      <TextContainer>
        <H1Text>{headerText}</H1Text>
        <ParagraphText>{paragraphText}</ParagraphText>
      </TextContainer>
    </DDD>
  );
};

const AddressSection = () => {
  return (
    <AddressSectionContainer>
      <InformationContainer>
        {InformaionBlock("white", "Address", "Houese at 2 avenue", <Pin></Pin>)}
        {InformaionBlock("white", "Daily Practict", "Monday-Friday")}
      </InformationContainer>

      <MapContainer></MapContainer>
    </AddressSectionContainer>
  );
};

export default AddressSection;
