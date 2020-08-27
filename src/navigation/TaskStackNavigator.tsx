import { DrawerNavigationProp } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { AppHeaderButton } from '../components/AppHeaderButton';
import { Colors } from '../constants/Colors';
import { AddTaskScreen } from '../screens/AddTaskScreen';
import { TaskDetailScreen } from '../screens/TaskDetailScreen';
import { TaskScreen } from '../screens/TaskScreen';
import { AppDrawerParamList } from '../types/param-lists/AppDrawerParamList';

const Stack = createStackNavigator();

export const TaskStackNavigator = () => {
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
        name='Tasks'
        component={TaskScreen}
        options={({ navigation }: {navigation: DrawerNavigationProp<AppDrawerParamList, 'Task'>}) => ({
          headerTitle: 'Aufgaben',
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={AppHeaderButton}>
              <Item title='Drawer' iconName='menu' onPress={() => navigation.toggleDrawer()} />
            </HeaderButtons>
          ),
        })}
      />
      <Stack.Screen name='TaskDetail' component={TaskDetailScreen} />
      <Stack.Screen
        name='AddTask'
        component={AddTaskScreen}
        options={{
          title: 'Aufgabe hinzufügen'
        }}
      />
    </Stack.Navigator>
  );
}