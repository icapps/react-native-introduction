import React from 'react';
import colors from './src/utils/colors';
import MainNavigator from './src/navigators/MainNavigator';

export default class App extends React.Component {
  render() {
    return (
      <MainNavigator />
    );
  }
}