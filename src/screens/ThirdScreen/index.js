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
    Actions.forthscreen();
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
                   <View style={{flex:1,backgroundColor:'white',alignItems:'center'}}>                
                     
                         <View style={Styles.flexView1}>
                              <TextInput underlineColorAndroid={'transparent'} placeholder ="Near by landmarks/Description" placeholderTextColor = '#cdd1cf' style={Styles.textinputstyle} />
                         </View>
                         <Image source={Images.home} style={Styles.homeImage}/>
                         <Text style={Styles.textAdd}> ADD A PICTURE OF THE BUNLDING</Text>             
                         <View style={Styles.flexView3}>                        
                              <TouchableOpacity onPress={this.goThird.bind(this)} style={Styles.buttonStyle}>
                                  <Text style={Styles.buttonText}>
                                      NEXT
                                  </Text>
                              </TouchableOpacity>                     
                         </View>
                         
                 </View>
                 <View >
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
