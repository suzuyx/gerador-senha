import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import * as Clipboard from 'expo-clipboard';
import useStorage from "@/hooks/useStorage";

export function ModalPassword({password, handleModalClose}: {password: string, handleModalClose: any}) {

    const { saveItem } = useStorage();

    async function handleCopyPassword() {
        await Clipboard.setStringAsync(password);
        await saveItem('@pwds', password);
        alert('Senha copiada para a área de transferência!');
        handleModalClose();
    }

    return (
        <View style={styles.container}>
            <View style={styles.content} >
                <Text style={styles.text} >Senha gerada!</Text>
                <Pressable style={styles.innerpassword} onLongPress={handleCopyPassword} >
                    <Text style={styles.buttonText}>{password}</Text>
                </Pressable>
                <View style={styles.buttonArea}>
                    <TouchableOpacity style={styles.button} onPress={handleModalClose}>
                        <Text style={styles.textButton} >Fechar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, styles.buttonSave]} onPress={handleCopyPassword}>
                        <Text style={styles.saveButton} >Salvar senha</Text>
                    </TouchableOpacity>

                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(24, 24, 24, 0.6)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        width: "85%",
        paddingTop: 24,
        paddingBottom: 24,
        backgroundColor: '#FFF',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#0a7ea4',
        marginBottom: 24,
    },
    innerpassword: {
        backgroundColor: '#0a7ea4',
        width: '90%',
        borderRadius: 8,
        padding: 14,
    },
    buttonText: {
        color: '#FFF',
        textAlign: 'center',
    },
    buttonArea: {
        flexDirection: 'row',
        width: '90%',
        marginTop: 8,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    button: {
        flex: 1,
        alignItems: 'center',
        marginTop: 14,
        marginBottom: 14,
        padding: 8,
    },
    textButton: {
        color: '#000',
    },
    saveButton: {
        color: '#fff',
        fontWeight: 'bold',
        
    },
    buttonSave: {
        backgroundColor: '#0a7ea4',
        borderRadius: 8,
    },
})