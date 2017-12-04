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
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
var Carousel  = require('react-native-carousel');
import {Colors, Fonts, Images, Metrics, Constants } from '../../Themes';
import Styles from './styles.js'

export default class Inbox extends Component {
  
  constructor(props){
        super(props);
      }

  componentDidMount(){
    
  }

  goBack(){
    Actions.pop();
  }

  goThird(){
    Actions.thirdscreen();
  }

  render() {
    that = this;
    return (
      <View style = {Styles.container}>
          <View style={{height:20,}}/>
          <View style={Styles.navigationView}>
              <View style={Styles.backView}>
                  <TouchableOpacity onPress={this.goBack.bind(this)}>
                      <Image source={Images.back_white} style={Styles.navigationButtonImage}/>
                  </TouchableOpacity>    
              </View>
              <View style={{flex: 1,alignItems:'center',justifyContent:'center'}}>
                  <Text style={Styles.titleFont}> Address Information</Text>
              </View>
              <View style={Styles.endView}>
              </View>
          </View>
          <KeyboardAwareScrollView  style={{flex:1,backgroundColor:'white'}}>  
              <TextInput underlineColorAndroid={'transparent'} placeholder ="Name" placeholderTextColor = '#cdd1cf' style={Styles.textinputstyle} />
              <TextInput underlineColorAndroid={'transparent'} placeholder ="Address" placeholderTextColor = '#cdd1cf' style={Styles.textinputstyle} />
              <TextInput underlineColorAndroid={'transparent'} placeholder ="Building Name" placeholderTextColor = '#cdd1cf' style={Styles.textinputstyle} />
              <TextInput underlineColorAndroid={'transparent'} placeholder ="Floor" placeholderTextColor = '#cdd1cf' style={Styles.textinputstyle} />
              <TextInput underlineColorAndroid={'transparent'} placeholder ="Name" placeholderTextColor = '#cdd1cf' style={Styles.textinputstyle} />
              <TextInput underlineColorAndroid={'transparent'} placeholder ="Apartment" placeholderTextColor = '#cdd1cf' style={Styles.textinputstyle} />
              <TextInput underlineColorAndroid={'transparent'} placeholder ="Region" placeholderTextColor = '#cdd1cf' style={Styles.textinputstyle} />
              <TextInput underlineColorAndroid={'transparent'} placeholder ="Phone Number" returnKeyType='done' keyboardType = 'numeric' placeholderTextColor = '#cdd1cf' style={Styles.textinputstyle} />    
          </KeyboardAwareScrollView>  
          <View style={Styles.flexView3}>                        
              <TouchableOpacity onPress={this.goThird.bind(this)} style={Styles.buttonStyle}>
                  <Text style={Styles.buttonText}>
                      LOOKS GOOD
                  </Text>
              </TouchableOpacity>                     
          </View>
          <View>
              <Carousel animate={false} 
                           indicatorAtBottom={true} 
                           indicatorOffset={5} 
                           indicatorColor="#48a346" 
                           indicatorSize={15} 
                           indicatorSpace = {15}
                           inactiveIndicatorText= '○' 
                           indicatorText= '●'>
                          <View />
                          <View /> 
                          <View />
                          <View />
                          <View />
                        </Carousel>
          </View>  
      </View>
    );
  }
}

AppRegistry.registerComponent('Inbox', () => Layout_Text);
