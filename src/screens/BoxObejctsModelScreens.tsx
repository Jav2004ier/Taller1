import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

export const BoxObejctsModelScreens = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Box Object Model</Text>
    </View>
  )
}

const styles= StyleSheet.create({
container: {
    backgroundColor: 'red',
    },
title: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize : 20,
    //backgroundColor: 'red'
    borderWidth: 10,
  }
})

