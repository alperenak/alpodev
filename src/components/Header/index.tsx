import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  position: fixed;
  display: flex;
  left: 55px;
  height: 55px;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 110px);
`;

const StyledLogo = styled.div`
  font-family: 'Lato', sans-serif;
  font-weight: 800;
  color: ${({ theme }) => theme.BLACK.BASE};
  letter-spacing: 0.125em;
`;

const StyledLanguageWrapper = styled.div`
  display: flex;
`;
const StyledLanguage = styled.div<{ isActive: boolean }>`
  color: ${({ isActive }) => (isActive ? '#000' : '#ccc')};
  font-family: 'Lato', sans-serif;
  cursor: pointer;
  margin-left: 10px;
`;

export const Header: React.FC = () => {
  const [language, setLanguage] = React.useState('en');
  return (
    <StyledHeader>
      <StyledLogo>ALPO.DEV</StyledLogo>
      <StyledLanguageWrapper>
        <StyledLanguage isActive={language === 'tr'} onClick={() => setLanguage('tr')}>
          TR.
        </StyledLanguage>
        <StyledLanguage isActive={language === 'en'} onClick={() => setLanguage('en')}>
          EN.
        </StyledLanguage>
      </StyledLanguageWrapper>
    </StyledHeader>
  );
};
