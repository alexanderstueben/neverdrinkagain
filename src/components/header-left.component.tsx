import { MaterialIcons } from "@expo/vector-icons";
import React, { Component } from "react";
import { TouchableNativeFeedback, View } from "react-native";
import { HeaderProps } from "../props/header.props";
import { headerStyles } from "../styles/header-left.style";

export class HeaderLeftComponent extends Component<HeaderProps> {
  render() {
    return (
      <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('rgba(0,0,0,0.3)', true)} useForeground={TouchableNativeFeedback.canUseNativeForeground()} onPress={() => this.props.navigation.toggleDrawer()}>
        <View style={headerStyles.iconContainer}>
          <MaterialIcons name='menu' size={24} />
        </View>
      </TouchableNativeFeedback>
    );
  }
}