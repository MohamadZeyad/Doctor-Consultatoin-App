import React from "react";
import styled from "styled-components";
import { ReactComponent as PhoneIcon } from "../phone.svg";
import { ReactComponent as VideoIcon } from "../videoIcon.svg";
import { ReactComponent as MailIcon } from "../mailIcon.svg";
import styles from "./styles";
const DoctorInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background-color: lightgray; */
  /* margin-left: 20px; */
  height: 200px;
  width: 90vw;
  max-width: 500px;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${styles.darkOrange};
  height: 180px;
  width: 30%;
  max-width: 130px;
  border-radius: 20px;
  overflow: hidden;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 180px;
  width: 65%;
  /* margin-left: 20px; */
  /* background-color: orange; */
`;

const TextContainer = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: space-around; */
  height: 65%;
  width: 100%;
  /* background-color: lightcyan; */
`;
const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 35%;
  /* width: 90%; */
  max-width: 200px;
  /* background-color: cyan; */
`;

const H1Text = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const PText = styled.div`
  font-size: 16px;
  color: lightgray;
  margin-top: 10px;
`;

const IconPlaceholder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  border-radius: 18px;
  height: 50px;
  width: 50px;
`;

const Icon = (icon, background) => {
  const DDD = styled(IconPlaceholder)`
    background-color: ${background};
  `;
  return <DDD>{icon}</DDD>;
};

const Image = styled.img`
  height: 70%;
  width: 100%;
  max-width: 100px;
  max-height: 200px;
  margin-top: 55px;
  margin-left: -10px;

  /* @media (min-width: 768px) {
    margin-top: -40px;
  } */
`;

const DoctorInfoSection = () => {
  return (
    <div>
      <DoctorInfoContainer>
        <ImageContainer>
          <Image src="https://i.ibb.co/whsd8sX/doc-all-by-himself.png"></Image>
        </ImageContainer>
        <InfoContainer>
          <TextContainer>
            <H1Text>Dr.Stefani</H1Text>
            <H1Text>Albert</H1Text>
            <PText>Heart Specialist</PText>
          </TextContainer>
          <IconsContainer>
            {/* <IconPlaceholder>{Icon("hi")}</IconPlaceholder> */}
            {Icon(
              <MailIcon fill={styles.darkOrange}></MailIcon>,
              styles.lightOrange
            )}

            {Icon(
              <PhoneIcon fill={styles.darkRed}></PhoneIcon>,
              styles.lightRed
            )}
            {Icon(
              <VideoIcon fill={styles.darkGray}></VideoIcon>,
              styles.lightGray
            )}

            {/* <IconPlaceholder></IconPlaceholder>
            <IconPlaceholder></IconPlaceholder> */}
          </IconsContainer>
        </InfoContainer>
      </DoctorInfoContainer>
    </div>
  );
};

export default DoctorInfoSection;
