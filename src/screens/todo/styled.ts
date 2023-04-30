import { TextInput } from 'react-native';

import styled from 'styled-components/native';
import { css } from 'styled-components';

import { colors } from 'src/styles';

export const ToDoContainer = styled.View`
  flex: 1;
  padding: 60px 0;
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
  padding: 0 40px;
  flex: 1;
  margin-top: 20px;
  margin-bottom: 48px;
`;

export const ToDoListContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 18px 0;
`;

export const ToDoListItem = styled(TextInput)<{ isCompleted: boolean }>`
  font-size: 20px;
  font-weight: 700;
  flex: 0.9;
  ${({ isCompleted }) =>
    isCompleted
      ? css`
          text-decoration-line: line-through;
          color: ${colors.gray};
        `
      : css`
          color: ${colors.purple};
        `}
`;

export const ToDoIconContainer = styled.View`
  flex-direction: row;
  column-gap: 14px;
  justify-content: space-between;
  align-items: flex-start;
`;
