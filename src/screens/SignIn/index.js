import React, { useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage"

import { UserContext } from "../../contexts/UserContext";

import { 
    Container,
    InputArea,
    PasswordRecovText,
    CustomButton,
    CustomButtonText,
    CustomButtonRecov,
    SignMessageButton,
    SignMessageButtonTextBold
 } from './styles'

import Api from "../../../Api";

import SignInput from "../../components/SignInput";

import Logo from '../../assets/regardian.svg'
import EmailIcon from '../../assets/email.svg'
import CadeadoIcon from '../../assets/cadeado.svg'

export default () => {
    const { dispatch: UserDispatch } = useContext(UserContext)
    const navigation = useNavigation()

    const [emailField, setEmailField] = useState('')
    const [passwordField, setPasswordField] = useState('')

    const handleSignClick = async () => {
        if(emailField != '' && passwordField != ''){

            let json = await Api.signIn(emailField, passwordField)
            console.log(json)
            if(json.token){              
                await AsyncStorage.setItem('token', json.token)

                UserDispatch({
                    type: 'setFotoUsuario',
                    payload: {
                        fotoUsuario: json.Array.fotoUsuario
                    }
                })

                navigation.reset({
                    routes: [{name: 'MainTab'}]
                })

            }else{
                alert('Email e/ou senha errados!')
            }

        }else{
            alert('Preencha todos os campos!')
        }
    }

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'SignUp'}]
        })
    }

    return(
        <Container>
         <SignMessageButton onPress={handleMessageButtonClick}>
            <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
        </SignMessageButton>

            <Logo width="100%" height="160"/>

        <InputArea>
            <SignInput 
                IconSvg={EmailIcon}
                placeholder="Digite seu e-mail"
                value={emailField}
                onChangeText={t=>setEmailField(t)}
            />

            <SignInput 
                IconSvg={CadeadoIcon}
                placeholder="Digite sua senha"
                value={passwordField}
                onChangeText={t=>setPasswordField(t)}
                password={true}
            />

            <CustomButtonRecov onPress={handleSignClick}>
                <PasswordRecovText>Recuperar senha</PasswordRecovText>
            </CustomButtonRecov>
            
            <CustomButton onPress={handleSignClick}>
                <CustomButtonText>ENTRAR</CustomButtonText>
            </CustomButton>

        </InputArea>

        </Container>
    )
}