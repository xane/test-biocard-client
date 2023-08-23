import React from 'react';
import styled from 'styled-components/native';

const Block = styled.View`
  flex: 1;
  padding: 20px;
  align-content: center;
`;

const Message = styled.Text`
  padding-bottom: 20px;
  color: red;
  font-size: 20px;
  text-align: center;
`;

const Button = styled.TouchableOpacity`
  align-self: center;
  background-color: red;
  border: 2px;
`;

const ButtonText = styled.Text`
  padding-vertical: 10px;
  padding-horizontal: 20px;
  color: white;
  font-size: 20px;
  text-align: center;
`;

interface Props {
  show: boolean;
  text?: string;
  onPress?: () => void;
}

export const ScreenShowError: React.FC<Props> = ({
  show,
  text = 'Произошла ошибка',
  onPress = () => {},
}) =>
  show && (
    <Block>
      <Message>{text}</Message>
      <Button onPress={onPress}>
        <ButtonText>Обновить</ButtonText>
      </Button>
    </Block>
  );
