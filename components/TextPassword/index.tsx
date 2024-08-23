import { Pressable, StyleSheet, Text, View } from "react-native";

export function TextPassword({ password, removePassword }: { password: string, removePassword: any }) {
    return (
        <Pressable onLongPress={removePassword} style={styles.container}>
            <Text style={styles.text}>{password}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0a7ea4',
        padding: 14,
        width: '100%',
        borderRadius: 8,
        marginBottom: 14,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    text: {
        color: '#FFF',
    }
})
