import react, { useState, useEffect } from "react";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import{ 
    Container ,
    Scroller,
    HeaderArea,
    HeaderTitle,
    SearchArea,
    BackButton,
    ServicoNecessario,
    Dia,
    Hora,
    Endereco,
    DetalhesServico,
    RequestServiceButton,
    RequestServiceButtonText
} from './styles'

import BackIcon from '../../assets/back.svg'
import Api from "../../../Api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default () => {
    const navigation = useNavigation()

    const [servicoNecessarioField, setServicoNecessarioField] = useState('')
    const [diaField, setDiaField] = useState('')
    const [horaField, setHoraField]  = useState('')
    const [enderecoField, setEnderecoField] = useState('')
    const [detalhesServicoField, setDetalhesServicoField] = useState('')

    const handleClickOffertService = async() => {
        if(servicoNecessarioField != '' && diaField != '' && horaField != '' && enderecoField != '' && detalhesServicoField != ''){
            let json =  await Api.requestService(servicoNecessarioField, diaField, horaField, enderecoField, detalhesServicoField)
            if(json.token){
                await AsyncStorage.setItem('token', json.token)

                useEffect(() => {

                })

                // navigation.reset({
                //     routes: [{name: 'MainTab'}]
                // })
            }
        }else{
            alert('Preencha todos os campos!')
        }
        
    }

    const handleBackButton = () => {
        navigation.reset({
            routes: [{name: 'MainTab'}]
        })
    }

    return(
        <Container>
            <Scroller>
                <HeaderArea>
                    <HeaderTitle>Solicitar Serviço</HeaderTitle>
                </HeaderArea>

                <SearchArea >
                    
                    <ServicoNecessario
                        placeholder="Serviço necessário"
                        placeholderTextColor="#ccc"
                        value={servicoNecessarioField}
                        onChangeText={t=>setServicoNecessarioField(t)}
                    />

                    <Dia 
                        placeholder="Dia"
                        placeholderTextColor="#ccc"
                        value={diaField}
                        onChangeText={t=>setDiaField(t)}
                    />

                    <Hora 
                        placeholder="Hora"
                        placeholderTextColor="#ccc"
                        value={horaField}
                        onChangeText={t=>setHoraField(t)}
                    />

                    <Endereco 
                        placeholder="Endereço"
                        placeholderTextColor="#ccc"
                        value={enderecoField}
                        onChangeText={t=>setEnderecoField(t)}
                    />

                    <DetalhesServico 
                        placeholder="Detalhes do Serviço"
                        placeholderTextColor="#ccc"
                        value={detalhesServicoField}
                        onChangeText={t=>setDetalhesServicoField(t)}
                    />

                    
                </SearchArea>

                <RequestServiceButton onPress={handleClickOffertService}>
                    <RequestServiceButtonText>Solicitar Serviço</RequestServiceButtonText>
                </RequestServiceButton>

            </Scroller>

            <BackButton onPress={handleBackButton}>
                <BackIcon width="25" height="25" fill="#ffffff"/>
            </BackButton>

        </Container>
    )
}