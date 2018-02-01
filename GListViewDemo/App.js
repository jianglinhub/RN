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
var Wine = require('./Wine.json')

export default class App extends Component<{}> {

  constructor(props) {
    super(props)
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      dataSource: ds.cloneWithRows(Wine)
    }
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}/>
    )
  }

  renderRow(rowData, sectionID, rowID, highlightRow) {
    return (
      <TouchableOpacity activeOpacity={0.5} onPress={() => {AlertIOS.alert('点击了第' + rowID + '行')}}>
        <View style={styles.cellViewStyle}>
          <Image source={{uri: rowData.image}} style={styles.leftImageStyle} />
          <View style={styles.rightViewStyle}>
            <Text style={styles.topTitleStyle}>{rowData.name}</Text>
            <Text style={styles.bottomTitleStyle}>¥ {rowData.money}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  cellViewStyle: {
    padding: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 0.5,
    borderBottomColor: '#e8e8e8',
    flexDirection: 'row'
  },
  leftImageStyle: {
    width: 60,
    height: 60,
    marginRight: 15
  },
  rightViewStyle: {
    justifyContent: 'center'
  },
  topTitleStyle: {
    fontSize: 15,
    width: vWidth * 0.7,
    marginBottom: 8
  },
  bottomTitleStyle: {
    color: 'red',
    fontSize: 15
  }
})
