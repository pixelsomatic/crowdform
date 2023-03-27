import React, {useEffect, useState} from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ListRenderItem,
} from 'react-native';
import {RouteProp, useNavigation} from '@react-navigation/native';
import Typography from '../components/Typography';
import {LineChart} from 'react-native-chart-kit';
import Grid from '../components/Grid';
import Tabs from '../components/Tabs';
import FundCard from '../components/FundCard';
import Percentage from '../components/Percentage';
import Button from '../components/Button';

type DetailsScreenProps = {
  route: RouteProp<any>;
};

const DetailsScreen = ({route}: DetailsScreenProps) => {
  const [optionSelected, setOptionSelected] = useState('');
  const navigation = useNavigation();
  const {title, value, status} = route?.params!;
  const tabs = ['Highlighted', 'Value', 'Vintage', 'Registry'];
  const companies = [
    {
      image: 'https://picsum.photos/seed/picsum/300',
      title: 'AspiraDAC',
      body: `Aspira is building a modular, direct air capture system with the energy supply integrated into the modules.
    Read more`,
    },
    {
      image: 'https://picsum.photos/seed/3435/300',
      title: 'climeWorks',
      body: `uses renewable geothermal energy and waste heat to capture CO₂ directly from the air.
    Read more`,
    },
  ];
  const options = ['1h', '1d', '1w', '1m', '1y', 'All'];
  const gridValues = [
    {title: 'AUM', value: '$430.88m'},
    {title: 'Issue Date', value: '18/04/2022'},
    {title: 'Vintage Range', value: `2019–2022`},
    {title: 'TER', value: '0.15%'},
    {title: 'Price at Close', value: '$17.68'},
    {title: 'Price at Open', value: '$17.74'},
  ];

  useEffect(() => {
    navigation.setOptions({title});
  }, [title]);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{paddingBottom: 12}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Typography size={24} weight="600" color="black">
          ${value.toFixed(2)}
        </Typography>
        <Typography size={24} weight="600" color="black">
          2022
        </Typography>
      </View>
      <View style={{marginTop: 12, alignItems: 'center'}}>
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
          width={Dimensions.get('screen').width * 1.5}
          height={120}
          xAxisLabel={'aaaa'}
          withHorizontalLabels={false}
          withHorizontalLines={false}
          withVerticalLabels={true}
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
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        {options.map((option, index) => (
          <TouchableOpacity
            style={optionSelected === option ? styles.pressedButton : {}}
            key={index}
            onPress={() => setOptionSelected(option)}>
            <Typography
              size={15}
              weight="500"
              color={optionSelected === option ? 'purple' : 'lightGrey'}>
              {option}
            </Typography>
          </TouchableOpacity>
        ))}
      </View>
      <View style={{marginTop: 60, height: 300}}>
        <Typography size={17} weight="600" color="black">
          Info & Stats
        </Typography>
        <Grid values={gridValues} />
      </View>
      <View style={{marginTop: 32}}>
        <Typography size={17} weight="600" color="black">
          Fund Breakdown
        </Typography>
        <Tabs tabs={tabs}>
          <ScrollView horizontal contentContainerStyle={{marginTop: 12}}>
            {companies.map((item, index) =>
              item ? (
                <FundCard
                  body={item.body}
                  image={item.image}
                  title={item.title}
                  key={index}
                />
              ) : (
                <></>
              ),
            )}
          </ScrollView>
          <></>
        </Tabs>
      </View>
      <View style={{marginTop: 32}}>
        <Typography size={17} weight="600" color="black">
          Your Portfolio
        </Typography>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <Typography size={24} weight="600" color="black">
              18 credits
            </Typography>
            <Percentage type="up" value="8.41" />
          </View>
          <View style={{alignItems: 'flex-end'}}>
            <Typography size={24} weight="600" color="black">
              $328.14
            </Typography>
            <Typography size={14} weight="400" color="lightGrey">
              Last purchase 28d ago
            </Typography>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 12,
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity style={styles.outlinedButton}>
          <Typography size={16} weight="500" color="purple">
            Sell
          </Typography>
        </TouchableOpacity>
        <TouchableOpacity style={styles.greenButton}>
          <Typography size={16} weight="500" color="white">
            Retire credits
          </Typography>
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 12, marginBottom: 34}}>
        <Typography size={11} weight="400" color="lightGrey">
          You’ve previously retired 28 credits of this asset
        </Typography>
        <View style={styles.note}>
          <Typography size={12} weight="400" color="lightGrey">
            Please note that prices are for reference only and may vary at the
            time of excecuting a buy or sell order. The information provided is
            not investment advice, and should not be used as a recommendation to
            buy or sell assets.
          </Typography>
        </View>
        <View style={{marginTop: 12}}>
          <Button label="Buy" onPress={() => console.log('first')} />
        </View>
      </View>
    </ScrollView>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 12,
    flex: 1,
  },
  pressedButton: {
    backgroundColor: '#F7EFFF',
    padding: 6,
    borderRadius: 4,
  },
  greenButton: {
    backgroundColor: '#0FDF8F',
    borderRadius: 4,
    padding: 12,
    width: '45%',
    alignItems: 'center',
  },
  outlinedButton: {
    width: '45%',
    alignItems: 'center',
    padding: 12,
    borderWidth: 1,
    borderColor: '#CFCFCF',
  },
  note: {
    backgroundColor: '#F4F4F4',
    borderRadius: 4,
    padding: 12,
    marginTop: 12,
  },
});
