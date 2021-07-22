import React from 'react';
import styled from 'styled-components';
import { userSelectNone } from '../../lib/styleHelpers';
import icons from './list';

export type IconNameType = keyof typeof icons;

interface IconProps {
  className?: string;
  name: IconNameType;
  size?: number;
  color?: string;
  onClick?: (e: React.MouseEvent) => void;
}

const StyledIconWrapper = styled.div<{ color?: string }>`
  ${userSelectNone()};
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: ${({ color }) => color};
    fill: ${({ color }) => color};
  }
`;

export const Icon = React.memo<IconProps>(({ size, name, className, color, ...props }) => {
  const loadedSvg = icons[name as IconNameType];

  if (!loadedSvg) {
    return null;
  }

  return <StyledIconWrapper color={color}> {loadedSvg({ ...props, fontSize: size, className })}</StyledIconWrapper>;
});

export { icons };
