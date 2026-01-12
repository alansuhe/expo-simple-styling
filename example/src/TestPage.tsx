import { View, Text } from 'react-native'
import { s, useTheme } from 'expo-simple-styling'

const TestPage = () => {
    const { tx } = useTheme()
    return (
        <View style={s.flexCenter}>
            <Text style={tx.heading}>Heading</Text>
            <Text style={tx.title}>Title</Text>
            <Text style={tx.subTitle}>Sub title</Text>
            <Text style={tx.para}>Para text.</Text>
            <Text style={tx.sub}>Sub text.</Text>
        </View>
    )
}

export default TestPage