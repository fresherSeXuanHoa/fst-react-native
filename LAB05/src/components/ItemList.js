import { StyleSheet, View, Image, Button, Text, Alert } from "react-native";

function ItemList({ product }) {
    return (
        <View style={styles.wrapper}>
            <Image source={product.imageUrl} />
            <View style={styles.productInfo}>
                <Text style={styles.productName}>{product.name}</Text>
                <Text style={styles.productShop}>Shop: {product.shop}</Text>
            </View>
            <Button title="Chat" color='#d63031' onPress={() => Alert.alert("Chat")} />
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: 'row',
        padding: 5,
    },
    productInfo: {
        flex: 1,
    },
    productName: {
        textTransform: 'uppercase',
        fontWeight: "bold",
        color: '#d63031',
        marginHorizontal: 10,
        fontSize: 20
    },
    productShop: {
        fontWeight: "bold",
        color: '#d63031',
        marginHorizontal: 10,
    }
})

export default ItemList;