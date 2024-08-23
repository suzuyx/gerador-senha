import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorage = () => {

    const getItem = async (key: string) => {
        try {
            const passwords = await AsyncStorage.getItem(key);
            return JSON.parse(passwords || '[]');
        }
        catch (error) {
            console.log("Erro ao buscar dados", error);
        }
    }

    const saveItem = async (key: string, value: string) => {
        try {
            let passwords = await getItem(key);
            passwords.push(value);
            await AsyncStorage.setItem(key, JSON.stringify(passwords));
        }
        catch (error) {
            console.log("Erro ao salvar dados", error);
        }
    }

    const removeItem = async (key: string, item: any) => {
        try {
            let passwords = await getItem(key);
            let myPasswords = passwords.filter( (password: any) => {
                return (password !== item);
            });
            
            await AsyncStorage.setItem(key, JSON.stringify(myPasswords));

            return myPasswords;

        }
        catch (error) {
            console.log("Erro ao remover dados", error);
        }
    }

    return {
        getItem,
        saveItem,
        removeItem
    };

}

export default useStorage;