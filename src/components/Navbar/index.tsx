import React from 'react';
import styled, { useTheme } from 'styled-components';
import { FlatButton } from '../Button';
import { Icon } from '../Icon';

interface NavbarProps {
  titles: string[];
}

const StyledNavbar = styled.div`
  display: flex;
  height: 80px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const StyledFlatButton = styled(FlatButton)`
  position: relative;
  z-index: 1;
  padding: 10px;
`;

const StyledIcon = styled(Icon)`
  width: 24px;
  cursor: pointer;
  height: 24px;
  z-index: 1;
  position: absolute;
  left: -100px;
  top: 36px;
  color: ${({ theme }) => theme.WHITE.BASE};
  user-select: none;
`;

export const Navbar: React.FC<NavbarProps> = ({ titles }) => {
  const theme = useTheme();

  return (
    <>
      <StyledNavbar>
        {titles.map(title => (
          <StyledFlatButton>{title}</StyledFlatButton>
        ))}
      </StyledNavbar>
      {theme.isDark ? (
        <StyledIcon name="sun" onClick={theme.toggleTheme} />
      ) : (
        <StyledIcon name="moon" onClick={theme.toggleTheme} />
      )}
    </>
  );
};
