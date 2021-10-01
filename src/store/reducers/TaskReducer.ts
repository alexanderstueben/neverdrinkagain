import { TaskActionTypes } from '../../types/action-types/TaskActionTypes';
import { TaskState } from '../../types/states/TaskState';
import { Task } from '../../entities/task.entity';

const initialState: TaskState = {
  tasks: [],
  tasksWithGamemodes: [],
  selectedTask: {
    id: 0,
    text: 'INIT',
    gamemodes: [],
    category: 'task',
    createDate: 'INIT',
    updateDate: 'INIT'
  }
}

export const TaskReducer = (state = initialState, action: TaskActionTypes): { tasksWithGamemodes: Task[]; selectedTask: Task; tasks: Task[] } => {
  switch (action.type) {
    case 'SET_TASKS':
      return {
        ...state,
        tasks: action.tasks
      }
    case 'SET_TASKS_WITH_GAMEMODES':
      return {
        ...state,
        tasksWithGamemodes: action.tasksWithGamemodes
      }
    // case 'ADD_TASK':
    //   return {
    //     ...state,
    //     tasks: state.tasks.concat(action.task)
    //   }
    // case 'UPDATE_TASK':
    //   const taskIndex = state.tasks.findIndex(task => task.id === action.taskId);
    //   const updatedTask: Task = {
    //     id: action.taskId,
    //     text: action.data.text ? action.data.text : state.tasks[taskIndex].text,
    //     category: action.data.category ? action.data.category : state.tasks[taskIndex].category,
    //     gamemodes: action.data.gamemodes ? action.data.gamemodes : state.tasks[taskIndex].gamemodes,
    //     createDate: state.tasks[taskIndex].createDate,
    //     updateDate: action.data.updateDate
    //   }
    //   const updatedTasks = [...state.tasks];
    //   updatedTasks[taskIndex] = updatedTask;
    //   return {
    //     ...state,
    //     tasks: updatedTasks
    //   }
    default:
      return state;
  }
}
