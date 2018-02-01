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
  TabBarIOS,
  NavigatorIOS
} from 'react-native'

import Find from './XMGFind'
import Home from './XMGHome'
import Message from './XMGMessage'
import Mine from './XMGMine'

export default class Main extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedItem: 'home'
    }
  }

  render() {
    return (
      <TabBarIOS
        tintColor="orange"
      >
        <TabBarIOS.Item
          icon={{uri: 'home', scale: 1.5}}
          title="首页"
          onPress={() => this.setState({selectedItem: 'home'})}
          selected={this.state.selectedItem == 'home'}
        >
          <NavigatorIOS
            tintColor="orange"
            style={{flex: 1}}
            initialRoute = {{
              component: Home,
              title: '首页',
              leftButtonIcon: require('../img/friend_add.png'),
              rightButtonIcon: require('../img/scan.png')
            }}
          />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          icon={{uri: 'discover', scale: 2}}
          title="发现"
          onPress={() => this.setState({selectedItem: 'discover'})}
          selected={this.state.selectedItem == 'discover'}
        >
          <NavigatorIOS
            style={{flex: 1}}
            initialRoute = {
              {
                component: Find,
                title: '发现'
              }
            }
          />
        </TabBarIOS.Item>

        <TabBarIOS.Item
          icon={{uri: 'message', scale: 2.5}}
          title="消息"
          onPress={() => this.setState({selectedItem: 'message'})}
          selected={this.state.selectedItem == 'message'}
        >
          <NavigatorIOS
            style={{flex: 1}}
            initialRoute = {
              {
                component: Message,
                title: '消息'
              }
            }
          />
        </TabBarIOS.Item>

        <TabBarIOS.Item
          icon={{uri: 'profile', scale: 2}}
          title="我的"
          onPress={() => this.setState({selectedItem: 'profile'})}
          selected={this.state.selectedItem == 'profile'}
        >
          <NavigatorIOS
            style={{flex: 1}}
            initialRoute = {
              {
                component: Mine,
                title: '我的'
              }
            }
          />
        </TabBarIOS.Item>
      </TabBarIOS>
    )
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
