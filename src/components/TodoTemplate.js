import React from 'react';
import styled from 'styled-components';

const TodoTemplateBlock = styled.div`
    // 박스 크기 설정
    width: 512px;
    height: 768px;

    // 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정
    position: relative;

    // 박스 스타일 설정
    background: white;
    border-radius: 16px;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

    // 가운데 정렬
    margin: 0 auto;

    // 박스 위치 조정
    margin-top: 96px;
    margin-bottom: 32px;
    display: flex;
    flex-direction: column;
`;

function TodoTemplate({ children }) {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}

export default TodoTemplate;