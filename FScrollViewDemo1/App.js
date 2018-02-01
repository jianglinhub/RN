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
  ScrollView,
  Image
} from 'react-native'

import ReactMixin from 'react-mixin'
import TimerMixin from 'react-timer-mixin'
import ImageData from './ImageData.json'
import Dimensions from 'Dimensions'

var vWidth = Dimensions.get('window').width

export default class App extends Component {

  static defaultProps = {
    duration: 4000
  }

  state = {
    currentPage: 0
  }

  componentDidMount() {
    // 启动定时器
    this.startTimer()
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          ref="scrollView"
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          onMomentumScrollEnd={(e) => this.onAnimationEnd(e)}
          // 开始拖拽
          onScrollBeginDrag={() => this.onScrollBeginDrag()}
          // 停止拖拽
          onScrollEndDrag={() => this.onScrollEndDrag()}
        >
          {this.renderAllImage()}
        </ScrollView>

        <View style={styles.pageViewStyle}>
          {this.renderPageCircle()}
        </View>
      </View>
    )
  }

  renderAllImage() {
    var allImage = []
    var imgsArr = ImageData.data
    for (var i=0; i<imgsArr.length; i++) {
      var imgItem = imgsArr[i]
      allImage.push(
        <Image key={i} source={{uri: imgItem.img}} style={{width: vWidth, height: 120}} />
      )
    }
    return allImage
  }

  renderPageCircle() {
    var indicatorArr = []
    var style
    var imgsArr = ImageData.data
    for (var i=0; i<imgsArr.length; i++) {
      style = (i == this.state.currentPage) ? {color: 'orange'} : {color: '#fff'}
      indicatorArr.push(
        <Text key={i} style={[{fontSize: 25}, style]}>&bull;</Text>
      )
    }
    return indicatorArr
  }

  // 重写原生方法
  onAnimationEnd(e) {
    console.log('e:===>', e)
    // 水平偏移量
    var offsetX = e.nativeEvent.contentOffset.x
    // 当前页数
    var currentPage = Math.floor(offsetX / vWidth)
    // console.log(currentPage)
    this.setState({
      currentPage: currentPage
    })
  }

  // 开始拖拽
  onScrollBeginDrag() {
    console.log('开始拖拽')
    clearInterval(this.timer)
  }

  // 停止拖拽
  onScrollEndDrag() {
    console.log('停止拖拽')
    this.startTimer()
  }

  // 开启定时器
  startTimer() {
    var scrollView = this.refs.scrollView
    // 添加定时器
    this.timer = this.setInterval(() => {

      var activePage = 0
      var imgCount = ImageData.data.length

      if ((this.state.currentPage + 1) >= imgCount) {
        activePage = 0
      } else {
        activePage = this.state.currentPage + 1
      }

      this.setState({
        currentPage: activePage
      })

      var offsetX = activePage * vWidth
      scrollView.scrollTo({x: offsetX, y: 0, animated: true})

    }, this.props.duration)
  }
}

// 注册定时器
ReactMixin.onClass(App, TimerMixin)

const styles = StyleSheet.create({
  container: {
    marginTop: 5
  },
  pageViewStyle: {
    width: vWidth,
    height: 25,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
