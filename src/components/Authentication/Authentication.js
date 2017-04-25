import React,{Component} from 'react'
import {View,Text,TouchableOpacity,StyleSheet,Image,TextInput} from 'react-native';

//import Image
import icBack from'../../media/appIcon/back_white.png';
import icLogo from '../../media/appIcon/ic_logo.png';

export default class Authentication extends Component{

///hide signupbutton

constructor(props){
  super(props);
  this.state={isSignIn:false}
}


signIn(){
this.setState({isSignIn:true})


}





goBackToMain(){

  const {navigator} = this.props;
  navigator.pop({ name:'MAIN'});

}


render(){

const {container,row,titleStyle,iconStyle,controlStyle,signInStyle,signUpStyle,inputStyle,bigButton,bigButtonText,
activeStyle,inactiveStyle

} = styles;


const{isSignIn} = this.state;
// const mainJSX = this.state.isSignIn ? signInJSX: signUpJSX;


return(

<View style={container}>

<View style={row}>

<TouchableOpacity onPress={this.goBackToMain.bind(this)}>
<Image source={icBack} style ={iconStyle} />
</TouchableOpacity>

<Text style={titleStyle}> Wearing a Dress</Text>

<Image source={icLogo} style ={iconStyle} />

</View>

<View>
<TextInput style={inputStyle}
placeholder="Enter your name"
/>

<TextInput style={inputStyle}
placeholder="Enter your Email"
/>

<TextInput style={inputStyle}
placeholder="Enter your Password"
/>

<TextInput style={inputStyle}
placeholder="Re-enter your Password"
/>


<TouchableOpacity style={bigButton}>
<Text style={bigButtonText}>Sign In Now</Text>
</TouchableOpacity>


</View>



<View style={controlStyle}>
<TouchableOpacity style={signInStyle} onPress={this.signIn.bind(this)}>
<Text style={activeStyle}> Sign In</Text>
</TouchableOpacity>

<TouchableOpacity style={signUpStyle}>
<Text style={inactiveStyle}> Sign Up</Text>
</TouchableOpacity>
</View>



<View>


</View>


</View>

)


}

}



///Login Screen Styles

const styles = StyleSheet.create({
container:{
  flex:1,
  backgroundColor:'purple',
  padding:20,
  justifyContent:'space-between'
},

row:{
flexDirection:'row',
justifyContent:'space-between',
alignItems:'center'

},

titleStyle:{
  color:'white',
  fontFamily:'Avenir',
  fontSize:30
},

iconStyle:{

  width:30,
  height:30
},



///Button Signin and Sign Up Styles

controlStyle:{
flexDirection:'row',
  width:300,
},

signInStyle:{

backgroundColor:'white',
alignItems:'center',
paddingVertical:20,
flex:1,
borderBottomLeftRadius:20,
borderTopLeftRadius:20,
marginRight:1

},

signUpStyle:{

backgroundColor:'white',
alignItems:'center',
paddingVertical:20,
flex:1,
borderBottomRightRadius:20,
borderTopRightRadius:20,
marginRight:1
},



//Text Input Styles

inputStyle:{
height:50,
backgroundColor:'white',
marginBottom:10,
borderRadius:20,
paddingLeft:30


},


//Button bigButton

bigButton:{
height:50,
borderRadius:20,
borderWidth:1,
borderColor:'white',
alignItems:'center',
justifyContent:'center'

},

activeStyle:{
color:'#3FAF61'

},

inactiveStyle:{
color:'#d7d7d7'

},


bigButtonText:{
color:'white',
fontSize:18

}

})
