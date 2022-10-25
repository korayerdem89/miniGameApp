import { Text, View, StyleSheet } from 'react-native'

function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {
    return (
        <View style={styles.rootContainer}>
            <Text>Game Is Over!</Text>
            <Text>Your phone needed <Text>{roundsNumber}</Text> rounds to guess the number <Text>{userNumber}</Text></Text>
        </View>
    )
}

export default GameOverScreen;

const styles = StyleSheet.create({rootContainer:{
    marginTop:100
}})