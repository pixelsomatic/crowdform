import React, {useEffect} from 'react';
import {View} from 'react-native';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
} from '@react-navigation/native';

type DetailsScreenProps = {
  route: RouteProp<any>;
};

const DetailsScreen = ({route}: DetailsScreenProps) => {
  const navigation = useNavigation();
  const {title} = route?.params!;

  useEffect(() => {
    navigation.setOptions({title});
  }, [title]);

  return <View></View>;
};

export default DetailsScreen;
