import React, { Component } from "react";
import { AppDrawer } from "./navigation/drawers/app.drawer";
import { AboutStack } from "./navigation/stacks/about.stack";
import { HomeStack } from "./navigation/stacks/home.stack";
import { NavigationContainer, useTheme } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { AppTheme } from "./styles/themes/app.theme";


export class AppComponent extends Component {
  render() {
    return (
      <NavigationContainer theme={AppTheme.get('blue-light')}>
        <AppDrawer.Navigator initialRouteName='Home'>
          <AppDrawer.Screen
            name='Home'
            component={HomeStack}
            options={{
              title: 'Startseite',
              drawerIcon: () => <MaterialIcons name='home' size={20} color={useTheme().colors.primary} />
            }}
          />
          <AppDrawer.Screen
            name='About'
            component={AboutStack}
            options={{
              title: 'Über NeverDrinkAgain',
              drawerIcon: () => <MaterialIcons name='info' size={20} color={useTheme().colors.primary}  />
            }}
          />
        </AppDrawer.Navigator>
      </NavigationContainer>
    );
  }
}