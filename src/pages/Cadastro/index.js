import React, { useState, useContext, createContext } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable'
import { AuthContext } from '../../contexts/auth'

export default function Cadastro() {
    const { Cdst, Mail } = useContext(AuthContext)

    return (
        < View style={style.container} >
            <Animatable.View animation='fadeInLeft' delay={500} style={style.containerHeader}>
                <Text style={style.containermessage}>Cadastro</Text>
            </Animatable.View>

            <Animatable.View animation='fadeInUp' delay={1000} style={style.containerForm}>
                <Text style={style.Title}>Nome</Text>

                <TextInput
                    style={style.Input}
                    onChangeText={Cdst.setName}
                    value={Cdst.Name}
                    placeholder='Digite seu Nome'
                />
                <Text style={style.Title}>Celular</Text>
                <TextInput
                    placeholder='Digite o Numero de Celular'
                    style={style.Input}
                    onChangeText={Cdst.setTell}
                    value={Cdst.Tell}

                />
                <Text style={style.Title}>E-mail</Text>
                <TextInput
                    placeholder='Digite seu e-mail'
                    style={style.Input}
                    onChangeText={Cdst.setMail}
                    value={Mail}

                />
                <Text style={style.Title}>Senha</Text>
                <TextInput
                    style={style.Input}
                    secureTextEntry={true}
                    placeholder="Digite sua senha"
                    onChangeText={Cdst.setPass}
                    value={Cdst.Pass}

                />
                <TouchableOpacity
                    style={style.button}
                >
                    <Text style={style.buttonText}>Concluir</Text>
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
    containerHeader: {
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '8%'
    },
    containermessage: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white'

    },
    containerForm: {
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    Title: {
        fontSize: 20,
        marginTop: 28

    },
    Input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16
    },
    button: {
        backgroundColor: '#38a69d',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold'
    }
})