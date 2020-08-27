import { StackNavigationProp } from '@react-navigation/stack';
import { GameModeStackParamList } from '../param-lists/GameModeStackParamList';

export type AddGameModeScreenProps = {
  navigation: StackNavigationProp<GameModeStackParamList, 'AddGameMode'>;
}