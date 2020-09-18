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
  height: 80px;
  width: 100%;
  /* background-color: blue; */
`;

// const GridElement = styled.div`
//   height: 100%;
//   width: 45%;
//   background-color: orange;
//   border-radius: 25px;
// `;

const GridElement = background => {
  var Element = styled.div`
    height: 100%;
    width: 45%;
    background-color: ${background};
    border-radius: 25px;
  `;

  //   const DDD = styled(IconPlaceholder)`
  //     background-color: ${background};
  //   `;
  return <Element></Element>;
};

const ActivitySection = () => {
  return (
    <Container>
      <H1Text>Activity</H1Text>
      <GridContainer>
        {GridElement(styles.darkGray)}
        {GridElement(styles.darkOrange)}
      </GridContainer>
    </Container>
  );
};

export default ActivitySection;
