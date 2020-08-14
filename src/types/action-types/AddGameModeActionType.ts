import { ADD_GAMEMODE } from '../../redux/actions/GameModeActions';
import { GameMode } from '../models/GameMode';

export type AddGameModeActionType = {
  type: typeof ADD_GAMEMODE,
  gameMode: GameMode;
}