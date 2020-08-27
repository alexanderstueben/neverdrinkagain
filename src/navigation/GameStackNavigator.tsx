import { DrawerNavigationProp } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons/index';
import { AppHeaderButton } from '../components/AppHeaderButton';
import { Colors } from '../constants/Colors';
import { ChoosePlayerScreen } from '../screens/ChoosePlayerScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { AppDrawerParamList } from '../types/param-lists/AppDrawerParamList';

const Stack = createStackNavigator();

export const GameStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: Colors.primary,
        },
        headerTitleStyle: {
          fontFamily: 'itim'
        }
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
        })}
      />
      <Stack.Screen
        name='ChoosePlayer'
        component={ChoosePlayerScreen}
      />
    </Stack.Navigator>
  );
}