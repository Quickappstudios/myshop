import React,{Component} from 'react'
import {View,Text,TouchableOpacity,Image,StyleSheet,Dimensions} from 'react-native';

//Import Images
import sp1 from '../../../../media/temp/sp1.jpeg';
import sp2 from '../../../../media/temp/sp2.jpeg';
import sp3 from '../../../../media/temp/sp3.jpeg';
import sp4 from '../../../../media/temp/sp4.jpeg';






//Collection Component
class Topproducts extends Component{

//Top Products Rendered from Collection
render(){
const {container,titleConatiner,title,body,productContainer,productImage,productName,productPrice} = styles;


  return(
<View style= {container}>
<View style={titleConatiner}>
<Text style={title}>Top Products </Text>
</View>

<View style={body}>

<View style={productContainer}>
<Image source={sp1} style={productImage}/>
<Text style={productName}> Product Name</Text>
<Text style={productPrice}> $400</Text>
</View>


<View style={productContainer}>
<Image source={sp2} style={productImage}/>
<Text style={productName}> Product Name</Text>
<Text style={productPrice}> $600</Text>
</View>




<View style={productContainer}>
<Image source={sp3} style={productImage}/>
<Text style={productName}> Product Name</Text>
<Text style={productPrice}> $400</Text>
</View>


<View style={productContainer}>
<Image source={sp4} style={productImage}/>
<Text style={productName}> Product Name</Text>
<Text style={productPrice}> $600</Text>
</View>





</View>
</View>

  );
}

}

//Width of widow
const {width,height} = Dimensions.get('window');

//height and width of product Image
const productWidth = (width - 60) /2
const productImageHeight = productWidth /361 *452;


//Styles
const styles = StyleSheet.create({


////Product Styles Images 2 Side By Side


container:{
backgroundColor:'white',
margin:10,
shadowColor:'#2e272b',
// shadowOffset:(width:0,height:3),
shadowOpacity:0.2
},

titleConatiner:{
  height:50,
  justifyContent:'center',
  paddingLeft:10,

},


title:{
  color:'#d3d3cf',
  fontSize:20
},

body:{
flexDirection:'row',
justifyContent:'space-around',

//use this to wrap image under another in body container
flexWrap:'wrap'
},


productContainer:{
width:productWidth,
shadowColor:'#2e272b',
shadowOpacity:0.2,
paddingBottom:20,


},



productImage:{

width:productWidth,
height:productImageHeight

},

productName:{
paddingLeft:10,
paddingTop:10,
paddingBottom:10,
fontFamily:'Avenir',
color:'#d3d3cf',
fontWeight:'500'

},


productPrice:{

  paddingLeft:10,
  fontFamily:'Avenir',
  color:'#662f90'

}



})


export default Topproducts
