import { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

import BookInfo from './src/components/BookInfo';
import CheckOut from './src/components/Checkout';
import Price from './src/components/Price';
import Voucher from './src/components/Voucher';

export default function App() {
  const originPrice = 200000

  const [quantity, setQuantity] = useState(0)
  const [price, setPrice] = useState(0)

  useEffect(() => setPrice(originPrice * 0.75 * quantity), [quantity])

  return (
    <SafeAreaView style={styles.container}>
      <BookInfo originPrice={originPrice} quantity={quantity} onQuantityIncrease={() => setQuantity(quantity + 1)} onQuantityDecrease={() => setQuantity(quantity - 1)} />
      <Voucher />
      <Price price={price} />
      <CheckOut price={price} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: '#C4C4C4',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
