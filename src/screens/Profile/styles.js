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
    width: 90px;
    height: 90px;
    border-radius: 50px;
    margin-top: 10%;
    margin-left: 30px;
    margin-right: 20px;
    border-width: 4px;
    border-color: #ffffff;
    background-color: #ccc;
`;

export const UserName = styled.View`
    width: 55%;
    height: 10%;
    top: -35%;
    margin-left: 40%;
    font-size: 10px;
    color: #ffffff;
    border: 3px solid red;
    height: 20px;
    justify-content: center;
    align-items: center;

`;

export const SignEditProfile = styled.TouchableOpacity`
    height: 35px;
    padding: 3px;
    align-items: center;
    justify-content: flex-start;
    border-radius: 5px;
    flex-direction: row;
    margin-top: 20px;
    width: 90%;
    margin-left: 40px;
`;

export const EditProfile = styled.Text`
    font-size: 18px;
    color: #ffffff;
    font-weight: bold;
    text-transform: uppercase;
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
