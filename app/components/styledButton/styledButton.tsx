import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import { TTextElementVariant, TextElement } from '../textElement/textElement';

interface IStyledButtonProps {
  children?: React.ReactNode;
  text?: string;
  onPress?: () => void;
  textVariant?: TTextElementVariant;
  size?: number;
}

const StyledButton: FC<IStyledButtonProps> = ({ children, size, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        padding: 8,
        borderRadius: 8,
        borderColor: 'black',
        borderWidth: 1,
        height: size,
      }}
    >
      {children}
    </TouchableOpacity>
  );
};

const StyledTextButton: FC<IStyledButtonProps> = ({
  text,
  textVariant = 'button',
  ...buttonProps
}) => {
  return (
    <StyledButton {...buttonProps}>
      <TextElement variant={textVariant}>{text}</TextElement>
    </StyledButton>
  );
};

export { StyledTextButton };
