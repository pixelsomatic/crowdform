import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/Register';

const AuthStack = createStackNavigator();

const AuthRoutes = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Register"
        component={RegisterScreen}
        options={{title: ''}}
      />
      <AuthStack.Screen
        name="Login"
        component={LoginScreen}
        options={{title: ''}}
      />
    </AuthStack.Navigator>
  );
};

export default AuthRoutes;
