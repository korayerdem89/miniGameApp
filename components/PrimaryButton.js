import { View, Text, StyleSheet, Pressable} from 'react-native';

function PrimaryButton({ children }) {
    function pressHandler() {}
return (
    <Pressable onPress={pressHandler}>
<View>
    <Text>{children}</Text>
</View>
</Pressable>
);
}

export default PrimaryButton;

const styles = StyleSheet.create({
    inputContainer: {
        padding:16,
        marginTop:100,
        marginHorizontal:24,
        backgroundColor:"#72063c",
        borderRadius:8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius:6,
        shadowOpacity:0.25
    }
    });