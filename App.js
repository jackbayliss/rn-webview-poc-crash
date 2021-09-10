/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import { WebView } from 'react-native-webview';

import React from 'react';
import type {Node} from 'react';
import {
  Text,
  View,
} from 'react-native';




const App: () => Node = () => {
  var switchView = false

  return (
        <View style={{flex:1}}>
         {switchView == true ? <Text>I have switched </Text> : <WebView source={{ uri: 'https://reactnative.dev/' }} onShouldStartLoadWithRequest={(request) => {switchView = true }} />}
        </View>
  );
};


export default App;
