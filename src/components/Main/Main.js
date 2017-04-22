import React,{ Component } from 'react';
// import {View,Text,TouchableOpacity} from 'react-native';

//Drawer
import Drawer from 'react-native-drawer';
//Main Menu
import Menu from './Menu';
//Shop
import Shop from './Shop/Shop';



export default class Main extends Component{

//Pushes to our Authentication Screen



  //SideMenu Functions

  closeControlPanel = () => {
    this.drawer.close();
  };
  openControlPanel = () => {
    this.drawer.open();
  };



///Render SideMenu Pushing Screens const { navigator } = this.props;
  render() {
        const { navigator } = this.props;
        return (
            <Drawer
                ref={(ref) => { this.drawer = ref; }}
                content={<Menu navigator={navigator} />}
                openDrawerOffset={0.4}
                tapToClose
            >
                <Shop open={this.openControlPanel.bind(this)} />
            </Drawer>
        );
    }
}
