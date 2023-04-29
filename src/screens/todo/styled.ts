import { colors } from 'src/styles';
import styled from 'styled-components/native';

export const ToDoContainer = styled.ScrollView`
    flex: 1;
    padding: 60px 20px;
    flex-direction: column;
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
    color: ${colors.purple};
`;