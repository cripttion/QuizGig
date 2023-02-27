import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import {StyleSheet,Text,View} from 'react-native'
import MyStack from './navigation';
import Home from './screens/Home';
import Quiz from './screens/Quiz';
import Result from './screens/Result';

function App() {
  return (
 
      <NavigationContainer>
        <MyStack /> 
      </NavigationContainer>
    
    
  )
}

export default App;
const styles = StyleSheet.create({
  
})