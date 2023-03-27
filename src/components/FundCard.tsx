import React from 'react';
import {View, StyleSheet, Image, Dimensions} from 'react-native';
import Typography from './Typography';

type FundCardProps = {
  image: string;
  title: string;
  body: string;
};

const FundCard = ({body, image, title}: FundCardProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: image}}
        style={{height: 200, borderTopLeftRadius: 4, borderTopRightRadius: 4}}
      />
      <View style={{marginVertical: 8}}>
        <Typography size={12} weight="400" color="black">
          {title}
        </Typography>
      </View>
      <Typography size={12} weight="400" color="black">
        {body}
      </Typography>
    </View>
  );
};

export default FundCard;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width * 0.6,
    borderRadius: 4,
    borderColor: '#E6E6E6',
    borderWidth: 1,
    marginRight: 12,
  },
});
