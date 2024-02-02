import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const PositionsScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.boxPurple} /> 
            <View style={styles.boxOrange} />
            <View style={styles.boxGreen} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 400,
        height: 400,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#a7dbab',

    },
    boxPurple: {
        width: 100,
        height: 100,
        backgroundColor: '#9b59b6',
        borderWidth: 10,
        borderColor: 'black',
        position: 'absolute',
        top: 0,
        right: 0,
        //position: 'relative',
        //top: 120,
        //left: 60,
    }, 
    boxOrange: {
        width: 100,
        height: 100,
        backgroundColor: '#f1c40f',
        borderWidth: 10,
        borderColor: 'black',
        position: 'absolute',
        top: 0,
        left: 0,
        //position: 'relative',
        //right: 10,
        //top: 90,
    },
    boxGreen: {
        width: 100,
        height: 100,
        backgroundColor: '#2ecc71',
        borderWidth: 10,
        borderColor: 'black',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        //position: 'relative',
        //right: 10,
        //top: 90,
    }
});

