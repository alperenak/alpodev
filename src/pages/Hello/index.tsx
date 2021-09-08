import React from 'react';
import styled, { keyframes, useTheme } from 'styled-components';
// import { Sidebar, StyledSidebar } from '../../components/Sidebar';

const textAnimate = keyframes`
 0% {
      fill: rgba(72, 138, 20, 0);
      stroke: #333333;
      stroke-dashoffset: 25%;
      stroke-dasharray: 0 50%;
      stroke-width: 2;
    }
    70% {
      fill: rgba(72, 138, 20, 0);
      stroke: #333333;
    }
    80% {
      fill: rgba(72, 138, 20, 0);
      stroke: #333333;
      stroke-width: 3;
    }
    100% {
      fill: #1C1B20;
      stroke: rgba(54, 95, 160, 0);
      stroke-dashoffset: -25%;
      stroke-dasharray: 50% 0;
      stroke-width: 0;
    }
`;

const StyledHelloScreen = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const StyledRightSection = styled.div`
  flex: 1;
  height: 100%;
  width: 50%;
  background: ${({ theme }) => theme.PAGE_BG.BASE};
`;
const StyledLeftSection = styled.div`
  flex: 1;
  height: 100%;
  width: 50%;
  background: ${({ theme }) => theme.GENERAL.BASE};
  display: flex;
  align-items: center;
`;

const StyledHelloScreenContent = styled.div`
  position: absolute;
  height: 800px;
  width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  svg {
    font-family: Gallos;
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .text1 {
    text-transform: uppercase;
    animation: ${textAnimate} 4s forwards alternate;
    stroke-width: 2;
    font-family: Gallos;
    stroke: #2c2c2c;
    font-size: 140px;
    white-space: pre-line;
  }
  path {
    height: 50px;
    width: 50px;
    background-color: ${({ theme }) => theme.GENERAL.BASE};
    border-radius: 50%;
  }
`;

export const StyledSidebar = styled.div`
  z-index: 1;
  top: 0;
  position: fixed;
  left: 0;
  background-color: ${({ theme }) => theme.WHITE.BASE};
  width: 55px;
  height: 100vh;
  transition: width 0.2s ease-in-out;
`;

export const HelloScreen: React.FC = () => {
  const theme = useTheme();
  return (
    <StyledHelloScreen>
      <StyledLeftSection />
      <StyledRightSection />
      <StyledHelloScreenContent>
        {/* <StyledIconWrapper>
          <StyledIcon name="hello" />
        </StyledIconWrapper> */}
        <svg viewBox="0 0 512 512">
          <text className="text1" x="50%" y="30%" dy=".35em" textAnchor="middle">
            HE
          </text>
          <text className="text1" x="57.3%" y="55%" dy=".35em" textAnchor="middle">
            LLO
          </text>
          <circle cx="84%" cy="62%" r="0" fill={theme.GENERAL.BASE}>
            <animate attributeName="r" begin="2s" dur="0.5s" from="0%" to="17" fill="freeze" />
          </circle>
        </svg>
        {/* <StyledHelloText>HE</StyledHelloText>
        <StyledHelloScreenTextWrapper>
          <StyledHelloText>LLO</StyledHelloText>
          <StyledHelloScreenDot>.</StyledHelloScreenDot>
        </StyledHelloScreenTextWrapper> */}
      </StyledHelloScreenContent>
    </StyledHelloScreen>
  );
};
