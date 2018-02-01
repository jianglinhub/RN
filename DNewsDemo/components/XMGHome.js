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

import axios from 'axios'
import ScrollImage from './XMGScrollImage'
import Dimensions from 'Dimensions'
import NewsDetail from './XMGNewsDetail'

let vWidth = Dimensions.get('window').width

export default class Home extends Component {

  static defaultProps = {
    url_api: 'https://v.juhe.cn/toutiao/index?type=top&key=bd7696cf89360033a1dc7cf1fbbc3d54'
  }

  constructor(props) {
    super(props)
    this.state = {
      headerDataArr: [],
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      })
    }
  }

  render() {
    return (
      <ListView 
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)}
        renderHeader={() => this.renderHeader()} />
    )
  }

  renderRow(rowData) {
    return (
      <TouchableOpacity
        activeopacity={0.5}
        onPress={() => this.pushToNewsDetail(rowData)}>
        <View style={styles.cellViewStyle}>
          <Image source={{uri: rowData.thumbnail_pic_s.replace('http', 'https')}} style={styles.imgStyle} />
          <View style={styles.rightViewStyle}>
            <Text style={styles.titleStyle} numberOfLines={2}>{rowData.title}</Text>
            <Text style={styles.subTitleStyle} numberOfLines={2}>{rowData.title}</Text>
            <Text style={styles.flowTitleStyle}>40跟帖</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  pushToNewsDetail(rowData) {
    this.props.navigator.push({
      component: NewsDetail,
      title: rowData.title,
      passProps: {rowData}
    })
  }

  renderHeader() {
    if (this.state.headerDataArr.length === 0) return
    return (
      <ScrollImage
        ImageData={this.state.headerDataArr} />
    )
  }

  componentDidMount() {
    this.loadDataFromNet()
  }

  // 请求网络数据
  loadDataFromNet() {
    axios.get(this.props.url_api).then((res) => {
      if (res.data.error_code === 0) {
        let headerData = []
        for (let i=0; i<5; i++) {
          headerData.push(res.data.result.data[i])
        }
        this.setState({
          headerDataArr: headerData,
          dataSource: this.state.dataSource.cloneWithRows(res.data.result.data)
        })
      }
    })
  }
}

const styles = StyleSheet.create({
  cellViewStyle: {
    flexDirection: 'row',
    padding: 10,
    borderBottomColor: '#e8e8e8',
    borderBottomWidth: 0.5
  },
  imgStyle: {
    width: 90,
    height: 90
  },
  rightViewStyle: {
    width: 260,
    marginLeft: 8
  },
  titleStyle: {
    width: vWidth - 100,
    marginBottom: 5,
    fontSize: 16
  },
  subTitleStyle: {
    width: vWidth - 100,
    color: 'gray',
    letterSpacing: 1
  },
  flowTitleStyle: {
    position: 'absolute',
    right: 10,
    bottom: 0,
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 3,
    color: 'gray'
  }
})
