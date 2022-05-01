import react, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { RefreshControl } from "react-native";
import Lp from '../../components/FlatList'
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

    const [refreshing, setRefreshing] = useState(false)

    const onRefresh = () => {
        setRefreshing(false)

    }

    return(
        <Container>
            <Scroller refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
            }>

                    <HeaderArea>
                        <HeaderTitle numberOfLines={2}>Encontre o melhor profissional</HeaderTitle>
                        <SearchButton onPress={() => navigation.navigate('Search')}>
                            <SearchIcon width="26" height="26" fill="#ffffff"/>
                        </SearchButton>
                    </HeaderArea>

                    <Lp/>
                    
            </Scroller>
            
        </Container>
    )
}