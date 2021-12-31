import * as React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import AppHeader from './components/AppHeader'
import HomeScreen from './Screens/HomeScreen'
import Covidinindia from './Screens/Covidinindia'
import Covidinworld from './Screens/Covidinindia'
import Vaccinationinworld from './Screens/Vaccinationinworld'
import Vaccinationinindia from './Screens/Vaccinationinindia'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

export default class App extends React.Component {
  render() {
    return (
      <View>
      <HomeScreen/>
      </View>
    );
  }
}

let navigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  Covidinindia: Covidinindia,
  Covidinworld: Covidinworld,
  Vaccinationinindia : Vaccinationinindia,
  Vaccinationinworld: Vaccinationinworld
});


const AppContainer = createAppContainer(navigator);
