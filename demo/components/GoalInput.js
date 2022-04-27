import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Modal, Image } from 'react-native'

const GoalInput=(props)=>{
    const [enterGoalText, setEnterGoalText] = useState('')

    const goalInputHandler = (enteredText)=>{
        setEnterGoalText(enteredText)
    }
    const addGoalHandler = () =>{
        props.addGoalHandler(enterGoalText)
        setEnterGoalText('')
    }
    return(
        <Modal visible={props.visiable} animationType='slide'>
            <View style={styles.InputBox}>
                <Image style={styles.image} source={require('../images/goal.png')}/>
                <TextInput 
                    placeholder='Your course goal' 
                    style={styles.textInput} 
                    onChangeText={goalInputHandler}
                    value={enterGoalText}
                    />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Add Goal" onPress={addGoalHandler} color="#5e0acc"/>
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={props.onCancel} color="#f31282"/>
                    </View>
                </View>
            </View>
        </Modal>
    );
}
const styles = StyleSheet.create({
    InputBox:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b'
      },
    buttonContainer:{
        marginTop: 16,
        flexDirection: 'row'
    }
      ,
    textInput:{
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius: 6,
        width: '100%',
        padding: 8

    },
    image:{
        width:100,
        height:100,
        margin: 20
    },
    button:{
        width: '40%',
        marginHorizontal: 8
    }
})
export default GoalInput
