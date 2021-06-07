import React from 'react';
import styled from 'styled-components';
import { FONTWEIGHTS } from '../../constants/theme';

interface ButtonProps {
  type?: 'solid' | 'flat';
}

const StyledButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledButtonText = styled.div`
  color: ${({ theme }) => theme.GENERAL.BASE};
  font-weight: ${FONTWEIGHTS.BOLD};
`;

const StyledStickWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const StyledStickBig = styled.div`
  background-color: ${({ theme }) => theme.GENERAL.BASE};
  height: 2px;
  width: 75%;
`;

const StyledStickMedium = styled.div`
  background-color: ${({ theme }) => theme.GENERAL.BASE};
  height: 2px;
  width: 10%;
`;

const StyledStickSmall = styled.div`
  background-color: ${({ theme }) => theme.GENERAL.BASE};
  height: 2px;
  width: 5%;
`;

export const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <StyledButton>
      <StyledButtonText>{children}</StyledButtonText>
      <StyledStickWrapper>
        <StyledStickBig />
        <StyledStickMedium />
        <StyledStickSmall />
      </StyledStickWrapper>
    </StyledButton>
  );
};
