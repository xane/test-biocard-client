import React from 'react';
import {useApiItem} from '../hooks';
import {ScreenContainer, DriverCart} from '../components';
import {ScreenItemProps} from '../types';
//import {logError, logData} from '../service';

export const ScreenItem: React.FC<ScreenItemProps> = ({route}) => {
  const {mutate, data, error, isLoading} = useApiItem(route.params.id);
  const onRefresh = () => mutate();
  //logError(isLoading, error);
  //logData(isLoading, error, data);

  return (
    <ScreenContainer load={isLoading} error={error} onRefresh={onRefresh}>
      <DriverCart item={data?.data} />
    </ScreenContainer>
  );
};
