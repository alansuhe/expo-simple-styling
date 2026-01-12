import { type Theme, type ThemeColors } from "./types";

// 语义 token（只放业务关心的）
export const sp = {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 20,
    xl: 32,
    xxl: 64
}

export const colors: Record<Theme, ThemeColors> = {
    light: {
        pro: '#2a6958', // 正向
        con: '#ea4e1b', // 负面
        bg: '#F2F2F7',
        mg: '#FFFFFF',
        fg: '#1C1C1E',
        aux: 'rgba(60,60,67,0.6)',
        line: 'rgba(178, 178, 203, 0.59)',
        tint: '#deb887',
        link: '#1679AB',
        act: '#f4a460',
        warn: '#FF3B30',
        bg_trans: '#fefefe99',
        modal_bg_trans: 'rgba(255,255,255,0.9)'
    },
    dark: {
        pro: '#00ced1',
        con: '#cd5c5c',
        bg: '#1C1C1E',
        mg: '#2C2C2E',
        fg: '#FFFFFF',
        aux: 'rgba(235,235,245,0.6)',
        line: 'rgba(235,235,245,0.4)',
        tint: '#bc8f8f',
        link: '#87cefa',
        act: '#ff7f50',
        warn: '#FF453A',
        bg_trans: '#20202066',
        modal_bg_trans: 'rgba(0,0,0,0.9)'
    },
} as const;

export const shadows: Record<Theme, Object> = {
    light: {
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 2,
        elevation: 2,
    },
    dark: {
        shadowColor: '#000',
        shadowOpacity: 0.6,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 4,
        elevation: 4,
    },
}

export const LINE_COLORS = {
    light: {
        normal: '#999999',
        young: '#C1C1C1',
        oldYin: '#b0e0e6',
        oldYang: '#ffdab9',
    },
    dark: {
        normal: '#6a6a6a',
        young: '#4c4c4c',
        oldYin: '#008b8b',
        oldYang: '#b8860b',
    }
};

export const LINE_SHADOW_COLORS = {
    light: {
        shadowColor: '#000',
        shadowOpacity: 0.4,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 2,
        elevation: 4,
    },
    dark: {
        shadowColor: '#000',
        shadowOpacity: 1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 2,
        elevation: 4,
    },
}