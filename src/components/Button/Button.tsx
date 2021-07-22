import React from 'react';
import styled from 'styled-components';
import { FONTWEIGHTS } from '../../constants/theme';

interface ButtonProps {
  type?: 'solid' | 'flat';
}

const StyledStickWrapper = styled.div`
  display: flex;
  visibility: hidden;
  justify-content: space-between;
  width: 100%;
  margin-top: 6px;
`;

const StyledButton = styled.div<ButtonProps>`
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  padding: ${({ type }) => type === 'solid' && '20px 40px'};
  width: fit-content;
  background-color: ${({ type, theme }) => type === 'solid' && theme.GENERAL.BASE};
  justify-content: ${({ type }) => type === 'solid' && 'center'};
  border-radius: 10px;

  &:hover {
    ${StyledStickWrapper} {
      visibility: visible;
    }
  }
`;

const StyledButtonText = styled.div`
  color: ${({ theme }) => theme.WHITE.BASE};
  font-weight: ${FONTWEIGHTS.BOLD};
`;

const StyledStickBig = styled.div`
  background-color: ${({ theme }) => theme.WHITE.BASE};
  height: 2px;
  width: 75%;
`;

const StyledStickMedium = styled.div`
  background-color: ${({ theme }) => theme.WHITE.BASE};
  height: 2px;
  width: 10%;
`;

const StyledStickSmall = styled.div`
  background-color: ${({ theme }) => theme.WHITE.BASE};
  height: 2px;
  width: 5%;
`;

export const Button: React.FC<ButtonProps> = ({ children, type, ...rest }) => {
  return (
    <>
      <StyledButton type={type} {...rest}>
        <StyledButtonText>{children}</StyledButtonText>
        {type === 'flat' && (
          <>
            <StyledStickWrapper>
              <StyledStickBig />
              <StyledStickMedium />
              <StyledStickSmall />
            </StyledStickWrapper>
          </>
        )}
      </StyledButton>
    </>
  );
};
