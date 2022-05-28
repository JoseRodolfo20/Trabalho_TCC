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
    color: #fff;
    text-align: center;
`;

export const InputArea = styled.View`
    width: 100%;
    padding: 30px;
    margin-top: 15px;
    margin-bottom: 20px;
    border-radius: 20px;
`;

export const InfoText = styled.Text`
    width: 100%;
    color: #fff;
    font-size: 20px;
`;

export const InputNameService = styled.TextInput`
    background-color: #3b8952;
    font-size: 16px;
    height: 60px;
    border-radius: 10px;
    color: #ffffff;
    font-weight: bold;
    text-align: center;
    margin-top: 2px;
`;

export const InputValueHourService = styled.TextInput`
    background-color: #3b8952;
    font-size: 16px;
    height: 60px;
    border-radius: 10px;
    color: #ffffff;
    font-weight: bold;
    text-align: center;
    margin-top: 30px;
`;

export const InputEnderecoService = styled.TextInput`
    background-color: #3b8952;
    font-size: 16px;
    height: 60px;
    border-radius: 10px;
    color: #ffffff;
    font-weight: bold;
    text-align: center;
    margin-top: 30px;
`;

export const InputCidadeService = styled.TextInput`
    background-color: #3b8952;
    font-size: 16px;
    height: 60px;
    border-radius: 10px;
    color: #ffffff;
    font-weight: bold;
    text-align: center;
    margin-top: 30px;
`;

export const InputDescriptionService = styled.TextInput`
    background-color: #3b8952;
    font-size: 16px;
    height: 180px;
    border-radius: 10px;
    color: #ffffff;
    font-weight: bold;
    text-align: center;
    /* justify-content: baseline; */
    margin-top: 30px;
`;

export const OfferServiceButton = styled.TouchableOpacity`
    height: 60px;
    width: 50%;
    background-color: #3b8952;
    border-radius: 15px;
    justify-content: center;
    align-items: center;
    margin-top: 0px;
    margin-left: 25%;
    margin-bottom: 10%;
`;

export const OfferServiceButtonText = styled.Text`
    font-size: 22px;
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;
`;


