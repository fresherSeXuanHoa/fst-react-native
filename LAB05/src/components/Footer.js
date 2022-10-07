import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

function Footer() {
    return (
        <View style={styles.wrapper}>
            <TouchableOpacity>
                <Text><Icon name='backward' size={35} color='#dfe6e9' /></Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text><Icon name='home' size={35} color='#dfe6e9' /></Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text><Icon name='backward' size={35} color='#dfe6e9' /></Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        flexDirection: 'row',
        backgroundColor: '#0984e3',
        justifyContent: "space-between",
        padding: 10
    }
})

export default Footer;