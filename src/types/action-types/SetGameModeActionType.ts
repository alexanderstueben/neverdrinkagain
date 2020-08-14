import { SET_GAMEMODE } from '../../redux/actions/GameModeActions';
import { GameMode } from '../models/GameMode';

export type SetGameModeActionType = {
  type: typeof SET_GAMEMODE,
  gameModes: GameMode[];
}