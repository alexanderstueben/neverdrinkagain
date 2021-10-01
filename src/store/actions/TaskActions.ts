import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import {
  AddTaskActionType,
  SetTasksActionType,
  SetTasksWithGamemodesActionType, TaskActionTypes, UpdateTaskActionType
} from '../../types/action-types/TaskActionTypes';
// import { Task } from '../../types/models/Task';
import { TaskState } from '../../types/states/TaskState';
import { getRepository } from 'typeorm';
import { Task } from '../../entities/task.entity';
import { Gamemode } from '../../entities/gamemode.entity';

export const SET_TASKS = 'SET_TASKS';
export const SET_TASK_BY_ID = 'SET_TASK_BY_ID';
export const SET_TASKS_WITH_GAMEMODES = 'SET_TASKS_WITH_GAMEMODES'
export const ADD_TASK = 'ADD_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';

export const TaskActions = {
  fetchTasks: (): ThunkAction<Promise<void>, TaskState, {}, SetTasksActionType> => {
    return async (dispatch: ThunkDispatch<TaskState, {}, SetTasksActionType>) => {
      const tasks = await getRepository(Task).find();
      dispatch({ type: SET_TASKS, tasks });
    }
  },
  fetchTasksWithGamemodes: (): ThunkAction<Promise<void>, TaskState, {}, SetTasksWithGamemodesActionType> => {
    return async (dispatch: ThunkDispatch<TaskState, {}, SetTasksWithGamemodesActionType>) => {
      const tasksWithGamemodes = await getRepository(Task).findOne(1, { relations: ['gamemodes'] })
      if (tasksWithGamemodes) {
        dispatch({ type: SET_TASKS_WITH_GAMEMODES, tasksWithGamemodes: [tasksWithGamemodes] });
      }
    }
}
  // fetchTasksByGameModeId: (gameModeId: string): ThunkAction<Promise<void>, TaskState, {}, SetTasksByGameModeIdActionType> => {
  //   return async (dispatch: ThunkDispatch<TaskState, {}, SetTasksByGameModeIdActionType>) => {
  //     const response = await fetch(`http://10.0.19.31:9000/tasks.json?ns=neverdrinkagain-app`);
  //     if (!response.ok) {
  //       throw new Error(`Error while getting tasks !`);
  //     }
  //     const data: {[key: string]: Task} = await response.json();
  //     const tasks: Task[] = [];
  //     for (const key in data) {
  //       if (data[key].gamemodes?.includes(gameModeId)) {
  //         tasks.push({
  //           id: key,
  //           text: data[key].text,
  //           category: data[key].category,
  //           createDate: data[key].createDate,
  //           updateDate: data[key].updateDate,
  //           gamemodes: data[key].gamemodes
  //         });
  //       }
  //     }
  //     dispatch({ type: SET_TASKS_BY_GAMEMODE_ID, tasks });
  //   }
  // },
  // addTask: (text: string, category: string): ThunkAction<Promise<void>, TaskState, {}, AddTaskActionType> => {
  //   return async (dispatch: ThunkDispatch<TaskState, {}, AddTaskActionType>) => {
  //     const createDate = new Date().getTime();
  //     const updateDate = new Date().getTime();
  //     const response = await fetch('http://10.0.19.31:9000/tasks.json?ns=neverdrinkagain-app', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({
  //         text,
  //         category,
  //         gamemodes: [],
  //         createDate,
  //         updateDate
  //       })
  //     });
  //     if (!response.ok) {
  //       throw new Error('Error while creating a task!');
  //     }
  //     const resData: {name: string} = await response.json();
  //     const task: Task = {
  //       id: resData.name,
  //       text,
  //       category,
  //       gamemodes: [],
  //       updateDate,
  //       createDate
  //     }
  //     dispatch({ type: ADD_TASK, task })
  //   }
  // },
  // updateTask: (taskId: string, text?: string, category?: string, gamemodes?: string[]): ThunkAction<Promise<void>, TaskState, {}, UpdateTaskActionType> => {
  //   return async (dispatch: ThunkDispatch<TaskState, {}, UpdateTaskActionType>) => {
  //     const updateDate = new Date().getTime();
  //     const response = await fetch(`http://10.0.19.31:9000/tasks/${taskId}.json?ns=neverdrinkagain-app`, {
  //       method: 'PATCH',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({
  //         text,
  //         category,
  //         gamemodes,
  //         updateDate
  //       })
  //     });
  //     if (!response.ok) {
  //       throw new Error('Error while creating a task!');
  //     }
  //
  //     const data = {
  //       text,
  //       category,
  //       gamemodes: [],
  //       updateDate,
  //     }
  //     dispatch({ type: UPDATE_TASK, taskId, data })
  //   }
  // }
}
