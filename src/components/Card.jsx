import React from "react";
import styled from "styled-components";
import styles from "./styles";

const CardsContainer = styled.div`
  display: flex;
  /* overflow-y: scroll; */
  height: 230px;

  margin-left: 20px;

  /* background-color: red; */
  @media (min-width: 768px) {
    height: 350px;
  }
`;

const Scroller = styled.div`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  height: 230px;
  width: 100%;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 230px;
  min-width: 130px;
  margin-right: 20px;
  max-width: 200px;
  background-color: ${styles.darkOrange};
  border-radius: 10px;

  @media (min-width: 768px) {
    height: 350px;
    width: 250px;
  }
`;
const TopCardContainer = styled.div`
  height: 30%;
  width: 50%;
  @media (min-width: 768px) {
    width: 100%;
  }
`;

const BottomCardContainer = styled.div`
  height: 70%;
  width: 100%;

  /* @media (min-width: 768px) {
    height: 90%;
    width: 100%;
  } */
`;

const CardText = styled.p`
  font-weight: bold;
  color: white;
  margin-left: 10px;
  @media (min-width: 768px) {
    font-size: 20px;
    margin-left: 20px;
  }
`;

const CardTextSecondary = styled.p`
  font-size: 12px;
  color: white;
  margin-left: 10px;
  margin-top: -10px;
  @media (min-width: 768px) {
    font-size: 16px;
    margin-left: 20px;
  }
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  /* @media (min-width: 768px) {
    margin-top: -40px;
  } */
`;

const Card = () => {
  return (
    <CardsContainer>
      <Scroller>
        <CardContainer>
          <TopCardContainer>
            <CardText>Cold & Cough</CardText>
            <CardTextSecondary>10 doctors</CardTextSecondary>
          </TopCardContainer>
          <BottomCardContainer>
            <Image src="https://i.ibb.co/whsd8sX/doc-all-by-himself.png"></Image>
          </BottomCardContainer>
        </CardContainer>
        <CardContainer>
          <TopCardContainer>
            <CardText>Cold & Cough</CardText>
            <CardTextSecondary>10 doctors</CardTextSecondary>
          </TopCardContainer>
          <BottomCardContainer>
            <Image src="https://i.ibb.co/whsd8sX/doc-all-by-himself.png"></Image>
          </BottomCardContainer>
        </CardContainer>
        <CardContainer>
          <TopCardContainer>
            <CardText>Cold & Cough</CardText>
            <CardTextSecondary>10 doctors</CardTextSecondary>
          </TopCardContainer>
          <BottomCardContainer>
            <Image src="https://i.ibb.co/whsd8sX/doc-all-by-himself.png"></Image>
          </BottomCardContainer>
        </CardContainer>
        <CardContainer>
          <TopCardContainer>
            <CardText>Cold & Cough</CardText>
            <CardTextSecondary>10 doctors</CardTextSecondary>
          </TopCardContainer>
          <BottomCardContainer>
            <Image src="https://i.ibb.co/whsd8sX/doc-all-by-himself.png"></Image>
          </BottomCardContainer>
        </CardContainer>
        <CardContainer>
          <TopCardContainer>
            <CardText>Cold & Cough</CardText>
            <CardTextSecondary>10 doctors</CardTextSecondary>
          </TopCardContainer>
          <BottomCardContainer>
            <Image src="https://i.ibb.co/whsd8sX/doc-all-by-himself.png"></Image>
          </BottomCardContainer>
        </CardContainer>
      </Scroller>
    </CardsContainer>
  );
};

export default Card;
