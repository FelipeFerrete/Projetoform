import { useEffect, useState } from 'react';
import {
  Alert,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { MaskedTextInput } from 'react-native-mask-text';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@perfil_usuario';

export default function CadastroScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [curso, setCurso] = useState('');
  const [disciplina, setDisciplina] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cpf, setCpf] = useState('');
  const [descricao, setDescricao] = useState('');

  useEffect(() => {
    async function carregarDados() {
      try {
        const json = await AsyncStorage.getItem(STORAGE_KEY);
        if (json) {
          const dados = JSON.parse(json);
          setNome(dados.nome ?? '');
          setCurso(dados.curso ?? '');
          setDisciplina(dados.disciplina ?? '');
          setTelefone(dados.telefone ?? '');
          setCpf(dados.cpf ?? '');
          setDescricao(dados.descricao ?? '');
        }
      } catch (e) {
        console.log('Erro ao carregar dados:', e);
      }
    }
    carregarDados();
  }, []);

  async function handleEnviar() {
    if (!nome || !curso || !disciplina || !telefone || !cpf || !descricao) {
      Alert.alert('Campos obrigatórios', 'Por favor, preencha todos os campos antes de enviar.');
      return;
    }

    const dados = { nome, curso, disciplina, telefone, cpf, descricao };

    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(dados));
    } catch (e) {
      console.log('Erro ao salvar dados:', e);
    }

    navigation.navigate('Perfil', dados);
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.titulo}>Cadastro de Perfil</Text>

      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        placeholderTextColor="#8b949e"
        value={nome}
        onChangeText={setNome}
      />

      <Text style={styles.label}>Curso</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu curso"
        placeholderTextColor="#8b949e"
        value={curso}
        onChangeText={setCurso}
      />

      <Text style={styles.label}>Disciplina</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite a disciplina"
        placeholderTextColor="#8b949e"
        value={disciplina}
        onChangeText={setDisciplina}
      />

      <Text style={styles.label}>Telefone</Text>
      <MaskedTextInput
        mask="(99) 99999-9999"
        style={styles.input}
        placeholder="(00) 00000-0000"
        placeholderTextColor="#8b949e"
        keyboardType="numeric"
        value={telefone}
        onChangeText={(text) => setTelefone(text)}
      />

      <Text style={styles.label}>CPF</Text>
      <MaskedTextInput
        mask="999.999.999-99"
        style={styles.input}
        placeholder="000.000.000-00"
        placeholderTextColor="#8b949e"
        keyboardType="numeric"
        value={cpf}
        onChangeText={(text) => setCpf(text)}
      />

      <Text style={styles.label}>Descrição</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Breve descrição sobre você"
        placeholderTextColor="#8b949e"
        value={descricao}
        onChangeText={setDescricao}
        multiline
      />

      <View style={styles.botao}>
        <Button title="Enviar" onPress={handleEnviar} color="#238636" />
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
  titulo: {
    fontSize: 24,
    fontWeight: '600',
    color: '#c9d1d9',
    textAlign: 'center',
    marginBottom: 24,
  },
  label: {
    color: '#8b949e',
    fontSize: 13,
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#30363d',
    borderRadius: 6,
    padding: 10,
    marginBottom: 14,
    color: '#c9d1d9',
    backgroundColor: '#161b22',
  },
  textArea: {
    height: 80,
    textAlignVertical: 'top',
  },
  botao: {
    marginTop: 8,
  },
});
