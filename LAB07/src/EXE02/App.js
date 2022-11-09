import {useRef} from 'react';
import { Text, StyleSheet, Animated, SafeAreaView, Button, View } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  const fadeAnimmated = useRef(new Animated.Value(0)).current;

  const handleFade = () => {
    Animated.timing(fadeAnimmated, {
      toValue: 100,
      duration: 1000
    }).start();
  }

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            top: fadeAnimmated
          }
        ]}
      >
        <Text style={styles.fadingText}>Fading View!</Text>
      </Animated.View>
       <View style={styles.buttonRow}>
        <Button title="Fade Animated" onPress={handleFade} />
      </View>
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
  buttonRow: {
    flexBasis: 100,
    justifyContent: "space-evenly",
    marginVertical: 16
  }
});
