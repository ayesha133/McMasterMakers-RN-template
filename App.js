import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { TouchableOpacity, Modal, TextInput, FlatList, SafeAreaView } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import Item from './components/Item';


export default function App() {

  const [modal, setModal] = useState(false)
  const [task, setTask] = useState('')
  //input code

   function addItem() {
      //input code
   }


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
      <View style={styles.headerComp}>
      
      <Text style={styles.title}>Your Tasks </Text>

      <TouchableOpacity style={styles.addButton}
          //input code
      > 
        <Text style={styles.addItemText}>Add Item</Text>
      </TouchableOpacity>

      </View>
      </View>

      <View style={styles.wrapper}>
        <Modal
        //input code
        visible={modal}
        >
          <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
              //input code
            />

            <TouchableOpacity style={styles.buttonModal}
               //input code
            >
              <Text>Add Task</Text>
            </TouchableOpacity>
          
          </View>
          </View>

        </Modal>

  <SafeAreaView style={styles.container1} >
     <FlatList
        //input code
    /> 
  </SafeAreaView>


      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f5',
   
  },

  header: {
    paddingTop:80, 
    paddingBottom:20, 
    paddingHorizontal:20, 
    backgroundColor:'#ae6fe8'
    
  }, 

  headerComp: {
    flexDirection:'row', 
    alignItems:'center', 
    justifyContent:'space-between',
  }, 

  title: {
    fontSize:30, 
    fontWeight:'bold', 
    color:'white', 
    
  }, 

  addButton:{
    backgroundColor:'#f3e9fb', 
    padding:10, 
    paddingHorizontal:25, 
    borderRadius:5, 

  }, 

  addItemText: {
    fontSize:17, 
    fontWeight:'bold', 
    color:'black',

  }, 

  centeredView: {
    flex:1, 
    justifyContent:'center', 
    alignItems:'center', 
    marginTop:22, 

  }, 

  modalView: {
    backgroundColor:'white', 
    padding:35, 
    alignItems:"center", 
    borderRadius:20, 


  }, 

  wrapper: {
    paddingTop:80, 
    paddingHorizontal:20, 

  }, 

  buttonModal: {
    padding:7, 
    backgroundColor:'#f3e9fb',
    marginTop:15, 
    paddingHorizontal:25, 
    borderRadius:5, 
    elevation:5, 

  }, 

  container1: {
    flexGrow:1, 
    top:-60, 
    marginTop:2, 

  }, 

});
