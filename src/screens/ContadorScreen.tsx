import React, {useState} from 'react';
import {Button, Text, TouchableOpacity, View,StyleSheet} from 'react-native';

export const ContadorScreen = () => {
  const [contador, setContador] = useState(10);
  return (
    <View
      style={styles.container}>
      <Text style={styles.title}>
        {' '}
        Contador:{contador}
      </Text>
      {/* <Button title="Incrementar" onPress={() => setContador(contador + 1)} /> */}
      {/* <TouchableOpacity onPress={() => setContador(contador + 1)}>
        <View
          style={styles.button}>
          <Text style={styles.title}>+1</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setContador(contador - 1)}>
        <View
          style={styles.button}>
          <Text style={styles.title}>-1</Text>
        </View>
      </TouchableOpacity> */}
    </View>
  );
};

///Estilos componentes
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#A47E3B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // button: {
  //   width: 50,
  //   height: 50,
  //   backgroundColor: '#A47E3B',
  //   alignItems: 'center',
  //   justifyContent: 'flex-start',
  // },
  title:{
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold'
  },
  // fabLocationBr:{
  //   position: 'absolute',
  //   bottom: 25,
  //   right: 25,
  // }
  
})