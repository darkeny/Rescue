import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}> RESCUE </Text>
      <Text> ++</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#74BBFB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    color:"#fff",
    fontWeight:"bold",
    fontSize:25,
  }
});
