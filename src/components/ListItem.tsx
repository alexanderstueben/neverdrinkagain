import React from 'react';
import { StyleSheet, TouchableNativeFeedback, View } from 'react-native';
import { ListItemProps } from '../types/props/ListItemProps';
import { AppText } from './AppText';

export const ListItem = (props: ListItemProps) => {
  if (props.touchable) {
    return (
      <View style={styles.item}>
        <TouchableNativeFeedback onPress={props.onPress}>
          <View style={styles.container}>
            <AppText style={styles.title}>{props.title}</AppText>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
  return (
    <View style={styles.item}>
        <View style={styles.container}>
          <AppText style={styles.title}>{props.title}</AppText>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 20,
    textAlign: 'center'
  }
});