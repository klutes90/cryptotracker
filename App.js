import React from 'react';
import { Font } from 'expo';
import styled from 'styled-components/native';
import { Provider } from 'react-redux';

import Store from './src/Store';
import Header from './src/components/atoms/Header';
import CoinContainer from './src/containers/CoinContainer';

export default class App extends React.Component {
  state = {
    appIsReady: false,
  };

  async componentWillMount() {
    try {
      await Font.loadAsync({
        'bebas-neue': require('./assets/fonts/BebasNeue-Regular.ttf'),
        montserrat: require('./assets/fonts/Montserrat-Regular.ttf'),
      });
    } catch (err) {
      console.warn('Assets did not load');
      console.log(err.message);
    } finally {
      this.setState({ appIsReady: true });
    }
  }
  render() {
    if (!this.state.appIsReady) {
      return null;
    }
    return (
      <Provider store={Store}>
        <Wrapper>
          <Header />
          <CoinContainer />
        </Wrapper>
      </Provider>
    );
  }
}

const Wrapper = styled.View`
  flex: 1;
  background-color: #F4F7F5;
  align-items: center;
  justify-content: center;
`;
