import { Image, StyleSheet, Platform, View, Text, TouchableOpacity, Modal } from 'react-native';
import Slider from '@react-native-community/slider';
import { useState } from 'react';
import { ModalPassword } from '@/components/Modal';


export default function HomeScreen() {
  const [size, setSize] = useState(10);
  const [password, setPassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleSliderChange = (value: number) => {
    setSize(value);
  };

  const generatePassword = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let password = '';
    for (let i = 0, n = characters.length; i < size; ++i) {
      password += characters.charAt(Math.floor(Math.random() * n));
    }
    setPassword(password);
    setModalVisible(true);
  };


  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
        }}
      >
        {size} Caracteres
      </Text>
      <View style={styles.separator}>
        <Slider
          style={{ width: 300, height: 50 }}
          step={1}
          minimumValue={6}
          maximumValue={20}
          value={size}
          onValueChange={handleSliderChange}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonText}>Gerar senha</Text>
      </TouchableOpacity>
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
      >
        <ModalPassword
          password={password}
          handleModalClose={() => setModalVisible(false)}
        />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginBottom: 40
  },
  separator: {
    marginTop: 14,
    marginBottom: 14,
    width: '80%',
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 8,
  },
  button: {
    backgroundColor: '#0a7ea4',
    width: '80%',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
