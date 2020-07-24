import { useTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StatusBar } from "react-native";
import { HeaderLeftComponent } from "../../components/header-left.component";
import { HeaderRightComponent } from "../../components/header-right.component";
import { HomeScreen } from "../../screens/home.screen";
import { ModeListScreen } from "../../screens/mode-list.screen";

const Stack = createStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: useTheme().colors.primary,
          height: StatusBar.currentHeight ? StatusBar.currentHeight + 60 : 109
        }
      }}
    >
      <Stack.Screen
        name='Home'
        options={({navigation}) => {
          return {
            headerLeft: () => <HeaderLeftComponent navigation={navigation} />,
            headerRight: () => <HeaderRightComponent />,
            title: 'NeverDrinkAgain'
          }
        }}
      >
        { ({navigation}) => <HomeScreen navigation={navigation} theme={useTheme()}/> }
      </Stack.Screen>
      <Stack.Screen
        name='ModeList'
        component={ModeListScreen}
      />
    </Stack.Navigator>
  );
}