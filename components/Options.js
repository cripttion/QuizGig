import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Options = (props) => {
  return (
    <View>
    <TouchableOpacity style={styles.optionButton}
    onPress={()=>{
      
    }}
    >
        <Text style={styles.optionText}>{props.option}</Text>
    </TouchableOpacity>
    
    </View>
  )
}

export default Options

const styles = StyleSheet.create({
  optionButton:{
    paddingVertical:12,
    marginVertical:6,
    fontSize:28,
   },
   optionText:{
    fontsize:18,
    fontWeight:'500',
    color:'white',
    backgroundColor:'#9EC1A3',
    paddingHorizontal:12,
    padding:16,
    borderRadius:12
   }
})