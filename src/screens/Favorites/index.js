import react from "react";
import { Text } from "react-native";
import{ 
    Container,
    Scroller,

    HeaderArea,
    HeaderTitle
 } from './styles'

export default () => {
    return(
        <Container>
            <Scroller>
                <HeaderArea>
                    <HeaderTitle>Favoritos</HeaderTitle>
                </HeaderArea>

                

            </Scroller>     
        </Container>
    )
}