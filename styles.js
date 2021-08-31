import { ScaledSheet } from "react-native-size-matters";
import { Dimensions } from "react-native";
const {width} = Dimensions.get('window')
const imageDim= width
const styles =ScaledSheet.create({
 HeaderText:{
     marginTop:'10@vs',
     fontSize:'20@s',
     color:'#bbb'
 },
 image:
 {
      width: imageDim,
      height: imageDim
 },
 titlewrapper :
 {
     position:'absolute',
     flexDirection:'row'
 },
 backIcon:
 {
     fontSize: '32@s',
     color: '#fff',
     paddingStart:'10@s',
     backgroundColor:'red'
 } ,
 productTitle:{
    backgroundColor:'green',
     fontSize:'18@s',
     fontWeight:'bold',
     color:'#fff',
     paddingHorizontal:'10@s'
     
 },
 titlewrapper:
 {
     flex:1,
     flexDirection:'row',
     justifyContent:'center',
     alignItems:'center'
 },

 buttonWrapper:
 {
     flex:1,
     justifyContent:'flex-end',
     marginEnd:'20@s',
     backgroundColor:'red'
 }

})
export default styles