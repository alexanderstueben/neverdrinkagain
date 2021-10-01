import { Task } from '../../entities/task.entity';

export type TaskState = {
  tasks: Task[];
  selectedTask: Task;
  tasksWithGamemodes: Task[];
}
