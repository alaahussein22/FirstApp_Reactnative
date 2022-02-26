// import { useState } from "react";
// import { StyleSheet, View, Image , Text, Button } from "react-native"

// export default function Slider() {
  
//   const [imgIndex,setImg] = useState(0);
//   let images = ['https://i.pinimg.com/474x/12/b3/79/12b379e28e96964b953f665016efb8d1.jpg',
//                  'https://i.pinimg.com/474x/a8/ca/ba/a8caba1630b60da180594c6b3e3f473d.jpg',
//                  'https://i.pinimg.com/474x/39/df/1a/39df1a9abc8587003c6a1a440a86ee23.jpg',
//                  'https://i.pinimg.com/474x/6c/6c/de/6c6cde03c28c7257c7e61fc0ba7ebd8c.jpg'
// ]

// const goNext=()=>{
//   if(imgIndex < images.length-1){
//     setImg(imgIndex +1);
//     console.log(imgIndex);
//   }
// }

// const goPrev=()=>{
//   if(imgIndex > 0){
//     setImg (imgIndex -1);
//     console.log(imgIndex);
  
//   }
// }

//   return(
  
// <View>
//     <Image source={{ uri: images[imgIndex]}} style={styles.img} />
     
//     <View style={styles.btn}>
//       <Button  title="Next" onPress={()=>{
//           goNext()
//       }}/>

//       <Button  title="Prev" onPress={()=>{
//          goPrev()
//       }}/>
//     </View>

// </View>
//   )
// }


// const styles = StyleSheet.create({
 
//   img:{width:300, height:300, 
//        textAlign:'center',
//        marginLeft:40,
//        marginTop:20,
//        borderRadius:7
//       },

// btn:{width:100, marginLeft:150
//       } ,


// })

























// // import { useState } from 'react';
// // import { render } from 'react-dom';
// // import { Button, StyleSheet, Text, View ,Image} from 'react-native';

// // export default function Slider() {

// //   const [slide,setSlide]= useState(0)  
// //   let index=0;
// //   let imgs=['https://images.unsplash.com/photo-1645096568201-1d92fd231335?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
// //             'https://images.unsplash.com/photo-1623085684060-5de6da56a3e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60',
// //             'https://images.unsplash.com/photo-1645093273684-e37f5a8fcbb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60',
// //             'https://images.unsplash.com/photo-1645088835962-13a7a61fc4f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60'
// // ];

// // let nextSlide =()=>{
// //     if(slide < imgs.length -1){setSlide(slide+1)
      
// //     }
// // }


// // let prevSlide =()=>{
// //     if(slide > 0){setSlide(slide-1)
      
// //     }
// // }
// //   return (

// //     <View style={styles.container}>
// //       <Text  style={styles.text}>Slider</Text>
      
// //       <Image source={{uri : imgs[index]}} style={styles.img}/>
// //       <Button title='next' onPress={{nextSlide}} />
// //       <Button title='prev' onPress={{prevSlide}} />

// //     </View>


// //   );
// // }


// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: 'lightyellow',
   
// //   },
// //   text:{color:'blue',
// //         fontSize:20,
// //        marginTop:100, 
// //        textAlign:'center',
// //        borderTopWidth:2,
// //        padding:10
// //        },
    
// // img:{textAlign:'center',width:150 , height:150,justifyContent:'center'}
// // });
