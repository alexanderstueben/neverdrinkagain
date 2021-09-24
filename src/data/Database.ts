import * as SQLite from 'expo-sqlite';
import * as FileSystem from 'expo-file-system';
import { Asset } from "expo-asset";
import { createConnection } from 'typeorm/browser';
import { Task } from '../entities/task.entity';
import { Gamemode } from '../entities/gamemode.entity';

export const Database = {
  init: async () => {
    const info = await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'SQLite/neverdrinkagain.db');
    if (info.exists) {
      console.log('database exists');
      return;
    } else {
      await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'SQLite');
      await FileSystem.downloadAsync(Asset.fromModule(require('../../assets/data/neverdrinkagain.db')).uri, FileSystem.documentDirectory + 'SQLite/neverdrinkagain.db');
      console.log('database was created');
    }
  },
  connect: () => {
    return createConnection({
      database: 'neverdrinkagain.db',
      driver: require('expo-sqlite'),
      entities: [Task, Gamemode],
      synchronize: false,
      type: 'expo'
    });
  }
}
