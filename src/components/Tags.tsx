import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Typography from './Typography';
import Coin from './../../assets/coin.png';

type TagsProps = {
  text: string;
};

const Tags = ({text}: TagsProps) => {
  return (
    <View style={styles.container}>
      <Image source={Coin} style={{marginRight: 4}} />
      <Typography size={11} weight="600" color="purple">
        {text}
      </Typography>
    </View>
  );
};

export default Tags;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F7EFFF',
    padding: 8,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
