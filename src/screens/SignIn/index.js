import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
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