import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Typography from './Typography';
import ImageCover from './../../assets/businessstatistics.png';

type LearnMoreProps = {
  title: string;
  text: string;
};

const LearnMore = ({text, title}: LearnMoreProps) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View>
          <Typography size={16} weight="600" color="white">
            {title}
          </Typography>
          <Typography size={12} weight="400" color="white">
            {text}
          </Typography>
        </View>
        <Image source={ImageCover} />
      </View>
    </View>
  );
};

export default LearnMore;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#770FDF',
    borderRadius: 10,
    padding: 12,
  },
});
