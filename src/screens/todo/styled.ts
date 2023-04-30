import { AntDesign } from '@expo/vector-icons';
import styled from 'styled-components/native';

import { colors } from 'src/styles';

export const ToDoContainer = styled.View`
  flex: 1;
  padding: 60px 40px;
  flex-direction: column;
  background-color: '#f9f9f9';
`;

export const ToDoTitleWrap = styled.View`
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  border-bottom-width: 1.8px;
  border-bottom-color: ${colors.gray};
`;

export const ToDoTitle = styled.Text`
  font-size: 36px;
  font-weight: 800;
  color: ${colors.darkPurple};
`;

export const ToDoInputContainer = styled.View`
  background-color: #f7f7f7;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px 40px;
  padding-bottom: 30px;
  border-top-width: 1.8px;
  border-top-color: ${colors.gray};
`;

export const ToDoInput = styled.TextInput`
  font-size: 20px;
  font-weight: 600;
  flex: 0.9;
  flex-wrap: wrap;
`;

export const ToDoButtonWrap = styled.View`
  padding: 18px 12px;
  background-color: ${colors.purple};
  border-radius: 50%;
`;

export const ToDoButton = styled.Text`
  color: ${colors.white};
  font-size: 16px;
  font-weight: 800;
`;

export const ToDoList = styled.ScrollView`
  flex: 1;
  margin-top: 20px;
  margin-bottom: 48px;
`;

export const ToDoListContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 16px 0;
`;

export const ToDoListItem = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: ${colors.purple};
`;

export const ToDoIconContainer = styled.View`
  flex-direction: row;
  column-gap: 10px;
  justify-content: space-between;
  align-items: flex-start;
`;
