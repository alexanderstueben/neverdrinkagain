import { GameModeActionTypes } from '../../types/action-types/GameModeActionTypes';
import { GamemodeState } from '../../types/states/GamemodeState';

const initialState: GamemodeState = {
  gamemodes: [],
  selectedGamemode: {
    title: 'INIT',
    description: 'INIT',
    id: 0,
    createDate: 'INIT',
    updateDate: 'INIT'
  }
}

export const GameModeReducer = (state: GamemodeState = initialState, action: GameModeActionTypes): GamemodeState => {
  switch (action.type) {
    case 'SET_GAMEMODE':
      return {
        ...state,
        gamemodes: action.gamemodes
      }
    case 'SET_GAMEMODE_BY_ID':
      return {
        ...state,
        selectedGamemode: action.gamemode
      }
    case 'ADD_GAMEMODE':
      return {
        ...state,
        gamemodes: state.gamemodes.concat(action.gamemode)
      }
    default:
      return state;
  }
}
