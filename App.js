/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import { View } from 'react-native';
import  Login  from './src/component/Login';
import Cardsection from './src/component/Cardsection';
import firebase from 'firebase';
import Card from './src/component/Card';
import Button from './src/component/Button';

class App extends Component {
  state = {loggedIn:false }
  componentWillMount() {
  firebase.initializeApp({
    apiKey: "AIzaSyD3Qg4Hc2gAaYg6PbGW1beZFT67WNK7zMw",
    authDomain: "school-3051a.firebaseapp.com",
    databaseURL: "https://school-3051a.firebaseio.com",
    projectId: "school-3051a",
    storageBucket: "school-3051a.appspot.com",
    messagingSenderId: "120266050681"
});

firebase.auth().onAuthStateChanged((user) => {
if(user){
this.setState({loggedIn:true});
}
else
this.setState({loggedIn:false});

});
 }


  render() {
    return(
      <View>
        <Login/>
        </View>   
       );
  }
}
export default App;