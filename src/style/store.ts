import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import type { ThemeOptions } from './types'

type SettingsStore = {
  theme?: ThemeOptions
  updateSettings: (setting: Partial<SettingsStore>) => void
}

// ----- factory: 根据 key 创建 store -----
export const createSettingsStore = (settingsKey: string) =>
  create<SettingsStore>()(
    persist(
      (set) => ({
        theme: 'system',
        updateSettings: (setting) => set((state) => ({ ...state, ...setting })),
      }),
      {
        name: settingsKey,
        storage: createJSONStorage(() => AsyncStorage),
      }
    )
  )
