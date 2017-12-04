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
import {Colors, Fonts, Images, Metrics, Constants } from '../../Themes';
import TabNavigator from 'react-native-tab-navigator';
import Index from './index.js'
import Styles from './styles.js'

export default class Home extends Component {
  
  constructor(props){
        super(props);
        this.state={
      selectedTab: 'tab1'
    };
  }

  componentDidMount(){
    
  }

  goBack(){
    Actions.pop();
  }

  render() {
    that = this;
    return (
            <View style = {Styles.container}>
                   <TabNavigator tabBarStyle={Styles.tabStyle}>
                        <TabNavigator.Item
                            renderIcon={() => <Image source={Images.tabbutton1} style={Styles.tabImage}/>}
                            renderSelectedIcon={() => <Image source={Images.tabbutton1} style={Styles.tabImage}/>}
                            
                            selected={this.state.selectedTab === 'tab1'}
                            onPress={() => {
                              this.setState({
                                selectedTab: 'tab1'
                              });

                            }}
                           >
                            <Index />
                        </TabNavigator.Item>

                        <TabNavigator.Item
                            renderIcon={() => <Image source={Images.tabbutton2} style={Styles.tabImage}/>}
                            renderSelectedIcon={() => <Image source={Images.tabbutton2} style={Styles.tabImage}/>}
                            
                            selected = {this.state.selectedTab === 'tab2'}
                            onPress={() => {                             
                              this.setState({
                                selectedTab: 'tab2',
                              });
                            }}
                          >  
                            <Index />
                        </TabNavigator.Item>

                        <TabNavigator.Item
                            renderIcon={() => <Image source={Images.tabbutton3} style={Styles.tabImage}/>}
                            renderSelectedIcon={() => <Image source={Images.tabbutton3} style={Styles.tabImage}/>}
                            
                            selected={this.state.selectedTab === 'tab3'}
                            onPress={() => {
                              this.setState({
                                selectedTab: 'tab3',
                              });

                            }}
                            >
                            <Index />
                        </TabNavigator.Item>

              
                  </TabNavigator>
            </View>
    );
  }
}

AppRegistry.registerComponent('Home', () => Layout_Text);
