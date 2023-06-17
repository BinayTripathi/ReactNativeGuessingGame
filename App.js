import { StyleSheet,  ImageBackground, SafeAreaView } from 'react-native';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import StartGameScreen from './Screens/StartGameScreen'
import GameSrceen from './Screens/GameScreen';
import Colors from './Constants/Colors';
import GameOverScreen from './Screens/GameoverScreen';

export default function App() {

  const [enteredNumber, setEnteredNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);

  const pickedNumberHandler = (userEnteredNumber) => {
    setEnteredNumber(userEnteredNumber)
    setGameIsOver(false);
  } 

  const gameOverHandler = () => setGameIsOver(true)
  
  let  screen = (<StartGameScreen onPickNumber={pickedNumberHandler}/>)
  if(enteredNumber)
    screen = (<GameSrceen  userNumber={enteredNumber} onGameOver={gameOverHandler}/>)

  if (gameIsOver && enteredNumber) {
    screen = <GameOverScreen />;
  }

  return (   
      <LinearGradient style = {styles.rootScreen} colors={[Colors.primary700, Colors.accent500]}>
        <ImageBackground
          source={require('./assets/images/background.png')}
          resizeMode='cover'
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}> 
            <SafeAreaView>{screen}</SafeAreaView>
        </ImageBackground>       
      </LinearGradient>  
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,  
  },
  backgroundImage: {
    opacity: 0.15,    
  }
});
