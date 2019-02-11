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
import Card from './src/component/Card';
import Button from './src/component/Button';

class App extends Component {
  render() {
    return(
      <View>
        <Login/>
        </View>   
       );
  }
}
export default App;