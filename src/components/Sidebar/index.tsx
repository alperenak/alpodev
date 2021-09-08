import React from 'react';
import styled, { css } from 'styled-components';

const StyledSidebar = styled.div<{ isOpen: boolean }>`
  z-index: 1;
  position: fixed;
  left: 0;
  top: 55px;
  background-color: ${({ theme }) => theme.WHITE.BASE};
  width: ${({ isOpen }) => (isOpen ? '80%' : '55px')};
  height: 100vh;
  transition: 500ms cubic-bezier(1, 0, 0, 1) 0ms, left 500ms cubic-bezier(1, 0, 0, 1) 0ms;
  display: flex;
  align-items: center;
  pointer-events: none;
  &:hover {
    width: ${({ isOpen }) => !isOpen && '200px'};
  }
`;

const renderMenuIconStick1 = (isOpen: boolean) => {
  if (isOpen) {
    return css`
      transform: rotate(45deg);
      position: absolute;
      height: 2px;
      width: 33px;
      left: 70px;
      background-color: #333;
      transition: all 0.2s;
    `;
  }
  return css`
    transition: all 0.2s;
    height: 2px;
    width: 16px;
    margin-top: 6px;
    background-color: black;
    float: right;
  `;
};

const renderMenuIconStick2 = (isOpen: boolean) => {
  if (isOpen) {
    return css`
      transform: rotate(-45deg);
      transform-origin: center;
      position: absolute;
      height: 2px;
      width: 33px;
      left: 70px;
      background-color: #333;
      transition: all 0.2s;
    `;
  }
  return css`
    transition: all 0.2s;
    height: 2px;
    width: 16px;
    margin-top: 6px;
    background-color: black;
    float: right;
  `;
};

const StyledMenuIconStick1 = styled.div<{ isOpen: boolean }>`
  ${({ isOpen }) => renderMenuIconStick1(isOpen)}
`;

const StyledMenuIconStick2 = styled.div<{ isOpen: boolean }>`
  ${({ isOpen }) => renderMenuIconStick2(isOpen)}
`;
const StyledMenuIconStick3 = styled.div<{ isOpen: boolean }>`
  transition: all 0.1s;
  height: 2px;
  width: ${({ isOpen }) => (isOpen ? '0px' : '12px')};
  margin-top: 6px;
  background-color: black;
  float: right;
`;

const StyledMenuTextWrapper = styled.div<{ isOpen: boolean }>`
  font-size: 12px;
  display: ${({ isOpen }) => (isOpen ? 'none' : 'flex')};
  transform: rotate(-90deg);
`;
const StyledMenuText1 = styled.div`
  color: black;
  margin-left: 4px;
  transition: all 0.2s ease-in-out;
`;

const StyledMenuText2 = styled.div`
  color: black;
  margin-left: 4px;
  transition: all 0.2s ease-in-out;
`;

const StyledMenuText3 = styled.div`
  color: black;
  margin-left: 4px;
  transition: all 0.2s ease-in-out;
`;

const StyledMenuText4 = styled.div`
  color: black;
  margin-left: 4px;
  transition: all 0.2s ease-in-out;
`;

const StyledMenuIconWrapper = styled.div<{ isOpen: boolean }>`
  display: flex;
  left: -50px;
  user-select: none;
  pointer-events: auto;
  align-items: center;
  cursor: pointer;

  &:hover {
    ${StyledMenuIconStick1} {
      width: ${({ isOpen }) => !isOpen && '32px'};
    }
    ${StyledMenuIconStick2} {
      width: ${({ isOpen }) => !isOpen && '48px'};
    }
    ${StyledMenuIconStick3} {
      width: ${({ isOpen }) => !isOpen && '36px'};
    }
    ${StyledMenuText1} {
      margin-top: 30px;
    }
    ${StyledMenuText2} {
      margin-top: 6px;
    }
    ${StyledMenuText3} {
      margin-top: 14px;
    }
    ${StyledMenuText4} {
      margin-top: 25px;
    }
  }
`;

const StyledMenuIconStickWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 70px;
`;

export const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <StyledSidebar isOpen={isOpen}>
        <StyledMenuIconWrapper onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
          <StyledMenuIconStickWrapper>
            <StyledMenuIconStick1 isOpen={isOpen} />
            <StyledMenuIconStick2 isOpen={isOpen} />
            <StyledMenuIconStick3 isOpen={isOpen} />
          </StyledMenuIconStickWrapper>
          <StyledMenuTextWrapper isOpen={isOpen}>
            <StyledMenuText1>M</StyledMenuText1>
            <StyledMenuText2>E</StyledMenuText2>
            <StyledMenuText3>N</StyledMenuText3>
            <StyledMenuText4>U</StyledMenuText4>
          </StyledMenuTextWrapper>
        </StyledMenuIconWrapper>
      </StyledSidebar>
    </>
  );
};
