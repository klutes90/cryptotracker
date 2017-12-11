import React from 'react';
import styled from 'styled-components/native';
import { Provider } from 'react-redux';

import Store from './src/Store';
import Header from './src/components/atoms/Header';
import TrackingContainer from './src/components/organisms/TrackingContainer';

export default () => (
  <Provider store={Store}>
    <Wrapper>
      <Header />
      <TrackingContainer />
    </Wrapper>
  </Provider>
);

const Wrapper = styled.View`
  flex: 1;
  background-color: #e9e9e9;
  align-items: center;
  justify-content: center;
`;
