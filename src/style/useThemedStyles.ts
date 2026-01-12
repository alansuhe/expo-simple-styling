import { useMemo } from "react"
import { useTheme } from "./ThemeProvider"
import { type ThemeColors } from "./types"

export function useThemedStyles<T>(
    factory: (colors: ThemeColors, isDark: boolean) => T
): T {
    const { cl, isDark } = useTheme()
    return useMemo(() => factory(cl, isDark), [isDark])
}
