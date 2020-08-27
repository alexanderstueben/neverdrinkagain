import { Task } from '../models/Task';

export type TaskState = {
  tasks: Task[];
  selectedTask: Task;
  gameModeTasks: Task[];
}