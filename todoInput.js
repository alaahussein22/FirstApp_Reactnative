import { View, Text, TouchableOpacity,Alert } from "react-native"
import { StyleSheet } from "react-native";
import {Button,Snackbar,Stack,TextInput} from '@react-native-material/core';
import { useCallback, useState } from "react";


export const ToDoInput=({addTodo}) =>{

const [input,setInput]= useState()
const clearInput = useCallback(()=>{setInput(''),[]})

const todoList =()=>{
  let todo={title:input, done:true}
  console.log(todo);
  addTodo(todo)
}

const addingTask =()=>{
  if(input===''){
   alert('you must add first')
  }
  else{return todoList()}
}

    return(

<View>
<Text style={styles.header}>My ToDoList </Text>

<View style={styles.input}>
  <TextInput label="Enter Title" style={{fontSize:25}}
    value={input} onChangeText={text=> setInput(text)} />
  
  <TouchableOpacity 
    onPress={addingTask} onLongPress={clearInput}> 
    <Text style={styles.text}> Add ToDo</Text>
  
   </TouchableOpacity>
</View>
</View>

    )
}

const styles= StyleSheet.create({
  header:{backgroundColor:"purple",
          textAlign:'center',
        //   marginTop:100,
          padding:10,
          color:'#fff',
        fontSize:20},

 input:{display:'flex',
        flexDirection:'row',
        marginTop:20, 
        padding:2,
        justifyContent:'space-between'}  ,

 text:{backgroundColor:'purple',
      color:'#fff',
      padding:7,
      marginTop:10,
      fontSize:17,
      borderRadius:3,
      marginLeft:50}            
})

export default ToDoInput;