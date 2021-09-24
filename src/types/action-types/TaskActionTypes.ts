import { ADD_TASK, SET_TASKS, SET_TASKS_BY_GAMEMODE_ID, UPDATE_TASK } from '../../store/actions/TaskActions';
import { Task } from '../../entities/task.entity';

export type SetTasksByGameModeIdActionType = {
  type: typeof SET_TASKS_BY_GAMEMODE_ID,
  tasks: Task[]
}

export type SetTasksActionType = {
  type: typeof SET_TASKS;
  tasks: Task[];
}

export type AddTaskActionType = {
  type: typeof ADD_TASK,
  task: Task;
}

export type UpdateTaskActionType = {
  type: typeof UPDATE_TASK,
  taskId: string;
  data: {
    text: string | undefined;
    category: string | undefined;
    gamemodes: string[] | undefined;
    updateDate: number;
  };
}

export type TaskActionTypes = SetTasksByGameModeIdActionType | SetTasksActionType | AddTaskActionType | UpdateTaskActionType
