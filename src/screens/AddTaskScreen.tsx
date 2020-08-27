import { Picker } from '@react-native-community/picker';
import React, { useCallback, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Button,
  Keyboard,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { Colors } from '../constants/Colors';
import { TaskActions } from '../redux/actions/TaskActions';
import { TaskActionTypes } from '../types/action-types/TaskActionTypes';
import { AddTaskScreenProps } from '../types/props/AddTaskScreenProps';
import { TaskState } from '../types/states/TaskState';

export const AddTaskScreen = (props: AddTaskScreenProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const [text, setText] = useState('');
  const [category, setCategory] = useState('task');

  const dispatch: ThunkDispatch<TaskState, {}, TaskActionTypes> = useDispatch();
  const { navigation } = props;

  useEffect(() => {
    if (error) {
      Alert.alert('An error occurred', error, [{text: 'Ok'}]);
    }
  }, [error])

  const submitHandler = useCallback(async () => {
    setError(undefined);
    setIsLoading(true);
    try {
      await dispatch(TaskActions.addTask(text, category));
      navigation.navigate('Tasks');
    } catch (err) {
      setError(err);
    }
    setIsLoading(false);
  }, [dispatch, text, category, setIsLoading, setError, navigation])

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size='large' color={Colors.primary} />
      </View>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.screen}>
        <TextInput
          style={styles.input}
          placeholder='Text'
          underlineColorAndroid={Colors.primary}
          multiline
          numberOfLines={3}
          value={text}
          onChangeText={(input) => setText(input)}
        />
        <Picker
          selectedValue={category}
          onValueChange={(input, index) => setCategory(input.toString())}
          style={styles.picker}
        >
          <Picker.Item label='Aufgabe' value='task' />
          <Picker.Item label='Spiel' value='game' />
          <Picker.Item label='Regel' value='rule' />
        </Picker>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title='save'
              color={Colors.primary}
              onPress={submitHandler}
            />
          </View>
          <View style={styles.button}>
            <Button
              title='clear'
              color={Colors.accent}
              onPress={() => {
                setText('');
              }}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  screen: {
    padding: 20
  },
  input: {
    padding: 10,
  },
  picker: {
    borderWidth: 1,
    borderColor: Colors.primary
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    width: '30%'
  }
});
