import * as React from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader'

class HomeScreen extends React.Component {

  dislikePressed(){
  var dislike= db.ref('Rating/' + '/')
  dislike.update({
    'dislikePressed':1
  })
}

likePressed(){
  var like= db.ref('Rating/' + '/')
  like.update({
    'likePressed':1
  })
}

   changeScreen = (screen)  => {
    this.props.navigation.navigate(screen);
  }
  render(){
    return(
      <View style = {styles.viewStyle}>
      <AppHeader/>
       <TouchableOpacity style={styles.button}
        onPress={() => {this.changeScreen(Covidinworld)}}>
        <Text style = {styles.buttonText}>
        Covid in World
        </Text>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.button} 
        onPress={() => {this.changeScreen(Covidinindia)}}>
        <Text style = {styles.buttonText}>
        Covid in India
        </Text>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.buttont} 
        onPress={() => {this.changeScreen(Vaccinationinworld)}}>
        <Text style = {styles.buttonText}>
        Vaccination in World
        </Text>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.buttont}
        onPress={() => {this.changeScreen(Vaccinationinindia)}}>
        <Text style = {styles.buttonText}>
        Vaccination in India
        </Text>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.buttonl}
        onPress ={this.likePressed}>
        <Text style = {styles.buttonText}>
        like
        </Text>
        </TouchableOpacity>
        
        <TouchableOpacity style = {styles.buttonl}
        onPress ={this.dislikePressed}>
        <Text style = {styles.buttonText}>
        dislike
        </Text>
        </TouchableOpacity>

      </View>)
  }
  }

const styles = StyleSheet.create({
  viewStyle: {
    alignItems: "center"
  },
  
  button : {
    justifyContent:'center',
    alignSelf:'center',
    borderWidth:2,
    borderRadius:5,
    marginTop:25,
    width:200,
    height:100,
    backgroundColor: 'red'
  },

  buttont : {
    justifyContent:'center',
    alignSelf:'center',
    borderWidth:2,
    borderRadius:5,
    marginTop:25,
    width:200,
    height:100,
    backgroundColor: 'green'
  },

  buttonl : {
    justifyContent:'center',
    alignSelf:'center',
    borderWidth:5,
    borderRadius:450,
    marginTop:25,
    width:100,
    height:100,
    backgroundColor: 'blue'
  },

  buttonText:{
    fontSize:30,
    textAlign:'center',
    color:'white'
  }
})

export default HomeScreen;