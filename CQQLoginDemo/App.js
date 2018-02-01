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
  Image,
  TextInput
} from 'react-native'

var vWidth = require('Dimensions').get('window').width

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        
        {/*头像*/}
        <Image source={require('./img/qq.jpeg')} style={styles.iconStyle} />
        <TextInput placeholder={'请输入用户名'} style={styles.textInputStyle} underlineColorAndroid={'#fff'} />
        <TextInput placeholder={'请输入密码'} secureTextEntry={true} style={styles.textInputStyle} underlineColorAndroid={'#fff'} />
        
        {/*登陆*/}
        <View style={styles.loginBtnStyle}>
          <Text style={{color: '#fff'}}>登陆</Text>
        </View>
        
        {/*设置*/}
        <View style={styles.settingStyle}>
          <Text>无法登陆</Text>
          <Text>新用户</Text>
        </View>
        
        {/*其他的登陆方式*/}
        <View style={styles.otherLoginStyle}>
          <Text>其他的登陆方式：</Text>
          <Image source={require('./img/qq.jpeg')} style={styles.otherImageStyle} />
          <Image source={require('./img/wechat.jpeg')} style={styles.otherImageStyle} />
          <Image source={require('./img/weibo.jpeg')} style={styles.otherImageStyle} />
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    alignItems: 'center'
  },
  iconStyle: {
    marginTop: 50,
    marginBottom: 30,
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#fff'
  },
  textInputStyle: {
    height: 38,
    width: vWidth,
    backgroundColor: '#fff',
    marginBottom: 1,
    textAlign: 'center'
  },
  loginBtnStyle: {
    height: 35,
    width: vWidth,
    backgroundColor: 'green',
    marginTop: 20,
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  settingStyle: {
    flexDirection: 'row',
    width: 350,
    justifyContent: 'space-between'
  },
  otherLoginStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    left: 20
  },
  otherImageStyle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 8
  }
})
