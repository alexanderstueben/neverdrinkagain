import { GamemodeState } from './GamemodeState';
import { TaskState } from './TaskState';

export type AppState = {
  gamemodes: GamemodeState,
  tasks: TaskState
}
