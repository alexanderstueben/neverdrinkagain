import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import {
  AddGameModeActionType,
  SetGameModeActionType,
  SetGameModeByIdActionType
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
      console.log(gamemodes);
      dispatch({ type: SET_GAMEMODE, gamemodes });
    }
  },
  // fetchGameModeById: (id: string): ThunkAction<Promise<void>, GameModeState, {}, SetGameModeByIdActionType> => {
  //   return async (dispatch: ThunkDispatch<GameModeState, {}, SetGameModeByIdActionType>) => {
  //     const response = await fetch(`http://10.0.19.31:9000/gamemodes/${id}.json?ns=neverdrinkagain-app`);
  //     if (!response.ok) {
  //       throw new Error(`Error while getting gamemode ${id} !`);
  //     }
  //     const data: GameMode = await response.json();
  //     const gameMode: GameMode = {
  //       id: id,
  //       title: data.title,
  //       description: data.description,
  //       createDate: data.createDate,
  //       updateDate: data.updateDate
  //     }
  //
  //     dispatch({ type: SET_GAMEMODE_BY_ID, gameMode });
  //   }
  // }
}




