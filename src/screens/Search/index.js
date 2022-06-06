import react, { useState, useEffect } from "react";
import { Text, Keyboard} from "react-native";
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
// import { Keyboard } from "react-native-web";

export default () => {
    const link = `https://6ff9-138-121-21-56.sa.ngrok.io/usuarios`

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

    // const getSearch = async () => {
    //     let res = await Api.getSearch()

    //         setSearch(res)
    // }

    // useEffect(() => {
    //     getSearch()
    // }, []);

    // function buscar(search){
    //     setList(Array.filter((d) => d.profissao.includes(search)))
    // }

    const solicitar = async (search) => {
        Keyboard.dismiss()
        
        try {
            const resultados = await Api.getSearch(search)
            console.log(resultados)
        } catch (err) {
            console.log(err)
        }
    }

    return(
        <Container>
            <Scroller>
                <SearchArea value={search}>
                    <SearchInput 
                        placeholder="Pesquise Aqui"
                        placeholderTextColor="#FFFFFF"
                        value={search}
                        onChangeText={(search) =>setSearch(search)}
                        autoCapitalize="none"
                    />
                    <SearchButton>
                        <SearchIcon width="26" height="26" fill="#FFFFFF"
                            onPress={() => {solicitar(search)}}
                        />
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