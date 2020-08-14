import { SQLResultSet } from 'expo-sqlite';
import { Dispatch } from 'redux';
import { fetchGameModes, insertGameMode } from '../../data/database';
import { AddGameModeActionType } from '../../types/action-types/AddGameModeActionType';
import { SetGameModeActionType } from '../../types/action-types/SetGameModeActionType';
import { GameMode } from '../../types/models/GameMode';

export const ADD_GAMEMODE = 'ADD_GAMEMODE';
export const SET_GAMEMODE = 'SET_GAMEMODE';

export const addGameMode = (title: string, description: string) => {
  return async (dispatch: Dispatch<AddGameModeActionType>) => {
    try {
      const dbResult = await insertGameMode(title, description);
      console.log(dbResult);
      dispatch({ type: ADD_GAMEMODE, gameMode: { id: dbResult.insertId, title: title, description: description } })
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}

export const loadGameModes = () => {
  return async (dispatch: Dispatch<SetGameModeActionType>) => {
    try {
      const dbResult = await fetchGameModes();
      const gameModes: GameMode[] = [];
      for (let i = 0; i < dbResult.rows.length; i++) {
        gameModes.push(dbResult.rows.item(i));
      }
      dispatch({ type: SET_GAMEMODE, gameModes: gameModes })
    }
  }
}