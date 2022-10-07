import { FlatList, StyleSheet, View } from 'react-native';

import Footer from './src/components/Footer';
import Header from './src/components/Header';
import ItemList from './src/components/ItemList';

import products from './src/database/product/product';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.listItem}>
        <FlatList
          data={products}
          renderItem={({ item }) => <ItemList product={item} />}
          key={item => item.id}
        />
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listItem: {
    flex: 1,
    width: '100%',
    padding: 5
  }
});
