import { View, TextInput, StyleSheet, Alert } from "react-native";
import { useState } from "react";
import PrimaryButtom from '../Components/UI/PrimaryButton';
import Colors from "../Constants/Colors";


const StartGameScreen = (props) => {

  const [enteredNumber, setEnteredNumber] = useState('');

  const clearTextHandler = () => setEnteredNumber('')
  const changeTextHandler = enteredText => setEnteredNumber(enteredText)

  const submitHandler = () => {
    const chosenNumber = parseInt(enteredNumber);

    if( isNaN(chosenNumber) || chosenNumber < 1 || chosenNumber > 99) {
      Alert.alert('Invalid number', 
                    'Number must be between 1 and 99',
                    [{style: "destructive", text: 'OK', onPress: clearTextHandler}])
                    return
    }
    props.onPickNumber(chosenNumber)
  }

   return( <View style = {styles.container}>
             <TextInput style = {styles.textInput} 
                        inputMode="numeric" 
                        maxLength={2}
                        value={enteredNumber}
                        onChangeText={changeTextHandler}/>

             <View style = {styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButtom onPress={clearTextHandler}>Clear</PrimaryButtom>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButtom onPress={submitHandler}>Submit</PrimaryButtom>
                </View>     
             </View>
           </View>)
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: Colors.primary800,
      alignItems: 'center',
      justifyContent: 'center',
      width: "80%",
      height: 200,
      borderRadius: 20,
      marginTop: 100,
      marginHorizontal: 35,
      paddingHorizontal: 50,
      elevation: 4,
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 6,
      shadowOpacity: 0.25
    },
    textInput : {
        width: 60,
        height: 50,
        borderColor: Colors.accent500,
        borderBottomWidth: 5,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: Colors.accent500,
        marginVertical: 8,
    },
    buttonsContainer : {
      flexDirection: "row", // Button appear side by side      
    },
    buttonContainer : {
      flex: 1  // Buttons occupy full available space
    }
  });

export default StartGameScreen;