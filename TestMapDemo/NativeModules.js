import { NativeModules } from 'react-native'

const ToastAndroid = NativeModules.ToastAndroid
const AMapLocation = NativeModules.AMapLocation

module.exports = {
  ToastAndroid,
  AMapLocation
}