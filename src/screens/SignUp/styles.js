import React from "react";
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
    background-color: #1c232e;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const SignMessageButton = styled.TouchableOpacity`
    background-color: #3b8952;
    left: 76px;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 25px;
    padding: 5px;
    border-radius: 5px;
`;

export const SignMessageButtonTextBold = styled.Text`
    font-size: 21px;
    color: #fff;
    font-weight: bold;
    margin-left: 5px;
    text-transform: uppercase;
`;

export const InputArea = styled.View`
    width: 100%;
    padding: 30px;
    margin-top: 15px;
`;

export const CustomButton = styled.TouchableOpacity`
    height: 60px;
    background-color: #3b8952;
    border-radius: 15px;
    justify-content: center;
    align-items: center;
    margin-top: 40px;

`;
export const CustomButtonText = styled.Text`
    font-size: 22px;
    color: #fff;
    font-weight: bold;
`;


