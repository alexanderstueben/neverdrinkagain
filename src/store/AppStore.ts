import { applyMiddleware, combineReducers, createStore } from 'redux';
import { GameModeReducer } from './reducers/GameModeReducer';
import ReduxThunk from 'redux-thunk';
import { TaskReducer } from './reducers/TaskReducer';

export const AppStore = createStore(combineReducers({
  gamemodes: GameModeReducer,
  tasks: TaskReducer
}), applyMiddleware(ReduxThunk));
