import React,{Component} from 'react'
import {View,Text,TouchableOpacity} from 'react-native';

export default class OrderHistory extends Component{


  gobackMain(){

  const {navigator} = this.props;
  navigator.pop({ name:'MAIN'});

  }
render(){

return(

<View style={{flex:1,backgroundColor:'yellow'}}>

<Text>OrderHistory</Text>
<TouchableOpacity onPress={this.gobackMain.bind(this)}>
<Text> Go back to main</Text>
</TouchableOpacity>
</View>



)


}

}
