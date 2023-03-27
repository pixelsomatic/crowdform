import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Typography from './Typography';

type PercentageProps = {
  type: 'up' | 'down';
  value: string;
};

const Percentage = ({type, value}: PercentageProps) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 2}}>
      <Icon
        name={
          type === 'up' ? 'arrow-top-right-thin' : 'arrow-bottom-right-thin'
        }
        color={type === 'down' ? '#EE8688' : '#0FDF8F'}
      />
      <Typography
        size={14}
        weight="400"
        color={type === 'down' ? 'lightRed' : 'lightGreen'}>
        {value}%
      </Typography>
    </View>
  );
};

export default Percentage;
