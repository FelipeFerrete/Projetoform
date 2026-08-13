# Projetoform — CP2

Aplicativo mobile de cadastro de perfil criado com **React Native** e **Expo**. Este repositório tem finalidade educacional: reúne a entrega da CP2 e um espaço prático para estudar desenvolvimento mobile, organização de código e colaboração com agentes de IA, como **Claude** e **Codex**.

O uso de agentes faz parte do processo de aprendizagem e apoio ao desenvolvimento. Toda sugestão gerada por IA deve ser revisada, compreendida e validada antes de ser incorporada ao projeto.

## O que o aplicativo demonstra

- Formulário de perfil com Nome, Curso, Disciplina, Telefone, CPF e Descrição.
- Validação de campos obrigatórios e máscaras para telefone e CPF.
- Navegação entre as telas de Cadastro e Perfil com React Navigation.
- Persistência local dos dados usando AsyncStorage.
- Foto de perfil opcional, escolhida da galeria com `expo-image-picker`.
- Sistema visual centralizado em `src/theme.js` e componentes reutilizáveis.

## Estrutura do projeto

```text
src/
  components/  # Componentes visuais compartilhados
  screens/     # Telas CadastroScreen e PerfilScreen
  theme.js     # Cores, espaçamentos e demais tokens visuais
assets/        # Imagens incluídas no aplicativo
```

`App.js` configura a navegação principal e `index.js` é o ponto de entrada da aplicação.

## Tecnologias

- Expo 54 e React Native
- React Navigation (Native Stack)
- AsyncStorage
- react-native-mask-text
- expo-image-picker

## Como executar

Pré-requisitos: Node.js, npm e Expo Go no celular ou um emulador configurado.

```bash
git clone https://github.com/FelipeFerrete/Projetoform.git
cd Projetoform
npm install
npm start
```

Após iniciar, leia o QR Code com o Expo Go. Também é possível executar em plataformas específicas:

```bash
npm run android
npm run ios
npm run web
```

## Desenvolvimento e contribuição

Use componentes funcionais em JavaScript, indentação de 2 espaços, aspas simples e nomes em PascalCase para componentes (por exemplo, `ProfileCard.js`). Prefira os tokens de `src/theme.js` a valores visuais fixos.

Antes de enviar alterações, teste manualmente o fluxo de cadastro, as máscaras, a persistência após reiniciar o app e, quando aplicável, as permissões da galeria. Use commits objetivos no formato `feat:`, `refactor:` ou `docs:`, com descrição em português.

## Autor

**Felipe Ferrete** — RM: 562999  
CP2 — Disciplina de Web Development
