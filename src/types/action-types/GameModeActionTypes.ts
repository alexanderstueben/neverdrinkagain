import { ADD_GAMEMODE, SET_GAMEMODE, SET_GAMEMODE_BY_ID } from '../../store/actions/GameModeActions';
import { Gamemode } from '../../entities/gamemode.entity';

export type AddGameModeActionType = {
  type: typeof ADD_GAMEMODE,
  gamemode: Gamemode;
}

export type SetGameModeActionType = {
  type: typeof SET_GAMEMODE,
  gamemodes: Gamemode[];
}

export type SetGamemodeByIdActionType = {
  type: typeof SET_GAMEMODE_BY_ID,
  gamemode: Gamemode;
}

export type GameModeActionTypes = AddGameModeActionType | SetGameModeActionType | SetGamemodeByIdActionType
