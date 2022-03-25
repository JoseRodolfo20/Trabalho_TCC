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
import ProfileIcon from '../../assets/profile.svg'
import EmailIcon from '../../assets/email.svg'
import CadeadoIcon from '../../assets/cadeado.svg'

export default () => {

    const navigation = useNavigation()

    const [nameField, setNameField] = useState('')
    const [emailField, setEmailField] = useState('')
    const [passwordField, setPasswordField] = useState('')

    const handleSignClick = () => {

    }

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'SignIn'}]
        })
    }

    return(
        <Container>

        <SignMessageButton onPress={handleMessageButtonClick}>
            <SignMessageButtonTextBold>Faça Login</SignMessageButtonTextBold>
        </SignMessageButton>

            <Logo width="100%" height="160"/>

        <InputArea>
             <SignInput 
                IconSvg={ProfileIcon}
                placeholder="Digite seu nome"
                value={nameField}
                onChangeText={t=>setNameField(t)}
            />

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
                <CustomButtonText>CADASTRAR</CustomButtonText>
            </CustomButton>
        </InputArea>

        </Container>
    )
}