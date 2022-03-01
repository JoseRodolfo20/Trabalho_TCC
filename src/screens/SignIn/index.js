import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { 
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonTextBold
 } from './styles'

import SignInput from "../../components/SignInput";

import Logo from '../../assets/regardian.svg'
import EmailIcon from '../../assets/email.svg'
import CadeadoIcon from '../../assets/cadeado.svg'

export default () => {

    const navigation = useNavigation()

    const [emailField, setEmailField] = useState('')
    const [passwordField, setPasswordField] = useState('')

    const handleSignClick = () => {

    }

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'SignUp'}]
        })
    }

    return(
        <Container>
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
            

            <CustomButton onPress={handleSignClick}>
                <CustomButtonText>LOGIN</CustomButtonText>
            </CustomButton>
        </InputArea>

        <SignMessageButton onPress={handleMessageButtonClick}>
            <SignMessageButtonText>Ainda não possuí uma conta?</SignMessageButtonText>
            <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
        </SignMessageButton>

        </Container>
    )
}