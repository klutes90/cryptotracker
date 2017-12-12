import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../data/actions/CoinData';
import TrackingContainer from '../components/organisms/TrackingContainer';

const CoinContainer = ({ actions: { fetchCoinData }, crypto }) => (
  <TrackingContainer fetchCoinData={fetchCoinData} crypto={crypto} />
);

CoinContainer.propTypes = {
  crypto: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    symbol: PropTypes.string,
  }),
  actions: PropTypes.shape({
    fetchCoinData: PropTypes.func,
  }).isRequired,
};

CoinContainer.defaultProps = {
  crypto: {},
};

const mapStateToProps = ({ crypto }) => ({ crypto });

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CoinContainer);
