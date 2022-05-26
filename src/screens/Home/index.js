import react, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { RefreshControl } from "react-native";

import { 
    Container,
    Scroller,

    HeaderArea,
    HeaderTitle,
    SearchButton,

    LoadingIcon,
    ListArea
} from './styles'

import Api from "../../../Api";
import List from '../../components/FlatList'
import SearchIcon from '../../assets/search.svg'

export default () => {

    const navigation = useNavigation()

    const[loading, setLoading] = useState(false)
    const[list, setList] = useState([])
    const[refreshing, setRefreshing] = useState(false)

    const getProf = async () => {
        setLoading(true)
        setList([])

        let res = await Api.getProf()
        console.log(res)
        
            setList(res)
        
        setLoading(false)
    }

    useEffect(() => {
        getProf()
    }, []);

    const onRefresh = () => {
        setRefreshing(true)
        getProf()
    }

    return(
        <Container>
            <Scroller refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
            } >

                    <HeaderArea>
                        <HeaderTitle numberOfLines={2}>Encontre o melhor profissional</HeaderTitle>
                        <SearchButton onPress={() => navigation.navigate('Search')}>
                            <SearchIcon width="26" height="26" fill="#ffffff"/>
                        </SearchButton>
                    </HeaderArea>

                    {loading &&
                        <LoadingIcon size="large" color="#ffffff"/>
                    }

                    <ListArea>
                        {list.map((item, k)=>(
                            <List key={k} Array={item}/>
                        ))}
                    </ListArea>

            </Scroller>
            
        </Container>
    )
}