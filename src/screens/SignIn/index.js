import React from "react";
import { Text } from "react-native";
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
    return(
        <Container>
            <Logo width="100%" height="160"/>

        <InputArea>
            <SignInput 
                IconSvg={EmailIcon}
                placeholder="Digite seu e-mail"
            />

            <SignInput 
                IconSvg={CadeadoIcon}
                placeholder="Digite sua senha"
            />
            

            <CustomButton>
                <CustomButtonText>Login</CustomButtonText>
            </CustomButton>
        </InputArea>

        <SignMessageButton>
            <SignMessageButtonText>Ainda não possuí uma conta?</SignMessageButtonText>
            <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
        </SignMessageButton>

        </Container>
    )
}