import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../data/actions/CoinData';
import TrackingContainer from '../src/components/organisms/TrackingContainer';

const CoinContainer = ({ actions: { fetchCoinData }, crypto }) => (
    <TrackingContainer fetchCoinData={fetchCoinData} crypto={crypto} />
);

CoinContainer.propTypes = {
    crypto: PropTypes.shape(),
    fetchCoinData: PropTypes.func.isRequired,
};

const mapStateToProps = ({ crypto }) => ({ crypto });

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CoinContainer);