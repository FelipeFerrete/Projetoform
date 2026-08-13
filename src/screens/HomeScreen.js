import { useCallback, useState } from 'react';
import {
  Alert,
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import Footer from '../components/Footer';
import { theme } from '../theme';

const STORAGE_KEY = '@perfil_usuario';
const LOGO = require('../../assets/ferrete-logo.png');

export default function HomeScreen({ navigation }) {
  const [perfil, setPerfil] = useState(null);

  const carregarPerfil = useCallback(async () => {
    try {
      const dados = await AsyncStorage.getItem(STORAGE_KEY);
      setPerfil(dados ? JSON.parse(dados) : null);
    } catch (error) {
      console.log('Erro ao carregar perfil:', error);
      setPerfil(null);
    }
  }, []);

  useFocusEffect(useCallback(() => {
    carregarPerfil();
  }, [carregarPerfil]));

  function abrirPerfil() {
    if (!perfil) {
      Alert.alert('Perfil nao encontrado', 'Crie seu perfil para visualizar seu cartao.');
      return;
    }
    navigation.navigate('Perfil', perfil);
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <StatusBar barStyle="light-content" />

      <View style={styles.brandBar}>
        <View style={styles.liveDot} />
        <Text style={styles.brandBarText}>PERFIL PROFISSIONAL</Text>
        <Text style={styles.brandBarCode}>01</Text>
      </View>

      <View style={styles.hero}>
        <View style={styles.glowLarge} />
        <View style={styles.glowSmall} />
        <Image source={LOGO} style={styles.logo} resizeMode="contain" />
        <Text style={styles.eyebrow}>SEU CARTAO. SUA PRESENCA.</Text>
        <Text style={styles.title}>Construa um perfil{`\n`}com personalidade.</Text>
        <Text style={styles.description}>
          Organize seus dados, destaque sua trajetoria e mantenha seu perfil sempre pronto.
        </Text>

        <Pressable
          onPress={() => navigation.navigate('Cadastro')}
          style={({ pressed }) => [styles.primaryButton, pressed && styles.primaryButtonPressed]}
        >
          <Text style={styles.primaryButtonText}>{perfil ? 'EDITAR MEU PERFIL' : 'CRIAR MEU PERFIL'}  {'->'}</Text>
        </Pressable>

        <Pressable
          onPress={abrirPerfil}
          style={({ pressed }) => [styles.secondaryButton, pressed && styles.secondaryButtonPressed]}
        >
          <Text style={styles.secondaryButtonText}>VER CARTAO DE PERFIL</Text>
          <View style={[styles.statusDot, perfil && styles.statusDotReady]} />
        </Pressable>
      </View>

      <View style={styles.statusCard}>
        <View style={[styles.statusIcon, perfil ? styles.statusIconReady : styles.statusIconEmpty]}>
          <Text style={styles.statusIconText}>{perfil ? 'OK' : '--'}</Text>
        </View>
        <View style={styles.statusCopy}>
          <Text style={styles.statusLabel}>STATUS DO PERFIL</Text>
          <Text style={styles.statusTitle} numberOfLines={1}>
            {perfil ? perfil.nome : 'Pronto para comecar'}
          </Text>
          <Text style={styles.statusDetail} numberOfLines={1}>
            {perfil ? `${perfil.curso}  /  ${perfil.disciplina}` : 'Preencha seus dados em poucos passos'}
          </Text>
        </View>
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>COMO FUNCIONA</Text>
        <View style={styles.sectionLine} />
      </View>
      <View style={styles.steps}>
        <Step number="01" title="Cadastre" text="Inclua seus dados essenciais." />
        <Step number="02" title="Personalize" text="Escolha uma foto para seu cartao." />
        <Step number="03" title="Apresente" text="Consulte seu perfil quando precisar." last />
      </View>

      <Footer />
    </ScrollView>
  );
}

function Step({ number, title, text, last }) {
  return (
    <View style={[styles.step, !last && styles.stepDivider]}>
      <Text style={styles.stepNumber}>{number}</Text>
      <View style={styles.stepCopy}>
        <Text style={styles.stepTitle}>{title}</Text>
        <Text style={styles.stepText}>{text}</Text>
      </View>
      <Text style={styles.stepArrow}>{'>'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.bg },
  content: { padding: theme.spacing.xl, paddingBottom: theme.spacing.xxl },
  brandBar: { flexDirection: 'row', alignItems: 'center', marginBottom: theme.spacing.lg },
  liveDot: { width: 7, height: 7, borderRadius: 4, backgroundColor: theme.colors.brand, marginRight: 8 },
  brandBarText: { color: theme.colors.textMuted, fontSize: 10, fontWeight: '800', letterSpacing: 1.8 },
  brandBarCode: { marginLeft: 'auto', color: theme.colors.textDim, fontSize: 11, fontWeight: '800', letterSpacing: 1 },
  hero: { overflow: 'hidden', backgroundColor: theme.colors.surface, borderColor: theme.colors.border, borderWidth: 1, borderRadius: theme.radius.xl, padding: theme.spacing.xl, marginBottom: theme.spacing.lg },
  glowLarge: { position: 'absolute', width: 270, height: 270, borderRadius: 135, backgroundColor: theme.colors.brand, opacity: 0.1, top: -135, right: -85 },
  glowSmall: { position: 'absolute', width: 100, height: 100, borderRadius: 50, backgroundColor: theme.colors.accent, opacity: 0.08, bottom: 35, left: -40 },
  logo: { width: '100%', height: 102, marginBottom: theme.spacing.lg },
  eyebrow: { color: theme.colors.brandSoft, fontSize: 10, fontWeight: '900', letterSpacing: 1.8, marginBottom: 10 },
  title: { color: theme.colors.text, fontSize: 30, lineHeight: 35, fontWeight: '900', letterSpacing: -0.6 },
  description: { color: theme.colors.textMuted, fontSize: 14, lineHeight: 21, marginTop: theme.spacing.md, marginBottom: theme.spacing.xl },
  primaryButton: { minHeight: 52, backgroundColor: theme.colors.brand, borderRadius: theme.radius.md, alignItems: 'center', justifyContent: 'center', shadowColor: theme.colors.brand, shadowOpacity: 0.45, shadowRadius: 16, shadowOffset: { width: 0, height: 7 }, elevation: 8 },
  primaryButtonPressed: { backgroundColor: theme.colors.brandDark, transform: [{ scale: 0.98 }] },
  primaryButtonText: { color: '#fff', fontSize: 12, fontWeight: '900', letterSpacing: 1.5 },
  secondaryButton: { minHeight: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderRadius: theme.radius.md, borderColor: theme.colors.borderStrong, borderWidth: 1, marginTop: theme.spacing.sm },
  secondaryButtonPressed: { backgroundColor: theme.colors.surfaceElevated },
  secondaryButtonText: { color: theme.colors.text, fontSize: 11, fontWeight: '800', letterSpacing: 1.4 },
  statusDot: { width: 7, height: 7, borderRadius: 4, backgroundColor: theme.colors.textDim, marginLeft: 9 },
  statusDotReady: { backgroundColor: theme.colors.success },
  statusCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: theme.colors.surfaceElevated, borderWidth: 1, borderColor: theme.colors.border, borderRadius: theme.radius.lg, padding: theme.spacing.lg, marginBottom: theme.spacing.xxl },
  statusIcon: { width: 42, height: 42, borderRadius: theme.radius.md, alignItems: 'center', justifyContent: 'center', marginRight: theme.spacing.md },
  statusIconEmpty: { backgroundColor: '#252a35' },
  statusIconReady: { backgroundColor: 'rgba(34,197,94,0.15)', borderWidth: 1, borderColor: 'rgba(34,197,94,0.35)' },
  statusIconText: { color: theme.colors.text, fontSize: 11, fontWeight: '900', letterSpacing: 1 },
  statusCopy: { flex: 1 },
  statusLabel: { color: theme.colors.textDim, fontSize: 9, fontWeight: '800', letterSpacing: 1.2, marginBottom: 3 },
  statusTitle: { color: theme.colors.text, fontSize: 15, fontWeight: '800' },
  statusDetail: { color: theme.colors.textMuted, fontSize: 12, marginTop: 3 },
  sectionHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: theme.spacing.sm },
  sectionTitle: { color: theme.colors.text, fontSize: 12, fontWeight: '900', letterSpacing: 1.6 },
  sectionLine: { height: 1, flex: 1, backgroundColor: theme.colors.border, marginLeft: theme.spacing.md },
  steps: { backgroundColor: theme.colors.surface, borderWidth: 1, borderColor: theme.colors.border, borderRadius: theme.radius.lg, paddingHorizontal: theme.spacing.lg },
  step: { minHeight: 77, flexDirection: 'row', alignItems: 'center' },
  stepDivider: { borderBottomWidth: 1, borderBottomColor: theme.colors.border },
  stepNumber: { color: theme.colors.brand, fontSize: 12, fontWeight: '900', letterSpacing: 1, width: 39 },
  stepCopy: { flex: 1 },
  stepTitle: { color: theme.colors.text, fontSize: 14, fontWeight: '800', marginBottom: 2 },
  stepText: { color: theme.colors.textMuted, fontSize: 12 },
  stepArrow: { color: theme.colors.textDim, fontSize: 18, fontWeight: '300' },
});
