import react from "react";
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
    InputCidadeService,
    OfferServiceButton,
    OfferServiceButtonText,
    InputDescriptionService
} from "./styles";

export default () => {
    const navigation = useNavigation()

    const handleClickOffertService = () => {
        
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
                        />

                        
                        <InputValueHourService 
                            placeholder="Valor da Hora (R$)"
                            placeholderTextColor="#ccc"
                            type="number"
                        />

                        
                        <InputEnderecoService 
                            placeholder="Endereço"
                            placeholderTextColor="#ccc"
                        />

                        
                        <InputCidadeService 
                            placeholder="Cidade"
                            placeholderTextColor="#ccc"
                        />

                        <InputDescriptionService 
                            placeholder="Restrições"
                            placeholderTextColor="#ccc"
                        />
                </InputArea>

                <OfferServiceButton onPress={handleClickOffertService}>
                    <OfferServiceButtonText>Ofertar Serviço</OfferServiceButtonText>
                </OfferServiceButton>

            </Scroller>
        </Container>
    )
}