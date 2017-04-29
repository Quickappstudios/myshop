import React,{Component} from 'react'
import {View,Text,TouchableOpacity,Navigator,ScrollView} from 'react-native';

//Collection Component
import Collection from './Collection';
import Category from './Category';
// import Topproducts from './Topproducts'
import Topproducts from './Topproducts';

class HomeView extends Component{

render(){
const{ types,topProducts } = this.props;
  return(
<View>
<ScrollView>
<Collection/>
<Category navigator={this.props.navigator} types={types}/>
<Topproducts navigator={this.props.navigator} topProducts={topProducts}/>
</ScrollView>
</View>


  );
}

}


export default HomeView
