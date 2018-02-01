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

/**-----------------第一个示例程序-----------------*/
class App1 extends Component {
  render() {
    return (
      <View style={styles1.container}>
        <Text style={{backgroundColor: 'red', height: 30}}>
          第一个
        </Text>
        <Text style={{backgroundColor: 'green', height: 40}}>
          第二个
        </Text>
        <Text style={{backgroundColor: 'blue', height: 50}}>
          第三个
        </Text>
        <Text style={{backgroundColor: 'yellow', height: 60}}>
          第四个
        </Text>
      </View>
    );
  }
}

/**-----------------第二个示例程序-----------------*/
class App2 extends Component {
  render() {
    return (
      <View style={styles2.container}>
        <Text style={{backgroundColor: 'red'}}>
          第一个
        </Text>
        <Text style={{backgroundColor: 'green'}}>
          第二个
        </Text>
        <Text style={{backgroundColor: 'blue'}}>
          第三个
        </Text>
        <Text style={{backgroundColor: 'yellow'}}>
          第四个
        </Text>
        <Text style={{backgroundColor: 'yellow'}}>
          第五个
        </Text>
        <Text style={{backgroundColor: 'yellow'}}>
          第六个
        </Text>
        <Text style={{backgroundColor: 'yellow'}}>
          第七个
        </Text>
        <Text style={{backgroundColor: 'yellow'}}>
          第八个
        </Text>
        <Text style={{backgroundColor: 'yellow'}}>
          第九个
        </Text>
      </View>
    );
  }
}

/**-----------------第三个示例程序-----------------*/
class App3 extends Component {
  render() {
    return (
      <View style={styles1.container}>
        <Text style={{backgroundColor: 'red', flex: 1, height: 90}}>
          第一个
        </Text>
        <Text style={{backgroundColor: 'green', flex: 3, height: 70, alignSelf: 'flex-start'}}>
          第二个
        </Text>
        <Text style={{backgroundColor: 'blue', flex: 2, height: 60, alignSelf: 'flex-end'}}>
          第三个
        </Text>
        <Text style={{backgroundColor: 'yellow', flex: 1}}>
          第四个
        </Text>
      </View>
    );
  }
}

/**-----------------第四个示例程序-----------------*/
var Dimensions = require('Dimensions')

export default class App4 extends Component {
  render() {
    return (
      <View style={styles4.container}>
        <Text>当前屏幕的宽度：{Dimensions.get('window').width}</Text>
        <Text>当前屏幕的高度：{Dimensions.get('window').height}</Text>
        <Text>当前屏幕的分辨率：{Dimensions.get('window').scale}</Text>
      </View>
    );
  }
}

const styles1 = StyleSheet.create({
  container: {
    backgroundColor: 'purple',
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});

const styles2 = StyleSheet.create({
  container: {
    backgroundColor: 'purple',
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap'
  }
});

const styles3 = StyleSheet.create({
  container: {
    backgroundColor: 'purple',
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
})

const styles4 = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})