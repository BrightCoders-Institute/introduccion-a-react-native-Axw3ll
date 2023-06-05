import { StatusBar } from 'expo-status-bar';

import React,{useState} from 'react';
import { StyleSheet, Text, View,KeyboardAvoidingView,TextInput,TouchableOpacity,Keyboard} from 'react-native';
import Task from './components/Task';


export default function App() {

  const [task,setTask] = useState()
  const [taskItems,setTaskItems] = useState([])

  const handleAddTask=()=>{
    Keyboard.dismiss();
    setTaskItems([...taskItems,task])
    setTask(null);
  }

  const completeTask =(index)=>{
    let itemsCopy=[...taskItems]
    itemsCopy.splice(index,1);
    setTaskItems(itemsCopy)
  }

  return (
    <View style={styles.container}>
      {/* Today's Task*/}
      <View style={styles.taskWraper}>
        <Text style={styles.sectionTitle}>Today's Task</Text>
        <View style={styles.items}>
          {
            taskItems.map((item,index)=>{
              return (
                <TouchableOpacity key={index} onPress={()=>completeTask(index)}>
                  <Task text={item}/>
                </TouchableOpacity>
              )
              
            })
          }
          
        </View>
      </View>

      {/* Write a task */}
      <KeyboardAvoidingView
        behavior={Platform.OS==="ios" ? "padding":"height"}
        style={styles.writeTaskWraper}
        >
        <TextInput style={styles.input} placeholder={'Write a task '} onChangeText={text=>setTask(text)} value={task}/>
        <TouchableOpacity onPress={()=> handleAddTask()}>
          <View style={styles.addWraper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  taskWraper:{
    paddingTop:80,
    paddingHorizontal:20
  },
sectionTitle:{
  fontSize:24,
  fontWeight:'bold'
},
items:{
  marginTop:30,
},
writeTaskWraper:{
  position:'absolute',
  bottom:60,
  width:'100%',
  flexDirection:'row',
  justifyContent:'space-around',
  alignItems:'center'
},
input:{
  paddingVertical:15,
  paddingHorizontal:15,
  width:250,
  backgroundColor:"#FFF",
  borderRadius:60,
  borderColor:'#C0C0C0',
  borderWidth:1
},
addWraper:{
  width:60,
  height:60,
  backgroundColor:'#FFF',
  borderRadius:60,
  justifyContent:'center',
  alignItems:'center',
  borderColor:'#C0C0C0',
  borderWidth:1
},
addText:{},
});
