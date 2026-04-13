# Projetoform

Aplicativo mobile de cadastro de perfil desenvolvido com **React Native + Expo**.  
O usuário preenche um formulário com seus dados e é redirecionado para uma tela de perfil exibindo as informações enviadas. Os dados são persistidos localmente com AsyncStorage, sendo recarregados automaticamente ao reabrir o app.

---

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

## Tecnologias

- [Expo](https://expo.dev/) ~54
- [React Native](https://reactnative.dev/) 0.81
- [React Navigation](https://reactnavigation.org/) v7 — Native Stack
- [react-native-mask-text](https://github.com/akinncar/react-native-mask-text) — máscaras de input
- [@react-native-async-storage/async-storage](https://react-native-async-storage.github.io/async-storage/) — persistência local

---

## Como executar

**Pré-requisitos:** Node.js e o aplicativo [Expo Go](https://expo.dev/client) instalado no celular (ou um emulador configurado).

```bash
# Clone o repositório
git clone https://github.com/FelipeFerrete/Projetoform.git
cd Projetoform

# Instale as dependências
npm install

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

![Demonstração do app](https://github.com/user-attachments/assets/86c11a73-bf81-47b2-93de-4af31014dc43)

---

## Autor

**Felipe Ferrete** — RM: 562999  
CP1 — Disciplina de Web Development
