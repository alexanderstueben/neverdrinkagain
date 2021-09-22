import { NavigationContainer } from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import { registerRootComponent, AppLoading } from 'expo'
import * as Font from 'expo-font';
import { Database } from './data/Database';
import { AppDrawerNavigator } from './navigation/AppDrawerNavigator';
import { Provider } from 'react-redux';
import { AppStore } from './store/AppStore';

Database.init()
  .then(() => {
    console.log('Database initalized');
  })
  .catch(err => {
    console.log('Initializing database failed');
    console.log(err);
  });

const fetchFonts = () => {
  return Font.loadAsync({
    'itim': require('../assets/fonts/Itim-Regular.ttf')
  });
};

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  const loadDB = async () => {
    const res = await Database.fetch();
    console.log(res);
  }

  useEffect(() => {
    loadDB()
  }, [loadDB]);

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