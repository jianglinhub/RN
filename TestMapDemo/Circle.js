import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { requireNativeComponent, View, processColor } from 'react-native'

const MCircle = requireNativeComponent('MCircle', {
  propTypes: {
    radius: PropTypes.number,
    color: PropTypes.number,
    ...View.propTypes
  }
})

export default class Circle extends Component {

  static propTypes = {
    radius: PropTypes.number,
    color: PropTypes.string,
    ...View.propTypes
  }

  render() {
    const { style, radius, color } = this.props

    return (
      <MCircle
        radius={radius}
        color={processColor(color)}
        style={style}
      />
    )
  }
}