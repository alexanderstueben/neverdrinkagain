import { Theme } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { HomeStackParamList } from "../types/home-stack.param-list";

export interface HomeProps {
  navigation: StackNavigationProp<HomeStackParamList>;
  theme: Theme;
}

