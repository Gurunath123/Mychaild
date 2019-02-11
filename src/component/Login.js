import React from 'react';
import { View, Text } from 'react-native';
import Button from './Button';
import Input from './Input';

const Login = () =>
{
    return(
        <View>
            <Text>Username</Text>
        <Input/>

        <Text>Password</Text>
        <Input/>
    
        </View>
    );
}

export default Login ;