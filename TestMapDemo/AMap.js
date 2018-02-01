import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { requireNativeComponent, View, processColor } from 'react-native'

const AMapView = requireNativeComponent('AMapView', {
  propTypes: {
    ...View.propTypes
  }
})

export default class AMap extends Component {

  static propTypes = {
    ...View.propTypes
  }
  render() {
    return (
      <AMap />
    )
  }
}