import react, { useState, useEffect } from "react";
import { Text, Keyboard} from "react-native";
import { RefreshControl } from "react-native";
import{ 
    Container,
    Scroller,
    HeaderArea,
    HeaderTitle,
    ListArea,
    EmptyWarning
} from './styles'

import Api from "../../../Api";

import List from '../../components/FlatList'
import SearchIcon from '../../assets/search.svg'
// import { Keyboard } from "react-native-web";

export default () => {

    const[list, setList] = useState([])
    const[loading, setLoading] = useState(false)

    useEffect(() => {
        getFavorites()
    }, [])

    const getFavorites = async () => {
        setLoading(true)
        setList([])
       
            let res = await Api.getFavorites()
            if(res.error == ''){
                if(res.list.lenght > 0){
                    setList(res.list)
                }
            }else{
                alert('ERRO: ' +res.error)
            }

        setLoading(false)

    }

    return(
        <Container>
            
                <HeaderArea>
                    <HeaderTitle>Favoritos</HeaderTitle>
                </HeaderArea>

                <Scroller refreshControl={
                    <RefreshControl refreshing={loading} onRefresh={getFavorites}/>
                }>

                    {!loading && list.length === 0 &&
                        <EmptyWarning>Não há favoritos</EmptyWarning>
                    }

                    <ListArea>
                        {list.map((item, k) => (
                            <List key={k} Array={item}/>
                        ))}
                    </ListArea>

                </Scroller>
        </Container>
    )
}