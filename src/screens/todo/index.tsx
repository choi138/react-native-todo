import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Alert } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { AntDesign } from '@expo/vector-icons';

import { colors } from 'src/styles';

import * as S from './styled';

export interface ToDoProps {
  [key: string]: {
    text: string;
    completed: boolean;
  };
}

export const STORAGE_TODO_KEY = '@toDos';

export const ToDoScreen: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [toDos, setToDos] = useState<ToDoProps>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [completed, setCompleted] = useState<boolean>(false);

  const onChangeText = (payload: string) => {
    setText(payload);
  };

  const saveToDos = async (toSave: ToDoProps) => {
    const saveToDos = JSON.stringify(toSave);
    try {
      await AsyncStorage.setItem(STORAGE_TODO_KEY, saveToDos);
    } catch (e) {
      console.log(e);
    }
  };

  const addToDo = async () => {
    if (text === '') {
      return;
    }
    const newToDos = { ...toDos, [Date.now()]: { text: text, completed: completed } };
    setToDos(newToDos);
    await saveToDos(newToDos);
    setText('');
  };

  const loadToDos = async () => {
    try {
      const getToDos = await AsyncStorage.getItem(STORAGE_TODO_KEY);
      setToDos(getToDos ? JSON.parse(getToDos) : []);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  const checkToDo = async (key: string) => {
    setCompleted(!completed);
    const newToDos = { ...toDos };
    newToDos[key].completed = !newToDos[key].completed;
    setToDos(newToDos);
    await saveToDos(newToDos);
  };

  const deleteToDo = (key: string) => {
    Alert.alert('삭제하시겠습니까?', '삭제하시면 되돌릴 수 없습니다.', [
      { text: '취소', style: 'cancel' },
      {
        text: '확인',
        style: 'destructive',
        onPress: () => {
          const newToDos = { ...toDos };
          delete newToDos[key];
          setToDos(newToDos);
          saveToDos(newToDos);
        },
      },
    ]);
  };

  useEffect(() => {
    loadToDos();
  }, []);

  return (
    <S.ToDoContainer>
      <S.ToDoTitleWrap>
        <S.ToDoTitle>ToDoList</S.ToDoTitle>
      </S.ToDoTitleWrap>
      <S.ToDoList>
        {Object.keys(toDos).map((key, i) => {
          const toDo = toDos[key];
          return (
            <S.ToDoListContainer key={i}>
              <S.ToDoListItem>{toDo.text}</S.ToDoListItem>
              <S.ToDoIconContainer>
                <TouchableOpacity onPress={() => checkToDo(key)}>
                  <AntDesign
                    {...(toDo.completed ? { name: 'checkcircle' } : { name: 'checkcircleo' })}
                    size={24}
                    color={colors.skyBlue}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => deleteToDo(key)}>
                  <AntDesign name="closecircleo" size={24} color={colors.red} />
                </TouchableOpacity>
              </S.ToDoIconContainer>
            </S.ToDoListContainer>
          );
        })}
      </S.ToDoList>
      <S.ToDoInputContainer>
        <S.ToDoInput
          multiline
          editable
          onChangeText={onChangeText}
          returnKeyType="done"
          value={text}
          selectionColor={colors.purple}
          placeholder="텍스트를 입력해주세요..."
          placeholderTextColor={colors.purple}
        />
        <TouchableOpacity onPress={addToDo}>
          <S.ToDoButtonWrap>
            <S.ToDoButton>확인</S.ToDoButton>
          </S.ToDoButtonWrap>
        </TouchableOpacity>
      </S.ToDoInputContainer>
    </S.ToDoContainer>
  );
};
