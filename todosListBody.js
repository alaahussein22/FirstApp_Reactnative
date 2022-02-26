import { View, Button, Text, ScrollView,FlatList } from "react-native";
import { StyleSheet } from "react-native";
import Checkbox from "expo-checkbox";
import { useState } from "react";

export const ToDoList=({list})=>{
 
  const [isChecked, setChecked] = useState(false)  
  const change =(item)=>{
      console.log(item);
      setChecked(item)
      console.log(!isChecked.length);
  }

    return(

    <ScrollView >
   
          <FlatList
            data={list || []}
            renderItem={({item:todo})=>(
              <View style={styles.list }>
                 {/* <Text>{index}</Text> */}
                 <Text style={{fontSize:20, textDecorationLine: isChecked ? 'line-through' : null }}>{todo.title}</Text>
                 <Checkbox value={todo.done} value={isChecked} 
                  onValueChange={item=> change(item)}/>
              </View>  
            )}
            keyExtractor={(item,index)=>`${index}`}
            ListHeaderComponent={()=> <Text style={styles.header}>My List 
             <Text style={{color:'purple',}}>that`s 
             <Text>{!isChecked.length}</Text> of todos from <Text>{list.length}</Text>
              </Text>
                
            </Text>}
            
            ListFooterComponent={()=> <Text style={styles.header}>End of List</Text>}
      />
          
    </ScrollView>
    )
}


const styles = StyleSheet.create({

    list:{marginTop:30,
          backgroundColor:'#ECC8CD',
          display:'flex',
          flexDirection:'row',
          justifyContent:'space-between',
          padding:10
        },
    header:{backgroundColor:'#938688',
            fontSize:25,
            marginTop:50,
            color:'#fff',
            textAlign:'center',
            borderRadius:25,
            padding:7}    
})

export default ToDoList;