import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button } from 'react-native';
const Separator = () => (
  <View style={styles.separator}/>
);

export default function App() {

  const [text, onChangeText] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TextInput
          style = {styles.input}
          placeholder = 'ingrese texto'
          onChangeText = {onChangeText}
          value = {text}
        />
        <Button
          style = {styles.button}
          title = "Presioname"
        />
        <Separator/>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: '',
    marginHorizontal: 30,
  },
  input: {
    marginVertical: 12,
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }
});
