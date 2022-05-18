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

import FlatList from '../../components/FlatList'
import SearchIcon from '../../assets/search.svg'

export default () => {

    const navigation = useNavigation()

    const[loading, setLoading] = useState(false)
    const[list, setList] = useState([])
    const[refreshing, setRefreshing] = useState(false)

    const getProf = async () => {
        // setLoading(true)
        setList([])

        
        
        if(res.error == ''){
            setList(res.data)
        }else{
            alert('Erro: ' + res.error)
        }
        setLoading(false)
    }

    useEffect(() => {
        getProf()
    }, []);

    const onRefresh = () => {
        setRefreshing(false)
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
                            <FlatList key={k} data={item}/>
                        ))}
                    </ListArea>

            </Scroller>
            
        </Container>
    )
}