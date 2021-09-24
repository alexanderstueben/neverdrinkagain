import React, { useCallback, useEffect, useState } from 'react';
import {
  ActivityIndicator, Alert,
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
import { GameModeActions } from '../store/actions/GameModeActions';
import { GameModeActionTypes } from '../types/action-types/GameModeActionTypes';
import { AddGameModeScreenProps } from '../types/props/AddGameModeScreenProps';
import { GamemodeState } from '../types/states/GamemodeState';

export const AddGameModeScreen = (props: AddGameModeScreenProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { navigation } = props;

  const dispatch: ThunkDispatch<GamemodeState, {}, GameModeActionTypes> = useDispatch();

  useEffect(() => {
    if (error) {
      Alert.alert('An error occurred', error, [{text: 'Ok'}]);
    }
  }, [error])

  const submitHandler = useCallback(async () => {
    setError(undefined);
    setIsLoading(true);
    try {
      await dispatch(GameModeActions.addGameMode(title, description));
      navigation.navigate('GameMode');
    } catch (err) {
      setError(err);
    }
    setIsLoading(false);
  }, [dispatch, title, description, setIsLoading, setError, navigation]);

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
          placeholder='Title'
          underlineColorAndroid={Colors.primary}
          value={title}
          onChangeText={(text) => setTitle(text)}
        />
        <TextInput
          style={styles.input}
          multiline placeholder='Description'
          underlineColorAndroid={Colors.primary}
          value={description}
          onChangeText={(text) => setDescription(text)}
        />
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
                setTitle('');
                setDescription('')
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
  buttonContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    width: '30%'
  }
});
