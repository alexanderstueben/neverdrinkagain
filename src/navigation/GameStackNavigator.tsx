import { DrawerNavigationProp } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons/index';
import { AppHeaderButton } from '../components/AppHeaderButton';
import { ChoosePlayerScreen } from '../screens/ChoosePlayerScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { AppDrawerParamList } from '../types/param-lists/AppDrawerParamList';

const Stack = createStackNavigator();

export const GameStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center'
      }}
    >
      <Stack.Screen
        name='Home'
        component={HomeScreen}
        options={({ navigation }: {navigation: DrawerNavigationProp<AppDrawerParamList, 'Home'>}) => ({
          headerTitle: 'NeverDrinkAgain',
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={AppHeaderButton}>
              <Item title='Drawer' iconName='menu' onPress={() => navigation.toggleDrawer()} />
            </HeaderButtons>
          ),
          /*headerRight: () => (
            <HeaderButtons HeaderButtonComponent={AppHeaderButton}>
              <Item title='Drawer' iconName='palette' />
            </HeaderButtons>
          )*/
        })}
      />
      <Stack.Screen
        name='ChoosePlayer'
        component={ChoosePlayerScreen}
      />
    </Stack.Navigator>
  );
}