import {useRef, useEffect} from 'react';
import { Text, StyleSheet, Animated, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  const fadeAnimmated = useRef(new Animated.Value(0)).current;
  
  useEffect(
    () => {
    Animated.timing(fadeAnimmated, {
      toValue: 1,
      duration: 2000
    }).start();
  });

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            opacity: fadeAnimmated
          }
        ]}
      >
        <Text style={styles.fadingText}>Fading View!</Text>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
    fadingContainer: {
    padding: 20,
    backgroundColor: "powderblue"
  },
  fadingText: {
    fontSize: 28
  },
});
