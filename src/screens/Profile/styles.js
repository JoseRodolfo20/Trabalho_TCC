import react from "react";
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #1c232e;
`;

export const InfoUser =  styled.View`
    margin-left: 20px;
    justify-content: space-between;
`;

export const UserAvatar =  styled.Image`
    width: 120px;
    height: 120px;
    border-radius: 50px;
    margin-top: 10%;
    margin-left: 30px;
    margin-right: 20px;
    border-width: 4px;
    border-color: #ffffff;
    background-color: #ccc;
`;

export const UserName = styled.Text`
    font-size: 22px;
    width: 50%;
    top: -37%;
    margin-left: 48%;
    color: #ffffff;
    height: 40px;
    justify-content: center;
    align-items: center;

`;

export const SignEditProfile = styled.TouchableOpacity`
    height: 65px;
    padding: 3px;
    align-items: center;
    justify-content: flex-start;
    border-radius: 5px;
    flex-direction: row;
    margin-top: 20px;
    width: 80%;
    margin-left: 40px;
    background-color: #3b8952;
`;

export const EditProfile = styled.Text`
    font-size: 23px;
    color: #ffffff;
    font-weight: bold;
    text-transform: uppercase;
`;

export const SignOfertService = styled.TouchableOpacity`
    height: 65px;
    padding: 3px;
    align-items: center;
    justify-content: flex-start;
    border-radius: 5px;
    flex-direction: row;
    margin-top: 20px;
    width: 80%;
    margin-left: 40px;
    background-color: #3b8952;
`;

export const OfertServiceText = styled.Text`
    font-size: 23px;
    color: #ffffff;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
`;

export const CustomButton = styled.TouchableOpacity`
    height: 50px;
    background-color: #3b8952;
    border-radius: 15px;
    justify-content: center;
    align-items: center;
    margin-top:10px;
    width: 60px;
    margin-left: 80%;
`;

export const CustomButtonText = styled.Text`
    font-size: 14px;
    color: #fff;
    font-weight: bold;
`;
