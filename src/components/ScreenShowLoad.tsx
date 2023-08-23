import React from 'react';
import styled from 'styled-components/native';

const Block = styled.View`
  flex: 1;
  padding: 20px;
  align-content: center;
`;

const Message = styled.Text`
  padding-bottom: 20px;
  color: blue;
  font-size: 20px;
  text-align: center;
`;

interface Props {
  show: boolean;
  text?: string;
}

export const ScreenShowLoad: React.FC<Props> = ({show, text = 'Загрузка...'}) =>
  show && (
    <Block>
      <Message>{text}</Message>
    </Block>
  );
