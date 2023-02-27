import {Image,View, Text, Touchable, TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import Title from '../components/Title'
// import { createStackNavigator,navigation  } from '@react-navigation/stack';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
    <Title />
      <View style={styles.bannerContainer}>
      <Image
          source={require("../assets/quiz.png")}
          style={styles.banner}
          resizeMode="contain"
        />
        {/* https://coolors.co/palette/1f363d-40798c-70a9a1-9ec1a3-cfe0c3 */}
      </View>
      <TouchableOpacity 
      onPress={()=>navigation.navigate("Quiz")}
      style={styles.button}
      >
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home
const styles = StyleSheet.create({
  banner:{
    height:300,
    width:300,
    
  },
  bannerContainer:{
    justifyContent:"center",
    alignItems:"center",
    flex:1
  },
  container:{
    marginTop:40,
    paddingHorizontal:16,
    height:"100%"
  },
  button:{
    width:"100%",
    backgroundColor:"#40798C",
    padding:16,
    borderRadius:16,
    alignItems:'center',
    marginBottom:50,
    
   },
   buttonText:{
    fontSize:18,
    fontWeight:'600',
    color:'white',
   }
})