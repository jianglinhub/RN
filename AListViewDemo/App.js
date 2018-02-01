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
  ListView,
  Image,
  TouchableOpacity,
  AlertIOS
} from 'react-native'

var vWidth = require('Dimensions').get('window').width
var shareData = require('./shareData.json')

var cols = 3
var cellWidth = 100
var lMargin = (vWidth - cellWidth * cols) / (cols + 1)
var tMargin = 25

export default class App extends Component {

  constructor(props) {
    super(props)
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      dataSource: ds.cloneWithRows(shareData.data)
    }
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
        contentContainerStyle={styles.listViewStyle} />  
    )
  }

  renderRow(rowData) {
    return (
      <TouchableOpacity activeOpacity={0.5} onPress={() => AlertIOS.alert('哈哈')}>
        <View style={styles.innerViewStyle}>
          <Image source={{uri: rowData.icon}} style={styles.iconStyle} />
          <Text style={styles.textStyle}>{rowData.title}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  listViewStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  iconStyle: {
    width: 80,
    height: 80
  },
  textStyle: {
    marginTop: 6
  },
  innerViewStyle: {
    width: cellWidth,
    height: cellWidth,
    marginLeft: lMargin,
    marginTop: tMargin,
    alignItems: 'center'
  }
})
