import { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
 
function Renderizado({ nomeAluno, cursoAluno, disciplinaAluno, descricaoAluno, limpar }) {
  return (
<View style={styles.resultContainer}>
<Text style={styles.resultTitle}>Dados Enviados:</Text>
<Text>Nome: {nomeAluno}</Text>
<Text>Curso: {cursoAluno}</Text>
<Text>Disciplina: {disciplinaAluno}</Text>
<Text>Descrição: {descricaoAluno}</Text>
<View style={styles.buttonContainer}>
<Button title="Limpar" onPress={limpar} color="#d73a49" />
</View>
</View>
  );
}
 
export default function App() {
  const [nomeAluno, setNomeAluno] = useState('');
  const [cursoAluno, setCursoAluno] = useState('');
  const [disciplinaAluno, setDisciplinaAluno] = useState('');
  const [descricaoAluno, setDescricaoAluno] = useState('');
  const [mostrarDados, setMostrarDados] = useState(false);
 
  useEffect(() => {
    console.log('UseEffect executado');
  }, []);
 
  const limparFormulario = () => {
    setNomeAluno('');
    setCursoAluno('');
    setDisciplinaAluno('');
    setDescricaoAluno('');
    setMostrarDados(false);
  };
 
  return (
<SafeAreaView style={styles.container}>
<ScrollView contentContainerStyle={styles.formContainer}>
<Text style={styles.title}>Cadastro de Perfil</Text>
 
        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={nomeAluno}
          onChangeText={valor => setNomeAluno(valor)}
        />
<TextInput
          style={styles.input}
          placeholder="Curso"
          value={cursoAluno}
          onChangeText={valor => setCursoAluno(valor)}
        />
<TextInput
          style={styles.input}
          placeholder="Disciplina"
          value={disciplinaAluno}
          onChangeText={valor => setDisciplinaAluno(valor)}
        />
<TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Breve descrição sobre você"
          value={descricaoAluno}
          onChangeText={valor => setDescricaoAluno(valor)}
          multiline
        />
 
        <View style={styles.buttonContainer}>
        <Button title="Enviar" onPress={() => setMostrarDados(true)} color="#238636" />
        </View>
 
        {mostrarDados && (
        <Renderizado
            nomeAluno={nomeAluno}
            cursoAluno={cursoAluno}
            disciplinaAluno={disciplinaAluno}
            descricaoAluno={descricaoAluno}
            limpar={limparFormulario}
          />
        )}
</ScrollView>
</SafeAreaView>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d1117',
  },
  formContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#c9d1d9',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#30363d',
    borderRadius: 6,
    padding: 10,
    marginBottom: 12,
    color: '#c9d1d9',
    backgroundColor: '#161b22',
  },
  textArea: {
    height: 80,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    marginVertical: 10,
  },
  resultContainer: {
    marginTop: 20,
    padding: 15,
    borderRadius: 6,
    backgroundColor: '#161b22',
    borderWidth: 1,
    borderColor: '#30363d',
  },
  resultTitle: {
    fontWeight: '600',
    color: '#7ee787',
    marginBottom: 10,
  },
});