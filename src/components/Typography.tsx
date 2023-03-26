import React, {ReactNode} from 'react';
import {StyleSheet, Text} from 'react-native';

type TypographyProps = {
  size: number;
  weight:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
    | undefined;
  children: ReactNode;
  color?:
    | 'lightGrey'
    | 'black'
    | 'white'
    | 'purple'
    | 'lightRed'
    | 'lightGreen';
  underline?: boolean;
};

const Typography = ({
  children,
  size,
  weight,
  color,
  underline,
}: TypographyProps) => {
  return (
    <Text
      style={{
        fontSize: size,
        fontWeight: weight,
        color: color ? styles[color].color : '#0000',
        textDecorationLine: underline ? 'underline' : 'none',
      }}>
      {children}
    </Text>
  );
};

export default Typography;

const styles = StyleSheet.create({
  lightGrey: {
    color: '#A0A0A0',
  },
  black: {
    color: '#000000',
  },
  white: {
    color: '#FFFFFF',
  },
  purple: {
    color: '#770FDF',
  },
  lightRed: {
    color: '#EE8688',
  },
  lightGreen: {
    color: '#0FDF8F',
  },
});
