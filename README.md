# Projetoform — CP2

Aplicativo mobile de cadastro de perfil desenvolvido com **React Native + Expo**.
O usuário preenche um formulário com seus dados e é redirecionado para uma tela de perfil exibindo as informações enviadas. Os dados são persistidos localmente com AsyncStorage, sendo recarregados automaticamente ao reabrir o app.


## Telas

| Cadastro | Perfil |
|---|---|
| Formulário com validação de campos obrigatórios, máscara de telefone e CPF | Exibe os dados enviados junto com o card do desenvolvedor |

---

## Funcionalidades

- Formulário com os campos: **Nome**, **Curso**, **Disciplina**, **Telefone**, **CPF** e **Descrição**
- Máscaras automáticas para Telefone `(00) 00000-0000` e CPF `000.000.000-00`
- Validação: todos os campos são obrigatórios antes do envio
- Persistência local com `AsyncStorage` — dados são salvos e recarregados entre sessões
- Navegação entre telas com `React Navigation` (Native Stack)

## Novidades do CP2

- **Upload de foto de perfil** via `expo-image-picker` — toque no avatar na tela de Perfil para escolher uma imagem da galeria (com crop 1:1 e permissão gerenciada).
- **Identidade visual "Ferrete Company's"** — paleta dark industrial com acento laranja (`#ff6a1a`), tipografia em caixa-alta espaçada, cards seccionados com indicadores coloridos, avatar com ring/glow da marca e pills de curso/disciplina.
- **Sistema de design centralizado** em `src/theme.js` (tokens de cor, spacing, radius) e componentes compartilhados `BrandHeader` / `Footer`.
- **Créditos do desenvolvedor** visíveis em todas as telas via componente `Footer`.

> **Extras implementados além do escopo da prova:** o upload de foto e a estilização forte com branding **Ferrete Company's** (hero com glow, pills, ring do avatar, wordmark, footer de créditos e sistema de design com tokens) foram adicionados por iniciativa própria — não eram requisitos da CP2.

## Tecnologias

- [Expo](https://expo.dev/) ~54
- [React Native](https://reactnative.dev/) 0.81
- [React Navigation](https://reactnavigation.org/) v7 — Native Stack
- [react-native-mask-text](https://github.com/akinncar/react-native-mask-text) — máscaras de input
- [@react-native-async-storage/async-storage](https://react-native-async-storage.github.io/async-storage/) — persistência local
- [expo-image-picker](https://docs.expo.dev/versions/latest/sdk/imagepicker/) — upload de foto da galeria *(extra)*

---

## Como executar

**Pré-requisitos:** Node.js e o aplicativo [Expo Go](https://expo.dev/client) instalado no celular (ou um emulador configurado).

```bash
# Clone o repositório
git clone https://github.com/FelipeFerrete/Projetoform.git
cd Projetoform

# Instale as dependências
npm install

# Instale a lib de upload de foto (extra do CP2)
npx expo install expo-image-picker

# Inicie o servidor de desenvolvimento
npm start
```

Escaneie o QR code com o Expo Go (Android) ou a câmera (iOS) para abrir o app.

Para rodar diretamente em emulador:

```bash
npm run android   # Android
npm run ios       # iOS
npm run web       # Navegador
```

---

## Demonstração

(![Gravando 2026-04-13 112320](https://github.com/user-attachments/assets/e36987a3-dfdc-4755-a370-93c5704b101a))

---

## Autor

**Felipe Ferrete** — RM: 562999  
CP2 — Disciplina de Web Development
