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

export function ThemeProvider({
  children,
  settingsKey = 'suhe_styling_settings', // 默认 key
}: {
  children: React.ReactNode
  settingsKey?: string
}) {
  // 创建一个稳定 hook
  const useAppSettings = useMemo(() => createSettingsStore(settingsKey), [settingsKey])
  const { themeSetting, updateTheme } = useAppSettings()
  // if (__DEV__) console.log('[provider] themeSetting', themeSetting)

  const systemScheme = useColorScheme()
  // if (__DEV__) console.log('[provider] systemScheme', systemScheme)
  const resolvedScheme = themeSetting === 'system' ? systemScheme : themeSetting
  const isDark = resolvedScheme === 'dark'
  const currentThemeName = isDark ? 'dark' : 'light'

  const cl = colors[currentThemeName]
  const value = {
    isDark,
    cl,
    ts: createStyles(currentThemeName),
    tx: createTextStyles(currentThemeName),
    themeSetting,
    updateTheme
  }

  const navigationTheme = useMemo(() => {
    const oldNavTheme = isDark ? DarkTheme : DefaultTheme
    const { tint, bg, fg, mg, warn } = colors[currentThemeName]
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
  }, [isDark])

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
