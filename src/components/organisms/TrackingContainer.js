import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import Spinner from 'react-native-loading-spinner-overlay';

import Card from '../atoms/Card';

export default class TrackingContainer extends React.Component {
  async componentWillMount() {
    this.props.fetchCoinData();
  }

  isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
    const paddingToBottom = 20;
    const close =
      layoutMeasurement.height + contentOffset.y >= contentSize.height - paddingToBottom;

    if (close) this.props.fetchMoreCoinData();
  };

  renderList() {
    const { crypto } = this.props;

    return crypto.data.map(coin => (
      <Card
        key={coin.name}
        name={coin.name}
        symbol={coin.symbol}
        rank={coin.rank}
        priceUsd={coin.price_usd}
        percentChange24h={coin.percent_change_24h}
        percentChange7d={coin.percent_change_7d}
      />
    ));
  }

  render() {
    const { crypto } = this.props;

    if (crypto.isFetching) {
      return (
        <Wrapper>
          <Spinner
            visibile
            textContent="Loading..."
            textStyle={{ color: '#253145' }}
            animation="fade"
          />
        </Wrapper>
      );
    }

    return (
      <Scrollable onScroll={({ nativeEvent }) => this.isCloseToBottom(nativeEvent)}>
        {this.renderList()}
      </Scrollable>
    );
  }
}

const Wrapper = styled.View``;

const Scrollable = styled.ScrollView`
  padding-bottom: 100px;
  padding-top: 55px;
`;

TrackingContainer.propTypes = {
  crypto: PropTypes.shape({
    isFetching: PropTypes.bool,
    data: PropTypes.array,
    error: PropTypes.bool,
    errorMessage: PropTypes.string,
  }).isRequired,
  fetchCoinData: PropTypes.func.isRequired,
  fetchMoreCoinData: PropTypes.func.isRequired,
};
