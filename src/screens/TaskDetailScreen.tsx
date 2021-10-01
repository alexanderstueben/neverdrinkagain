import React, { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import { AppText } from '../components/AppText';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../types/states/AppState';
import { TaskActions } from '../store/actions/TaskActions';
import { ThunkDispatch } from 'redux-thunk';
import { TaskState } from '../types/states/TaskState';
import { TaskActionTypes } from '../types/action-types/TaskActionTypes';

export const TaskDetailScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const tasks = useSelector((state: AppState) => state.tasks.tasksWithGamemodes);
  console.log(tasks);
  const dispatch: ThunkDispatch<TaskState, {}, TaskActionTypes> = useDispatch();

  const loadTasksWithGamemodes = useCallback(async () => {
    setError(undefined);
    setIsRefreshing(true);
    try {
      await dispatch(TaskActions.fetchTasksWithGamemodes());
    } catch (err) {
      setError(err.message);
    }
    setIsRefreshing(false);
  }, [dispatch, setIsLoading, setError]);

  useEffect(() => {
    setIsLoading(true);
    loadTasksWithGamemodes().then(() => {
      setIsLoading(false);
    });
  }, [dispatch, loadTasksWithGamemodes]);

  return (
    <View>
      <AppText>TaskDetailScreen</AppText>
    </View>
  );
}
