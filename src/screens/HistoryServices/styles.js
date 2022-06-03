import react from "react"
import styled from "styled-components/native"

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

export const BackButton = styled.TouchableOpacity`
    position: absolute;
    left: 15;
    top: 35;
    z-index: 9;
`;