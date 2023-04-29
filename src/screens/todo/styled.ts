import { colors } from 'src/styles';
import styled from 'styled-components/native';

export const ToDoContainer = styled.ScrollView`
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
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
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