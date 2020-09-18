import React from "react";
import styled from "styled-components";

const AboutSectionContainer = styled.div`
  height: 170px;
  width: 90vw;
  /* background-color: red; */
  /* margin-left: 20px; */
  overflow: hidden;
  word-wrap: break-word;
`;

const H1Text = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-top: 15px;
`;

const ParagraphText = styled.div`
  font-size: 16px;
  font-weight: normal;
  color: lightgray;
  margin-top: 15px;
`;

const AboutSection = () => {
  return (
    <div>
      <AboutSectionContainer>
        <H1Text>About</H1Text>
        <ParagraphText>
          this is the first time that you can get a reservation for free from
          our doctors because its the first time ever we do this. You can always
          contact us for more information about our services.
        </ParagraphText>
      </AboutSectionContainer>
    </div>
  );
};

export default AboutSection;
