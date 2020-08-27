import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { registerRootComponent, AppLoading } from 'expo'
import * as Font from 'expo-font';
import { AppDrawerNavigator } from './navigation/AppDrawerNavigator';
import { Provider } from 'react-redux';
import { AppStore } from './redux/stores/AppStore';

const fetchFonts = () => {
  return Font.loadAsync({
    'itim': require('../assets/fonts/Itim-Regular.ttf')
  });
};

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return <AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)} />
  }

  return (
    <Provider store={AppStore}>
      <NavigationContainer>
        <AppDrawerNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default registerRootComponent(App);