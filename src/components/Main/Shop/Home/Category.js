import React,{Component} from 'react'
import {View,Text,TouchableOpacity,StyleSheet,Dimensions,Image} from 'react-native';
import Swiper from 'react-native-swiper';


//import Image Variables
// import littleIcon from '../../../../media/temp/little.jpg';
// import maxiIcon from '../../../../media/temp/maxi.jpg';
// import partyIcon from '../../../../media/temp/party.jpg';

const {width, height} = Dimensions.get('window');
const url = 'http://localhost/api/images/type/';




class Category extends Component{


//we go to ListProduct Screen
  gotoListProduct(){
  const { navigator } = this.props;
  navigator.push({name:'LIST_PRODUCT'});

  }

render(){
const {wrapper,textStyle,imageStyle,cateTitle} = styles;

//variable types we set
   const { types } = this.props;


return(
  <View style={wrapper}>
                  <View style={{ justifyContent: 'center', flex: 1, paddingTop: 5 }}>
                      <Text style={textStyle} >LIST OF CATEGORY</Text>
                  </View>

                  <View style={{ justifyContent: 'flex-end', flex: 4 }}>
                      <Swiper showsPagination width={imageWidth} height={imageHeight} >
                      { types.map(e => (
                       <TouchableOpacity onPress={this.gotoListProduct.bind(this)} key={e.id}>
                           <Image source={{ uri: `${url}${e.image}` }} style={imageStyle}>
                               <Text style={cateTitle}>{e.name}</Text>
                           </Image>
                       </TouchableOpacity>
                   )) }


             </Swiper>
                  </View>
              </View>

  );
}

}

//933 x465 for height and width of card

const imageWidth = width -20;
const imageHeight = (imageWidth /933) * 465


const styles = StyleSheet.create({

wrapper:{
height:height * 0.33,
backgroundColor: 'white',
margin:10,
shadowColor:'#2E272B',
justifyContent: 'space-between',
shadowOffset: {width:0,height:3},
shadowOpacity:0.2,
padding:10,
paddingTop:0

},

imageStyle:{
  height:imageHeight,
  width: imageWidth

},

textStyle:{
  fontSize: 20,
  color: '#AFAEAF'

},


cateTitle: {
        fontSize: 20,
        fontFamily: 'Avenir',
        color: '#9A9A9A',
        textAlign:'center',
        paddingTop:50
    }






});


export default Category
