import { StackNavigationProp } from '@react-navigation/stack';
import { TaskStackParamList } from '../param-lists/TaskStackParamList';

export type TasksScreenProps = {
  navigation: StackNavigationProp<TaskStackParamList, 'Tasks'>
}