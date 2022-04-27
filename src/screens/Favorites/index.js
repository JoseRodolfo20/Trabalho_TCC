import react from "react";
import { Text } from "react-native";
import Lp from '../../components/FlatList'
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

                <Lp/>

            </Scroller>     
        </Container>
    )
}