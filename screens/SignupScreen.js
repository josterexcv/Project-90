import * as React from 'react';
import { View, TextInput, Text, StyleSheet, Image, Number } from 'react-native';

export default class SignupScreen extends React.Component{
    constructor(){
        super();
        this.state={
        phoneNumber:'',
        address:'',
        firstName:'',
        lastName:'',
        username:'',
        password:''
        }

    }
    render(){
        return(
        <View>
            <Text>Signup Screen</Text>
            <TextInput
          style={styles.formTextInput}
          placeholder = {"phoneNumber"}
          maxLength = {15}
          onChangeText={(text)=>{
            this.setState({
              phoneNumber: Number
            })
          }}
        />
        <TextInput
          style={styles.formTextInput}
          placeholder = {"address"}
          maxLength = {8}
          onChangeText={(text)=>{
            this.setState({
              address: text
            })
          }}
        />
        <TextInput
          style={styles.formTextInput}
          placeholder = {"password"}
          maxLength = {8}
          onChangeText={(text)=>{
            this.setState({
              password: text
            })
          }}
        />
        </View>
        );
    }
}