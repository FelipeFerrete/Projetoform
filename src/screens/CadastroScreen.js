import { useEffect, useState } from 'react';
import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { MaskedTextInput } from 'react-native-mask-text';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BrandHeader from '../components/BrandHeader';
import Footer from '../components/Footer';
import { theme } from '../theme';

const STORAGE_KEY = '@perfil_usuario';

export default function CadastroScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [curso, setCurso] = useState('');
  const [disciplina, setDisciplina] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cpf, setCpf] = useState('');
  const [descricao, setDescricao] = useState('');
  const [focado, setFocado] = useState(null);

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

  const inputStyle = (key) => [
    styles.input,
    focado === key && styles.inputFocado,
  ];

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="handled"
    >
      <BrandHeader subtitle="Preencha seus dados para gerar um cartão de perfil moderno." />

      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <View style={styles.cardIndicator} />
          <Text style={styles.cardTitulo}>Identificação</Text>
        </View>

        <Text style={styles.label}>Nome completo</Text>
        <TextInput
          style={inputStyle('nome')}
          placeholder="Ex.: Felipe Ferrete"
          placeholderTextColor={theme.colors.textDim}
          value={nome}
          onChangeText={setNome}
          onFocus={() => setFocado('nome')}
          onBlur={() => setFocado(null)}
        />

        <View style={styles.row}>
          <View style={styles.flex1}>
            <Text style={styles.label}>Curso</Text>
            <TextInput
              style={inputStyle('curso')}
              placeholder="Ex.: ADS"
              placeholderTextColor={theme.colors.textDim}
              value={curso}
              onChangeText={setCurso}
              onFocus={() => setFocado('curso')}
              onBlur={() => setFocado(null)}
            />
          </View>
          <View style={styles.flex1}>
            <Text style={styles.label}>Disciplina</Text>
            <TextInput
              style={inputStyle('disciplina')}
              placeholder="Ex.: Mobile"
              placeholderTextColor={theme.colors.textDim}
              value={disciplina}
              onChangeText={setDisciplina}
              onFocus={() => setFocado('disciplina')}
              onBlur={() => setFocado(null)}
            />
          </View>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <View style={[styles.cardIndicator, { backgroundColor: theme.colors.accent }]} />
          <Text style={styles.cardTitulo}>Contato</Text>
        </View>

        <Text style={styles.label}>Telefone</Text>
        <MaskedTextInput
          mask="(99) 99999-9999"
          style={inputStyle('telefone')}
          placeholder="(00) 00000-0000"
          placeholderTextColor={theme.colors.textDim}
          keyboardType="numeric"
          value={telefone}
          onChangeText={(text) => setTelefone(text)}
          onFocus={() => setFocado('telefone')}
          onBlur={() => setFocado(null)}
        />

        <Text style={styles.label}>CPF</Text>
        <MaskedTextInput
          mask="999.999.999-99"
          style={inputStyle('cpf')}
          placeholder="000.000.000-00"
          placeholderTextColor={theme.colors.textDim}
          keyboardType="numeric"
          value={cpf}
          onChangeText={(text) => setCpf(text)}
          onFocus={() => setFocado('cpf')}
          onBlur={() => setFocado(null)}
        />
      </View>

      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <View style={[styles.cardIndicator, { backgroundColor: theme.colors.success }]} />
          <Text style={styles.cardTitulo}>Sobre você</Text>
        </View>

        <Text style={styles.label}>Descrição</Text>
        <TextInput
          style={[inputStyle('descricao'), styles.textArea]}
          placeholder="Conte um pouco sobre você..."
          placeholderTextColor={theme.colors.textDim}
          value={descricao}
          onChangeText={setDescricao}
          multiline
          onFocus={() => setFocado('descricao')}
          onBlur={() => setFocado(null)}
        />
      </View>

      <Pressable
        onPress={handleEnviar}
        style={({ pressed }) => [styles.btnPrimary, pressed && styles.btnPrimaryPressed]}
      >
        <Text style={styles.btnPrimaryText}>GERAR PERFIL →</Text>
      </Pressable>

      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.bg },
  content: { padding: theme.spacing.xl, paddingBottom: theme.spacing.xxl },
  card: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.lg,
    borderWidth: 1,
    borderColor: theme.colors.border,
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.lg,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.lg,
    gap: 10,
  },
  cardIndicator: {
    width: 4,
    height: 18,
    borderRadius: 2,
    backgroundColor: theme.colors.brand,
  },
  cardTitulo: {
    fontSize: 14,
    fontWeight: '800',
    color: theme.colors.text,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
  label: {
    color: theme.colors.textMuted,
    fontSize: 11,
    fontWeight: '700',
    marginBottom: 6,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  input: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.radius.md,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 14,
    color: theme.colors.text,
    backgroundColor: theme.colors.surfaceElevated,
    fontSize: 15,
  },
  inputFocado: {
    borderColor: theme.colors.brand,
    backgroundColor: '#1f212b',
  },
  textArea: { height: 90, textAlignVertical: 'top' },
  row: { flexDirection: 'row', gap: 12 },
  flex1: { flex: 1 },
  btnPrimary: {
    backgroundColor: theme.colors.brand,
    borderRadius: theme.radius.md,
    paddingVertical: 16,
    alignItems: 'center',
    shadowColor: theme.colors.brand,
    shadowOpacity: 0.5,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 6 },
    elevation: 8,
    marginTop: theme.spacing.sm,
  },
  btnPrimaryPressed: { backgroundColor: theme.colors.brandDark, transform: [{ scale: 0.98 }] },
  btnPrimaryText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '900',
    letterSpacing: 2,
  },
});
