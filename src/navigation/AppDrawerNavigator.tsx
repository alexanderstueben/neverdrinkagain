import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from '../constants/Colors';
import { GameModeStackNavigator } from './GameModeStackNavigator';
import { GameStackNavigator } from './GameStackNavigator';
import { TaskStackNavigator } from './TaskStackNavigator';

const Drawer = createDrawerNavigator();

export const AppDrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: Colors.primary,
        labelStyle: {
          fontFamily: 'itim'
        }
      }}
    >
      <Drawer.Screen
        name='Home'
        component={GameStackNavigator}
        options={{
          drawerIcon: () => <MaterialIcons color={Colors.primary} name='home' size={20} />
        }}
      />
      <Drawer.Screen
        name='GameMode'
        component={GameModeStackNavigator}
        options={{
          drawerLabel: 'Spielmodi',
          drawerIcon: () => <MaterialIcons color={Colors.primary} name='apps' size={20} />
        }}
      />
      <Drawer.Screen
        name='Task'
        component={TaskStackNavigator}
        options={{
          drawerLabel: 'Aufgaben',
          drawerIcon: () => <MaterialIcons color={Colors.primary} name='playlist-add-check' size={20} />
        }}
      />
    </Drawer.Navigator>
  );
}