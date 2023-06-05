import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Count from './Counter';
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Counter App!</Text>
      <StatusBar style="auto" />
      <Count/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
