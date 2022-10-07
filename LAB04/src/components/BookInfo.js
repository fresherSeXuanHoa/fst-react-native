import { Image, View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import BookIcon from '../../assets/img/book.png'

function BookInfo({ originPrice, quantity, onQuantityIncrease, onQuantityDecrease }) {
    return (
        <View style={styles.wrapper}>
            <Image source={BookIcon} style={styles.bookIcon} />
            <View style={{ flexDirection: 'column', margin: 10 }}>
                <Text style={styles.bookTitle}>Nguyên Hàm Tích Phân Và Ứng Dụng</Text>
                <Text style={styles.bookDesc}>Cung Cấp Bởi Tiki Trading</Text>
                <Text style={styles.bookPrice}>{originPrice * 0.75} VND</Text>
                <Text style={styles.bookOriginPrice}>{originPrice} VND</Text>

                <View style={{ flexDirection: 'row', margin: 10 }}>
                    <TouchableOpacity onPress={onQuantityDecrease}>
                        <Text><Icon name="minus" size={20} /></Text>
                    </TouchableOpacity>

                    <Text style={styles.quantity}>{quantity}</Text>

                    <TouchableOpacity onPress={onQuantityIncrease}>
                        <Text><Icon name="plus" size={20} /></Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: "row",
        width: '100%',
        padding: 5,
        backgroundColor: '#FFFFFF'
    },
    bookIcon: {
        width: 150,
        height: 225,
        resizeMode: "stretch",
        margin: 5,

    },
    bookTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#eb4d4b',
        marginHorizontal: 10,
        marginVertical: 5
    },
    bookDesc: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#130f40',
        marginHorizontal: 10,
        marginVertical: 5
    },
    bookPrice: {
        fontSize: 20,
        fontWeight: 'bold',
        marginHorizontal: 10,
        marginVertical: 5,
        color: '#c0392b'
    },
    bookOriginPrice: {
        fontWeight: 'bold',
        marginHorizontal: 10,
        marginVertical: 5,
        color: '#bdc3c7',
        textDecorationLine: 'line-through'
    },
    quantity: {
        marginHorizontal: 10,
    }
})

export default BookInfo;