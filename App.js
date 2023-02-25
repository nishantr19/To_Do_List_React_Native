import React, {useState} from 'react';
import { TouchableOpacity,Keyboard,KeyboardAvoidingView ,StyleSheet, Text, View, TextInput } from 'react-native';
import Task from './components/Tasks'
import bg from './components/BackImg.jpg'

export default function App() {

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
  }

  return (
   
    <View style={styles.container}>

    <View style={styles.tasksHead}>
      <Text style={styles.tasksTitle}>Today's Task</Text>
   <View style={styles.tasksBox}>
   {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
                  <Task text={item} /> 
                </TouchableOpacity>
              )
            })
          }
   </View>
    </View>
    
    <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Write a task'}  value={task} onChangeText={text => setTask(text)}/>
        

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
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
    backgroundColor: '#4158D0',

  },

  tasksHead: {
paddingTop:80,
paddingHorizontal:20,
  },

  tasksTitle: {
    backgroundColor: '#FFF',
    fontSize:28,
    fontWeight:'bold',
    position: 'realative',
    // bottom: 60,
    width: '60%',
    
    justifyContent: 'space-around',
    alignItems: 'center',
   justifyContent:'center',
   
   borderColor: '#4158D0',
   borderRadius: 10,
   borderWidth:7,
      },

      tasksBox: {
        paddingTop:15,
     
          },

          writeTaskWrapper: {
            position: 'absolute',
            bottom: 60,
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center'
          },
          input: {
            paddingVertical: 15,
            paddingHorizontal: 15,
            backgroundColor: '#FFF',
            borderRadius: 60,
            borderColor: '#C0C0C0',
            borderWidth: 1,
            width: 250,
          },
          addWrapper: {
            width: 60,
            height: 60,
            backgroundColor: '#FFF',
            borderRadius: 60,
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: '#C0C0C0',
            borderWidth: 1,
          },
          addText: {},    


});




