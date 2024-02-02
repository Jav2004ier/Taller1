import React from 'react';
import { Text, View, StyleSheet, Dimensions, useWindowDimensions } from 'react-native';
 

//const { width, height } = Dimensions.get('window');
export const DimensionesScreen = () => {

  const { width, height } = useWindowDimensions();
  return (
    <View>
      <View style={styles.container}>
        <View style={[styles.boxPurple, { width: width * 0.5 }]} /> 
        <View style={styles.boxOrange} />
      </View>
      <Text style={styles.title}>Width: {width}, Height: {height}</Text> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    width: '100%',
    height: 400,
  },
  boxOrange: {
    backgroundColor: 'purple',
    width: '50%',
    height: '50%',
  },
  boxPurple: {
    width: '50%',
    height: '50%',
    backgroundColor: '#FFFFF', /* Likely meant #FFFFFF for white */
  },
  title: {
    fontSize: 20,
    color: 'white',
  },
});

