import react from "react";
import { useNavigation } from "@react-navigation/native";
import { 
    Container,
    Scroller,

    HeaderArea,
    HeaderTitle,
    SearchButton,

} from './styles'

import SearchIcon from '../../assets/search.svg'

export default () => {

    const navigation = useNavigation()

    return(
        <Container>
            <Scroller>

                <HeaderArea>
                    <HeaderTitle numberOfLines={2}>Encontre o melhor profissional</HeaderTitle>
                    <SearchButton onPress={() => navigation.navigate('Search')}>
                        <SearchIcon width="26" height="26" fill="#ffffff"/>
                    </SearchButton>
                </HeaderArea>

            </Scroller>
        </Container>
    )
}