import { StyleSheet, View, Text } from "react-native";

function Header({ header }) {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.header}>{header}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 50,
        width: '100%',
        height: 50,
        alignItems: "center"
    },
    header: {
        fontSize: 30,
        fontWeight: "bold",
        color: '#2f3640'
    }
})

export default Header;