import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { IMAGES } from '../../../utils/constants';
 
const Card = ({ name, symbol, price_usd, percent_change_24h, percent_change_7d }) => (
    <Wrapper>
        <InfoContainer>
            <CoinPic source={{ uri: IMAGES[symbol] }} />
            <Symbol>{symbol}</Symbol>
            <Seperator>|</Seperator>
            <Name>{name}</Name>
            <Price>
                {price_usd}<Money>$</Money>
            </Price>
        </InfoContainer>
        <StatsContainer>
            <Hour positive={percent_change_24h > 0}>{percent_change_24h} %</Hour>
            <Day positive={percent_change_7d > 0}>{percent_change_7d} %</Day>
        </StatsContainer>
    </Wrapper>
)

Card.propTypes = {
    name: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    price_usd: PropTypes.string.isRequired,
    percent_change_24h: PropTypes.number.isRequired,
    percent_change_7d: PropTypes.number.isRequired,
};

const Wrapper = styled.View`
    display: flex;
    margin-bottom: 20px;
    border-bottom: 3px solid #e5e5e5;
    padding: 20px;
`;

const InfoContainer = styled.View`
    display: flex;
    flex-direction: row;
    margin-bottom: 15px;
`;

const StatsContainer = styled.View`
    display: flex;
    border-top: 2px solid #fafafa;
    padding: 10px;
    flex-direction: row;
    justify-content: space-around;
`;

const Hour = styled.Text`
    color: ${props => props.positive ? '#00BFA5' : '#DD2C00'};
    font-weight: bold;
    margin-left: 5px;
`;

const Day = styled.Text`
    color: ${props => props.positive ? '#00BFA5' : '#DD2C00'};
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