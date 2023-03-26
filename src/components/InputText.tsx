import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Typography from './Typography';

type InputTextProps = {
  value?: string;
  onChange: (text: string) => void;
  placeholder?: string;
  label?: string;
  secureEntry?: boolean;
};

const InputText = ({
  value,
  placeholder,
  onChange,
  label,
  secureEntry,
}: InputTextProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={{marginBottom: 12}}>
      <View style={{marginVertical: 6}}>
        <Typography size={11} weight="400" color={'lightGrey'}>
          {label}
        </Typography>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <TextInput
          placeholder={placeholder}
          style={[styles.input, {width: secureEntry ? '90%' : '100%'}]}
          value={value}
          onChangeText={onChange}
          secureTextEntry={!isVisible}
        />
        {secureEntry ? (
          <Icon
            name={isVisible ? 'eye-outline' : 'eye-off-outline'}
            style={[styles.input, {verticalAlign: 'middle'}]}
            size={20}
            onPress={() => setIsVisible(!isVisible)}
          />
        ) : (
          <></>
        )}
      </View>
    </View>
  );
};

export default InputText;

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#F4F4F4',
    borderRadius: 4,
    paddingHorizontal: 12,
    height: 48,
  },
});
