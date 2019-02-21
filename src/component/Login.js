import React, {Component} from 'react';
import { View, Text, Dimensions } from 'react-native';
import Image from 'react-native-scalable-image';
import Button from './Button';
import Input from './Input';
import Card from './Card';
import Cardsection from './Cardsection';
import Spinner from './Spinner';
import firebase from 'firebase/app';
const image = require('../../images/school.jpg');

class Login extends Component
{
  constructor(props){
    super(props);

    this.state = { email: '' ,
    password: '',
    error: '',
  loading: false};
  }
  

onButtonPress(){
  const { email,password }=this.state;
  console.log("check",this.state);
  this.setState({error: '',loading:true});
 

/**firebase.auth()
.signInWithEmailAndPassword(email, password) 
.then((res) => {
  console.log("respo",res);
  
})
.catch(() => {
 firebase.auth().createUserWithEmailAndPassword(email, password)
 
 .then((res) => {
  console.log("createUserWithEmailAndPassword------------- ",res);
  
})
 .catch((err) => {
  console.log("catch",err);
  
 }); 
   
 });**/

 firebase.auth().signInWithEmailAndPassword(email, password)
.then(this.onLoginSuccess.bind(this))
.catch(() => {
 firebase.auth().createUserWithEmailAndPassword(email, password)
 .then(this.onLoginSuccess.bind(this))
 .catch(this.onLoginFail.bind(this)); 
})

}
onLoginFail(){
  console.log('FAILED');
  this.setState({ error: 'Authentication Failed',loading: false });
}
onLoginSuccess(){
this.setState({
email: '',
password: '',
loading: false,
error: ''
});


}
renderButton(){
  if(this.state.loading)
  {
  console.log("email1", this.state);
    return <Spinner size="small"/>;
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
           placeholder="user@gmail.com"
           label="Email-id"
           value={this.state.email}
           onChangeText={email => this.setState({ email })}
           />
           </Cardsection>
          
 

           <Cardsection>
           <Input
           secureTextEntry
           placeholder="password"
           label="Password"
           value={this.state.password}
           onChangeText={password => this.setState({ password })}
           />
           </Cardsection>

           <Text style={styles.errorTextStyle} style={{ height:100, width:100 }}>
    {this.state.error}
    </Text>

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
      },
      errorTextStyle: {
        fontSize: 20,
        alignItems: 'center',
        color: 'red'
      }
}

export default Login ;