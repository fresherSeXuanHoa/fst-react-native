import { Image, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import icons from "../../../assets/icon";

function Footer({ work, setWork, todo, setTodo }) {
    return (
        <View style={styles.wrapper}>
            <TextInput placeholder="Enter To Do Here..." style={styles.input} value={work} onChangeText={setWork} />
            <TouchableOpacity onPress={setTodo}>
                <Image style={styles.add} source={icons.add} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        height: 50,
        width: '100%',
        flexDirection: 'row'
    },
    input: {
        flex: 1,
        borderColor: '#00a8ff',
        borderWidth: 1,
        borderRadius: 30,
        borderWidth: 2,
        paddingHorizontal: 20,
        marginHorizontal: 10,
    },
    add: {
        height: 50,
        width: 50
    }
})

export default Footer;