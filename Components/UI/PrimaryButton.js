import { View, Text, StyleSheet, Pressable } from "react-native"
import Colors from "../../Constants/Colors"

const PrimaryButton = ({children,onPress}) => {

    
    return(
        <View style = {styles.buttonOuterContainer}>
            <Pressable onPress={onPress} 
                style = {({pressed}) => 
                    pressed
                        ? [styles.buttonInnerContainer, styles.pressed]
                        : styles.buttonInnerContainer}
                android_ripple={{color: Colors.primary600}}>
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonOuterContainer: {        
        borderColor: 'white',
        borderRadius : 28,
        margin: 10, // Since outer responsible for distance from other components
        overflow: 'hidden', // To hide any effect flowing out of outerContainer
        elevation: 2
    },
    buttonInnerContainer: {
        backgroundColor: Colors.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    buttonText: {
        /*These must be applied directly on Text as there is no inheritance.
        For example color:white on buttonContainer will not be inherited to <Text> */
        textAlign: "center",
        color: 'white' 
    },
    pressed: {
        opacity: 0.75
    }
})

export default PrimaryButton;