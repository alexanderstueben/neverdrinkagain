import { GameMode } from '../models/GameMode';

export type GameModeState = {
  gameModes: GameMode[];
  selectedGameMode: GameMode;
}