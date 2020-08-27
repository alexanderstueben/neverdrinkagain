import React, { useCallback, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';
import { ThunkDispatch } from 'redux-thunk';
import { AppText } from '../components/AppText';
import { ListItem } from '../components/ListItem';
import { Colors } from '../constants/Colors';
import { GameModeActions } from '../redux/actions/GameModeActions';
import { GameModeActionTypes } from '../types/action-types/GameModeActionTypes';
import { GameModeScreenProps } from '../types/props/GameModeScreenProps';
import { AppState } from '../types/states/AppState';
import { GameModeState } from '../types/states/GameModeState';

export const GameModeScreen = (props: GameModeScreenProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState(undefined);
  const gameModes = useSelector((state: AppState) => state.gameModes.gameModes);
  const dispatch: ThunkDispatch<GameModeState, {}, GameModeActionTypes> = useDispatch();

  const loadGameModes = useCallback(async () => {
    setError(undefined);
    setIsRefreshing(true);
    try {
      await dispatch(GameModeActions.fetchGameModes());
    } catch (err) {
      setError(err.message);
    }
    setIsRefreshing(false);
  }, [dispatch, setIsLoading, setError]);

  useEffect(() => {
    setIsLoading(true);
    loadGameModes().then(() => {
      setIsLoading(false);
    });
  }, [dispatch, loadGameModes]);

  if (error) {
    return (
      <View style={styles.centered}>
        <AppText>{error}</AppText>
      </View>
    );
  }

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size='large' color={Colors.primary} />
      </View>
    );
  }

  return (
    <View>
      <TouchableOpacity activeOpacity={0.5} onPress={() => props.navigation.navigate('AddGameMode')}>
      <View style={styles.addPanel}>
          <MaterialIcons name='add-circle-outline' size={25} color='#aaa' />
      </View>
      </TouchableOpacity>
      <FlatList
        onRefresh={loadGameModes}
        refreshing={isRefreshing}
        style={styles.list}
        data={gameModes}
        renderItem={data => <ListItem title={data.item.title} touchable onPress={() => props.navigation.navigate('GameModeDetail', { id: data.item.id, title: data.item.title })} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    marginTop: 20
  },
  addPanel: {
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#ccc',
    margin: 15,
    borderRadius: 10
  },
  list: {
    borderTopWidth: 1,
    borderTopColor: '#ccc'
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});