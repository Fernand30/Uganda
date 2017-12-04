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
                   <View style={{height:20,}}/>
                   <View style={Styles.navigationView}>
                      <View style={Styles.backView}>
                          <TouchableOpacity>
                              <Image source={Images.back_white} style={Styles.navigationButtonImage}/>
                          </TouchableOpacity>    
                          
                      </View>
                      <View style={{flex: 1,alignItems:'center',justifyContent:'center'}}>
                            <Text style={Styles.titleFont}> Personal Information</Text>
                      </View>
                      <View style={Styles.endView}>
                          
                      </View>
                   </View> 
                 <View style={{flex:1,justifyContent:'space-between',backgroundColor:'white'}}> 
                    <TextInput underlineColorAndroid={'transparent'} placeholder ="First Name" placeholderTextColor = '#cdd1cf' style={Styles.textinputstyle} />
                    <TextInput underlineColorAndroid={'transparent'} placeholder ="Last Name" placeholderTextColor = '#cdd1cf' style={Styles.textinputstyle} />
                    <TextInput underlineColorAndroid={'transparent'} placeholder ="Phone Number" placeholderTextColor = '#cdd1cf' style={Styles.textinputstyle} />
                    <TextInput underlineColorAndroid={'transparent'} placeholder ="Email" placeholderTextColor = '#cdd1cf' style={Styles.textinputstyle} />
                    
                     <View style={{flex:1,alignItems:'center',paddingTop:40,backgroundColor:'#ffffff'}}>
                          <Image source={Images.smile} style={{width:50,height:50,resizeMode:'cover'}} />
                          <Text style={{marginTop:10,alignItems:'center',color:'#216f4d',backgroundColor:'transparent'}}> ADD A PROFILE PICTURE</Text>
                     </View>
                     
                     <View style={Styles.flexView3}>                        
                          <TouchableOpacity onPress={this.goSecond.bind(this)} style={Styles.buttonStyle}>
                              <Text style={Styles.buttonText}>
                                  NEXT
                              </Text>
                          </TouchableOpacity>                     
                     </View>
                     <View >
                        <Carousel animate={false} 
                           indicatorAtBottom={true} 
                           indicatorOffset={5} 
                           indicatorSpace = {15}
                           indicatorColor="#48a346" 
                           indicatorSize={15} 
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
            </View>
    );
  }
}

AppRegistry.registerComponent('Inbox', () => Layout_Text);
