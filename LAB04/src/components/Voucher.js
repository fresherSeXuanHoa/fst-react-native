import { StyleSheet, View, Text, TextInput, Button } from "react-native";

function Voucher() {
    return (
        <View style={styles.wrapper}>
            <TextInput style={styles.voucherInput} placeholder="Nhập Mã Giảm Giá" />
            <Button title="Áp Dụng" />
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 20,
        flexDirection: 'row',
        width: '100%',
        padding: 5,
        backgroundColor: '#FFFFFF',
        justifyContent: 'space-between'
    },
    voucherInput: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderColor: '#34495e',
        borderWidth: 2
    }
})

export default Voucher;