import React from 'react';
import { View, Text,Image } from 'react-native';
import Button from './Button';
import Input from './Input';
import Card from './Card';
import Cardsection from './Cardsection';
const image = require('../../images/school.jpg');

const Login = () =>
{
    return(
       <Card>
           <Cardsection>
            <Image
            source ={ require('../../images/school.jpg')} 
            style ={ styles.imagestyle }/>
           </Cardsection>
           <Cardsection>
               <Input/>
           </Cardsection>
           <Cardsection>
               <Button/>
               
           </Cardsection>
       </Card>
    );
}

const styles ={
    imagestyle:{
        height: 300,
    flex: 1,
    width: null
    }
}

export default Login ;