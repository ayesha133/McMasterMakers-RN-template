import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';


const Item = (props) => {

  //input code

  function changeColor() {
    setPressed(prevPressed => !prevPressed)
  
  }


  const buttonBg = pressed?"#ae6fe8":"white" //variable that changes button colour. when not pressed colour is white

    return (
    <View>
        <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View >
        <TouchableOpacity 
        style={{ 
            backgroundColor:buttonBg,
            width: 25,
            height: 25,
            borderColor: '#ae6fe8',
            borderWidth: 2,
            borderRadius: 13,
            marginRight: 15,
            
        }}
        onPress = {() => setPressed(prevPressed => !prevPressed)} //on press, changes colour

        >
      </TouchableOpacity> 
        </View>

        {/* input code */}

      </View>
    </View>

    </View>

    );

}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 20,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
      },
      itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
      },
      
      itemText: {
        maxWidth: '90%',
        fontSize:20
      },
      circular: {
        width: 12,
        height: 12,
        borderColor: '#f3e9fb',
        borderWidth: 2,
        borderRadius: 5,
      },

      square: {
        width: 24,
        height: 24,
        backgroundColor: '#f3e9fb',
        borderRadius: 5,
        marginRight: 15,
      },



});


export default Item; 