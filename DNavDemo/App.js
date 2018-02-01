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
  TabBarIOS
} from 'react-native'

export default class App extends Component {

  state = {
    selectedTabBarItem: 'contacts'
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topTitleViewStyle}>
          <Text>Tab选项卡切换</Text>
        </View>

        <TabBarIOS barTintColor='black' tintColor="purple">
          <TabBarIOS.Item
            systemIcon="contacts"
            badge="3"
            selected={this.state.selectedTabBarItem == 'contacts'}
            onPress={() => this.setState({ selectedTabBarItem: 'contacts' })}
          >
            <View style={[styles.commonViewStyle, {backgroundColor: 'blue'}]}>
              <Text>首页</Text>
            </View>
          </TabBarIOS.Item>

          <TabBarIOS.Item
            systemIcon="bookmarks"
            selected={this.state.selectedTabBarItem == 'bookmarks'}
            onPress={() => this.setState({ selectedTabBarItem: 'bookmarks' })}
          >
            <View style={[styles.commonViewStyle, {backgroundColor: 'green'}]}>
              <Text>书架</Text>
            </View>
          </TabBarIOS.Item>

          <TabBarIOS.Item 
            systemIcon="downloads"
            selected={this.state.selectedTabBarItem == 'downloads'}
            onPress={() => this.setState({ selectedTabBarItem: 'downloads' })}
          >
            <View style={[styles.commonViewStyle, {backgroundColor: 'yellow'}]}>
              <Text>下载</Text>
            </View>
          </TabBarIOS.Item>

          <TabBarIOS.Item 
            systemIcon="search"
            selected={this.state.selectedTabBarItem == 'search'}
            onPress={() => this.setState({ selectedTabBarItem: 'search' })}
          >
            <View style={[styles.commonViewStyle, {backgroundColor: 'purple'}]}>
              <Text>搜索</Text>
            </View>
          </TabBarIOS.Item>
        </TabBarIOS>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  topTitleViewStyle: {
    height: 64,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  commonViewStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
