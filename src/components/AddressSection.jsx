import React from "react";
import styled from "styled-components";
import { ReactComponent as Pin } from "../Pin.svg";
import { ReactComponent as Watch } from "../Watch.svg";
import styles from "./styles";

const AddressSectionContainer = styled.div`
  display: flex;
  height: 200px;
  width: 90wv;
  /* margin-left: 20px; */
  margin-top: 20px;
  /* background-color: red; */
`;
const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: blue; */
  height: 200px;
  width: 60%;
  margin-top: 10px;
`;
const MapContainer = styled.div`
  /* background-color: pink; */
  background-color: ${styles.lightGray};
  height: 200px;
  width: 40%;
  border-radius: 20px;
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
    font-weight: 600;

    /* color: red; */
  `;
  const ParagraphText = styled.div`
    font-size: 14px;
    font-weight: normal;
    margin-top: 7px;
    color: lightgrey;
    width: 150px;
    /* background-color: red; */
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
        {InformaionBlock(
          "white",
          "Address",
          "Houese at 2 avenue close to Star market",
          <Pin opacity="0.7"></Pin>
        )}
        {InformaionBlock(
          "white",
          "Daily Practict",
          "Monday-Friday Open till 7pm",

          <Watch opacity="1"></Watch>
        )}
      </InformationContainer>

      <MapContainer></MapContainer>
    </AddressSectionContainer>
  );
};

export default AddressSection;
