import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../data/actions/CoinData';
import TrackingContainer from '../components/organisms/TrackingContainer';

const CoinContainer = ({ actions: { fetchCoinData, fetchMoreCoinData }, crypto, moreCrypto }) => (
  <TrackingContainer
    fetchCoinData={fetchCoinData}
    fetchMoreCoinData={fetchMoreCoinData}
    crypto={crypto}
    moreCrypto={moreCrypto}
  />
);

CoinContainer.propTypes = {
  crypto: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    symbol: PropTypes.string,
  }),
  moreCrypto: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    symbol: PropTypes.string,
  }),
  actions: PropTypes.shape({
    fetchCoinData: PropTypes.func,
    fetchMoreCoinData: PropTypes.func,
  }).isRequired,
};

CoinContainer.defaultProps = {
  crypto: {},
  moreCrypto: {},
};

const mapStateToProps = ({ crypto, moreCrypto }) => ({ crypto, moreCrypto });

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CoinContainer);
