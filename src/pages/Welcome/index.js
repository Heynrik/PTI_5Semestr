import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Button } from 'react-native';

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'

export default function Welcome() {
    const navigation = useNavigation();
    return (
        <View style={style.container}>

            <View style={style.containerLogo}>
                <Animatable.Image
                    animation='flipInY'
                    source={require('../../assets/Logo3.png')}
                    style={{ width: '100%' }}
                    resizeMode='contain'
                />
            </View>

            <Animatable.View delay={500} animation='fadeInUp' style={style.ConteinerForm}>
                <Text style={style.title}> Tenha em suas mãos tudo o que precisa para se manter saudavel </Text>
                <Text style={style.text}>Faca login para começar </Text>

                <TouchableOpacity
                    style={style.button}
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style={style.buttonText}> Acessar </Text>
                </TouchableOpacity>
            </Animatable.View>
        </View >
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#38a69d'
    },
    containerLogo: {
        flex: 2,
        backgroundColor: '38a69d',
        justifyContent: 'center',
        alignItems: 'center'

    },

    ConteinerForm: {
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'

    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12
    },
    text: {
        color: '#a1a1a1'
    },
    button: {
        position: 'absolute',
        backgroundColor: '#38a69d',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    }
})