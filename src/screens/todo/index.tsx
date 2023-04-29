import React, { useState } from 'react';
import * as S from './styled';
import { colors } from 'src/styles';
import { Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface ToDoProps {
  [key: string]: {
    text: string;
    completed: boolean;
  }
}

export const ToDoScreen: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [toDos, setToDos] = useState<object>({}); 1
  const [completed, setCompleted] = useState<boolean>(false);

  const onChangeText = (payload: string) => { // payload is 
    setText(payload);
  };

  const saveToDo = async (toSave: ToDoProps) => {
    const saveToDos = JSON.stringify(toSave)
    try {
      await AsyncStorage.setItem('toDos', saveToDos);
    }
    catch (e) {
      console.log(e);
    }
  }

  const addToDo = async () => {
    if (text === '') {
      return;
    }

    const newToDos = { ...toDos, [Date.now()]: { text: text, completed: completed } }
    setToDos(newToDos);
    setText('');
  }

  return (
    <S.ToDoContainer>
      <S.ToDoTitleWrap>
        <S.ToDoTitle>ToDoList</S.ToDoTitle>
      </S.ToDoTitleWrap>
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
        <S.ToDoButtonWrap>
          <S.ToDoButton>확인</S.ToDoButton>
        </S.ToDoButtonWrap>
      </S.ToDoInputContainer>
    </S.ToDoContainer>
  );
};
