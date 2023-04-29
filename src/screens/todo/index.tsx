import React, { useEffect, useState } from 'react';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';

import AsyncStorage from '@react-native-async-storage/async-storage';

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
              <TouchableWithoutFeedback onPress={() => checkToDo(key)}>
                <S.ToDoIcon
                  {...(toDo.completed ? { name: 'checkcircle' } : { name: 'checkcircleo' })}
                  size={24}
                />
              </TouchableWithoutFeedback>
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
