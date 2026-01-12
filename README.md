# 说明

## 依赖包

```bash
pnpm add zustand @react-navigation/native @react-native-async-storage/async-storage --save-peer
```

需要安装的依赖包：
- @react-native-async-storage/async-storage
- zustand
- @react-navigation/native

## 使用

`_layout.tsx`或根页面中用ThemeProvider包裹。

```tsx

import { ThemeProvider } from '@react-native-simple-styling';

...

<ThemeProvider settingsKey="example_app_theme">
  <AppContent />
</ThemeProvider>

```
注意每个app的settingsKey应独一无二，进行区分。