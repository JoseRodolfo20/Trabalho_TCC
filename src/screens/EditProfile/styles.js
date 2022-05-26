import React from "react";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #1c232e;
`;

export const Scroller = styled.ScrollView`
    flex: 1;
`;

export const HeaderArea = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
`;

export const HeaderTitle = styled.Text`
    width: 100%;
    font-size: 24px;
    font-weight: bold;
    color: #ffffff;
    text-align: center;
`;

export const InputArea = styled.View`
    width: 100%;
    padding: 30px;
    margin-top: 15px;
    margin-bottom: 20px;
    border-radius: 20px;
`;

export const Profile  = styled.Image`
    width: 110px;
    height: 110px;
    border-radius: 20px;
    margin-left: 33%;
    margin-right: 33%;
    border-width: 4px;
    border-color: #ffffff;
    background-color: #ccc;
    align-items: center;
`;

export const SignName = styled.TextInput`
    background-color: #3b8952;
    font-size: 16px;
    height: 60px;
    border-radius: 10px;
    color: #ffffff;
    font-weight: bold;
    text-align: center;
    margin-top: 20px;
`;


export const SignEmail = styled.TextInput`
    background-color: #3b8952;
    font-size: 16px;
    margin-top: 20px;
    height: 60px;
    border-radius: 10px;
    color: #ffffff;
    font-weight: bold;
    text-align: center;
`;

export const SignPassword = styled.TextInput`
    background-color: #3b8952;
    font-size: 16px;
    margin-top: 20px;
    height: 60px;
    border-radius: 10px;
    color: #ffffff;
    font-weight: bold;
    text-align: center;
`;

export const SignEndereco = styled.TextInput`
    background-color: #3b8952;
    font-size: 16px;
    margin-top: 20px;
    height: 60px;
    border-radius: 10px;
    color: #ffffff;
    font-weight: bold;
    text-align: center;
`;

export const EditButton = styled.TouchableOpacity`
    height: 60px;
    width: 50%;
    background-color: #3b8952;
    border-radius: 15px;
    justify-content: center;
    align-items: center;
    margin-top: 0px;
    margin-left: 25%;
`;
export const CustomEditButtonText = styled.Text`
    font-size: 22px;
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;
`;
