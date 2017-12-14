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
        {priceUsd} <Money>$</Money>
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
  margin-bottom: 35px;
  padding: 20px;
`;

const InfoContainer = styled.View`
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
  align-items: center;
  justify-content: space-around;
`;

const StatsContainer = styled.View`
  display: flex;
  border-top-width: 2px;
  border-top-color: #5f4b8b;
  padding: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const Hour = styled.Text`
  font-family: 'montserrat';
  color: ${props => (props.positive ? '#00BFA5' : '#DD2C00')};
  font-weight: bold;
  margin-left: 5px;
`;

const Day = styled.Text`
  font-family: 'montserrat';
  color: ${props => (props.positive ? '#00BFA5' : '#DD2C00')};
  font-weight: bold;
  margin-left: 5px;
`;

const CoinPic = styled.Image`
  width: 35px;
  height: 35px;
`;

const Symbol = styled.Text`
  font-family: 'montserrat';
  margin-top: 10px;
  margin-left: 20px;
  margin-right: 5px;
  font-weight: bold;
`;

const Seperator = styled.Text`
  font-family: 'montserrat';
  margin-top: 10px;
`;

const Name = styled.Text`
  font-family: 'montserrat';
  margin-top: 10px;
  margin-left: 5px;
  margin-right: 20px;
`;

const Price = styled.Text`
  font-family: 'montserrat';
  margin-top: 10px;
  margin-left: auto;
  margin-right: 10px;
  font-weight: bold;
`;

const Money = styled.Text`
  font-family: 'montserrat';
  font-weight: bold;
`;

export default Card;
