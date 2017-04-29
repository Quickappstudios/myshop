import React,{ Component } from 'react'
import {View,Text,TouchableOpacity,StyleSheet,Image} from 'react-native';

import profileIcon from '../../media/temp/profile.png';

class Menu extends Component{

//constructor for state if loggin is true we loggin if false we get login screen

constructor(props){

super(props);
this.state = {isLogedIn:true};

}




  //
  ///Push to Screeens For Navigation menu
  ///

     gotoAuthentication() {
        const { navigator } = this.props;
        navigator.push({ name: 'AUTHENTICATION' });
    }

    gotoChangeInfo() {
        const { navigator } = this.props;
        navigator.push({ name: 'CHANGE_INFO' });
    }

    gotoOrderHistory() {
        const { navigator } = this.props;
        navigator.push({ name: 'ORDER_HISTORY' });
    }




    //Navigation Drawer Component//
     //Array of Objects

        render() {

          const {menuContainer,menuTitle,menuText,menuButton,profile,btnstyle,btnText,buttonContainer,loginContainer} = styles;

         //SignIn Button
          const logoutJSX =(
                <View style={{ flex: 1 }}>
            <TouchableOpacity style={btnstyle} onPress={this.gotoAuthentication.bind(this)}>
                <Text style={menuText}>Sign In</Text>
            </TouchableOpacity>
           </View>

         );

        //when we are logged in we see this
         const loginJSX=(
          <View style={loginContainer}>
       <Text style={menuTitle}> John Tyrrell</Text>
          <View>

  <TouchableOpacity style={btnstyle} onPress={this.gotoOrderHistory.bind(this)}>
   <Text style={menuText}>Order History</Text>
    </TouchableOpacity>

    <TouchableOpacity  style={btnstyle} onPress={this.gotoChangeInfo.bind(this)}>
    <Text style={menuButton}>ChangeInfo</Text>
    </TouchableOpacity >


    <TouchableOpacity style={btnstyle} >
    <Text style={menuButton}>Sign Out</Text>
    </TouchableOpacity>
    </View>

  <View/>

  </View>


);



//check if logged in we see sign in if false if true we see all buttons
     const mainJSX = this.state.isLogedIn ? loginJSX: logoutJSX;

return (

<View style={menuContainer}>
 <Image source={profileIcon} style={profile}/>

  {mainJSX}

   </View>


            );
        }
    }


    ///Menu Stylesheet

    const styles = StyleSheet.create({
     ///Profile Container

      menuContainer:{
      flex:1,
      backgroundColor:'purple',
      borderColor:'white',
      alignItems:'center'
      },

  ///Profile Image Sidemenu
    profile:{
      width:150,
      height:150,
      borderRadius:50,
      marginBottom:30,
      marginVertical:30


    },

///side menu title
  menuTitle:{

    color:'white',
    fontSize:25,
    fontFamily:'Avenir',
    lineHeight:30,
    textAlign:'center',
    paddingBottom:30
},


buttonContainer:{
  backgroundColor:'green'
},

//button style For Menu
btnstyle:{
height:50,
backgroundColor:'white',
borderRadius:5,
//stretches width of button
paddingHorizontal:40,
marginBottom:20,
paddingTop:15
},

//Button TextColor
btnText:{
color:'#34B089',
fontSize:20
},


//Login container

loginContainer:{
flex:1,
justifyContent:'space-between',
alignItems:'center'
}


    })

export default Menu;
