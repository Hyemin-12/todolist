import React from 'react';
import styled from 'styled-components';

const TodoHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #8977ad;
    font-size: 21px;
  }
  .tasks-left {
    color: #8365bf;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

function TodoHead() {
  return (
    <TodoHeadBlock>
      <h1>2022년 11월 1일</h1>
      <div className="day">화요일</div>
      <div className="tasks-left">남은 할 일 2개</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;