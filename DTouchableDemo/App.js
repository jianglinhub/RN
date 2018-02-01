/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  AlertIOS
} from 'react-native'

export default class App extends Component {

  // ES5 ==> getDefaultProps()
  static defaultProps = {
    name: '这是名字'
  }

  // ES5 ==> getInitialState()
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     title: '这是标题'
  //   }
  // }

  state = {
    title: '这是标题'
  }
  

  // ref ==> 获取真实DOM节点
  render() {
    return (
      <View ref="topView" style={styles.container}>
        <TouchableOpacity
          activeopacity={0.5}
          onPress={() => this.activeEvent('点击')}
          onPressIn={() => this.activeEvent('按下')}
          onPressOut={() => this.activeEvent('抬起')}
          onLongPress={() => this.activeEvent('长按')}
        >
          <View style={styles.innerViewStyle}>
            <Text>我是文本，但可以点击</Text>
          </View>  
        </TouchableOpacity>
        <View>
          <Text>{this.props.name}</Text>
          <Text>{this.state.title}</Text>
        </View>
      </View>
    )
  }

  activeEvent(event) {
    this.setState({title: event})
    // console.log(this.refs.topView)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
})
