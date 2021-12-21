import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PrimaryColor } from './config/constants';
import { Authflow } from './utils/navigator';

export default function App() {
  return (
    <NavigationContainer>
    <View >
      {/* <Text>Open up App.js to start working on your app!</Text> */}

      <StatusBar backgroundColor={PrimaryColor} style="auto" />
      <Authflow/>
    </View>
    </NavigationContainer>
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
