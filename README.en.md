# Description

This is a React Native Styling library.

中文版：[中文](README.md).

## Installation

```bash
pnpm add expo-simple-styling

yarn add expo-simple-styling
```

## Dependencies

```bash
pnpm add zustand @react-navigation/native @react-native-async-storage/async-storage --save-peer
```

Required dependencies:

- @react-native-async-storage/async-storage
- zustand
- @react-navigation/native

## Usage

> Refer to the [Example Project](example/).

### Wrap Root Component with ThemeProvider

Wrap in `_layout.tsx` or the root page with ThemeProvider.

```tsx

import { ThemeProvider } from 'expo-simple-styling';

...

<ThemeProvider settingsKey="example_app_theme">
  <AppContent />
</ThemeProvider>

```

Note: Each app should have a unique `settingsKey` for differentiation.

### Theme-independent Common Styles

```tsx
import {s} from 'expo-simple-styling';

// Example
...
<View style ={s.flexCenter}>
  ...
</View>

```

### Theme-dependent Common Styles

This automatically applies light and dark color schemes.

```tsx
import { useTheme } from 'expo-simple-styling';

// isDark: true for dark mode, false for light mode
// ts: various styles related to theme colors
// tx: various text-related styles
// cl: color values
 const { isDark, ts, tx, cl } = useTheme();

// Example
...
<View style={ts.box}>
    <Text style= {tx.title}>
        Hello World
        <Text style={tx.subTitle}>
            This is a subtitle
        </Text>
    </Text>
</View>

```
