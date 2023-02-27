import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const TouchButtons = ({screen,navigation,buttonTitle,styles}) => {
  return (
    <View>
    <TouchableOpacity onPress={()=>navigation.navigate(screen)} style={styles}><Text>{buttonTitle}</Text></TouchableOpacity>
      
    </View>
  )
}

export default TouchButtons

const styles = StyleSheet.create({})