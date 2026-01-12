import React, { createContext, useContext, useMemo } from 'react'
import { useColorScheme } from 'react-native'
import { DarkTheme, DefaultTheme, ThemeProvider as NavigationThemeProvider } from '@react-navigation/native'

import { createSettingsStore } from './store'
import { createStyles, createTextStyles } from './index'
import type { ThemeColors, ThemeOption } from './types'
import { colors } from './tokens'

interface ThemeContextValue {
  isDark: boolean
  cl: ThemeColors
  ts: ReturnType<typeof createStyles>
  tx: ReturnType<typeof createTextStyles>
  themeSetting: ThemeOption
  updateTheme?: (theme: ThemeOption) => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

// 缓存 store 实例，避免重复创建
const storeCache = new Map<string, ReturnType<typeof createSettingsStore>>()

function getOrCreateStore(settingsKey: string) {
  if (!storeCache.has(settingsKey)) {
    storeCache.set(settingsKey, createSettingsStore(settingsKey))
  }
  return storeCache.get(settingsKey)!
}

export function ThemeProvider({
  children,
  settingsKey = 'suhe_styling_settings',
}: {
  children: React.ReactNode
  settingsKey?: string
}) {
  // 使用缓存的 store
  const useAppSettings = getOrCreateStore(settingsKey)
  const { themeSetting, updateTheme } = useAppSettings()

  const systemScheme = useColorScheme()
  const resolvedScheme = themeSetting === 'system' ? systemScheme : themeSetting
  const isDark = resolvedScheme === 'dark'
  const currentThemeName = isDark ? 'dark' : 'light'

  const cl = colors[currentThemeName]

  // 缓存 styles，避免每次渲染都调用 StyleSheet.create()
  const ts = useMemo(() => createStyles(currentThemeName), [currentThemeName])
  const tx = useMemo(() => createTextStyles(currentThemeName), [currentThemeName])

  // 缓存 context value，避免不必要的消费者重渲染
  const value = useMemo<ThemeContextValue>(() => ({
    isDark,
    cl,
    ts,
    tx,
    themeSetting,
    updateTheme
  }), [isDark, cl, ts, tx, themeSetting, updateTheme])

  const navigationTheme = useMemo(() => {
    const oldNavTheme = isDark ? DarkTheme : DefaultTheme
    const { tint, bg, fg, mg, warn } = cl
    return {
      ...oldNavTheme,
      colors: {
        ...oldNavTheme.colors,
        primary: tint,
        background: bg,
        card: mg,
        text: fg,
        border: mg,
        notification: warn,
      },
    }
  }, [isDark, cl])

  return (
    <ThemeContext.Provider value={value}>
      <NavigationThemeProvider value={navigationTheme}>
        {children}
      </NavigationThemeProvider>
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
