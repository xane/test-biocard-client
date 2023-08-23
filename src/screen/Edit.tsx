import React from 'react';
import {ScreenContainer, DriverEdit} from '../components';
import {ScreenEditProps} from '../types';

export const ScreenEdit: React.FC<ScreenEditProps> = ({route}) => {
  const {item} = route.params;

  return (
    <ScreenContainer>
      <DriverEdit item={item} />
    </ScreenContainer>
  );
};
