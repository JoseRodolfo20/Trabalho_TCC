import React, { useEffect } from "react";
import { Container, LoadingIcon } from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from "@react-navigation/native";

import Logo from '../../assets/regardian.svg'

export default () => {

    const navigation = useNavigation()

    useEffect(() => {
        // const checkToken = async () => {
        //     const token = await AsyncStorage.getItem('token');
        //     if(token){

        //     }else{
                navigation.navigate('SignIn')
        //     }
        // }
        // checkToken();
    }, [])

    return(
        <Container>
            <Logo width="100%" height="160"/>
            <LoadingIcon size="large" color="#FFFFFF"/>
        </Container>
    );
}