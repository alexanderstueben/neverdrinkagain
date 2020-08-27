import { StackNavigationProp } from '@react-navigation/stack';
import { GameStackParamList } from '../param-lists/GameStackParamList';

export type HomeScreenProps = {
  navigation: StackNavigationProp<GameStackParamList, 'Home'>
}