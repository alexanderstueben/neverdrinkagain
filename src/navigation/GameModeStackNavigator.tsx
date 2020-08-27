import { DrawerNavigationProp } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { AppHeaderButton } from '../components/AppHeaderButton';
import { Colors } from '../constants/Colors';
import { AddGameModeScreen } from '../screens/AddGameModeScreen';
import { GameModeDetailScreen } from '../screens/GameModeDetailScreen';
import { GameModeScreen } from '../screens/GameModeScreen';
import { AppDrawerParamList } from '../types/param-lists/AppDrawerParamList';
import { GameModeStackParamList } from '../types/param-lists/GameModeStackParamList';

const Stack = createStackNavigator();

export const GameModeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: Colors.primary
        },
        headerTitleStyle: {
          fontFamily: 'itim'
        }
      }}
    >
      <Stack.Screen
        name='GameMode'
        component={GameModeScreen}
        options={({navigation}: {navigation: DrawerNavigationProp<AppDrawerParamList, 'GameMode'>}) => ({
          title: 'Spielmodi',
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={AppHeaderButton}>
              <Item title='Drawer' iconName='menu' onPress={() => navigation.toggleDrawer()} />
            </HeaderButtons>
          ),
        })}
      />
      <Stack.Screen
        name='GameModeDetail'
        component={GameModeDetailScreen}
        options={({route}: {route: RouteProp<GameModeStackParamList, 'GameModeDetail'>}) => ({
          title: route.params.title
        })}
      />
      <Stack.Screen name='AddGameMode' component={AddGameModeScreen} options={{ title: 'Modus ändern/hinzufügen' }} />
    </Stack.Navigator>
  );
}