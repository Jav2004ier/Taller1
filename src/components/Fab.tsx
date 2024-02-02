import React from "module";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

//Documentacion forzada de nuestro componente Fab
interface Props {
    title: string;    
}

export const Fab = ( props: Props) => {
    return(
        <TouchableOpacity
            onPress={() => console.log('Hola MundoScreen')}>
            <View style={styles.fab}>
                <Text style={styles.fabText}>+1</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    fab: {
        backgroundColor: '#A47E3B',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
    },
    fabText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',  
    }
})