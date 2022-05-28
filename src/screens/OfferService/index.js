import react from "react";
import { useNavigation } from "@react-navigation/native";
import { 
    Container, 
    HeaderArea, 
    HeaderTitle, 
    Scroller, 
    InputArea, 
    InfoText,
    InputNameService,
    InputValueHourService,
    InputEnderecoService,
    InputCidadeService,
    OfferServiceButton,
    OfferServiceButtonText,
    InputDescriptionService
} from "./styles";

export default () => {
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
                            placeholder="Breve descrição do serviçor"
                            placeholderTextColor="#ccc"
                        />
                </InputArea>

                <OfferServiceButton>
                    <OfferServiceButtonText>Ofertar Serviço</OfferServiceButtonText>
                </OfferServiceButton>

            </Scroller>
        </Container>
    )
}