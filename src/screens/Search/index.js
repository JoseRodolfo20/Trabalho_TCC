import react, { useState, useEffect } from "react";
import { Text } from "react-native";
import{ 
    Container,
    Scroller,
    SearchArea,
    SearchInput,
    SearchButton,
    ListArea
} from './styles'

import Api from "../../../Api";

import List from '../../components/FlatList'
import SearchIcon from '../../assets/search.svg'

export default () => {

    const[list, setList] = useState([])
    const[search, setSearch] = useState('')

    const getProf = async () => {
        setList([])

        let res = await Api.getProf()
        console.log(res.error)
        
            setList(res)
        
    }

    useEffect(() => {
        getProf()
    }, []);

    const getSearch = async () => {
        let res = await Api.getSearch()

            setSearch(res)
    }

    useEffect(() => {
        getSearch()
    }, []);

    return(
        <Container>
            <Scroller>
                <SearchArea value={search}>
                    <SearchInput 
                        placeholder="Pesquise Aqui"
                        placeholderTextColor="#FFFFFF"
                        value={search}
                        onChangeText={(t) => setSearch(t)}
                    />
                    <SearchButton>
                        <SearchIcon width="26" height="26" fill="#FFFFFF"/>
                    </SearchButton>
                </SearchArea>

                <ListArea>
                        {list.map((item, k)=>(
                            <List key={k} Array={item}/>
                        ))}
                </ListArea>

            </Scroller>
        </Container>
    )
}