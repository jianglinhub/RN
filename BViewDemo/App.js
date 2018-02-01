/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.innerViewStyle}>
          <Text>我是里面的View</Text>
        </View>
        <View style={styles.innerViewStyle2}>
          <Text>我是里面下面的View</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    width: 300,
    height: 100,
    flexDirection: 'row'
  },
  innerViewStyle: {
    backgroundColor: 'green',
    width: 100,
  },
  innerViewStyle2: {
    backgroundColor: 'yellow',
    width: 100
  }
});
