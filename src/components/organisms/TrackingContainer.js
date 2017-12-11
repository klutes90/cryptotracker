import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

export default class TrackingContainer extends React.Component {
  componentWillMount() {
    console.log('test');
  }
  render() {
    return <Text>test</Text>;
  }
}
