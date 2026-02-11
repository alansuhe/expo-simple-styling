import { Dimensions, StyleSheet } from 'react-native';
import { colors, shadows, sp } from './tokens';
import { type Theme } from './types';

const { xs, sm, md, lg, xl } = sp;

// const WindowDimension = Dimensions.get('window');
const { height, width } = Dimensions.get('window');
const shortSide = height > width ? width : height;
const unitSize = shortSide / 32;
export { unitSize };

// 全局通用无themed格式
export const s = StyleSheet.create({
  flex: { flex: 1 },
  flex2: { flex: 2 },
  flex3: { flex: 3 },
  flexP: { flex: 1, padding: md },
  flexCenter: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  flexItemsCenter: { flex: 1, alignItems: 'center' },
  flexJustifyCenter: { flex: 1, justifyContent: 'center' },
  center: { justifyContent: 'center', alignItems: 'center' },
  justifyCenter: { justifyContent: 'center' },
  itemsCenter: { alignItems: 'center' },
  justifyEnd: { justifyContent: 'flex-end' },
  itemsEnd: { alignItems: 'flex-end' },
  justifyStart: { justifyContent: 'flex-start' },
  itemsStart: { alignItems: 'flex-start' },
  selfStart: { alignSelf: 'flex-start' },
  fullWidth: { width: '100%' },
  fullHeight: { height: '100%' },

  // 单行布局
  row: { flexDirection: 'row', alignItems: 'center' },
  rowGap: { flexDirection: 'row', alignItems: 'center', gap: md },
  rowGapSm: { flexDirection: 'row', alignItems: 'center', gap: sm },
  rowGapWarp: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: sm,
    flexWrap: 'wrap',
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowEvenly: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  // 间距
  m: { margin: md },
  mx: { marginHorizontal: md },
  my: { marginVertical: md },
  mt: { marginTop: md },
  mb: { marginBottom: md },
  ml: { marginLeft: md },
  mr: { marginRight: md },
  p: { padding: md },
  px: { paddingHorizontal: md },
  py: { paddingVertical: md },
  pt: { paddingTop: md },
  pb: { paddingBottom: md },
  pl: { paddingLeft: md },
  pr: { paddingRight: md },
  gs: { gap: sm },
  gm: { gap: md },
  gl: { gap: lg },
  gxl: { gap: xl },

  // 文字行高
  textLine: { lineHeight: 22 },

  roundedXs: {
    borderRadius: xs,
    overflow: 'hidden',
  },

  roundedSm: {
    borderRadius: sm,
    overflow: 'hidden',
  },

  rounded: {
    borderRadius: md,
    overflow: 'hidden',
  },

  roundedTop: {
    borderTopLeftRadius: md,
    borderTopRightRadius: md,
    overflow: 'hidden',
  },

  // navigator
  rightHeaderContainer: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// themed格式
export function createStyles(theme: Theme) {
  const cl = colors[theme];
  const { fg, bg, aux, mg, act, link, warn, tint, line, modal_bg_trans } = cl;

  const shadow = shadows[theme];

  return StyleSheet.create({
    shadow,

    border_thin: { borderColor: line, borderWidth: StyleSheet.hairlineWidth },
    border: { borderColor: line, borderWidth: 1 },
    border_bottom_thin: {
      borderBottomColor: line,
      borderBottomWidth: StyleSheet.hairlineWidth,
    },

    // bg color
    bg_mg: { backgroundColor: mg },
    bg_aux: { backgroundColor: aux },
    bg_act: { backgroundColor: act },
    bg_link: { backgroundColor: link },
    bg_tint: { backgroundColor: tint },
    bg_bg: { backgroundColor: bg },
    bg_warn: { backgroundColor: warn },
    bg_line: { backgroundColor: line },
    bg_pro: { backgroundColor: cl.pro },
    bg_con: { backgroundColor: cl.con },

    seperator: {
      width: '100%',
      borderTopWidth: StyleSheet.hairlineWidth,
      borderColor: line,
    },

    // boxes
    boxBordered: {
      borderRadius: md,
      padding: md,
      borderColor: line,
      borderWidth: 1,
    },
    boxBorderedThin: {
      borderRadius: md,
      padding: md,
      borderColor: line,
      borderWidth: StyleSheet.hairlineWidth,
    },
    box: {
      borderRadius: md,
      padding: md,
      backgroundColor: mg,
    },
    boxFilledBordered: {
      borderRadius: md,
      padding: md,
      backgroundColor: mg,
      borderColor: line,
      borderWidth: 1,
    },

    // cards
    card: {
      borderRadius: md,
      padding: md,
      backgroundColor: mg,
    },

    cardBordered: {
      borderRadius: md,
      padding: md,
      backgroundColor: mg,
      borderColor: line,
      borderWidth: StyleSheet.hairlineWidth,
    },

    //
    badge: {
      borderRadius: sm,
      padding: sm,
      backgroundColor: line,
      alignSelf: 'flex-start',
    },
    badgeBordered: {
      borderRadius: sm,
      padding: sm,
      borderColor: line,
      borderWidth: StyleSheet.hairlineWidth,
      alignSelf: 'flex-start',
    },
    smallRound: {
      borderRadius: lg,
      height: xl,
      width: xl,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: aux,
    },
    smallRoundBordered: {
      borderRadius: lg,
      height: xl,
      width: xl,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: fg,
      // backgroundColor: 'rgba(255,255,255,0.2)'
    },
    smallCapsule: {
      borderRadius: md,
      height: xl,
      paddingHorizontal: xs,
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: fg,
    },
    smallCapsuleBordered: {
      borderRadius: md,
      height: xl,
      paddingHorizontal: sm,
      alignItems: 'center',
      flexDirection: 'row',
      borderWidth: 1,
      borderColor: 'white',
    },
    // modal
    modalContent: {
      flex: 1,
      backgroundColor: bg,
      padding: md,
    },
    modalTransContent: {
      flex: 1,
      backgroundColor: modal_bg_trans,
    },
    fullModalTransContent: {
      flex: 1,
      backgroundColor: modal_bg_trans,
      paddingTop: 64,
    },
  });
}

/**
 * 常用文字样式
 */
export function createTextStyles(theme: Theme) {
  const cl = colors[theme];
  const { fg, bg, aux, mg, act, link, warn, tint } = cl;

  // devLog('[style index tx] fg: ', fg)

  return StyleSheet.create({
    heading: { fontSize: 30, lineHeight: 37, fontWeight: 700, color: aux },
    title: { fontSize: 20, fontWeight: '600', color: fg },
    subTitle: { fontSize: 18, fontWeight: '600', color: aux },
    para: { fontSize: 16, lineHeight: 22, color: fg },
    sub: { fontSize: 14, color: aux },
    btn: { fontSize: 15, fontWeight: 700, color: fg },
    // 风格
    bold: { fontWeight: 'bold' },
    italic: { fontStyle: 'italic' },
    // 自动文字, 只关注颜色
    color_fg: { color: fg },
    color_bg: { color: bg },
    color_aux: { color: aux },
    color_mg: { color: mg },
    color_act: { color: act },
    color_link: { color: link },
    color_warn: { color: warn },
    color_tint: { color: tint },
    color_white: { color: 'white' },
    color_black: { color: 'black' },
    color_pro: { color: cl.pro },
    color_con: { color: cl.con },
    // 排列
    center: { textAlign: 'center' },
    right: { textAlign: 'right' },
  });
}

/**
 * 有图片等背景时，前景的常用style；
 * 前景组件基本以白色为主色调
 * 其实可以考虑用unistyles的ScopedTheme来解决
 */
export const whiteStyles = StyleSheet.create({
  whiteSmallRound: {
    borderRadius: 16,
    height: 32,
    width: 32,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  whiteSmallRoundBordered: {
    borderRadius: 16,
    height: 32,
    width: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#CCC',
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  whiteSmallCapsule: {
    borderRadius: 16,
    height: 32,
    paddingHorizontal: 8,
    gap: 8,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  whiteSmallCapsuleBordered: {
    borderRadius: 16,
    height: 32,
    paddingHorizontal: 8,
    gap: 8,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderWidth: 1,
    borderColor: '#CCC',
  },
});
