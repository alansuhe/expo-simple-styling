import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import type { ThemeOption } from './types';

type SettingsStore = {
  themeSetting: ThemeOption;
  updateTheme: (themeSetting: ThemeOption) => void;
};

// ----- factory: 根据 key 创建 store -----
export const createSettingsStore = (settingsKey: string) =>
  create<SettingsStore>()(
    persist(
      (set) => ({
        themeSetting: 'system',
        updateTheme: (themeSetting) =>
          set((state) => ({ ...state, themeSetting })),
      }),
      {
        name: settingsKey,
        storage: createJSONStorage(() => AsyncStorage),
      }
    )
  );
