import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { AppText } from '../components/AppText';
import { Colors } from '../constants/Colors';
import { HomeScreenProps } from '../types/props/HomeScreenProps';

export const HomeScreen = (props: HomeScreenProps) => {
  return (
    <View style={styles.screen}>
      <AppText style={{ fontSize: 25 }}>NeverDrinkAgain</AppText>
      <View style={styles.buttonContainer}>
        <Button title='Start Game' onPress={() => props.navigation.navigate('ChoosePlayer')} color={Colors.primary} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    marginTop: 20
  }
});