import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Router, Route, Schema, Animations, Scene,TabBar} from 'react-native-router-flux'

import FirstScreen from './screens/FirstScreen/index';
import SecondScreen from './screens/SecondScreen/home';
import ThirdScreen from './screens/ThirdScreen/home';
import ForthScreen from './screens/ForthScreen/home';
import FifthScreen from './screens/FifthScreen/index';

const Routes = () => (

  <Router hideNavBar={true}>
    <Scene key = "root">
      <Scene key = "firstscreen" component = {FirstScreen} hideNavBar={true} {...this.props} initial/>
      <Scene key = "secondscreen" component = {SecondScreen} hideNavBar={true} panHandlers={null} />
      <Scene key = "thirdscreen" component = {ThirdScreen} hideNavBar={true} panHandlers={null} />
      <Scene key = "forthscreen" component = {ForthScreen} hideNavBar={true} panHandlers={null} />
      <Scene key = "fifthscreen" component = {FifthScreen} hideNavBar={true} panHandlers={null} />
     
    </Scene>
 </Router>


);

export default Routes