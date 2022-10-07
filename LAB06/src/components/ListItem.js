import { StyleSheet, TouchableOpacity, View, Image, Text } from "react-native";
import icons from "../../assets/icon";


function ListItem({ todo }) {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>{todo}</Text>

            <TouchableOpacity>
                <Image style={styles.action} source={icons.delete} />
            </TouchableOpacity>

            <TouchableOpacity>
                <Image style={styles.action} source={icons.update} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        margin: 5,
        flexDirection: 'row',
        borderColor: '#2d3436',
        borderWidth: 2,
        borderRadius: 20
    },
    action: {
        height: 25,
        width: 25,
        margin: 5
    },
    title: {
        flex: 1,
        fontSize: 20,
        fontWeight: "bold",
        color: '#d63031',
        marginHorizontal: 10
    }
})

export default ListItem;