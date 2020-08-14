import { openDatabase, ResultSet, SQLResultSet } from 'expo-sqlite';
import { GameMode } from '../types/models/GameMode';

const db = openDatabase('neverdrinkagain.db');

export const initDatabase = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT name FROM sqlite_master WHERE type = "table";',
        [],
        (_, result) => {
          if (result.rows.length <= 1) {
            tx.executeSql('CREATE TABLE IF NOT EXISTS gamemode (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT UNIQUE, description TEXT);');
            tx.executeSql('INSERT INTO gamemode VALUES (null, "Test", "TestDesc");');
            tx.executeSql('INSERT INTO gamemode VALUES (null, "Test2", "TestDesc2");');
            tx.executeSql('INSERT INTO gamemode VALUES (null, "Test3", "TestDesc3");');
          }
          resolve();
        },
        (_, err) => {
          reject(err);
          return false;
        }
      );
    });
  });
};

export const insertGameMode = (title: string, description: string): Promise<SQLResultSet> => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO gamemode (title, description) VALUES (?, ?);',
        [title, description],
        (_, result) => resolve(result),
        (_, err) => {
          reject(err);
          return false;
        }
      );
    });
  });
}

export const fetchGameModes: () => Promise<SQLResultSet> = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM gamemode',
        [],
        (_, result) => resolve(result),
        (_, err) => {
          reject(err);
          return false
        }
      )
    })
  });
}