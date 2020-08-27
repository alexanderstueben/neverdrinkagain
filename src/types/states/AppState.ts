import { GameModeState } from './GameModeState';
import { TaskState } from './TaskState';

export type AppState = {
  gameModes: GameModeState,
  tasks: TaskState
}