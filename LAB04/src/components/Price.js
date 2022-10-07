import { useState } from "react";
import { Text, View, StyleSheet } from "react-native"

function Price({ price }) {
    console.log(price);
    return (
        <View style={styles.wrapper}>
            <Text style={styles.price}>Tạm Tính</Text>
            <Text style={styles.price}>{price} VND</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 20,
        flexDirection: "row",
        width: '100%',
        padding: 5,
        backgroundColor: '#FFFFFF',
        justifyContent: "space-between",
        flex: 1
    },
    price: {
        color: '#e74c3c',
        fontSize: 20,
        fontWeight: "bold",
        margin: 10,
    }
})

export default Price;