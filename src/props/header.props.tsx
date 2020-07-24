import { DrawerNavigationProp } from "@react-navigation/drawer";
import { AppDrawerParamList } from "../types/app-drawer.param-list";

export interface HeaderProps {
  navigation: DrawerNavigationProp<AppDrawerParamList>;
}