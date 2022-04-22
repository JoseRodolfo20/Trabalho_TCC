import react from "react";
import { Text } from "react-native";
import{ 
    Container,
    Scroller,
    SearchArea,
    SearchInput,
    SearchButton
} from './styles'

import SearchIcon from '../../assets/search.svg'

export default () => {
    return(
        <Container>
            <Scroller>
                <SearchArea>
                    <SearchInput 
                        placeholder="Pesquise Aqui"
                        placeholderTextColor="#FFFFFF"

                    />
                    <SearchButton>
                        <SearchIcon width="26" height="26" fill="#FFFFFF"/>
                    </SearchButton>
                </SearchArea>
            </Scroller>
        </Container>
    )
}