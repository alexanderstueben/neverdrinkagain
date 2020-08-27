import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, Button, FlatList, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AppText } from '../components/AppText';
import { ListItem } from '../components/ListItem';
import { Colors } from '../constants/Colors';
import { GameModeActions } from '../redux/actions/GameModeActions';
import { TaskActions } from '../redux/actions/TaskActions';
import { GameModeActionTypes } from '../types/action-types/GameModeActionTypes';
import { TaskActionTypes } from '../types/action-types/TaskActionTypes';
import { GameModeDetailScreenProps } from '../types/props/GameModeDetailScreenProps';
import { AppState } from '../types/states/AppState';
import { GameModeState } from '../types/states/GameModeState';
import { TaskState } from '../types/states/TaskState';

export const GameModeDetailScreen = (props: GameModeDetailScreenProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState(undefined);
  const [modalVisible, setModalVisibile] = useState(false);
  const gameMode = useSelector((state: AppState) => state.gameModes.selectedGameMode);
  const gameModeTasks = useSelector((state: AppState) => state.tasks.gameModeTasks);
  const tasks = useSelector((state: AppState) => state.tasks.tasks);

  const gameModeDispatch: ThunkDispatch<GameModeState, {}, GameModeActionTypes> = useDispatch();
  const taskDispatch: ThunkDispatch<TaskState, {}, TaskActionTypes> = useDispatch();

  const loadGameMode = useCallback(async () => {
    setError(undefined);
    setIsRefreshing(true);
    try {
      await gameModeDispatch(GameModeActions.fetchGameModeById(props.route.params.id));
      await taskDispatch(TaskActions.fetchTasksByGameModeId(props.route.params.id));
      await taskDispatch(TaskActions.fetchTasks());
    } catch (err) {
      setError(err.message);
    }
    setIsRefreshing(false);
  }, [gameModeDispatch, taskDispatch, setIsRefreshing, setError]);

  const submitTaskHandler = useCallback(async (taskId: string) => {
    setError(undefined);
    setIsLoading(true);
    const gamemodes = tasks.find(task => task.id === taskId)?.gamemodes;
    if (gamemodes) {
      gamemodes.push(props.route.params.id);
    }
    const newGameModes = gamemodes ? gamemodes : [props.route.params.id]
    try {
      await taskDispatch(TaskActions.updateTask(taskId, undefined, undefined, newGameModes));
      await loadGameMode();
      setModalVisibile(false);
    } catch (err) {
      setError(err);
    }
    setIsLoading(false);
  }, [props, taskDispatch, setError, setIsLoading, setModalVisibile])

  useEffect(() => {
    setIsLoading(true);
    loadGameMode().then(() => {
      setIsLoading(false);
    });
  }, [loadGameMode, gameModeDispatch, taskDispatch, setIsLoading])

  if (error) {
    return (
      <View style={styles.centered}>
        <Text>{error}</Text>
      </View>
    );
  }

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size='large' color={Colors.primary} />
      </View>
    );
  }

  return (
    <View>
      <Modal
        animationType='slide'
        visible={modalVisible}
      >
        {/*<View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10}}>
          <TouchableOpacity onPress={() => setModalVisibile(false)}>
            <MaterialIcons name='close' size={22} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <MaterialIcons name='save' size={22} />
          </TouchableOpacity>
        </View>*/}
        <View style={{alignItems: 'flex-end', padding: 10}}>
          <TouchableOpacity onPress={() => setModalVisibile(false)}>
            <MaterialIcons name='close' size={22} />
          </TouchableOpacity>
        </View>
        <FlatList
          style={{borderTopWidth: 1, borderTopColor: '#ccc'}}
          data={tasks.filter(task => !task.gamemodes?.includes(gameMode.id))}
          renderItem={(data) => <ListItem title={data.item.text} touchable onPress={() => submitTaskHandler(data.item.id)} />}
        />
      </Modal>
      <View style={styles.info}>
        <AppText style={styles.text}>{gameMode.description}</AppText>
      </View>
      <View style={styles.row}>
        <AppText style={styles.text}>Tasks:</AppText>
        <TouchableOpacity onPress={() => setModalVisibile(true)} >
          <MaterialIcons size={22} name='add'/>
        </TouchableOpacity>
      </View>
      <FlatList
        onRefresh={loadGameMode}
        refreshing={isRefreshing}
        style={styles.list}
        data={gameModeTasks}
        renderItem={data => <ListItem title={data.item.text} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  info: {
    padding: 20
  },
  row: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  text: {
    fontSize: 20,
    textAlign: 'center'
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  list: {
    borderTopColor: '#ccc',
    borderTopWidth: 1
  }
});