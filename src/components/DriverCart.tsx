import React from 'react';
import styled from 'styled-components/native';
import {ScreenName, IResDriver} from '../types';
import {navigate} from '../service';
import {Button} from './Button';

const Content = styled.View`
  flex: 1;
  margin: 5px;
  padding-vertical: 10px;
  padding-horizontal: 20px;
  background-color: #fff;
`;

const TextBlock = styled.View``;

const TextName = styled.Text`
  line-height: 40px;
  color: gray;
  font-size: 20px;
  font-weight: 300;
`;

const TextValue = styled.Text`
  color: black;
  font-size: 26px;
  font-weight: 900;
`;

const TextUrl = styled.Text`
  color: blue;
  font-size: 16px;
  font-weight: 300;
`;

const Spacer = styled.View`
  flex: 1;
  height: 20px;
`;

interface Props {
  item: IResDriver | undefined;
}

const onEdit = (item: IResDriver) =>
  navigate(ScreenName.ItemEditScreen, {item});

export const DriverCart: React.FC<Props> = ({item}) =>
  !!item && (
    <Content>
      <TextBlock>
        <TextName>
          Имя: <TextValue>{item.givenName}</TextValue>
        </TextName>
      </TextBlock>
      <TextBlock>
        <TextName>
          Фамилия: <TextValue>{item.familyName}</TextValue>
        </TextName>
      </TextBlock>
      <TextBlock>
        <TextName>
          Ссылка: <TextUrl>{item.url}</TextUrl>
        </TextName>
      </TextBlock>
      <TextBlock>
        <TextName>
          Страна: <TextValue>{item.nationality}</TextValue>
        </TextName>
      </TextBlock>
      <Spacer />
      <Button text="Редактировать" onPress={() => onEdit(item)} />
    </Content>
  );
