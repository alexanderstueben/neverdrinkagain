import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import {
  AddGameModeActionType,
  SetGameModeActionType,
  SetGamemodeByIdActionType
} from '../../types/action-types/GameModeActionTypes';
import { GamemodeState } from '../../types/states/GamemodeState';
import { getRepository } from 'typeorm';
import { Gamemode } from '../../entities/gamemode.entity';


export const ADD_GAMEMODE = 'ADD_GAMEMODE';
export const SET_GAMEMODE = 'SET_GAMEMODE';
export const SET_GAMEMODE_BY_ID = 'SET_GAMEMODE_BY_ID';

export const GameModeActions = {
  // addGameMode: (title: string, description: string): ThunkAction<Promise<void>, GameModeState, {}, AddGameModeActionType> => {
  //   return async (dispatch: ThunkDispatch<GameModeState, {}, AddGameModeActionType>) => {
  //     const createDate = new Date().getTime();
  //     const updateDate = new Date().getTime();
  //     const response = await fetch('http://10.0.19.31:9000/gamemodes.json?ns=neverdrinkagain-app', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({
  //         title,
  //         description,
  //         createDate,
  //         updateDate
  //       })
  //     });
  //     if (!response.ok) {
  //       throw new Error('Error while creating a gamemode!');
  //     }
  //     const resData: {name: string} = await response.json();
  //     const gameMode: GameMode = {
  //       id: resData.name,
  //       title,
  //       description,
  //       updateDate,
  //       createDate
  //     }
  //     dispatch({ type: ADD_GAMEMODE, gameMode });
  //   }
  // },
  fetchGameModes: (): ThunkAction<Promise<void>, GamemodeState, {}, SetGameModeActionType> => {
    return async (dispatch: ThunkDispatch<GamemodeState, {}, SetGameModeActionType>) => {
      const gamemodes = await getRepository(Gamemode).find();
      dispatch({ type: SET_GAMEMODE, gamemodes });
    }
  },
  fetchGameModeById: (id: number): ThunkAction<Promise<void>, GamemodeState, {}, SetGamemodeByIdActionType> => {
    return async (dispatch: ThunkDispatch<GamemodeState, {}, SetGamemodeByIdActionType>) => {
      const gamemode = await getRepository(Gamemode).findOne(id);
      if (gamemode) {
        dispatch({ type: SET_GAMEMODE_BY_ID, gamemode });
      }
    }
  }
}




