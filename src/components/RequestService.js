import React from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

const Area = styled.View`
    background-color: #ffffff;
    margin-bottom: 20px;
    border-radius: 20px;
    padding: 15px;
    flex-direction: row;
`;

const InfoArea = styled.View`
    margin-left: 20px;
    justify-content: space-between;
`;

const ServicoNecessario =  styled.Text`
    font-size: 15px;
    font-weight: bold;
`;

const Dia = styled.Text`
    font-size: 15px;
    font-weight: bold;
`;

const Hora = styled.Text`
    font-size: 15px;
    font-weight: bold;
`;

const DetalhesServico = styled.Text`
    font-size: 15px;
    font-weight: bold;
`;

export default ({Array}) => {
    const navigation = useNavigation()

    return(
        <Area>
            <InfoArea>
                <ServicoNecessario>{Array.servico_necessario}</ServicoNecessario>
                <Dia>{Array.dia}</Dia>
                <Hora>{Array.hora}</Hora>
                <DetalhesServico>{Array.detalhes_servico_necessario}</DetalhesServico>
            </InfoArea>
        </Area>
    )
}