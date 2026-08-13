# Repository Guidelines

## Project Structure & Module Organization

This is an Expo React Native profile-registration app. The application entry points are `index.js` and `App.js`; `App.js` configures the native-stack navigation.

- `src/screens/` contains route-level UI (`CadastroScreen.js`, `PerfilScreen.js`).
- `src/components/` contains reusable presentational components and shared styles.
- `src/theme.js` centralizes visual tokens such as colors, spacing, and radii.
- `assets/` holds bundled image assets.
- `app.json` contains Expo configuration; keep app metadata and platform settings there.

Place new screens in `src/screens/`, reusable UI in `src/components/`, and avoid duplicating values already represented by the shared theme.

## Build, Test, and Development Commands

Install dependencies with `npm install`. Use the Expo development server and target commands below:

```bash
npm start          # start Expo and show the QR/developer tools
npm run android    # open on an Android emulator or device
npm run ios        # open on an iOS simulator (macOS required)
npm run web        # run in a browser
```

There are currently no package scripts for linting or automated tests. Do not claim a test suite passes unless one has been added.

## Coding Style & Naming Conventions

Use JavaScript with React function components and 2-space indentation, matching the current code. Name component and screen files in PascalCase (for example, `ProfileCard.js`); use camelCase for variables, functions, and theme keys. Keep imports grouped at the top and use single quotes. Prefer values from `theme` over hard-coded visual values, and keep screen-specific styles close to the screen unless shared.

## Testing Guidelines

Manually verify changes using `npm start` on at least one target platform. For form changes, check required-field validation, telephone/CPF masks, navigation from Cadastro to Perfil, AsyncStorage persistence after restarting the app, and image-picker permission/error paths when relevant. If automated tests are introduced, place them beside the feature or in a dedicated test directory and name them `*.test.js`.

## Commit & Pull Request Guidelines

Follow the established Conventional Commit-like history: `feat:`, `refactor:`, and `docs:` with a concise Portuguese description (for example, `feat: adiciona validacao de email`). Keep commits focused. Pull requests should explain the user-visible change, link the relevant issue or assignment when applicable, and include screenshots or a short recording for UI changes. State which platforms and flows were manually verified.
