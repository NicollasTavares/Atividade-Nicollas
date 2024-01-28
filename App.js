// Nome da atividade:atv01

import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
const logo = require('./assets/favicon.png')
const [input, setInput]= useState('');
const [hidePass, setHidePass] = useState(true)

  return (
    <View style={styles.container}>
      <Image style={{ margin: 50}} source={logo}></Image>
      
      <Text style={styles.legendas1}>Nome/Usuario</Text>

      <View style={styles.inputArea1}>
      <TextInput
        style={styles.texto}
          placeholder='Insira seu usuário'
          placeholderTextColor='black'
        />
      </View>

      <Text style={styles.legendas2}>Senha</Text>

      <View style={styles.inputArea2}>
        <TextInput
        style={styles.texto}
          placeholder='Insira sua senha'
          placeholderTextColor='black'
          value={input}
          onChangeText={ (texto) => setInput(texto)}
          secureTextEntry={hidePass}
        />
        <TouchableOpacity style={styles.icon} onPress={ () => setHidePass(!hidePass)}>
          { hidePass ?
          <Ionicons name='eye' color='black' size='25'/>
          :
          <Ionicons name='eye-off' color='black' size='25'/>
        }
        </TouchableOpacity>
      </View>

      <View style={styles.labels}>
        <Button title='Acessar' onPress= {() => Alert.alert('Bem vindo!')} />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',

  },
  input: {
    width: '70%',
    borderWidth: 15,
    padding: 10,
    borderRadius: 20,
    color: 'white',
    backgroundColor: 'white',
  },
  labels: {
    margin: 40,
    color: 'white',
    padding: 6,
    color: 'black',
    backgroundColor: 'white',
    borderRadius: 15,
  },
  legendas1: {
    color: "white",
    margin: 1,
    right: 130
  },
  legendas2: {
    color: "white",
    margin: 5,
    right: 150
  },

  inputArea1:{
    flexDirection: 'row',
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 5,
    height: 50,
    alignItems: 'center',
    margin: 10
  },

  inputArea2:{
    flexDirection: 'row',
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 5,
    height: 50,
    alignItems: 'center'
  },

  texto:{
    width: '85%',
    height: 50,
    color: 'black',
    padding: 8,
    fontSize: 18
  },

  icon:{
    width: '15%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
