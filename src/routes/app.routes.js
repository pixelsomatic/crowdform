import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Text} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Typography from '../components/Typography';

const AppStack = createStackNavigator();

const AppRoutes = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerLeft: () => (
            <Icon
              name="account-outline"
              size={25}
              color={'#000'}
              style={{paddingLeft: 12}}
            />
          ),
          headerRight: () => (
            <Icon
              name="bell-outline"
              size={25}
              color={'#000'}
              style={{paddingRight: 12}}
            />
          ),
          headerTitle: () => (
            <Typography color="black" weight="600" size={14}>
              Account: $1,457.23
            </Typography>
          ),
          headerTitleAlign: 'center',
        }}
      />
    </AppStack.Navigator>
  );
};

export default AppRoutes;
