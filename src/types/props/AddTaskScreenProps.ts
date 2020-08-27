import { StackNavigationProp } from '@react-navigation/stack';
import { TaskStackParamList } from '../param-lists/TaskStackParamList';

export type AddTaskScreenProps = {
  navigation: StackNavigationProp<TaskStackParamList, 'AddTask'>;
}