import React, { createContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [user, setUser] = useState({});
    const [Cdst, setCdst] = useState({});

    const navigation = useNavigation();

    function SignIn(e_mail, p_assword) {
        if (e_mail === 'admin@admin.com' || p_assword === '13456') {
            alert('preencha os campos corretamente')
            return;
        }
        setUser({
            e_mail: e_mail,
            status: 'ativo'
        })
        navigation.navigate('Home');

    }
    function Cadast(Mail, Pass, Tell, Name) {
        if (Mail === '' || Pass === '' || Tell === '' || Name === '') {
            alert('preencha os campos corretamente')
            return;
        }
        setCdst({
            Name: Name,
            Mail: Mail,
            Pass: Pass,
            Tell: Tell,
        })

    }
    return (
        <AuthContext.Provider value={{ Name: "", Mail: "", Pass: "", Tell: "", SignIn, Cadast, user, Cdst }}>
            {children}
        </AuthContext.Provider >
    )
}

export default AuthProvider;