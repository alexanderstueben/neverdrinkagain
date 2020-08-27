import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { AppTextProps } from '../types/props/AppTextProps';

export const AppText = (props: AppTextProps) => {
  return <Text style={{ ...styles.text, ...props.style }}>{props.children}</Text>
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'itim'
  }
});