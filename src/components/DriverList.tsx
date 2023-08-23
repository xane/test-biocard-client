import React from 'react';
import {IResDrivers} from '../types';
import {DriverListItem} from './DriverListItem';

interface Props {
  data: IResDrivers;
}

export const DriverList: React.FC<Props> = ({data}) =>
  data.map((item, key) => <DriverListItem key={key} item={item} />);
