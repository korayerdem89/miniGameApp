
import { View, Text, StyleSheet } from 'react-native';

function GameScreen() {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Opponent's Guess!</Text>
            <View>
                <Text>Higher or lower?</Text>
            </View>
        </View>
    )
}

export default GameScreen;


const styles = StyleSheet.create({
screen:{
    flex:1,
    paddingVertical:44,
    paddingHorizontal:24,
},
title: {
    fontSize:24,
    fontWeight:'bold',
    color: '#ddb52f',
    textAlign:'center',
    borderWidth:2,
    borderColor:'#ddb52f'
}
});

