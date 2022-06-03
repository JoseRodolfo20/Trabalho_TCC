import React from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

import ExpandIcon from '../assets/expand.svg'

const Modal = styled.Modal`

`;

const ModalArea = styled.View`
    flex: 1;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content: flex-end;
`;

const ModalBody = styled.View`
    background-color: #3b8952;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    min-height: 300px;
    padding: 10px 20px 40px 20px ;
`;

const CloseButton = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
`;

const ModalItem = styled.View`
    background-color: #ffffff;
    border-radius: 10px;
    margin-top: 15px;
    padding: 10px;
`;

const UserInfo = styled.View`
    flex-direction: row;
    align-items: center;
`;

const UserAvatar = styled.Image`
    width: 56px;
    height: 56px;
    border-radius: 20px;
    margin-right: 15px;
`;

const UserName = styled.Text`
    color: #000000;
    font-size: 18px;
    font-weight: bold;
`;

const ServiceInfo = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

const ServiceName = styled.Text`
    font-size: 16px;
    font-weight: bold;
`;

const ServicePrice = styled.Text`
    font-size: 16px;
    font-weight: bold;
`;

const FinishButton = styled.TouchableOpacity`
    background-color: #3b8952;
    height: 60px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
`;

const FinishButtonText = styled.Text`
    font-size: 15px;
    color: #ffffff;
    font-weight: bold;
`;

export default ({ show, setShow, user, profissao }) => {
    const navigation = useNavigation()

    const handleCloseButton = () => {
        setShow(false)
    }

    const handleFinishClick = () => {

    }

    return(
        <Modal
            transparent={true}
            visible={show}
            animationType="slide"
        >

            <ModalArea>
                <ModalBody>
                    <CloseButton onPress={handleCloseButton}>
                        <ExpandIcon width="40" height="40" fill="#000000"/>
                    </CloseButton>

                    <ModalItem>
                        <UserInfo>
                            <UserAvatar source={{uri: user.fotoUsuario}} />
                            <UserName>{user.nome}</UserName>
                        </UserInfo>
                    </ModalItem>

                    {profissao != null &&
                    <ModalItem>
                        <ServiceInfo>
                            <ServiceName>{user.profissao}</ServiceName>
                            <ServicePrice>R$</ServicePrice>
                        </ServiceInfo>
                    </ModalItem>
                    }

                    <FinishButton onPress={handleFinishClick}>
                        <FinishButtonText>Agendar pelo Whatsapp</FinishButtonText>
                    </FinishButton>

                </ModalBody>
            </ModalArea>

        </Modal>
    )
}