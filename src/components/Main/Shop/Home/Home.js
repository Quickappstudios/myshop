import React,{Component} from 'react'
import {View,Text,TouchableOpacity,ScrollView} from 'react-native';


//Collection Component
import Collection from './Collection'
import Category from './Category'


class Home extends Component{


  gotoAuthentication(){

  const {navigator} = this.props;
  navigator.push({ name:'AUTHENTICATION'});
  console.log('pressed')

  }


//Card Rendered from Collection
render(){
const { navigator } = this.props;
  return(
    <ScrollView>
  
<View style={{flex:1,backgroundColor:'#D4D3D0'}}>
<Collection/>
<Category/>

</View>
</ScrollView>


  );
}

}


export default Home
