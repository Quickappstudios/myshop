

///List Products


import React,{Component} from 'react'
import {View,Text,TouchableOpacity,Navigator,ScrollView,Image,StyleSheet} from 'react-native';

//import Images
import  backList from '../../../../media/appIcon/backList.png'
import  sp1 from '../../../../media/temp/sp1.jpeg'

export default class ListProduct extends Component{


//function go backList

gotoHome(){
const { navigator } = this.props;
navigator.pop({name:'HOME_VIEW'});

}

gotoDetails(){

  const {navigator} = this.props;
  navigator.push({name:'ProductDetail'})
}




  render(){


//style variables
const{ container,wrapper,header,backStyle,partyTitle,productContainer,productInfo,lastRowInfo,imageThumb,txtName,txtPrice,txtMaterial,txtDetail}= styles
    return(

<View style={container}>

<ScrollView style={wrapper}>

<View style={header}>
<TouchableOpacity onPress={this.gotoHome.bind(this)}>
<Image source={backList} style={backStyle}/>
</TouchableOpacity>

<Text style={partyTitle}>Party Dress </Text>
<View style={{width:10}}/>
</View>






<View style={productContainer}>

<Image source={sp1} style={imageThumb}/>

<View style={productInfo}>
<Text style={txtName}>Lace Sleeve Si</Text>
<Text style={txtPrice}>$117</Text>
<Text style={txtMaterial}>Material Silk</Text>

<View style={lastRowInfo}>
<Text>Color Royal Blue </Text>

<TouchableOpacity onPress={this.gotoDetails.bind(this)}>
<Text style={txtDetail}>Show Detail</Text>

</TouchableOpacity>


</View>
</View>




</View>





</ScrollView>

</View>




    );
  }
}


styles = StyleSheet.create({
//Background Color of Screen
container:{
  flex:1,
  backgroundColor:'#DBDBD8'
},


header:{

  height:50,
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center',
  padding:5

},

//Wrapper of card in ScrollView
wrapper:{

backgroundColor:'white',
//shadow card effect
shadowColor:'#2e272b',
shadowOffset:{width:0,height:3},
shadowOpacity:0.2,
margin:10
},




//back button image
backStyle:{
  width:30,
  height:30,
  marginTop:5
},

partyTitle:{
fontSize:20,
fontFamily:'avenir',
color:'purple'

},


//ListView StyleSheet

productContainer:{
  flexDirection:'row',
padding:10,
  paddingVertical:10,
  borderTopColor:'#f0f0f0',
  borderBottomColor:'#fff',
  borderLeftColor:'#fff',
  borderRightColor:'#fff',
borderWidth:1
},


productInfo:{

justifyContent:'space-between',
marginLeft:15,


},

imageThumb:{
  width:90,
  //height image is 452x361 we add 70 all around
  height:(90 *452) / 361
},


lastRowInfo:{

  flexDirection:'row'
},


txtName:{
  fontFamily:'avenir',
  fontSize:18,
  color:'grey'

},


txtPrice:{
fontFamily:'avenir',
fontSize:14,
color:'purple'

},


txtMaterial:{
  fontFamily:'avenir',
  fontSize:14,
  color:'black'


},

txtDetail:{
  fontFamily:'avenir',
  fontSize:12,
  color:'purple'

}


});
