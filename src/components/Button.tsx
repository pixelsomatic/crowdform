import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Typography from './Typography';

type ButtonProps = {
  label: string;
  onPress: () => void;
};

const Button = ({label, onPress}: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Typography size={16} weight="400" color="white">
        {label}
      </Typography>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#770FDF',
    height: 58,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
});
