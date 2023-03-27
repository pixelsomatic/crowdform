import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Typography from './Typography';
import {LineChart} from 'react-native-chart-kit';
import Percentage from './Percentage';

type AssetsCardsProps = {
  type: 'wind' | 'solar' | 'nature';
  status: 'bearish' | 'bullish';
  value: string;
  percentage: string;
};

const AssetsCards = ({type, status, percentage, value}: AssetsCardsProps) => {
  const typeMap = {
    wind: {
      icon: 'weather-windy',
      color: '#4A88D0',
      title: 'Wind Fund',
    },
    solar: {
      icon: 'weather-sunny',
      color: '#F0A719',
      title: 'Wind Fund',
    },
    nature: {
      icon: 'leaf',
      color: '#0FDF8F',
      title: 'Wind Fund',
    },
  };

  const {title, icon, color} = typeMap[type] || {};

  return (
    <View style={styles.container}>
      <Icon name={icon} color={color} />
      <Typography size={12} weight="600" color="black">
        {title}
      </Typography>
      <LineChart
        data={{
          labels: ['January', 'February', 'March', 'April', 'May', 'June'],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
          ],
        }}
        width={Dimensions.get('screen').width * 0.25}
        height={80}
        withHorizontalLabels={false}
        withHorizontalLines={false}
        withVerticalLabels={false}
        withVerticalLines={false}
        yAxisInterval={1}
        chartConfig={{
          backgroundColor: '#fff',
          backgroundGradientFrom: '#fff',

          backgroundGradientTo: '#fff',
          color: () => (status === 'bullish' ? '#0FDF8F' : '#EE8688'),
          propsForDots: {
            r: '0',
            onPress: () => console.log('Dot pressed'),
          },
        }}
        bezier
      />
      <View style={{flexDirection: 'row'}}>
        <Typography size={14} weight="400" color="black">
          {value}
        </Typography>
        <Percentage
          value={percentage}
          type={status === 'bearish' ? 'down' : 'up'}
        />
      </View>
    </View>
  );
};

export default AssetsCards;

const styles = StyleSheet.create({
  container: {
    borderColor: '#E6E6E6',
    borderWidth: 1,
    borderRadius: 4,
    padding: 12,
    marginRight: 12,
    width: Dimensions.get('screen').width * 0.4,
    height: 160,
  },
});
