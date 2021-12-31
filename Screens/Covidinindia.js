import * as React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader'

export default class Covidinindia extends React.Component {
  render(){
    return(
      <View>
      <Text style={styles.textStyle}>
            Total Cases : 3,34,78,419
            Active Cases : 3,18,419
            Deaths : 4,45,165
            Recovered : 3,27,15,105</Text>
        <AppHeader/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    marginBottom: 15,
    fontWeight: 'bold',
  }});