import { View, Text, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';

import PrimaryButton from '../Components/UI/PrimaryButton';
import Title from "../Components/UI/Title";
import NumberContainer from "../Components/Game/NumberContainer"

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
  
    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
  }
  
  let minBoundary = 1;
  let maxBoundary = 100;
  
const GameSrceen = ({ userNumber, onGameOver}) => {

    const initialGuess = generateRandomBetween( 1,100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    
    //When reloaded, this executes to check if guess is correct
    useEffect(() => {
        console.log("Current guess: " +currentGuess)
        console.log("Actual number" + userNumber)
    if (currentGuess === userNumber) {
        onGameOver();
    }
    }, [currentGuess, userNumber, onGameOver]);
    
    function nextGuessHandler(direction) {
    // direction => 'lower', 'greater'
    console.log(direction)
    if (
        (direction === 'lower' && currentGuess < userNumber) ||
        (direction === 'greater' && currentGuess > userNumber)
    ) {
        Alert.alert("Don't lie!", 'You know that this is wrong...', [
        { text: 'Sorry!', style: 'cancel' },
        ]);
        return;
    }

    if (direction === 'lower') {
        maxBoundary = currentGuess;
    } else {
        minBoundary = currentGuess + 1;
    }

    const newRndNumber = generateRandomBetween(
        minBoundary,
        maxBoundary,
        currentGuess
    );
    setCurrentGuess(newRndNumber);
    }

    return (
        <View style={styles.screen}>
          <Title>Opponent's Guess</Title>
          <NumberContainer>{currentGuess}</NumberContainer>
          <View>
            <Text>Higher or lower?</Text>
            <View>
              <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                -
              </PrimaryButton>
              <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                +
              </PrimaryButton>
            </View>
          </View>
          {/* <View>LOG ROUNDS</View> */}
        </View>
      );
    }
    
    export default GameSrceen;
    
    const styles = StyleSheet.create({
      screen: {       
        height: "100%",
        padding: 24
      }
    });