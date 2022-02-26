import { StyleSheet, View } from 'react-native';
// import Slider from './slider';
// import Test from './text';
import ToDoInput from '../myapp/todoInput'
import ToDoList from './todosListBody';
import { useState } from 'react';

export default function App () {
  
  const [ToDos,setToDos] = useState([
    {id:1,title:"task1",done:false},
    {id:2,title:"task2",done:true},
  
  ])

  const addHandler =(newTodo)=>{
    setToDos([...ToDos,newTodo])
      // ToDos.push(newTodo)
      console.log(ToDos.length);
  }

  return (

    <View style={styles.container}>

     <ToDoInput addTodo={addHandler}/>
     <ToDoList list={ToDos}/>
     
        {/* <Test />
        <Slider /> */}
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightyellow',
  },
   
});
