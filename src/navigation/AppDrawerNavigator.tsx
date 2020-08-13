import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { GameModeStackNavigator } from './GameModeStackNavigator';
import { GameStackNavigator } from './GameStackNavigator';
import { TaskStackNavigator } from './TaskStackNavigator';

const Drawer = createDrawerNavigator();

export const AppDrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name='Home'
        component={GameStackNavigator}
        options={{
          drawerIcon: () => <MaterialIcons name='home' size={20} />
        }}
      />
      <Drawer.Screen
        name='GameMode'
        component={GameModeStackNavigator}
        options={{
          drawerLabel: 'Game Modes',
          drawerIcon: () => <MaterialIcons name='apps' size={20} />
        }}
      />
      <Drawer.Screen
        name='Task'
        component={TaskStackNavigator}
        options={{
          drawerLabel: 'Tasks',
          drawerIcon: () => <MaterialIcons name='playlist-add-check' size={20} />
        }}
      />
    </Drawer.Navigator>
  );
}