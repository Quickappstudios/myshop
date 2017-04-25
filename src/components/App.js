import React,{Component} from 'react'
import {View,Text,StatusBar,Navigator} from 'react-native';

//Drawer
import Drawer from 'react-native-drawer';

//Import Main Pages
import Authentication from './Authentication/Authentication';
import ChangeInfo from './ChangeInfo/ChangeInfo';
import Main from './Main/Main';
import OrderHistory from './OrderHistory/OrderHistory';

//Hides Statusbar
StatusBar.setHidden(true);


export default class App extends Component{

///Navigator Main Screen Route
render(){

return(

<Navigator
initialRoute={{name:'MAIN' }}
renderScene={(route,navigator) => {

switch (route.name){


case 'MAIN': return <Main navigator={navigator} />;
case 'CHANGE_INFO': return <ChangeInfo navigator={navigator} />;
case 'AUTHENTICATION': return <Authentication navigator={navigator} />;
case 'MENU': return <Menu navigator={navigator} />;
default: return <OrderHistory navigator={navigator} />;

}
}}


//Screen Transitions
configureScene={route => {

  if (route.name === 'AUTHENTICATION')
//on forward
  return Navigator.SceneConfigs.FloatFromRight
  //on back Transition
   return Navigator.SceneConfigs.FloatFromLeft;

}}

/>

);


}

}
