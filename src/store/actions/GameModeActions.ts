import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import {
  AddGameModeActionType,
  SetGameModeActionType,
  SetGameModeByIdActionType
} from '../../types/action-types/GameModeActionTypes';
import { GameMode } from '../../types/models/GameMode';
import { GameModeState } from '../../types/states/GameModeState';


export const ADD_GAMEMODE = 'ADD_GAMEMODE';
export const SET_GAMEMODE = 'SET_GAMEMODE';
export const SET_GAMEMODE_BY_ID = 'SET_GAMEMODE_BY_ID';

export const GameModeActions = {
  addGameMode: (title: string, description: string): ThunkAction<Promise<void>, GameModeState, {}, AddGameModeActionType> => {
    return async (dispatch: ThunkDispatch<GameModeState, {}, AddGameModeActionType>) => {
      const createDate = new Date().getTime();
      const updateDate = new Date().getTime();
      const response = await fetch('http://10.0.19.31:9000/gamemodes.json?ns=neverdrinkagain-app', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title,
          description,
          createDate,
          updateDate
        })
      });
      if (!response.ok) {
        throw new Error('Error while creating a gamemode!');
      }
      const resData: {name: string} = await response.json();
      const gameMode: GameMode = {
        id: resData.name,
        title,
        description,
        updateDate,
        createDate
      }
      dispatch({ type: ADD_GAMEMODE, gameMode });
    }
  },
  fetchGameModes: (): ThunkAction<Promise<void>, GameModeState, {}, SetGameModeActionType> => {
    return async (dispatch: ThunkDispatch<GameModeState, {}, SetGameModeActionType>) => {
      const response = await fetch('http://10.0.19.31:9000/gamemodes.json?ns=neverdrinkagain-app');
      if (!response.ok) {
        throw new Error('Error while getting gamemodes!');
      }
      const data: {[key: string]: GameMode} = await response.json();
      const gameModes: GameMode[] = [];
      for (const key in data) {
        gameModes.push({
          id: key,
          title: data[key].title,
          description: data[key].description,
          createDate: data[key].createDate,
          updateDate: data[key].updateDate,
        });
      }
      dispatch({ type: SET_GAMEMODE, gameModes });
    }
  },
  fetchGameModeById: (id: string): ThunkAction<Promise<void>, GameModeState, {}, SetGameModeByIdActionType> => {
    return async (dispatch: ThunkDispatch<GameModeState, {}, SetGameModeByIdActionType>) => {
      const response = await fetch(`http://10.0.19.31:9000/gamemodes/${id}.json?ns=neverdrinkagain-app`);
      if (!response.ok) {
        throw new Error(`Error while getting gamemode ${id} !`);
      }
      const data: GameMode = await response.json();
      const gameMode: GameMode = {
        id: id,
        title: data.title,
        description: data.description,
        createDate: data.createDate,
        updateDate: data.updateDate
      }

      dispatch({ type: SET_GAMEMODE_BY_ID, gameMode });
    }
  }
}




