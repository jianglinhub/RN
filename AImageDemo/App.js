/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native'

var BadgeData = require('BadgeData.json')
var Dimensions = require('Dimensions')
var {width} = Dimensions.get('window')

// 定义一些全局变量
var cols = 3
var boxW = 100
var vMargin = (width - cols * boxW) / (clos + 1)
var hMargin = 25

export default class AImageDemo extends Component {
  render() {
    return (
      <View style={style.container}>
        {this.renderAllBadge()}
      </View>
    )
  }

  renderAllBadge() {
    var allBadge = []
    for (var i = 0; i < BadgeData.data.length; i++) {
      var badge = BadgeData.data[i]
      allBadge.push(
        <View key={i} style={styles.outViewStyle}>
          <Image source={{uri: badge.icon}} style={style.imageStyle} />
          <Text style={styles.mainTitleStyle}>
            {badge.title}
          </Text>
        </View>
      )
    }
    return allBadge
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  outViewStyle: {
    backgroundColor: 'red',
    alignItems: 'center',
    height: boxW,
    width: boxW,
    marginLeft: vMargin,
    marginTop: hMargin
  },
  imageStyle: {
    width: 80,
    height: 80
  },
  mainTitleStyle: {

  }
})