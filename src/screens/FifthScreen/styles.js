const React = require("react-native");
const { Dimensions, Platform } = React;
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
const deviceHeight = Dimensions.get("window").height;
const imagesize = responsiveHeight(10);
export default {
  container: {
    flex: 1,
    backgroundColor:'#0e721a',
  },
  
  page1View: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  },
  page1Image: {
    width: responsiveWidth(30),
    height: responsiveHeight(9),
    resizeMode: 'stretch'
  },
  ic_arrow_back_black_24px: {
    width: responsiveWidth(6),
    height: responsiveHeight(3),
    resizeMode: 'stretch',
    marginLeft: 10,
  },
  logoView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },
  checkImage: {
    marginTop: 150,
    width: responsiveWidth(12),
    height: responsiveHeight(7),
    resizeMode: 'cover'
  },
  textView: {
    marginTop: 30
  },
  inputView: {
    marginTop: 40,
    alignItems: 'center'
  },
  textinput: {
    borderColor: '#697079',
    height: responsiveHeight(5),
    width: responsiveWidth(80),
    borderBottomWidth: 1,
    paddingLeft: 5,
    paddingBottom: 5,
    color: 'white',
    fontSize: responsiveFontSize(3)
  },
  textStyle: {
    fontSize: responsiveFontSize(2),
    color: '#27ec8d',
    textAlign: 'center'
  },
  buttonView: {
    marginTop:40,
    paddingLeft: 20,
    paddingRight: 20,
  },
  button: {
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#27ec8d',
    height:50,
    borderRadius: 5
  },
  buttonText:{
    fontSize: responsiveFontSize(2),
    textAlign: 'center',
    color: '#FFFFFF'
  },
  loginButtonView: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
  
  loginButtonText:{
    fontSize: responsiveFontSize(2),
    textAlign: 'center',
    color: '#FFFFFF'
  },
  tabImage:{
    width: responsiveWidth(5),
    height: responsiveWidth(5),
    resizeMode: 'cover',
  },
  navigationView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor:'#48a346'
  },
  flexView1: {
    flex:1,
    flexDirection: 'row',
    borderColor: '#dcdcdc',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor:'white',
    justifyContent:'space-between'
  },
  flexView2: {
    justifyContent:'center',
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor:'white',
    paddingLeft:10
  },
  flexView3: {
    backgroundColor:'white',
    alignItems: 'center'
    
  },
  backView:{
    flexDirection: 'row',
    marginLeft: 10,
  },
  endView: {
    flexDirection: 'row',
    alignItems:'center',
    marginRight: 10,
    justifyContent:'flex-end'
  },
  navigationButtonImage:{
    width:responsiveWidth(5),
    height:responsiveHeight(3),
    resizeMode:'cover',
  },
  colomnView1:{
    marginLeft: 10,
    justifyContent:'center'
  },
  colomnText1:{
    fontSize:responsiveFontSize(2),
  },
  colomnText2:{
    fontSize:responsiveFontSize(2),
    color: '#006bff' 
  },
  colomnView2:{
    alignItems:'flex-end',
    marginRight:10,
    justifyContent:'center'
  },
  colomnText3:{
    fontSize:responsiveFontSize(2),
    color: '#006bff',
    textAlign:'right',
    marginRight:60 
  },
  accountImage: {
    width:responsiveWidth(7),
    height:responsiveWidth(7),
    resizeMode:'cover'
  },
  subrowFlex:{
    flexDirection:'row'
  },
  niqImage:{
    marginTop:responsiveHeight(10),
    width:responsiveWidth(33),
    height:responsiveHeight(10),
    resizeMode:'cover'
  },
  baseText:{
    fontSize:responsiveFontSize(3),
    textAlign:'center',
    marginTop:responsiveHeight(4),
    color:'white'
  },
  buttonStyle:{
    width:responsiveWidth(60),
    height:responsiveHeight(7),
    borderRadius:5,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#48a346',
    marginTop: responsiveHeight(1),
    marginBottom: responsiveHeight(10),
  },
  lastText:{
    fontSize:responsiveFontSize(2),
    textAlign:'center',
    marginTop:responsiveHeight(4),
    color:'white'
  },
  tabStyle:{
    backgroundColor:'#000000',
    height: responsiveHeight(8),
  },
  titleFont:{
    color:'white',
    fontSize: responsiveFontSize(3),
  },
  textinputstyle:{
    marginLeft: 20,
    fontSize: 18,
    width:responsiveWidth(80)
  },
  bigText:{
    marginTop: 50,
    fontSize: responsiveFontSize(3),
    color:'white',

  },
  smallText:{
    marginTop:40,
    fontSize: responsiveFontSize(2),
    color:'white',
    textAlign:'center'
  },
  doneText:{
    marginTop:150,
    fontSize: responsiveFontSize(2),
    color:'white',
    textAlign:'center',
    textDecorationLine: 'underline',
    lineHeight: 30,
  }
};
