import {useState} from 'react';
import { StyleSheet, Animated, Image } from 'react-native';
import Constants from 'expo-constants';

import images from './assets/img/index'

export default function App() {
  const [location, setLocation] = useState(
    {
      "marginLeft": 100,
      "marginTop": 100
    }
  )

  return (
      <Animated.View
        onStartShouldSetResponder={() => true}
        onResponderGrant={(e) => setLocation({
          "marginLeft": e.nativeEvent.locationX,
          "marginTop": e.nativeEvent.locationY
        })}
        style={styles.container}
      >
      <Image style={{
        width: 100,
        height: 100,
        top: location.marginTop,
        left: location.marginLeft
      }} source={images.cat} />
      </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  }
});
