import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Text} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Typography from '../components/Typography';
import DetailsScreen from '../screens/DetailsScreen';
import Navbar from '../components/Navbar';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TradeScreen from '../screens/TradeScreen';
import PortfolioScreen from '../screens/PortfolioScreen';

const AppStack = createStackNavigator();

const AppRoutes = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name="Home"
        component={HomeTabsNavigation}
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
      <AppStack.Screen
        name="DetailsScreen"
        component={DetailsScreen}
        options={{
          headerTitleAlign: 'center',
        }}
      />
    </AppStack.Navigator>
  );
};

const HomeTabs = createBottomTabNavigator();

const screenTitle = name => {
  let title;
  switch (name) {
    case 'Home':
      title = 'Meus Parceiros';
      break;
    case 'Eventos':
      title = 'Meus Eventos';
      break;
    case 'Grupos':
      title = 'Meus Grupos';
      break;
    case 'Home':
      title = 'Para você';
      break;
    default:
      title = name;
      break;
  }

  return title;
};

const HomeTabsNavigation = () => {
  return (
    <HomeTabs.Navigator
      tabBar={props => <Navbar {...props} />}
      screenOptions={({route}) => ({
        headerTitle: screenTitle(route.name),
        tabBarStyle: {height: 65, paddingBottom: 12},
        tabBarIcon: ({focused}) => {
          let iconName;
          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Trade':
              iconName = 'swap-horizontal';
              break;
            case 'Portfolio':
              iconName = 'chart-donut';
              break;
            default:
              iconName = 'home';
              break;
          }
          return (
            <Icon
              name={iconName}
              size={28}
              color={focused ? '#770FDF' : '#000'}
            />
          );
        },
      })}>
      <HomeTabs.Screen
        component={HomeScreen}
        name="myHome"
        options={{headerShown: false}}
      />
      <HomeTabs.Screen
        component={TradeScreen}
        name="Trade"
        options={{headerShown: false}}
      />
      <HomeTabs.Screen
        component={PortfolioScreen}
        name="Portfolio"
        options={{headerShown: false}}
      />
    </HomeTabs.Navigator>
  );
};

export default AppRoutes;
