import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack';
import { GameModeStackParamList } from '../param-lists/GameModeStackParamList';

export type GameModeDetailScreenProps = {
  route: RouteProp<GameModeStackParamList, 'GameModeDetail'>;
  navigation: StackNavigationProp<GameModeStackParamList, 'GameModeDetail'>;
}