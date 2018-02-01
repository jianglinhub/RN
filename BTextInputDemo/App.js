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
  View,
  TextInput
} from 'react-native';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          // defaultValue={'我是默认文字'}
          keyboardType={'number-pad'}
          // multiline={false} 是否可以多行显示
          secureTextEntry={true}
          style={styles.inputStyle}
          placeholder={'占位文字'}
          clearButtonMode={'while-editing'}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  inputStyle: {
    marginTop: 30,
    width: 300,
    height: 60,
    // backgroundColor: 'black'
    borderWidth: 1,
    borderColor: '#e8e8e8'
  }
});
