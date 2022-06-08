import react from "react";
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #1c232e;
`;

export const Scroller = styled.ScrollView`
    flex: 1;
    padding: 0 20px;
`;

export const SearchArea = styled.View`
    background-color: #3b8952;
    height: 40px;
    border-radius: 20px;
    flex-direction: row;
    align-items: center;
    padding: 0 20px;
    margin: 20px;
`;

export const SearchInput = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: #ffffff;
`;

export const SearchButton = styled.TouchableOpacity`
    width: 24px;
    height: 24px;
`;

export const LoadingIncon = styled.ActivityIndicator`
    margin-top: 30px;
`;

export const EmptyWarning = styled.Text`
    text-align: center;
    margin-top: 30px;
    color: #ffffff;
    font-size: 14px;
`;

export const ListArea = styled.View`
    margin-top: 20px;
    margin-bottom: 20px;
`;

