import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import styled from 'styled-components/native';
import {ScreenName, IResDriver} from '../types';
import {navigate, RootState, setSelect} from '../service';

const Button = styled.TouchableOpacity`
  flex: 1;
  margin-top: 5px;
  margin-horizontal: 5px;
  padding-vertical: 10px;
  padding-horizontal: 20px;
  align-content: center;
  background-color: #fff;
`;

const TextBlock = styled.View``;

const TextName = styled.Text`
  line-height: 30px;
  color: gray;
  font-size: 12px;
  font-weight: 300;
`;

const TextValue = styled.Text`
  color: black;
  font-size: 16px;
  font-weight: 600;
`;

interface Props {
  item: IResDriver | undefined;
}

export const DriverListItem: React.FC<Props> = ({item}) => {
  const selectedAll = useSelector((state: RootState) => state.selected);
  const dispatch = useDispatch();

  if (!item) {
    return null;
  }

  const {driverId: id} = item;
  const selected = selectedAll.selected.indexOf(id) !== -1;

  const onPress = () => {
    dispatch(setSelect(id));
    navigate(ScreenName.ItemScreen, {id});
  };

  return (
    <Button
      onPress={onPress}
      // eslint-disable-next-line react-native/no-inline-styles
      style={{backgroundColor: selected ? '#ddd' : '#fff'}}>
      <TextBlock>
        <TextName>
          Гонщик: <TextValue>{item.givenName}</TextValue>{' '}
          <TextValue>{item.familyName}</TextValue>
        </TextName>
      </TextBlock>
      <TextBlock>
        <TextName>
          Страна: <TextValue>{item.nationality}</TextValue>
        </TextName>
      </TextBlock>
    </Button>
  );
};
