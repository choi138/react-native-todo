import React from "react";
import * as S from "./styled";

export const ToDoScreen: React.FC = () => {
    return (
        <S.ToDoContainer>
            <S.ToDoTitleWrap>
                <S.ToDoTitle>ToDoList</S.ToDoTitle>
            </S.ToDoTitleWrap>
        </S.ToDoContainer>
    )
}