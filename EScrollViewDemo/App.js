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
  ScrollView
} from 'react-native'

export default class App extends Component<{}> {
  // horizontal={true} ==> 变为横向
  // showsHorizontalScrollIndicator={false} ==> 不显示横向滚动条
  // pagingEnabled={true} ==> 自动滚动到页头
  // scrollEnabled={false} ==> 不允许滚动
  render() {
    return (
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
      >
        {this.renderChildView()}
      </ScrollView>
    )
  }

  renderChildView() {
    var allChild = []
    var colors = ['red', 'green', 'blue', 'yellow', 'purple']
    for (var i=0; i<5; i++) {
      allChild.push(
        <View key={i} style={{backgroundColor: colors[i], width: 375, height: 120}}>
          <Text>{i}</Text>
        </View>
      )
    }
    return allChild
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
