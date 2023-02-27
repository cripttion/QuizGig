import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Title = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>QuizGig</Text>
    </View>
  )
}

export default Title

const styles = StyleSheet.create({
  heading:{
    fontSize:30,
    fontWeight:'700'
  },
  container:{
     paddingVertical:16,
     justifyContent:'center',
     alignItems:'center'
  }
    
})