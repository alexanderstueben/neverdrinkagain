import { GameModeActionTypes } from '../../types/action-types/GameModeActionTypes';
import { GameModeState } from '../../types/states/GameModeState';

const initialState: GameModeState = {
  gameModes: [],
  selectedGameMode: {
    title: 'INIT',
    description: 'INIT',
    id: 'INIT',
    createDate: 0,
    updateDate: 0
  }
}

export const GameModeReducer = (state: GameModeState = initialState, action: GameModeActionTypes): GameModeState => {
  switch (action.type) {
    case 'SET_GAMEMODE':
      return {
        ...state,
        gameModes: action.gameModes
      }
    case 'SET_GAMEMODE_BY_ID':
      return {
        ...state,
        selectedGameMode: action.gameMode
      }
    case 'ADD_GAMEMODE':
      return {
        ...state,
        gameModes: state.gameModes.concat(action.gameMode)
      }
    default:
      return state;
  }
}