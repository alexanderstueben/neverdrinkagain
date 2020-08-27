import { ADD_GAMEMODE, SET_GAMEMODE, SET_GAMEMODE_BY_ID } from '../../redux/actions/GameModeActions';
import { GameMode } from '../models/GameMode';

export type AddGameModeActionType = {
  type: typeof ADD_GAMEMODE,
  gameMode: GameMode;
}

export type SetGameModeActionType = {
  type: typeof SET_GAMEMODE,
  gameModes: GameMode[];
}

export type SetGameModeByIdActionType = {
  type: typeof SET_GAMEMODE_BY_ID,
  gameMode: GameMode;
}

export type GameModeActionTypes = AddGameModeActionType | SetGameModeActionType | SetGameModeByIdActionType