
//LIst Details

import React,{Component} from 'react'
import {View,Text,StyleSheet} from 'react-native';


export default class ProductDetail extends Component{

  render(){

    return(

<View style={{flex:1, backgroundColor:'#e3e2e0'}}>
<View style={styles.wrapper}>
<Text>Details Screen </Text>

</View>



</View>


    );

}
}



//Styles Details
const styles = StyleSheet.create({

wrapper:{

  backgroundColor:'white',
  margin:10,

  //shadow styles
  shadowColor:'#2e2728',
  // shadowOffset:{width:0, height:3},
  shadowOpacity:0.2,

}


})
