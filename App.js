import React from 'react';
import styled from 'styled-components/native';
import { Provider } from 'react-redux';

import Store from './src/Store';
import Header from './src/components/atoms/Header';
import CoinContainer from './src/containers/CoinContainer';

export default () => (
  <Provider store={Store}>
    <Wrapper>
      <Header />
      <CoinContainer />
    </Wrapper>
  </Provider>
);

const Wrapper = styled.View`
  flex: 1;
  background-color: #e9e9e9;
  align-items: center;
  justify-content: center;
`;
