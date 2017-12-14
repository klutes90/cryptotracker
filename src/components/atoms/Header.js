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
  color: #5f4b8b;
  font-size: 25;
  margin-bottom: 25px;
`;
