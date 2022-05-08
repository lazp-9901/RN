import React, {useState} from 'react'
import {View, TextInput, StyleSheet, Alert } from 'react-native'
import Card from '../components/ui/Card'
import InstructionText from '../components/ui/InstructionText'
import PrimaryButton from '../components/ui/PrimaryButton'
import Title from '../components/ui/Title'

import Colors from '../constants/colors'

const StartGameScreen = ({onPickNumber}) =>{
    const [enteredNumber, setEnteredNumber] = useState('')


    const numberInputHandler = (enteredText) =>{
        setEnteredNumber(enteredText)
    }

    const confirmInputHandler = ()=>{
        const chosenNumber = parseInt(enteredNumber);

        if(isNaN(chosenNumber)||chosenNumber<=0||chosenNumber>99){
            Alert.alert(
                'Invalid number!',
                'Number has to be a number between 1 to 99.',
                [{text: 'Okey', style: 'destructive', onPress: resetInputhandler}]
            )
            return;
        }
        onPickNumber(chosenNumber)
    }
    const resetInputhandler = () =>{
        setEnteredNumber('')
    }
    return(
        <View style={styles.rootContainer}>
            <Title>Guess My Number</Title>
            <Card>
                <InstructionText>Enter a Number</InstructionText>
                <TextInput  
                style={styles.numberInput} 
                maxLength={2}
                keyboardType= 'number-pad'
                autoCapitalize= 'none'
                autoCorrect= {false}
                onChangeText = {numberInputHandler}
                value= {enteredNumber}
                />
                <View style={styles.buttonsContainer}> 
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={resetInputhandler}>Reset</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
    )
}   
const styles = StyleSheet.create(
    {
        rootContainer:{
            flex: 1,
            marginTop: 100,
            alignItems: 'center'
        },
        numberInput:{
            height: 80,
            width:50,
            fontSize: 32,
            borderBottomColor: Colors.accent500,
            borderBottomWidth: 2,
            color: Colors.accent500,
            marginVertical: 8,
            fontWeight: 'bold',
            textAlign: 'center'

        },
        buttonsContainer:{
            flexDirection: 'row'
        },
        buttonContainer:{
            flex: 1
        }
    }
)
export default StartGameScreen