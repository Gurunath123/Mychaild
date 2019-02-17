import React, {Component} from 'react';
import { View, Text, Dimensions } from 'react-native';
import Image from 'react-native-scalable-image';
import Button from './Button';
import Input from './Input';
import Card from './Card';
import Cardsection from './Cardsection';
import firebase from 'firebase/app';
const image = require('../../images/school.jpg');

class Login extends Component
{
    constructor(props){
        super(props);
    
        this.state = { mobileno: '' ,
        password: '',
        error: '',
      loading: false};
      }

      onButtonPress(){
        const { mobileno,password }=this.state;
        this.setState({error: '',loading:true});
        console.log('huyhhuybuyb ');
      
      firebase.auth().signInWithPhoneNumber(mobileno, firebase.auth.PhoneAuthProvider)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
       firebase.auth().createUserWithEmailAndPassword(mobileno, password)
       .then(this.onLoginSuccess.bind(this))
       .catch(this.onLoginFail.bind(this)); 
         
       });
      
      }

      onLoginFail(){
        this.setState({ error: 'Authentication Failed',loading: false });
      }
      onLoginSuccess(){
      this.setState({
      mobileno: '',
      password: '',
      loading: false,
      error: ''
      });
    }

    renderButton(){
        if(this.state.loading)
        {
          return (
              <Text>Done</Text>
          );
        }
        return (
      <Button onPress={this.onButtonPress.bind(this)}>Login</Button>
        );
      }

    render(){
        return(
       <Card>
           <Cardsection style={{height:400}} >
            <Image
            width={Dimensions.get('window').width - 120}
            source ={ require('../../images/School3.png')} 
            style ={ styles.imagestyle }/>
           </Cardsection>

           <Cardsection>
           <Input
           placeholder="XXXXXXXXX"
           label="Mobile No"/>
           </Cardsection>

           <Cardsection>
           <Input
           secureTextEntry
           placeholder="password"
           label="Password"/>
           </Cardsection>

           <Cardsection>
           {this.renderButton()}
            </Cardsection>
       </Card>
    );
 }
}

const styles ={
    imagestyle:{
        flex: 1,
       marginTop:30,
       marginLeft:30,
       marginRight:30,
       marginBottom:30     
       

    }
}

export default Login ;