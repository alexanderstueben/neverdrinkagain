import { NavigationContainer } from '@react-navigation/native';
import React from "react";
import { registerRootComponent } from 'expo'
import { AppDrawerNavigator } from './navigation/AppDrawerNavigator';


const App = () => {
  return (
    <NavigationContainer>
      <AppDrawerNavigator />
    </NavigationContainer>
  );
}

export default registerRootComponent(App);