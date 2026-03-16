import { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from "./src/components/estilo"

export default function App() {
  const [data, setData] = useState()
  return (
    <SafeAreaView>
    <Image
      source={require("./assets/Form_logo.webp")}
    />  
    <View style={styles.container}>
    <Text style={styles.texto}>Formulario - CP1</Text>
    </View>
    </SafeAreaView>
  );
}


