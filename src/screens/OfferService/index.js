import react from "react";
import { useNavigation } from "@react-navigation/native";
import { 
    Container, 
    HeaderArea, 
    HeaderTitle, 
    Scroller
} from "../EditProfile/styles";

export default () => {
    return(
        <Container>
            <Scroller>
                <HeaderArea>
                    <HeaderTitle>Ofertar Serviço</HeaderTitle>
                </HeaderArea>
            </Scroller>
        </Container>
    )
}