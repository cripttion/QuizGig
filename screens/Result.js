import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import TouchButtons from '../components/TouchButtons'

const Result = ({navigation,route}) => {
  const {score,attempted} = route.params;

  return (
    <View style={styles.container}>
    <View style={styles.top}>
      <Text style={styles.heading}>Hello! you done well</Text>
       <Text style={styles.noQuestionText}>Attempted : {attempted} / 10 </Text>
       <Text style={styles.scoreText}>YourScore : {score} / 100 </Text>
    </View>
      <View style={styles.bannerContainer}>
      
    {score>40?(<Image
        source={require("../assets/happy.png")}
        style={styles.banner}
        resizeMode="contain"
      />):<Image
        source={require("../assets/sad.png")}
        style={styles.banner}
        resizeMode="contain"
      />}
        {/* https://coolors.co/palette/1f363d-40798c-70a9a1-9ec1a3-cfe0c3 */}
      </View>
      <View>
         <TouchableOpacity onPress={()=>navigation.navigate('Home')} style={styles.button}>
            <Text style={styles.buttonText}>Start Again</Text>
         </TouchableOpacity>
      </View>
    </View>
  )
}

export default Result

const styles = StyleSheet.create({
    container:{
        marginTop:40,
        paddingHorizontal:16,
        height:"100%",
       
      },
       top:{
        marginVertical:16,
        justifyContent:'center',
        alignItems:'center',
       
       },
       banner:{
        height:300,
        width:300,
      },
      bannerContainer:{
        justifyContent:"center",
        alignItems:"center",
        flex:1
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
       },
       heading:{
        
        fontSize:28,
        fontWeight:"500",
        justifyContent:'center',
        alignItems:'center',
     
       },
       noQuestionText:{
        marginTop:50,
        fontSize:26,
        justifyContent:'center',
        alignItems:'center',
       },
       scoreText:{
        marginTop:10,
        fontSize:26,
        justifyContent:'center',
        alignItems:'center',
       }
       

})