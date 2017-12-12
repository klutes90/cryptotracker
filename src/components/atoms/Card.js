import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { IMAGES } from '../../../utils/constants';

const Card = ({
  name, symbol, priceUsd, percentChange24h, percentChange7d,
}) => (
  <Wrapper>
    <InfoContainer>
      <CoinPic source={{ uri: IMAGES[symbol] }} />
      <Symbol>{symbol}</Symbol>
      <Seperator>|</Seperator>
      <Name>{name}</Name>
      <Price>
        {priceUsd}
        <Money>$</Money>
      </Price>
    </InfoContainer>
    <StatsContainer>
      <Hour positive={percentChange24h > 0}>{percentChange24h} %</Hour>
      <Day positive={percentChange7d > 0}>{percentChange7d} %</Day>
    </StatsContainer>
  </Wrapper>
);

Card.propTypes = {
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  priceUsd: PropTypes.string.isRequired,
  percentChange24h: PropTypes.string.isRequired,
  percentChange7d: PropTypes.string.isRequired,
};

const Wrapper = styled.View`
  display: flex;
  margin-bottom: 20px;
  border-bottom-width: 3px;
  border-bottom-color: #e5e5e5;
  padding: 20px;
`;

const InfoContainer = styled.View`
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
`;

const StatsContainer = styled.View`
  display: flex;
  border-top-width: 2px;
  border-top-color: #fafafa;
  padding: 10px;
  flex-direction: row;
  justify-content: space-around;
`;

const Hour = styled.Text`
  color: ${props => (props.positive ? '#00BFA5' : '#DD2C00')};
  font-weight: bold;
  margin-left: 5px;
`;

const Day = styled.Text`
  color: ${props => (props.positive ? '#00BFA5' : '#DD2C00')};
  font-weight: bold;
  margin-left: 5px;
`;

const CoinPic = styled.Image`
  width: 35px;
  height: 35px;
`;

const Symbol = styled.Text`
  margin-top: 10px;
  margin-left: 20px;
  margin-right: 5px;
  font-weight: bold;
`;

const Seperator = styled.Text`
  margin-top: 10px;
`;

const Name = styled.Text`
  margin-top: 10px;
  margin-left: 5px;
  margin-right: 20px;
`;

const Price = styled.Text`
  margin-top: 10px;
  margin-left: auto;
  margin-right: 10px;
  font-weight: bold;
`;

const Money = styled.Text`
  font-weight: bold;
`;

export default Card;
