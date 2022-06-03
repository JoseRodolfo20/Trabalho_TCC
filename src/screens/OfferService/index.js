import react, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { 
    Container, 
    HeaderArea, 
    HeaderTitle, 
    Scroller, 
    InputArea, 
    InputNameService,
    InputValueHourService,
    InputEnderecoService,
    OfferServiceButton,
    OfferServiceButtonText,
    InputDescriptionService,
    BackButton
} from "./styles";

import BackIcon from '../../assets/back.svg'
import AsyncStorage from "@react-native-async-storage/async-storage";
import Api from "../../../Api";

export default () => {
    const navigation = useNavigation()

    const [nameField, setNameField] = useState('')
    const [valueHourField, setValueHourField] = useState('')
    const [enderecoField, setEnderecoField] = useState('')
    const [restritionField, setRestritionField] = useState('')

    const handleClickOffertService = async() => {
        if(nameField != '' && valueHourField != '' && enderecoField != '' && restritionField != ''){
            let json = await Api.offerService(nameField, valueHourField, enderecoField, restritionField)
            if(json.token){
                await AsyncStorage.setItem('token', json.token)

                alert('Serviço oferecido co Sucesso!')

                navigation.reset({
                    routes: [{name: 'MainTab'}]
                })
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
                    <HeaderTitle>Ofertar Serviço</HeaderTitle>
                </HeaderArea>

                <InputArea>
                        
                        <InputNameService 
                            placeholder="Profissão"
                            placeholderTextColor="#ccc"
                            value={nameField}
                            onChangeText={t=>setNameField(t)}
                        />

                        
                        <InputValueHourService 
                            placeholder="Valor da Hora (R$)"
                            placeholderTextColor="#ccc"
                            type="number"
                            value={valueHourField}
                            onChangeText={t=>setValueHourField(t)}
                        />

                        
                        <InputEnderecoService 
                            placeholder="Endereço"
                            placeholderTextColor="#ccc"
                            value={enderecoField}
                            onChangeText={t=>setEnderecoField(t)}
                        />

                        <InputDescriptionService 
                            placeholder="Restrições"
                            placeholderTextColor="#ccc"
                            value={restritionField}
                            onChangeText={t=>setRestritionField(t)}
                        />
                </InputArea>

                <OfferServiceButton onPress={handleClickOffertService}>
                    <OfferServiceButtonText>Ofertar Serviço</OfferServiceButtonText>
                </OfferServiceButton>

            </Scroller>

            <BackButton onPress={handleBackButton}>
                <BackIcon width="25" height="25" fill="#ffffff"/>
            </BackButton>

        </Container>
    )
}