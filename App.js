import React from 'react';
import styled from 'styled-components/native';

export default () => (
  <Wrapper>
    <Title>Hello World!</Title>
  </Wrapper>
);

const Wrapper = styled.View`
  flex: 1;
  background-color: #000;
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  color: #f4f4f4;
`;
