import { useState } from "react";
import { Button, Text, View, StyleSheet } from "react-native";

function CheckOut({ price }) {
    return (
        <View style={styles.wrapper}>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={styles.totalPrice}>Thành Tiền</Text>
                <Text style={styles.totalPrice}>{price + 25000} VND</Text>
            </View>
            <Button title="TIẾN HÀNH ĐẶT HÀNG" color='#e74c3c' />
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 20,
        width: '100%',
        padding: 15,
        backgroundColor: '#FFFFFF',
        justifyContent: 'space-between'
    },
    totalPrice: {
        margin: 10,
        fontSize: 15,
        color: '#c0392b',
        fontWeight: "bold"
    }
})

export default CheckOut;