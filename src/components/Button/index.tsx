import React from 'react';
import { Button } from './Button';

export const SolidButton: React.FC = ({ children }) => {
  return <Button type="solid">{children}</Button>;
};

export const FlatButton: React.FC = ({ children }) => {
  return <Button type="flat">{children}</Button>;
};
