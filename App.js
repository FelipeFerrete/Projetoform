import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CadastroScreen from './src/screens/CadastroScreen';
import PerfilScreen from './src/screens/PerfilScreen';
import { theme } from './src/theme';

const Stack = createNativeStackNavigator();

const navTheme = {
  dark: true,
  colors: {
    primary: theme.colors.brand,
    background: theme.colors.bg,
    card: theme.colors.bg,
    text: theme.colors.text,
    border: theme.colors.border,
    notification: theme.colors.brand,
  },
};

export default function App() {
  return (
    <NavigationContainer theme={navTheme}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: theme.colors.bg },
          headerTintColor: theme.colors.text,
          headerTitleStyle: { fontWeight: '800', letterSpacing: 2 },
          headerShadowVisible: false,
          contentStyle: { backgroundColor: theme.colors.bg },
        }}
      >
        <Stack.Screen name="Cadastro" component={CadastroScreen} options={{ title: 'CADASTRO' }} />
        <Stack.Screen name="Perfil" component={PerfilScreen} options={{ title: 'PERFIL' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
