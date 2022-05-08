import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  StyleSheet,
  ImageBackground,
  SafeAreaView
} from 'react-native';

import StartGameScreen from './screens/startGameScreen';
import GameOverScreen from './screens/gameOverScreen';
import GameScreen from './screens/gameScreen';
import Colors from './constants/colors';


const App = () => {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true)
  const [guessRounds, setGuessRounds] = useState(0)

  const pickedNumberHandler = (pickedNumber) =>{
    setUserNumber(pickedNumber)
    setGameIsOver(false)
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>

  const gameOverHandler = () =>{
    setGameIsOver(true)
  }

  const startNewGameHandler = () =>{
    setUserNumber(null)
    setGuessRounds(0)
  
  }

  if(userNumber){
    screen = <GameScreen userNumber={userNumber} onGameOver = {gameOverHandler}/>
  }

  if(gameIsOver && userNumber){
    screen = <GameOverScreen 
            roundsNumber={guessRounds} 
            userNumber={userNumber} 
            onStartNewGame={startNewGameHandler}></GameOverScreen>
  }

  return(
    <LinearGradient 
      colors={[Colors.primary800, Colors.accent500]} 
      style={styles.rootScreen}>
      <ImageBackground 
      source={require('./images/background.png')}
      resizeMode="cover"
      style={styles.rootScreen}
      imageStyle={styles.backgroundImage}
      >
      <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  ) 
};

const styles = StyleSheet.create(
  {
    rootScreen:{
      flex:1
    },
    backgroundImage:{
      opacity: 0.15
    }
  }
)

export default App;
