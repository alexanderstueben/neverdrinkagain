import { openDatabase } from 'expo-sqlite';
import React from 'react';
import { Text, View } from 'react-native';

const db = openDatabase('neverdrinkagain.db');

export const GameModeScreen = () => {

  return (
    <View>
      <Text>GameModeScreen</Text>
    </View>
  );
}