import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../constants/color";

function ButtonWithIcon({ onPress, name, size, color, children, style }) {
    return (
        <Pressable onPress={onPress} style={({ pressed }) => [pressed && styles.pressed, styles.button, style]}>
            <View style={styles.row}>
                <Ionicons name={name} size={size} color={color} style={styles.icon} />
                <Text style={[styles.text, { color: color }]}>{children}</Text>
            </View>
        </Pressable>);
}

export default ButtonWithIcon;


let styles = StyleSheet.create({
    pressed: {
        opacity: 0.5
    },
    button: {
        marginVertical: 20,
        borderWidth: 1,
        borderColor: colors.white,
        borderRadius: 10,
        alignSelf: 'center',
        paddingVertical: 6,
        paddingHorizontal: 14,
        alignItems: 'center',
        justifyContent: 'center'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    icon: {
        marginRight: 10,
    },
    text: {
        textTransform: 'uppercase',
    }
})