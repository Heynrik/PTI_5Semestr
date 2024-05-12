import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { AuthContext } from '../../contexts/auth'

import { useNavigation } from '@react-navigation/native'

export default function Home() {

    const { Name, user } = useContext(AuthContext)

    const navigation = useNavigation();
    return (
        <View style={style.container}>
            <View>
                <TouchableOpacity
                    style={style.button}
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style={style.Returntxt}>Retornar</Text>
                </TouchableOpacity>
            </View >

            <View style={style.Vtexto}>
                <Text> Dados entrantes</Text>
                <Text> Nome:{Name}</Text>
                <Text> Email logado:{user.email}</Text>
                <Text> Status:{user.status}</Text>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#38a69d'
    },
    button: {
        position: 'absolute',
        backgroundColor: 'white',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    Returntxt: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold'
    },
    Vtexto: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})