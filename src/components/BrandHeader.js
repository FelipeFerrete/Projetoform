import { StyleSheet, Text, View } from 'react-native';
import { BRAND_NAME, BRAND_TAGLINE, theme } from '../theme';

export default function BrandHeader({ subtitle }) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.markRow}>
        <View style={styles.markBadge}>
          <Text style={styles.markBadgeText}>F</Text>
        </View>
        <View>
          <Text style={styles.brand}>
            {BRAND_NAME}
            <Text style={styles.brandAccent}>.</Text>
          </Text>
          <Text style={styles.tagline}>{BRAND_TAGLINE}</Text>
        </View>
      </View>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      <View style={styles.divider} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { marginBottom: theme.spacing.xl },
  markRow: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  markBadge: {
    width: 44,
    height: 44,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colors.brand,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: theme.colors.brand,
    shadowOpacity: 0.5,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  },
  markBadgeText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '900',
    letterSpacing: 1,
  },
  brand: {
    color: theme.colors.text,
    fontSize: 22,
    fontWeight: '900',
    letterSpacing: 3,
  },
  brandAccent: { color: theme.colors.brand },
  tagline: {
    color: theme.colors.textMuted,
    fontSize: 10,
    letterSpacing: 4,
    marginTop: 2,
  },
  subtitle: {
    color: theme.colors.textMuted,
    fontSize: 13,
    marginTop: 14,
    lineHeight: 18,
  },
  divider: {
    height: 2,
    width: 40,
    backgroundColor: theme.colors.brand,
    borderRadius: 2,
    marginTop: 14,
  },
});
