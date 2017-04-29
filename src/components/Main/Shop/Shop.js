import React,{Component} from 'react'
import {View,Text,TouchableOpacity,Dimensions,Image,StyleSheet} from 'react-native';


//Tab navigator
import TabNavigator from 'react-native-tab-navigator';


//Import Pages

import Home from './Home/Home'
import Contact from './Contact/Contact'
import Search from './Search/Search'
import Cart from './Cart/Cart'
import Header from './Header'

//Tabbar iconStyle
import homeIconS from '../../../media/appIcon/home.png';
import homeIcon from '../../../media/appIcon/home0.png';

import CartIconS from '../../../media/appIcon/cart.png';
import CartIcon from '../../../media/appIcon/cart0.png';

import SearchIconS from '../../../media/appIcon/search.png';
import SearchIcon from '../../../media/appIcon/search0.png';

import ContactIconS from '../../../media/appIcon/contact.png';
import ContactIcon from '../../../media/appIcon/contact0.png';


//Dimensions
const {height} = Dimensions.get('window')



class Shop extends Component{

constructor(props){
super(props);
this.state=
{
selectedTab:'home',
types:[],
topProducts:[]

};

}



//Lifecycle api from localhost

//Get Data from http://localhost/api/
componentDidMount() {
        fetch('http://localhost/api/')// eslint-disable-line
        .then(res => res.json())
        .then(resJSON => {
            const { type, product } = resJSON;
            this.setState({ types: type,topProducts:product });
        });
    }





//open menu function
openMenu(){
const { open } = this.props;

open();

}





//Opens Drawer and Shows Tab Bar
render(){

const {iconStyle} = styles;

const {types,selectedTab,topProducts}= this.state

  return(

  <View style={{flex:1}}>
  <Header onOpen={this.openMenu.bind(this)}/>

<TabNavigator>


  <TabNavigator.Item
    selected={selectedTab === 'home'}
    title="Home"
  onPress={() => this.setState({ selectedTab: 'home' })}
  renderIcon={() => <Image source={homeIcon} style={iconStyle} />}
  renderSelectedIcon={() => <Image source={homeIconS} style={iconStyle} />}
  selectedTitleStyle={{ color: '#34B089', fontFamily: 'Avenir' }}
  >
    <Home types={types} topProducts={topProducts}/>

  </TabNavigator.Item>



  <TabNavigator.Item
    selected={selectedTab === 'cart'}
    title="Cart"
  onPress={() => this.setState({ selectedTab: 'cart' })}
  renderIcon={() => <Image source={CartIcon} style={iconStyle} />}
  renderSelectedIcon={() => <Image source={CartIconS} style={iconStyle} />}
  selectedTitleStyle={{ color: '#34B089', fontFamily: 'Avenir' }}
  badgeText="1"
  >
    <Cart />
  </TabNavigator.Item>




  <TabNavigator.Item
    selected={selectedTab === 'search'}
    title="Search"
  onPress={() => this.setState({ selectedTab: 'search' })}
  renderIcon={() => <Image source={SearchIcon}  style={iconStyle} />}
  renderSelectedIcon={() => <Image source={SearchIconS} style={iconStyle} />}
  selectedTitleStyle={{ color: '#34B089', fontFamily: 'Avenir' }}
  >
    <Search />
  </TabNavigator.Item>






  <TabNavigator.Item
    selected={selectedTab === 'contact'}
    title="Contact"
  onPress={() => this.setState({ selectedTab: 'contact' })}
  renderIcon={() => <Image source={ContactIcon} style={iconStyle} />}
  renderSelectedIcon={() => <Image source={ContactIconS} style={iconStyle} />}
  selectedTitleStyle={{ color: '#34B089', fontFamily: 'Avenir' }}
  >
    <Contact />
  </TabNavigator.Item>





</TabNavigator>

</View>


  );
}


}

///Tabar menu bar style
const styles = StyleSheet.create({
    iconStyle: {
        width: 20, height: 20
    }
});;



export default Shop;



// <TouchableOpacity onPress={this.openMenu.bind(this)}>
// <Text>Open Menu</Text>
// </TouchableOpacity>
