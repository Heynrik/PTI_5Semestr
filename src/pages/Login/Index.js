import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable'
import { AuthContext } from '../../contexts/auth'
import { useNavigation } from '@react-navigation/native'
import { handlerSigIn, data } from '../Cadastro';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [e_mail, setE_mail] = useState('admin');
    const [p_assword, setP_assword] = useState('123456');
    const { SignIn, Cadast, Mail } = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState('');

    function handleLogin() {
        if (email === e_mail && password == p_assword) {
            SignIn(email, password);
        } else {
            setErrorMessage('E-mail ou senha incorretos.');
        }
        console.log(Mail);
        console.log(email);
    }
    const navigation = useNavigation();

    return (
        <View style={style.container}>
            <Animatable.View animation='fadeInLeft' delay={500} style={style.containerHeader}>
                <Text style={style.containermessage}>Bem vindo(a)</Text>
            </Animatable.View>

            <Animatable.View animation='fadeInUp' delay={1000} style={style.containerForm}>
                <Text style={style.Title}>E-mail</Text>
                <TextInput
                    placeholder='Digite seu e-mail'
                    onChangeText={(text) => setEmail(text)}
                    style={style.Input}
                    value={email}
                />
                <Text style={style.Title}>Senha</Text>
                <TextInput
                    style={style.Input}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry={true}
                    placeholder="Digite sua senha"
                />
                <Text style={style.Error}>{errorMessage}</Text>
                <TouchableOpacity
                    style={style.button}
                    onPress={handleLogin}
                >
                    <Text style={style.buttonText}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.buttonRegister}
                    onPress={() => navigation.navigate('Cadastro')}>
                    <Text style={style.RegisterText}>Não possui Cadastro? Cadastre-se</Text>
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
    },
    buttonRegister: {
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center'
    },
    RegisterText: {
        fontSize: 14,
        color: '#a1a1a1'
    },
    Error: {
        fontSize: 14,
        color: 'red',
        marginTop: '0%',
        marginBottom: '0%',
        paddingStart: '25%'
    }

})