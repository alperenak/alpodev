import React from 'react';
import styled from 'styled-components';
import { Home } from '../pages/Home';

const StyledAppLayout = styled.div``;

export const AppLayout: React.FC = () => {
  return (
    <StyledAppLayout>
      <Home />
    </StyledAppLayout>
  );
};
