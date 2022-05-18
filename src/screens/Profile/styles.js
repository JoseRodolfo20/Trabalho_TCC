import react from "react";
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #1c232e;
`;

export const InfoUser =  styled.View`
    flex-direction: row;
    margin-top: -30px;
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

`;

export const CustomButton = styled.TouchableOpacity`
    height: 50px;
    background-color: #3b8952;
    border-radius: 15px;
    justify-content: center;
    align-items: center;
    margin-top:40px;
    width: 60px;
    margin-left: 80%;
`;
// export const CustomButtonText = styled.View`
//     font-size: 18px;
//     color: #fff;
//     font-weight: bold;
// `;