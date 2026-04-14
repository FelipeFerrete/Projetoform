import { StyleSheet, Text, View } from 'react-native';
import { DEV_CREDIT, theme } from '../theme';

export default function Footer() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.dot} />
      <Text style={styles.text}>{DEV_CREDIT}</Text>
      <Text style={styles.year}>© {new Date().getFullYear()} Ferrete Company's</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    marginTop: theme.spacing.xxl,
    paddingTop: theme.spacing.lg,
    borderTopWidth: 1,
    borderTopColor: theme.colors.border,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: theme.colors.brand,
    marginBottom: 10,
  },
  text: {
    color: theme.colors.textMuted,
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 0.3,
  },
  year: {
    color: theme.colors.textDim,
    fontSize: 10,
    marginTop: 4,
    letterSpacing: 1,
  },
});
