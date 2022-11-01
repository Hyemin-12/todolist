import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList() {
  return (
    <TodoListBlock>
      <TodoItem text="ROOM 데이터 저장하기" done={true} />
      <TodoItem text="SwChallenge 회의하기" done={false} />
      <TodoItem text="Python GUI 공부하기" done={false} />
    </TodoListBlock>
  );
}

export default TodoList;