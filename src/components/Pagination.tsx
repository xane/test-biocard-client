import React from 'react';
import styled from 'styled-components/native';
import {Button} from './Button';

interface Props {
  page: number;
  count: number;
  onPage: (page: number) => {};
}

const Content = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin-top: 10px;
`;

const Text = styled.Text`
  margin-top: 20px;
  padding-vertical: 10px;
  padding-horizontal: 20px;
  font-size: 20px;
  text-align: center;
`;

export const Pagination: React.FC<Props> = ({page, count, onPage}) => {
  const pages = Math.floor(count / 5);
  const array: Array<{num: number; current: boolean}> = [];

  for (var i = 1; i <= pages; i++) {
    array.push({num: i, current: i === page});
  }

  return (
    <>
      <Text>Страница:</Text>
      <Content>
        {array.map(({num, current}, key) => (
          <Button
            key={key}
            text={`${num}`}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{backgroundColor: current ? '#999' : '#555', margin: 5}}
            onPress={() => onPage(num)}
          />
        ))}
      </Content>
    </>
  );
};
