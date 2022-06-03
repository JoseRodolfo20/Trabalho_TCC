import React, { useEffect, useContext } from "react";
import { Container, LoadingIcon } from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from "@react-navigation/native";

import Logo from '../../assets/regardian.svg'

import { UserContext } from "../../contexts/UserContext";
import Api from "../../../Api";

export default () => {
    // const { dispatch: UserDispatch } = useContext(UserContext)
    const navigation = useNavigation()

    // useEffect(() => {
    //     const checkToken = async () => {
    //         const token = await AsyncStorage.getItem('token');
    //         if(token !== null){
    //             //validar o token
    //             let res = await Api.checkToken(token)
    //             if(res.token){

    //                 await AsyncStorage.setItem('token', json.token)

    //                 UserDispatch({
    //                     type: 'setFotoUsuario',
    //                     payload: {
    //                         fotoUsuario: json.data.fotoUsuario
    //                     }
    //                 })
    
    //                 navigation.reset({
    //                     routes: [{name: 'MainTab'}]
    //                 })

    //             }else{
    //                 navigation.navigate('SignIn')
    //             }
    //         }else{
    //             navigation.navigate('SignIn')
    //         }
    //     }
    //     checkToken();
    // }, [])

    useEffect(() => {
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token');
            // if(token !== null){
            //     //validar o token
            // }else{
                navigation.navigate('SignIn')
            //}
        }
        checkToken();
    }, [])

    return(
        <Container>
            <Logo width="100%" height="160"/>
            <LoadingIcon size="large" color="#FFFFFF"/>
        </Container>
    );
}