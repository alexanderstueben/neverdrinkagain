import React from 'react';
import { HeaderButton, HeaderButtonProps } from 'react-navigation-header-buttons/index';
import { MaterialIcons } from '@expo/vector-icons';

export const AppHeaderButton = (props: HeaderButtonProps) => {
  return (
    <HeaderButton {...props} IconComponent={MaterialIcons} iconSize={22} />
  );
}