import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { Actions } from 'react-native-router-flux';
var Carousel  = require('react-native-carousel');
import {Colors, Fonts, Images, Metrics, Constants } from '../../Themes';
import Styles from './styles.js'

export default class Inbox extends Component {
  
  constructor(props){
        super(props);
      }

  componentDidMount(){
    
  }

  goSecond(){
    Actions.secondscreen();
  }

  render() {
    that = this;
    return (
            <View style = {Styles.container}>
                   <View style={{marginTop:20,flex:1,backgroundColor:'#48a346',alignItems:'center'}}>
                      <Image source={Images.check} style={Styles.checkImage}/>
                      <Text style={Styles.bigText}> Congratulations!</Text>
                      <Text style={Styles.smallText}> You have now created your profile and{"\n"}address.</Text>
                      
                      <Text style={Styles.smallText}> Your Alias is JaneAsi</Text>
                      <Text style={Styles.doneText}> DONE</Text>
                   </View>      
            </View>
    );
  }
}

AppRegistry.registerComponent('Inbox', () => Layout_Text);
