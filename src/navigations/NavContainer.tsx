import React, {useEffect, useState} from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NetInfo from '@react-native-community/netinfo';
import {SCREENS} from '../shared/constants';
import Splash from '../screens/auth/Splash';
import NoInternet from '../screens/common/NoInternet';
import Login from '../screens/auth/Login';

import AuthNavigator from './AuthNavigator';
// import Tabnavigator from './Tabnavigator'

const Stack = createNativeStackNavigator();

const navTheme = DefaultTheme;
navTheme.colors.background = '#FFFFFF';

const NavContainer = () => {
  const [isConnected, setIsConnected] = useState<boolean | null>(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
      console.log('Connected to network state', state);
      if (state.isConnected === false) {
        setIsConnected(state.isConnected);
      } else {
        setIsConnected(state.isConnected);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={SCREENS.SPLASH}>
        <Stack.Screen
          options={{headerShown: false}}
          name={SCREENS.SPLASH}
          component={Splash}
        />
        {/* {!isConnected ? (
          <Stack.Screen
            options={{headerShown: false}}
            name={SCREENS.NOINTERNET}
            component={NoInternet}
          />
        ) : (
          <Stack.Screen
            options={{headerShown: false}}
            name={SCREENS.LOGIN}
            component={Login}
          />
        )} */}
        <Stack.Screen
          options={{headerShown: false}}
          name={SCREENS.LOGIN}
          component={AuthNavigator}
        />
        {/* <Stack.Screen
          options={{ headerShown: false }}
          name={routes.LOGIN}
          component={AuthNavigator}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name={routes.HOME}
          component={Tabnavigator}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavContainer;
