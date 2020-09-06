import React from "react";
import styled from "styled-components";

// const CardContainer = styled.div`
//   display: flex;
//   overflow: scroll;
//   height: 300px;
//   width: auto;
// `;

// // const CardContentContainer = styled.div`
// //   display: flex;
// //   flex-direction: column;
// // `;
// const CardStyles = styled.div`
//   display: flex;
//   flex-direction: column;

//   height: 300px;
//   width: 32vw;
//   background-color: orange;
//   border-radius: 25px;
//   margin-left: 20px;
//   overflow: hidden;
//   @media (min-width: 768px) {
//     width: 300px;
//     align-items: center;
//   }
// `;
// const Image = styled.img`
//   /* height: 70%;
//   width: 100%;
//   background-color: red;

//   background-image: url("https://i.ibb.co/whsd8sX/doc-all-by-himself.png");
//   background-repeat: no-repeat;
//   background-size: 150px 200px;
//   object-fit: fill; */
//   height: 70%;
//   width: 100%;
//   background-color: red;
//   @media (min-width: 768px) {
//     max-width: 200px;
//     align-items: center;
//   }
// `;
// const CardText = styled.p`
//   margin-top: 30px;
//   margin-left: 10px;
//   width: 50%;
//   font-weight: bold;
//   color: white;
// `;

// const CardTextSecondary = styled.p`
//   margin-top: 10px;
//   margin-left: 10px;
//   width: 50%;
//   font-size: 12px;
//   color: white;
// `;

const CardsContainer = styled.div`
  display: flex;
  /* justify-content: space-around; */

  overflow: scroll;
  height: 400px;
  margin-left: 20px;
  /* background-color: red; */
`;
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 230px;
  width: 130px;
  /* height: 350px;
  width: 250px; */
  margin-right: 20px;
  max-width: 200px;
  background-color: #fbb97b;
  border-radius: 10px;

  @media (min-width: 768px) {
    height: 350px;
    width: 250px;
  }
`;
const TopCardContainer = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: space-between; */

  height: 30%;
  width: 100%;
`;

const BottomCardContainer = styled.div`
  height: 70%;
  width: 100%;
`;

const CardText = styled.p`
  font-weight: bold;
  color: white;
  margin-left: 10px;
`;

const CardTextSecondary = styled.p`
  font-size: 12px;
  color: white;
  margin-left: 10px;
  margin-top: -10px;
`;
const Image = styled.img`
  /* height: 70%;
  width: 100%;
  background-color: red;

  background-image: url("https://i.ibb.co/whsd8sX/doc-all-by-himself.png");
  background-repeat: no-repeat;
  background-size: 150px 200px;
  object-fit: fill; */
  height: 100%;
  width: 100%;
`;

// dark: #fbb97b;
// light: #ffecd7;
const Card = () => {
  return (
    // <CardContainer>
    //   <CardStyles>
    //     <div>
    //       <CardText>Cold & Cough</CardText>
    //       <CardTextSecondary>10 Doctors</CardTextSecondary>
    //     </div>

    //     <Image src="https://i.ibb.co/whsd8sX/doc-all-by-himself.png"></Image>
    //   </CardStyles>
    //   <CardStyles>
    //     <div>
    //       <CardText>Cold & Cough</CardText>
    //       <CardTextSecondary>10 Doctors</CardTextSecondary>
    //     </div>

    //     <Image src="https://i.ibb.co/whsd8sX/doc-all-by-himself.png"></Image>
    //   </CardStyles>
    // </CardContainer>
    <CardsContainer>
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
    </CardsContainer>
  );
};

export default Card;
