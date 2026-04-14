import { useState } from 'react';
import {
  Alert,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import BrandHeader from '../components/BrandHeader';
import Footer from '../components/Footer';
import { theme } from '../theme';

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
      <BrandHeader subtitle="Cartão de perfil gerado com sucesso." />

      {/* Hero do perfil */}
      <View style={styles.hero}>
        <View style={styles.heroGlow} />
        <TouchableOpacity onPress={handleEscolherFoto} activeOpacity={0.85} style={styles.avatarWrap}>
          <View style={styles.avatarRing}>
            <Image
              source={foto ? { uri: foto } : FOTO_PADRAO}
              style={styles.foto}
              resizeMode="cover"
            />
          </View>
          <View style={styles.badgeCam}>
            <Text style={styles.badgeCamText}>＋</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.trocarFoto}>Toque para trocar a foto</Text>

        <Text style={styles.devNome}>{nome || 'Felipe Ferrete'}</Text>
        <View style={styles.devMetaRow}>
          <View style={styles.pill}>
            <Text style={styles.pillText}>{curso || 'Curso'}</Text>
          </View>
          <View style={[styles.pill, styles.pillAlt]}>
            <Text style={styles.pillText}>{disciplina || 'Disciplina'}</Text>
          </View>
        </View>
      </View>

      {/* Dados enviados */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <View style={styles.cardIndicator} />
          <Text style={styles.cardTitulo}>Dados enviados</Text>
        </View>

        <DadoLinha label="Nome" valor={nome} />
        <DadoLinha label="Curso" valor={curso} />
        <DadoLinha label="Disciplina" valor={disciplina} />
        <DadoLinha label="Telefone" valor={telefone} />
        <DadoLinha label="CPF" valor={cpf} />
        <DadoLinha label="Descrição" valor={descricao} ultimo />
      </View>

      <Pressable
        onPress={() => navigation.goBack()}
        style={({ pressed }) => [styles.btnGhost, pressed && styles.btnGhostPressed]}
      >
        <Text style={styles.btnGhostText}>← VOLTAR AO CADASTRO</Text>
      </Pressable>

      <Footer />
    </ScrollView>
  );
}

function DadoLinha({ label, valor, ultimo }) {
  return (
    <View style={[dadoStyles.row, !ultimo && dadoStyles.rowDivider]}>
      <Text style={dadoStyles.label}>{label}</Text>
      <Text style={dadoStyles.valor}>{valor || '—'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.bg },
  content: { padding: theme.spacing.xl, paddingBottom: theme.spacing.xxl },

  hero: {
    alignItems: 'center',
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.xl,
    borderWidth: 1,
    borderColor: theme.colors.border,
    paddingVertical: theme.spacing.xl,
    paddingHorizontal: theme.spacing.lg,
    marginBottom: theme.spacing.lg,
    overflow: 'hidden',
  },
  heroGlow: {
    position: 'absolute',
    top: -60,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: theme.colors.brand,
    opacity: 0.14,
  },
  avatarWrap: { position: 'relative' },
  avatarRing: {
    width: 116,
    height: 116,
    borderRadius: 58,
    padding: 3,
    backgroundColor: theme.colors.brand,
    shadowColor: theme.colors.brand,
    shadowOpacity: 0.55,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 8 },
    elevation: 10,
  },
  foto: {
    width: '100%',
    height: '100%',
    borderRadius: 56,
    borderWidth: 3,
    borderColor: theme.colors.surface,
  },
  badgeCam: {
    position: 'absolute',
    right: 0,
    bottom: 4,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: theme.colors.text,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: theme.colors.surface,
  },
  badgeCamText: { fontSize: 18, color: theme.colors.bg, fontWeight: '900', marginTop: -2 },
  trocarFoto: {
    fontSize: 11,
    color: theme.colors.textMuted,
    marginTop: 10,
    letterSpacing: 1,
    textTransform: 'uppercase',
    fontWeight: '700',
  },
  devNome: {
    fontSize: 24,
    fontWeight: '900',
    color: theme.colors.text,
    marginTop: 16,
    letterSpacing: 0.3,
  },
  devMetaRow: { flexDirection: 'row', gap: 8, marginTop: 10 },
  pill: {
    backgroundColor: 'rgba(255,106,26,0.14)',
    borderWidth: 1,
    borderColor: 'rgba(255,106,26,0.35)',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: theme.radius.pill,
  },
  pillAlt: {
    backgroundColor: 'rgba(245,165,36,0.12)',
    borderColor: 'rgba(245,165,36,0.35)',
  },
  pillText: {
    color: theme.colors.text,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.5,
  },

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
    marginBottom: theme.spacing.md,
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

  btnGhost: {
    borderWidth: 1,
    borderColor: theme.colors.borderStrong,
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.md,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: theme.spacing.sm,
  },
  btnGhostPressed: { backgroundColor: theme.colors.surfaceElevated },
  btnGhostText: {
    color: theme.colors.text,
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 2,
  },
});

const dadoStyles = StyleSheet.create({
  row: { paddingVertical: 10 },
  rowDivider: { borderBottomWidth: 1, borderBottomColor: theme.colors.border },
  label: {
    color: theme.colors.textMuted,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  valor: {
    color: theme.colors.text,
    fontSize: 15,
    fontWeight: '500',
  },
});
