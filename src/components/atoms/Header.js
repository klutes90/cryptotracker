import React from 'react';
import styled from 'styled-components/native';

export default () => (
  <Wrapper>
    <Title>{'CryptoTrack'.toUpperCase()}</Title>
  </Wrapper>
);

const Wrapper = styled.View`
  display: flex;
  margin-top: 55px;
  align-items: center;
`;

const Title = styled.Text`
  font-family: 'bebas-neue';
  font-size: 20;
`;
