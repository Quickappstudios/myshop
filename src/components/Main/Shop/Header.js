import React,{Component} from 'react'
import {View,Text,TextInput,TouchableOpacity,Dimensions,Image,StyleSheet} from 'react-native';

//Import Image assets
import icLogo from '../../../media/appIcon/ic_logo.png';
import icMenu from '../../../media/appIcon/ic_menu.png';


const{height} = Dimensions.get('window');

 class Header extends Component{

//Rendered Variable for styling
render(){
const {wrapper,row1,textInput,iconStyle,textHeading} = styles;

  return(
<View style={wrapper}>
<View style={row1}>

<TouchableOpacity onPress={this.props.onOpen}>
<Image  source={icMenu} style={iconStyle} />
</TouchableOpacity>

<Text style={textHeading}>Wearing a Dress </Text>
<Image  source={icLogo} style={iconStyle}/>

</View>

<TextInput
style={textInput}
placeholder="What do you want to buy??"
/>
</View>

  );
}

}

//Styles
const styles= StyleSheet.create({
wrapper:
{height:height /8, backgroundColor:'purple',padding:10,justifyContent:'space-around' },

row1:{flexDirection:'row', justifyContent:'space-between' },
textInput:{height:height / 23,backgroundColor:'white',paddingLeft:10},
iconStyle:{width:30,height:30},
textHeading:{color:'white',fontSize:20, fontFamily:'Avenir'}

});


export default Header
