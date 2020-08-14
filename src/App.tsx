import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { registerRootComponent } from 'expo'
import { initDatabase } from './data/database';
import { AppDrawerNavigator } from './navigation/AppDrawerNavigator';

initDatabase().then(() => {
  console.log('database initialized');
}).catch((err) => {
  console.log('database init failed');
  console.log(err);
});

const App = () => {

  return (
    <NavigationContainer>
      <AppDrawerNavigator />
    </NavigationContainer>
  );
};

export default registerRootComponent(App);