import * as SQLite from 'expo-sqlite';
import * as FileSystem from 'expo-file-system';
import { Asset } from "expo-asset";

const db = SQLite.openDatabase('neverdrinkagain.db');

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
  fetch: () => {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
            'SELECT * FROM tasks;',
            [],
            (_, data) => {
              resolve(data);
            },
            (_, err) => {
              reject(err);
              return false
            });
      })
    })
  }
}