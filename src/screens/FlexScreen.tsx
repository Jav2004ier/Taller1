import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const FlexScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.box1}>Caja 1</Text>
            <Text style={styles.box2}>Caja 2</Text>
            <Text style={styles.box3}>Caja 3</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: '#e9f2f9',
        //flexDirection: 'row',
        //justifyContent: 'center',
        //alignItems: 'stretch',
        //flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        //alignContent: 'flex-end',
        //flexDirection: 'row',
        //alignItems: 'center',
        //alignContent: 'center',
    },
    box1: {
        flex: 0,
        borderWidth: 3,
        borderColor: 'black',
        fontSize: 0,
        height: 80,
        width: 80,
        backgroundColor: '#78c0a8',
        //alignSelf: 'flex-start',
    },
    box2: {
        flex: 0,
        borderWidth: 3,
        borderColor: 'black',
        fontSize: 0,
        height: 80,
        width: 80,
        backgroundColor: '#1b325f',
        left: 80,
        //alignSelf: 'center' ,
    },
    box3: {
        flex: 0,
        borderWidth: 3,
        borderColor: 'black',
        fontSize: 0,
        height: 80,
        width: 80,
        backgroundColor: '#3a89c9',
        //alignSelf: 'flex-end',
        //width: '100%',
    },
}
)
