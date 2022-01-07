import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { TouchableOpacity, Modal, TextInput, FlatList, SafeAreaView } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import Item from './components/Item';


export default function App() {

  // const [modal, setModal] = useState(false)
  // const [task, setTask] = useState('')
  // const [itemArray, setItemArray] = useState([])

   function addItem() {
  //   setItemArray(itemArray =>[...itemArray, task])
  //   setModal(false)
  //   setTask('')
   }


//ADD COMMENTS -- less typing, keep views already commented
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
      <View style={styles.headerComp}>
      
      <Text style={styles.title}>Your Tasks </Text>


   {/* WE CODE THIS PART */}
      {/* <TouchableOpacity style={styles.addButton}
        onPress={() => setModal(true)}  //we coding this part 
      > 
        <Text style={styles.addItemText}>Add Item</Text>
      </TouchableOpacity> */}

      </View>
      </View>

      <View style={styles.wrapper}>
        <Modal
        // animationType='slide'
        // visible={modal}
        // transparent={true}
        >
          <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
              // multiline
              // placeholder="Write your task"
              // style={{fontSize:20}}
              // onChangeText={(val) => setTask(val)}
              // value={task}
              // maxLength={300}

            />

            <TouchableOpacity style={styles.buttonModal}
              // onPress={() => addItem()} //code this 
            >
              <Text>Add Task</Text>
            </TouchableOpacity>
          
          </View>
          </View>

        </Modal>

  <SafeAreaView style={styles.container1} >
     <FlatList
      // data={itemArray}
      // keyExtractor={(item, index) => index.toString()} //this fixed the key bug
      // renderItem={({item}) => (
      //   <TouchableOpacity>
      //     <Item text={item}/> //THIS IS WHERE ITEM.JS IS CALLED
      //   </TouchableOpacity>
       
      // )}
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
