import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

function Header() {
    return (
        <View style={styles.wrapper}>
            <TouchableOpacity>
                <Text><Icon name='backward' size={25} color='#dfe6e9' /></Text>
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Chat</Text>
            <TouchableOpacity>
                <Text><Icon name='cart-plus' size={25} color='#dfe6e9' /></Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        margin: 30,
        width: '100%',
        flexDirection: 'row',
        backgroundColor: '#0984e3',
        justifyContent: "space-between",
        padding: 5
    },
    headerTitle: {
        fontSize: 30,
        fontWeight: "bold",
        color: '#d63031'
    }
})

export default Header;