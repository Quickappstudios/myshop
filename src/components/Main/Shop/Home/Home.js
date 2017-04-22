import React,{Component} from 'react'
import {View,Text,TouchableOpacity} from 'react-native';


class Home extends Component{


  gotoAuthentication(){

  const {navigator} = this.props;
  navigator.push({ name:'AUTHENTICATION'});
  console.log('pressed')

  }



render(){
const { navigator } = this.props;
  return(
<View style={{flex:1,backgroundColor:'red'}}>
<Text> Home</Text>

<TouchableOpacity onPress={this.gotoAuthentication.bind(this)}>
<Text>Authentication</Text>
</TouchableOpacity>

</View>

  );
}

}


export default Home
