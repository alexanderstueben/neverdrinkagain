import { MaterialIcons } from "@expo/vector-icons";
import React, { Component } from "react";
import { TouchableNativeFeedback, View } from "react-native";
import { headerStyles } from "../styles/header-left.style";

export class HeaderRightComponent extends Component {
  render() {
    return (
      <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('rgba(0,0,0,0.3)', true)} useForeground={TouchableNativeFeedback.canUseNativeForeground()}>
        <View style={headerStyles.iconContainer}>
          <MaterialIcons name='palette' size={24} />
        </View>
      </TouchableNativeFeedback>
    );
  }
}