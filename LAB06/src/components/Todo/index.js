import { View, Text, StyleSheet } from 'react-native'

function ToDo({ todo }) {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.order}>+</Text>
            <Text style={styles.title}>{todo}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        height: 50,
        backgroundColor: '#00a8ff',
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    order: {
        minWidth: 65,
        paddingLeft: 25,
        color: '#f5f6fa',
        fontWeight: 'bold',
        fontSize: 20,
    },
    title: {
        flex: 1,
        color: '#f5f6fa',
        fontWeight: 'bold',
        fontSize: 20,
    }
})

export default ToDo;