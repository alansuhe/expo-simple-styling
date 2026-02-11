import { View, Text, TouchableOpacity } from 'react-native';
import { s, useTheme, type ThemeOption } from 'expo-simple-styling';

const ThemeOptions: { label: string; value: ThemeOption }[] = [
  {
    label: 'system',
    value: 'system',
  },
  {
    label: 'light',
    value: 'light',
  },
  {
    label: 'dark',
    value: 'dark',
  },
];

const TestPage = () => {
  const { tx, ts, updateTheme, themeSetting } = useTheme();

  // if (__DEV__) console.log('test: themeSetting', themeSetting)

  function handleThemeChange(theme: ThemeOption) {
    if (theme !== themeSetting) updateTheme?.(theme);
  }

  return (
    <View style={[s.flexP, s.center, s.gm, ts.bg_bg]}>
      <Text style={tx.heading}>Heading</Text>

      <View style={[ts.box, s.fullWidth]}>
        <View style={s.rowGap}>
          <Text style={tx.title}>Title</Text>
          <Text style={tx.subTitle}>Sub title</Text>
        </View>

        <View style={[ts.boxBorderedThin, s.mt]}>
          <Text style={tx.para}>Para text.</Text>
          <Text style={tx.sub}>Sub text.</Text>
        </View>

        <View style={[s.rowGap, s.my]}>
          <Text style={tx.color_link}>Link</Text>
          <Text style={tx.color_act}>Action</Text>
          <View style={ts.badge}>
            <Text style={tx.color_white}>tag 123</Text>
          </View>
          <View style={[ts.badge, ts.bg_act]}>
            <Text style={tx.color_white}>tag 456</Text>
          </View>
          <View style={[ts.badge, ts.bg_link]}>
            <Text style={tx.color_white}>tag 789</Text>
          </View>
        </View>
      </View>

      <View style={[ts.box, ts.bg_mg, s.rowGap]}>
        {ThemeOptions.map((option) => {
          const isSelected = option.value === themeSetting;
          return (
            <TouchableOpacity
              disabled={isSelected}
              key={option.value}
              onPress={() => handleThemeChange(option.value)}
            >
              <Text style={isSelected ? tx.subTitle : tx.btn}>
                {option.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default TestPage;
