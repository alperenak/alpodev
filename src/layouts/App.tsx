import React from 'react';
import styled from 'styled-components';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { HelloScreen } from '../pages/Hello';

const StyledAppLayout = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 55px 55px 55px 55px;
`;

const StyledAppLayoutWrapper = styled.div``;

const StyledBlank = styled.div`
  width: 100%;
  height: 100vh;
  z-index: -1;
`;
export const AppLayout: React.FC = () => {
  return (
    <StyledAppLayoutWrapper>
      <Header />
      <Sidebar />
      <StyledAppLayout>
        <HelloScreen />
        <StyledBlank />
      </StyledAppLayout>
    </StyledAppLayoutWrapper>
  );
};
