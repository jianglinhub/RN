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
  WebView
} from 'react-native'

export default class NewsDetail extends Component {
  render() {
    return (
      <WebView
        scalesPageToFit={true}
        source={{uri: this.props.rowData.url.replace('http', 'https')}}
        automaticallyAdjustContentInsets={true}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        dataDetectorTypes={'link', 'phoneNumber'} />
    )
  }
}

const styles = StyleSheet.create({
})
