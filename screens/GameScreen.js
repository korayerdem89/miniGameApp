
import { View, Text, StyleSheet } from 'react-native';
import Title from '../components/Title';
function GameScreen() {
    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
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

