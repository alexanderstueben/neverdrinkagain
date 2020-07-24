import { useTheme } from "@react-navigation/native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HeaderLeftComponent } from "../../components/header-left.component";
import { AboutScreen } from "../../screens/about.screen";


const Stack = createStackNavigator();

export const AboutStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: useTheme().colors.primary
        }
      }}
    >
      <Stack.Screen
        name='About'
        component={AboutScreen}
        options={({navigation}) => {
          return {
            headerLeft: () => <HeaderLeftComponent navigation={navigation} />,
            title: 'Über NeverDrinkAgain'
          }
        }}
      />
    </Stack.Navigator>
  );
}