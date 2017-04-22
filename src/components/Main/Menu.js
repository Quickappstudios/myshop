import React,{ Component } from 'react'
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';

class Menu extends Component{

  //Push to Screeens

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
        render() {

          const {menuContainer,menuTitle,menuButton} = styles;
            return (
                <View style={{ flex: 1, backgroundColor: 'purple' }}>
                <View style={menuContainer}>
                    <Text style={menuTitle}> Wear a Dress</Text>
                    <TouchableOpacity onPress={this.gotoAuthentication.bind(this)}>
                        <Text style={menuButton}>Go to Authentication</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.gotoChangeInfo.bind(this)}>
                        <Text style={menuButton}>Go to ChangeInfo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.gotoOrderHistory.bind(this)}>
                        <Text style={menuButton}>Go to OrderHistory</Text>
                    </TouchableOpacity>

                    </View>
                </View>
            );
        }
    }

    const styles = StyleSheet.create({

      menuContainer:{
      paddingTop:50

    },

  menuTitle:{

    color:'white',
    fontSize:25,
    fontFamily:'Avenir',
    lineHeight:30,
    textAlign:'center',
    paddingBottom:30


  },

menuButton:{

  color:'white',
  fontSize:18,
  fontFamily:'Avenir',
  lineHeight:30,
  textAlign:'center'
}


    })

export default Menu;
