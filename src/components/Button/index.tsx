import React from 'react';
import { Button } from './Button';

export const SolidButton: React.FC = ({ children, ...rest }) => {
  return (
    <Button type="solid" {...rest}>
      {children}
    </Button>
  );
};

export const FlatButton: React.FC = ({ children, ...rest }) => {
  return (
    <Button type="flat" {...rest}>
      {children}
    </Button>
  );
};
