import { StackNavigationProp } from '@react-navigation/stack';
import { GameModeStackParamList } from '../param-lists/GameModeStackParamList';

export type GameModeScreenProps = {
  navigation: StackNavigationProp<GameModeStackParamList, 'GameMode'>
}