// import { useState } from "react";
// import { Button, TextInput, View, StyleSheet, Text } from "react-native";

// export const Test=()=> {
//  const [text,setText] = useState();
//  const handle= (text)=>{setText(text)}

//     return(
// <View>
//        <Text style={styles.nav}>{text} </Text>
//       <TextInput style={styles.text} value={text} onChangeText={handle}
//        placeholder="Enter your Name" />

//        <View  style={styles.btn}>
//          <Button title="clear" onPress={()=>{
//              setText()
//          }}/>
//       </View>

// </View>

//     );
// }

// const styles = StyleSheet.create ({

// nav:{fontSize:25,
//      fontWeight:'bold',
//      textAlign:'center',
//      marginTop:15,
//      marginBottom:30,
//      color:'blue',
     

// },    
// text:{color:'blue',
//     fontSize:20,
//    marginLeft:10, 
//    textAlign:'center',
//    borderWidth:2,
//    borderRadius:50,
//    padding:20,
//    width:350
//    },

// btn:{
//    fontSize:20,
//   marginTop:10, 
//   borderRadius:10,
//   marginLeft:100,
//   textAlign:'center',
//   padding:15,
//   width:150
//   }, 
// });


// export default Test;