/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React,{Component} from 'react'
 import {View,Text,AppRegistry} from 'react-native';

 import App from './src/components/App';

 export default class myshop extends Component{

 render(){

 return(

 <App/>


 )

 }
}

AppRegistry.registerComponent('myshop', () => myshop);
