# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**expo-simple-styling** is a React Native styling library for Expo apps that provides:
- Theme management with light/dark mode support
- Pre-built style utilities (`s`, `ts`, `tx`, `cl`)
- Theme persistence via AsyncStorage
- Zustand-based state management for themes

### Project Origin

This project was bootstrapped using [react-native-builder-bob](https://oss.callstack.com/react-native-builder-bob), the recommended tool for creating React Native libraries with:
- TypeScript support
- ESM module output
- Automated build configuration

**Package Manager Migration**: The project has been migrated from Yarn to **pnpm**. Use `pnpm` for all package management operations.

## Repository Structure

```
expo-simple-styling/
├── src/                    # Library source code
│   ├── index.ts           # Main exports
│   └── style/             # Core styling modules
│       ├── ThemeProvider.tsx   # Theme context provider
│       ├── store.ts           # Zustand theme store
│       ├── tokens.ts          # Design tokens (spacing, colors, shadows)
│       ├── types.ts           # TypeScript type definitions
│       ├── index.ts           # Style utilities (s, unitSize)
│       └── useThemedStyles.ts # Themed style hook
├── example/               # Example Expo app for testing
├── lib/                   # Built output (generated)
└── package.json
```

## Common Commands

```bash
# Install dependencies
pnpm install

# Run example app
pnpm example

# Build library
pnpm prepare

# Type checking
pnpm typecheck

# Linting
pnpm lint
pnpm lint --fix

# Run tests
pnpm test

# Clean build output
pnpm clean

# Publish new version
pnpm release
```

## Development Workflow

1. This is a monorepo using pnpm workspaces
2. The library source is in root `/src`
3. Test changes using the example app in `/example`
4. Library builds to `/lib` using react-native-builder-bob

## Key Exports

```typescript
// Theme Provider and hook
export { ThemeProvider, useTheme } from './style/ThemeProvider'

// Store creation
export { createSettingsStore } from './style/store'

// Design tokens
export { sp, colors, shadows } from './style/tokens'

// Style utilities
export { s, unitSize } from './style'

// Types
export type { ThemeColors, ThemeOption, Theme } from './style/types'
```

## Peer Dependencies

The library requires these peer dependencies:
- `react` and `react-native`
- `@react-native-async-storage/async-storage` (^2.2.0)
- `@react-navigation/native` (^7.1.26)
- `zustand` (^5.0.9)

## Code Style

- Uses Prettier with single quotes, 2-space tabs, ES5 trailing commas
- ESLint with React Native config
- Conventional commits required (feat, fix, docs, refactor, test, chore)
- TypeScript strict mode

## Testing

- Jest with react-native preset
- Test files in `src/__tests__/`
