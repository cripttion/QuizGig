import { View, Text,StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import Options from '../components/Options'
import TouchButtons from '../components/TouchButtons'
var _=require('lodash');
const Quiz = ({navigation}) => {
    const [questions,setQuestions] = useState(null);
    const[ques,setQues] = useState(0);
    const[option,setOptions] = useState([]);
    const[score,setScore] = useState(0);
    const[questionAttempt,setquestionAttempt] = useState(1);
    const[loader,setLoader] = useState(false);
    const getQuiz = async()=>{
      setLoader(true);
        const url='https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986';
        const result = await fetch(url);
        const data = await result.json();
        setQuestions(data.results)
        setOptions(generateOptionsAndShuffle(data.results[0]));
      setLoader(false);
         
    };
    useEffect(()=>{
        getQuiz();
        
    },[])
const handleNext=()=>
{
    setQues(ques+1);
    setOptions(generateOptionsAndShuffle(questions[ques+1]));
    
    
}
const generateOptionsAndShuffle=(_question)=>{
   const options = [..._question.incorrect_answers]
   options.push(_question.correct_answer);
   var result = _.shuffle(options);
  //  console.log(result);

   return result;
  }
//checking options
const handleSelectedOptions=(_option)=>{
  setquestionAttempt(questionAttempt+1);
  if(_option===questions[ques].correct_answer)
  {
     setScore(score+10);
  }
  if(ques!=9)
  {
    setQues(ques+1);
    setOptions(generateOptionsAndShuffle(questions[ques+1]));
  }
  if(ques==9)
  {
    handleShowResult();
  }
}

const handleQuetionAttempted=()=>{
  setquestionAttempt(questionAttempt+1);
  setQues(ques+1);
  setOptions(generateOptionsAndShuffle(questions[ques+1]));
 
}
const handleShowResult=()=>{
  navigation.navigate('Result',{
    score:score,
    attempted:questionAttempt,
    
  });

}
  return (
    <View style={styles.container}>
   {loader?<View><Text style={styles.loaderText}>Stay Awake & ready</Text><ActivityIndicator size="large"  style={styles.loader}/> 
   </View>:questions&& (<View style={styles.parent}>
    <View style={styles.top}>
          <Text style={styles.question}>
          {"Q."+(ques+1)+" "+decodeURIComponent(questions[ques].question) }
          </Text>
    </View>
     <View style={styles.options}>
     <TouchableOpacity style={styles.optionButton} onPress={()=>{handleSelectedOptions(option[0])}}>
        <Text style={styles.optionText}>{decodeURIComponent(option[0]) }</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.optionButton} onPress={()=>{handleSelectedOptions(option[1])}}
    >
        <Text style={styles.optionText}>{decodeURIComponent(option[1]) }</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.optionButton} onPress={()=>{handleSelectedOptions(option[2])}}>
        <Text style={styles.optionText}>{decodeURIComponent(option[2]) }</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.optionButton} onPress={()=>{handleSelectedOptions(option[3])}}>
        <Text style={styles.optionText}>{decodeURIComponent(option[3]) }</Text>
    </TouchableOpacity>
     </View>

   
     <View style={styles.btn}>
       {ques!=9 && (<TouchableOpacity style={styles.button} onPress={handleQuetionAttempted}>
        <Text style={styles.buttonText}>Skip</Text>
       </TouchableOpacity>)}

       {ques!= 9 && (<TouchableOpacity style={styles.button}
       onPress={handleNext}
       >
        <Text style={styles.buttonText}>Next</Text>
       </TouchableOpacity>)}

       {ques===9&&(<TouchableOpacity 
      onPress={handleShowResult}
      style={styles.button}
      >
        <Text style={styles.buttonText}>Show Result</Text>
      </TouchableOpacity> )}
     </View>
     </View>)}
    </View>
    
  )
}

export default Quiz;
const styles = StyleSheet.create({
    container:{
        marginTop:40,
        paddingHorizontal:16,
        height:"100%"
      },
   top:{
    marginVertical:16,
   },
   options:{
    marginVertical:16,
    flex:1,
   },
   btn:{
   marginBottom:12,
   paddingVertical:16,
   justifyContent:"space-between",
   flexDirection:"row"
   },
  button:{

    backgroundColor:"#40798C",
    padding:12,
    paddingHorizontal:16,
    borderRadius:16,
    alignItems:'center',
    marginBottom:50,
    
   },
   buttonText:{
    fontSize:18,
    fontWeight:'600',
    color:'white',
    
   },
   question:{
     fontSize:28,
   },
   parent:{
    height:'100%'
   },
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
   },
   loader:{
    
    marginVertical:'100%',
    justifyContent:'center',
    alignItems:'center',
   },
   loaderText:{
   
   fontSize:26,
   fontWeight:'300',
   marginHorizontal:50,
   marginTop:20,    
   }

})