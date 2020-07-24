import React, { Component } from "react";
import { Button, Text, View } from "react-native";
import { HomeProps } from "../props/home.props";

export class HomeScreen extends Component<HomeProps> {

  constructor(props: HomeProps) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>HomeScreen</Text>
        <Button title='to mode list' color={this.props.theme.colors.primary} onPress={() => this.props.navigation.navigate('ModeList')} />
      </View>
    );
  }
}