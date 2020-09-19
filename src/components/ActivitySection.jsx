import React from "react";
import styled from "styled-components";
import styles from "./styles";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 150px;
  width: 90vw;
  /* background-color: red; */
  margin-top: 20px;
`;

const H1Text = styled.div`
  /* background-color: lightgray; */
  font-size: 24px;
  font-weight: bold;
`;

const GridContainer = styled.div`
  margin-top: -10px;
  display: flex;
  justify-content: space-between;
  height: 90px;
  width: 100%;
  /* background-color: blue; */
`;

const GridElement = (background, text, iconColor) => {
  const Element = styled.div`
    height: 100%;
    width: 45%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${background};
    border-radius: 15px;
  `;

  const ContentContainer = styled.div`
    display: flex;
    align-items: center;

    height: 70%;
    width: 70%;
    /* background-color: red; */
  `;

  const Icon = styled.div`
    height: 40px;
    width: 40px;
    border-radius: 25px;
    background-color: ${iconColor};
  `;

  const Text = styled.div`
    height: 50%;
    width: 50%;
    color: white;
    font-size: 12px;
    font-weight: 600;
    margin-left: auto;
    /* background-color: green; */
  `;

  return (
    <Element>
      <ContentContainer>
        <Icon></Icon>
        <Text>{text}</Text>
      </ContentContainer>
    </Element>
  );
};

const ActivitySection = () => {
  return (
    <Container>
      <H1Text>Activity</H1Text>
      <GridContainer>
        {GridElement(styles.darkOrange, "List of schedule", "#f8c89a")}
        {GridElement("#a5a5a5", "Doctors Daily Post", "#b4b4b4")}
      </GridContainer>
    </Container>
  );
};

export default ActivitySection;
