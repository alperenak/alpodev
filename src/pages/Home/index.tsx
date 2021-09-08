import React from 'react';
import styled from 'styled-components';
import { transitionBackground } from '../../lib/styleHelpers';
import { Button } from '../../components/Button/Button';
import { Navbar } from '../../components/Navbar';
import { Icon } from '../../components/Icon';

const NAVBAR_TITLES = ['Home', 'About', 'Portfolio', 'Experience'];

const StyledHome = styled.div`
  background-color: ${({ theme }) => theme.PAGE_BG.BASE};
  display: flex;
  height: 100vh;
  position: relative;
  overflow: hidden;
  ${transitionBackground()}
`;

const StyledLeftSide = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex: 1;
`;
const StyledRightSide = styled.div`
  flex: 1;
  display: flex;
  position: relative;
`;

const StyledHomeBackground = styled.div`
  background: ${({ theme }) => theme.GENERAL.BASE};
  position: absolute;
  right: -15vw;
  top: -20vw;
  left: 0;
  width: 120%;
  height: 155vh;
  transform: rotate(-20deg);
`;

const StyledMediumTitle = styled.div`
  display: flex;
  font-size: 32px;
  padding: 10px 0;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  letter-spacing: 4px;
`;

const StyledTitle = styled.div`
  font-size: 48px;
  font-weight: 600;
  color: ${({ theme }) => theme.TEXT.BASE};
  font-family: 'Montserrat', sans-serif;
`;

const StyledSmallTitle = styled.div`
  font-size: 20px;
  padding: 10px 0;
  color: ${({ theme }) => theme.TEXT.BASE};
`;

const StyledDescription = styled.div`
  color: ${({ theme }) => theme.TEXT.LOWLIGHT};
`;

const StyledIntroduction = styled.div`
  width: 480px;
`;

const StyledSocialMedia = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 250px;
  width: 50px;
  border-radius: 50px;
  border: solid 2px ${({ theme }) => theme.TEXT.LOWLIGHT};
`;

const StyledButton = styled(Button)`
  margin-top: 30px;
`;

export const Home: React.FC = () => {
  return (
    <StyledHome>
      <StyledLeftSide>
        <StyledSocialMedia>
          <Icon size={18} name="facebook" />
          <Icon size={18} name="twitter" />
          <Icon size={18} name="github" />
          <Icon size={18} name="linkedin" />
        </StyledSocialMedia>
        <StyledIntroduction>
          <StyledMediumTitle>Hello I&apos;m</StyledMediumTitle>
          <StyledTitle>Alperen Karagüzel</StyledTitle>
          <StyledSmallTitle>Fullstack Developer</StyledSmallTitle>
          <StyledDescription>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam.
          </StyledDescription>
          <StyledButton type="solid">Hire Me</StyledButton>
        </StyledIntroduction>
      </StyledLeftSide>
      <StyledRightSide>
        <Navbar titles={NAVBAR_TITLES} />
        <StyledHomeBackground />
      </StyledRightSide>
    </StyledHome>
  );
};
