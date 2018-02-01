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
  DeviceEventEmitter
} from 'react-native'
import { ToastAndroid, AMapLocation } from './NativeModules'
import Circle from './Circle'
import AMap from './AMap'

export default class App extends Component {

  startLocation() {
    AMapLocation.startLocation()
  }

  destroy() {
    AMapLocation.destroy()
  }

  addEventListener(handler) {
    const listener = DeviceEventEmitter.addListener(
      'onLocationChanged',
      handler
    )
    return listener
  }

  _onLocationChanged(data) {
    console.log('address:', data.address)
  }

  componentDidMount() {
    // this.listener = this.addEventListener(this._onLocationChanged);
    // this.startLocation()
    // ToastAndroid.show('This is an android toast!', ToastAndroid.SHORT)
  }

  render() {
    return (
      <View>
        {/*<Circle
          style={{width: 100, height: 100}} 
          radius={50}
          color="#25c5f7"
        />*/}
        <AMap
          style={{flex: 1}}
        />
      </View>
    )
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
