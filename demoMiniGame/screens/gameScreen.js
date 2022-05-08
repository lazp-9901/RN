import React, { useState, useEffect } from "react";
import { View, StyleSheet, Alert, Text, FlatList } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

import NumberContainer from "../components/game/NumberContainer";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import PrimaryButton from "../components/ui/PrimaryButton";

import Title from "../components/ui/Title";


const generateRandomBetween = (min, max, exclude) =>{
    const rndNum = Math.floor(Math.random()*(max-min))+min
    
    if(rndNum===exclude){
        return generateRandomBetween(min,max,exclude)
    }
    else{
        return rndNum
    }
}

let minBoundary = 1
let maxBoundary = 100

const GameScreen = ({userNumber, onGameOver}) =>{

    const initialGuess = generateRandomBetween(1 ,100 , userNumber)
    const [ currentGuess, setCurrentGuess ] = useState(initialGuess);
    const [ guessRounds, setGuessRounds ] = useState([initialGuess])

    useEffect(()=>{
        if(currentGuess === userNumber)
        onGameOver()
    },[currentGuess, userNumber, onGameOver])

    useEffect(()=>{
        minBoundary = 1
        maxBoundary = 100
    }, [])

    const nextGuessHandler = (direction) =>{
        if((direction === 'lower' && currentGuess < userNumber )
            || (direction === 'greater' && currentGuess > userNumber))
        {
            Alert.alert("Don't lie !", 'You know this is wrong !', [
                { text:'Sorry!', style:'cancel' },
            ]);
            return;
        }

        if(direction=='lower'){
            maxBoundary = currentGuess
        }
        else{
            minBoundary = currentGuess+1
        }
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess)
        setCurrentGuess(newRndNumber)
        setGuessRounds(prevGuessRounds => [newRndNumber, ...prevGuessRounds])
    }


    return <View style={styles.screen}>
        <Title>Opponent's Guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>    
        <Card>
            <InstructionText style={styles.instructionText}>Higher or Lower?</InstructionText>
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                    <Icon name="minus" size={20} color="white" />
                </PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                    <Icon name="plus" size={20} color="white" />
                </PrimaryButton>
                </View>
            </View>
        </Card>
        <View>
            {/* {guessRounds.map(guessRounds => <Text key={guessRounds}>{guessRounds}</Text>)} */}
            <FlatList 
            data={guessRounds}
            renderItem={(itemData) => <Text>{itemData.item}</Text>}
            keyExtractor={() => item}
            />
        </View>
    </View>
}
export default GameScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,

    },
    instructionText:{
        marginBottom: 12
    },
    buttonsContainer:{
        flexDirection: 'row'
    },
    buttonContainer:{
        flex: 1
    }
})