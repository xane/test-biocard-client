import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import styled from 'styled-components/native';

const ButtonView = styled.TouchableOpacity`
  align-self: center;
`;

const ButtonText = styled.Text`
  padding-vertical: 10px;
  padding-horizontal: 20px;
  font-size: 20px;
  text-align: center;
`;

interface Props extends TouchableOpacityProps {
  text: string;
  color?: string;
  backgroundColor?: string;
  disabled?: boolean;
}

export const Button: React.FC<Props> = ({
  text,
  onPress,
  color = 'white',
  backgroundColor = 'grey',
  disabled = false,
  ...props
}) => (
  <ButtonView
    disabled={disabled}
    onPress={onPress}
    style={{backgroundColor}}
    {...props}>
    <ButtonText style={{color}}>{text}</ButtonText>
  </ButtonView>
);
