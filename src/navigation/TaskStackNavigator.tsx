import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { TaskDetailScreen } from '../screens/TaskDetailScreen';
import { TaskScreen } from '../screens/TaskScreen';

const Stack = createStackNavigator();

export const TaskStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Task' component={TaskScreen} />
      <Stack.Screen name='TaskDetail' component={TaskDetailScreen} />
    </Stack.Navigator>
  );
}