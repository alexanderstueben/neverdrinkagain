import { MaterialIcons } from '@expo/vector-icons';
import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AppText } from '../components/AppText';
import { ListItem } from '../components/ListItem';
import { Colors } from '../constants/Colors';
import { TaskActions } from '../redux/actions/TaskActions';
import { TaskActionTypes } from '../types/action-types/TaskActionTypes';
import { TasksScreenProps } from '../types/props/TasksScreenProps';
import { AppState } from '../types/states/AppState';
import { TaskState } from '../types/states/TaskState';

export const TaskScreen = (props: TasksScreenProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState(undefined);
  const tasks = useSelector((state: AppState) => state.tasks.tasks);
  const dispatch: ThunkDispatch<TaskState, {}, TaskActionTypes> = useDispatch();

  const loadTasks = useCallback(async () => {
    setError(undefined);
    setIsRefreshing(true);
    try {
      await dispatch(TaskActions.fetchTasks());
    } catch (err) {
      setError(err.message);
    }
    setIsRefreshing(false);
  }, [dispatch, setIsLoading, setError]);

  useEffect(() => {
    setIsLoading(true);
    loadTasks().then(() => {
      setIsLoading(false);
    });
  }, [dispatch, loadTasks]);

  if (error) {
    return (
      <View style={styles.centered}>
        <AppText>{error}</AppText>
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
      <TouchableOpacity activeOpacity={0.5} onPress={() => props.navigation.navigate('AddTask')}>
        <View style={styles.addPanel}>
          <MaterialIcons name='add-circle-outline' size={25} color='#aaa' />
        </View>
      </TouchableOpacity>
      <FlatList
        onRefresh={loadTasks}
        refreshing={isRefreshing}
        style={styles.list}
        data={tasks}
        renderItem={data => <ListItem title={data.item.text} touchable onPress={() => {}} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    marginTop: 20
  },
  addPanel: {
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#ccc',
    margin: 15,
    borderRadius: 10
  },
  list: {
    borderTopWidth: 1,
    borderTopColor: '#ccc'
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})