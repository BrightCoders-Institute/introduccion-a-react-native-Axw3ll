import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import User from './User';

export default function App() {
  return (
    
    <View style={styles.container}>
      <Text>Pass props to a component!</Text>
      <StatusBar style="auto" />
      <User nombre='Axel'/>
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
