import { Gamemode } from '../../entities/gamemode.entity';

export type GamemodeState = {
  gamemodes: Gamemode[];
  selectedGamemode: Gamemode;
}
