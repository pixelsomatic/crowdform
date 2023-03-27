import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import Typography from '../components/Typography';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AssetsCards from '../components/AssetsCards';
import Percentage from '../components/Percentage';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Typography size={12} weight="400" color="black">
        Portfolio
      </Typography>
      <View style={styles.header}>
        <Typography size={24} weight="600" color="black">
          $1,245.23
        </Typography>
        <Percentage value="31.82%" type="up" />
      </View>
      <Typography size={18} color="black" weight="600">
        Funds
      </Typography>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{marginTop: 12}}>
        <AssetsCards
          type="wind"
          status="bullish"
          value="$1032.23"
          percentage="3.51"
        />
        <AssetsCards
          type="solar"
          status="bearish"
          value="$986.61"
          percentage="0.13"
        />
        <AssetsCards
          type="nature"
          status="bullish"
          value="$986.61"
          percentage="0.30"
        />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 12,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 24,
    borderBottomColor: '#F4F4F4',
    borderBottomWidth: 1,
    paddingBottom: 24,
  },
});
