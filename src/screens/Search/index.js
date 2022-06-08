import react, { useState, useEffect } from "react";
import { Text, Keyboard} from "react-native";
import{ 
    Container,
    Scroller,
    SearchArea,
    SearchInput,
    SearchButton,
    LoadingIncon,
    ListArea,
    EmptyWarning
} from './styles'

import Api from "../../../Api";

import List from '../../components/FlatList'
import SearchIcon from '../../assets/search.svg'
// import { Keyboard } from "react-native-web";

export default () => {

    const[list, setList] = useState([])
    const[searchText, setSearchText] = useState('')
    const[emptyList, setEmptyList] = useState(false)
    const[loading, setLoading] = useState(false)

    // const solicitar = async (search) => {
    //     Keyboard.dismiss()
        
    //     try {
    //         const resultados = await Api.getSearch(search)
    //         console.log(resultados)
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }

    const searchProf = async () => {
        setEmptyList(false)
        setLoading(true)
        setList([])

        if(searchText != ''){
            let res = await Api.search(searchText)
            if(res.error == ''){
                if(res.list.lenght > 0){
                setList(res.list)
                }else{
                    setEmptyList(true)
                }
            }else{
                alert('ERRO: ' +res.error)
            }
        }

        setLoading(false)

    }

    return(
        <Container>
            
                <SearchArea>
                    <SearchInput 
                        placeholder="Digite a profissão"
                        placeholderTextColor="#FFFFFF"
                        autoCapitalize="none"
                        value={searchText}
                        onChangeText={t=>setSearchText(t)}
                        onEndEditing={searchProf}
                        returnKeyType="search"
                        autoFocus
                        selectTextOnFocus
                    />
                    <SearchButton>
                        <SearchIcon width="26" height="26" fill="#FFFFFF"
                            
                        />
                    </SearchButton>
                </SearchArea>

                <Scroller>

                    {loading &&
                        <LoadingIncon size="large" color="#ffffff"/>
                    }

                    {emptyList &&
                        <EmptyWarning>Não achamos a profissão "{searchText}" </EmptyWarning>
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