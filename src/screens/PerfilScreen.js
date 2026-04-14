import { useState } from 'react';
import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const FOTO_PADRAO = require('../../assets/Form_logo.webp');

export default function PerfilScreen({ route, navigation }) {
  const { nome, curso, disciplina, telefone, cpf, descricao } = route.params;
  const [foto, setFoto] = useState(null);

  async function handleEscolherFoto() {
    const permissao = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissao.granted) {
      Alert.alert('Permissão necessária', 'Autorize o acesso à galeria para enviar uma foto.');
      return;
    }

    const resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.7,
    });

    if (!resultado.canceled && resultado.assets?.length) {
      setFoto(resultado.assets[0].uri);
    }
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>

      {/* Dados do desenvolvedor */}
      <View style={styles.devCard}>
        <TouchableOpacity onPress={handleEscolherFoto} activeOpacity={0.8}>
          <Image
            source={foto ? { uri: foto } : FOTO_PADRAO}
            style={styles.foto}
            resizeMode="cover"
          />
          <Text style={styles.trocarFoto}>Trocar foto</Text>
        </TouchableOpacity>
        <Text style={styles.devNome}>Felipe Ferrete</Text>
        <Text style={styles.devRm}>RM: 562999</Text>
      </View>

      {/* Dados enviados pelo formulário */}
      <View style={styles.card}>
        <Text style={styles.cardTitulo}>Dados Enviados</Text>

        <Text style={styles.campo}>Nome</Text>
        <Text style={styles.valor}>{nome}</Text>

        <Text style={styles.campo}>Curso</Text>
        <Text style={styles.valor}>{curso}</Text>

        <Text style={styles.campo}>Disciplina</Text>
        <Text style={styles.valor}>{disciplina}</Text>

        <Text style={styles.campo}>Telefone</Text>
        <Text style={styles.valor}>{telefone}</Text>

        <Text style={styles.campo}>CPF</Text>
        <Text style={styles.valor}>{cpf}</Text>

        <Text style={styles.campo}>Descrição</Text>
        <Text style={styles.valor}>{descricao}</Text>
      </View>

      <View style={styles.botao}>
        <Button title="Voltar ao Cadastro" onPress={() => navigation.goBack()} color="#1f6feb" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d1117',
  },
  content: {
    padding: 20,
  },
  devCard: {
    alignItems: 'center',
    backgroundColor: '#161b22',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#30363d',
    padding: 20,
    marginBottom: 20,
  },
  foto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: '#30363d',
  },
  devNome: {
    fontSize: 20,
    fontWeight: '700',
    color: '#c9d1d9',
    marginBottom: 4,
  },
  devRm: {
    fontSize: 14,
    color: '#8b949e',
  },
  trocarFoto: {
    fontSize: 12,
    color: '#1f6feb',
    textAlign: 'center',
    marginBottom: 12,
  },
  card: {
    backgroundColor: '#161b22',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#30363d',
    padding: 16,
    marginBottom: 20,
  },
  cardTitulo: {
    fontSize: 16,
    fontWeight: '600',
    color: '#7ee787',
    marginBottom: 14,
  },
  campo: {
    fontSize: 12,
    color: '#8b949e',
    marginTop: 8,
  },
  valor: {
    fontSize: 15,
    color: '#c9d1d9',
    marginTop: 2,
  },
  botao: {
    marginTop: 4,
  },
});
