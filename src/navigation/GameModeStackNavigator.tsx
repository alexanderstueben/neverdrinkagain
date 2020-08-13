import { DrawerNavigationProp } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons/index';
import { AppHeaderButton } from '../components/AppHeaderButton';
import { GameModeDetailScreen } from '../screens/GameModeDetailScreen';
import { GameModeScreen } from '../screens/GameModeScreen';
import { AppDrawerParamList } from '../types/param-lists/AppDrawerParamList';

const Stack = createStackNavigator();

export const GameModeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='GameMode'
        component={GameModeScreen}
        options={({navigation}: {navigation: DrawerNavigationProp<AppDrawerParamList, 'GameMode'>}) => ({
          title: 'Game Modes',
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={AppHeaderButton}>
              <Item title='Drawer' iconName='menu' onPress={() => navigation.toggleDrawer()} />
            </HeaderButtons>
          ),
        })}
      />
      <Stack.Screen name='GameModeDetail' component={GameModeDetailScreen} />
    </Stack.Navigator>
  );
}