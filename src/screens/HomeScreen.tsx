import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import Typography from '../components/Typography';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AssetsCards from '../components/AssetsCards';
import Percentage from '../components/Percentage';
import LearnMore from '../components/LearnMore';
import {StackNavigationProp} from '@react-navigation/stack';
import Tags from '../components/Tags';

type HomeScreenProps = {
  navigation: StackNavigationProp<any>;
};

const HomeScreen = ({navigation}: HomeScreenProps) => {
  return (
    <View style={styles.container}>
      <View>
        <Typography size={12} weight="400" color="black">
          Portfolio
        </Typography>
        <View style={styles.header}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-end',
            }}>
            <Typography size={24} weight="600" color="black">
              $1,245.23
            </Typography>
            <Percentage value="31.82%" type="up" />
          </View>
          <Tags text="Earn Rewards" />
        </View>
        <Typography size={18} color="black" weight="600">
          Funds
        </Typography>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{height: 200}}
          style={{marginTop: 12}}>
          <AssetsCards
            type="wind"
            status="bullish"
            value="1032.23"
            percentage="3.51"
            navigation={navigation}
          />
          <AssetsCards
            type="solar"
            status="bearish"
            value="986.61"
            percentage="0.13"
            navigation={navigation}
          />
          <AssetsCards
            type="nature"
            status="bullish"
            value="986.61"
            percentage="0.30"
            navigation={navigation}
          />
        </ScrollView>
        <LearnMore
          title="Learn more about carbon credits"
          text="Check out our top tips!"
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 12,
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 24,
    borderBottomColor: '#F4F4F4',
    borderBottomWidth: 1,
    paddingBottom: 24,
    justifyContent: 'space-between',
  },
});
