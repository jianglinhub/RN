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
  TouchableOpacity
} from 'react-native'

var Car = require('./Car.json')

export default class App extends Component {

  constructor(props) {
    super(props)

    // 取组数据
    var getSectionData = (dataBlob, sectionID) => {
      return dataBlob(sectionID)
    }

    // 取行数据
    var getRowData = (dataBlob, sectionID, rowID) => {
      return dataBlob[sectionID + ':' + rowID]
    }

    this.state = {
      dataSource: new ListView.DataSource({
        getSectionData: getSectionData, // 组数据
        getRowData: getRowData, // 行数据
        rowHasChanged: (r1, r2) => r1 !== r2,
        sectionHeaderHasChanged: (s1, s2) => s1 !== s2
      })
    }

  }

  loadDataFromJson() {
    var jsonData = Car.data
    var dataBlob = {},
        sectionIDs = [],
        rowIDs = [],
        cars = []

    for (var i=0; i<jsonData.length; i++) {

      // 把组号放入sectionIDs
      sectionIDs.push(i)

      // 把组中的内容放入dataBlob对象中
      dataBlob[i] = jsonData[i].title

      // 取出该组中所有的库
      cars = jsonData[i].cars
      rowIDs[i] = []

      // 遍历所有的车数组
      for (var j=0; j<cars.length; j++) {
        // 把行号放入rowIDs
        rowIDs[i].push(j)
        // 把每一行中的内容放入dataBlob对象中
        dataBlob[i+':'+j] = cars[j]
      }
    }

    // 更新状态
    this.setState({
      dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs)
    })
  }

  render() {
    return (
      <View style={styles.outerViewStyle}>
        <View style={styles.headerViewStyle}>
          <Text style={{color: '#fff', fontSize: 25}}>SeeMyGo品牌</Text>
        </View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          renderSectionHeader={this.renderSectionHeader}
        />
      </View>
    )
  }

  renderRow(rowData) {    
    return (
      <TouchableOpacity activeOpacity={0.5}>
        <View style={styles.rowStyle}>
          <Image source={{uri: rowData.icon}} style={styles.rowImageStyle} />
          <Text style={{marginLeft:5}}>{rowData.name}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  renderSectionHeader(sectionData, sectionID) {
    return (
      <View style={styles.sectionHeaderViewStyle}>
        <Text style={{fontSize:14}}>{sectionData}</Text>
      </View>
    )
  }

  componentDidMount() {
    this.loadDataFromJson()
  }
}

const styles = StyleSheet.create({
  outerViewStyle: {
    flex: 1
  },
  headerViewStyle: {
    height: 70,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center'
  },
  rowStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomColor: '#e8e8e8',
    borderBottomWidth: 0.5
  },
  rowImageStyle: {
    width: 40,
    height: 40
  },
  sectionHeaderViewStyle: {
    flexDirection: 'row',
    height: 25,
    paddingLeft: 10,
    backgroundColor: '#e8e8e8',
    alignItems: 'center'
  }
})
