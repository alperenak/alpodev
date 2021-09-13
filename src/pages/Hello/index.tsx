import React from 'react';
import styled, { keyframes, useTheme } from 'styled-components';
import { Icon } from '../../components/Icon';

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

const StyledRightSection = styled.div<{ isScroll: boolean }>`
  flex: ${({ isScroll }) => (isScroll ? '0' : '1')};
  height: 100%;
  width: 50%;
  transition: 1000ms cubic-bezier(0.7, 0, 0.3, 1) 50ms;
  background: ${({ theme }) => theme.PAGE_BG.BASE};
`;
const StyledLeftSection = styled.div<{ isScroll: boolean }>`
  flex: 1;
  height: 100%;
  width: ${({ isScroll }) => (isScroll ? '100%' : '50%')};
  background: ${({ theme }) => theme.GENERAL.BASE};
  display: flex;
  align-items: center;
  position: relative;
`;

const StyledHelloScreenContent = styled.div<{ isScroll: boolean }>`
  position: absolute;
  height: 800px;
  width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 1000ms cubic-bezier(0.7, 0, 0.3, 1) 50ms;
  right: calc(50% - 400px);
  transform: translate(-50%, -50%);
  right: ${({ isScroll }) => isScroll && '-400px'};

  .text1 {
    text-transform: uppercase;
    animation: ${textAnimate} 4s forwards alternate;
    stroke-width: 2;
    font-family: Gallos;
    stroke: #2c2c2c;
    font-size: 140px;
    white-space: pre-line;
  }

  svg {
    font-family: Gallos;
    position: absolute;
    width: 100%;
    height: 100%;
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

const scrollDown = keyframes`
  0% {
  transform: translateY(0px)
  }
  33% {
  transform: translateY(10px)
  }
  100% {
  transform: translateY(0px)
  }
 
`;

const StyledScrollDown = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
`;

const StyledIcon = styled(Icon)`
  fill: white;
  transform: rotate(-90deg);
`;

const StyledScrollDownText = styled.div`
  color: white;
  transform: rotate(-90deg);
  font-size: 12px;
`;

const StyledIconWrapper = styled.div`
  animation: ${scrollDown} 1.2s infinite ease;
  margin-top: 20px;
`;
export const HelloScreen: React.FC = () => {
  const theme = useTheme();

  const [offsetY, setOffsetY] = React.useState(window.scrollY);
  const handleScroll = () => setOffsetY(window.scrollY);

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <StyledHelloScreen style={{ transform: `translateY(${offsetY}px)` }}>
      <StyledLeftSection isScroll={offsetY > 0}>
        <StyledScrollDown>
          <StyledScrollDownText>Scroll</StyledScrollDownText>
          <StyledIconWrapper>
            <StyledIcon name="scroll" size={14} />
          </StyledIconWrapper>
        </StyledScrollDown>
      </StyledLeftSection>
      <StyledRightSection isScroll={offsetY > 0} />
      <StyledHelloScreenContent style={{ transform: `translateY(${50}px)` }} isScroll={offsetY > 0}>
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
      </StyledHelloScreenContent>
    </StyledHelloScreen>
  );
};
