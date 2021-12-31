import * as React from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader'

export default class Vaccinationinworld extends React.Component {
  render(){
    return(
      <View>
      <text>In World 43.74% are Vaccinated.</text>
        <AppHeader/>
      </View>
    )
  }
}