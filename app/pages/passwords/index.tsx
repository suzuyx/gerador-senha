import { TextPassword } from "@/components/TextPassword";
import useStorage from "@/hooks/useStorage";
import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Passwords() {
    const [listpasswords, setListpasswords] = useState([]);
    const focused = useIsFocused();
    const { getItem, removeItem } = useStorage();

    async function handleDeletePassword(item: string) {
        const passwords = await removeItem('@pwds', item);
        setListpasswords(passwords);
    }

    useEffect(() => {
        async function loadPasswords() {
            const passwords = await getItem('@pwds');
            setListpasswords(passwords);
        }
        loadPasswords();
    }, [focused])


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container} >
                <Text style={styles.text} >Senhas geradas</Text>
            </View>
            <View style={styles.content}>
                <FlatList
                    style={{ flex: 1, paddingTop: 14, paddingBottom: 14 }}
                    data={listpasswords}
                    renderItem={({ item }) => <TextPassword password={item} removePassword={() => handleDeletePassword(item)}/>}
                    keyExtractor={(item) => item}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0a7ea4',
        paddingTop: 27,
        paddingBottom: 14,
        paddingLeft: 14,
        paddingRight: 14
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFF',
    },
    textMenu: {
        fontSize: 16,
        color: '#000',
    },
    content: {
        flex: 1,
        backgroundColor: '#FFF',
        paddingTop: 14,
        paddingBottom: 14,
        paddingLeft: 14,
        paddingRight: 14
    }
})