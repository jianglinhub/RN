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
import Dimensions from 'Dimensions'

var vWidth = Dimensions.get('window').width

export default class ScrollImage extends Component {

  static defaultProps = {
    duration: 4000,
    ImageData: []
  }

  state = {
    currentPage: 0,
    title: this.props.ImageData[0] ? this.props.ImageData[0].title : ''
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
          <Text style={styles.titleStyle} numberOfLines={1}>{this.state.title}</Text>
          <View style={{flexDirection:'row'}}>{this.renderPageCircle()}</View>
        </View>
      </View>
    )
  }

  renderAllImage() {
    var allImage = []
    var imgsArr = this.props.ImageData
    for (var i=0; i<imgsArr.length; i++) {
      var imgItem = imgsArr[i]
      allImage.push(
        <Image key={i} source={{uri: imgItem.thumbnail_pic_s.replace('http', 'https')}} style={{width: vWidth, height: 120}} />
      )
    }
    return allImage
  }

  renderPageCircle() {
    var indicatorArr = []
    var style
    var imgsArr = this.props.ImageData
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
    // 水平偏移量
    var offsetX = e.nativeEvent.contentOffset.x
    // 当前页数
    var currentPage = Math.floor(offsetX / vWidth)
    // console.log(currentPage)
    this.setState({
      currentPage: currentPage,
      title: this.props.ImageData[currentPage].title
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
      var imgCount = this.props.ImageData.length

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
ReactMixin.onClass(ScrollImage, TimerMixin)

const styles = StyleSheet.create({
  pageViewStyle: {
    width: vWidth,
    height: 25,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  titleStyle: {
    width: vWidth - 80,
    color: '#fff',
  }
})
