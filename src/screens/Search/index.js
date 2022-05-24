import react, { useState, useEffect } from "react";
import { Text } from "react-native";
import{ 
    Container,
    Scroller,
    SearchArea,
    SearchInput,
    SearchButton
} from './styles'

import Api from "../../../Api";

import SearchIcon from '../../assets/search.svg'

export default () => {

    // const[list, setList] = useState([])

    // const getProf = async () => {
    //     setLoading(true)
    //     setList([])

    //     let res = await Api.getProf()
    //     console.log(res.error)
        
    //         setList(res)
        
    //     setLoading(false)
    // }

    // useEffect(() => {
    //     getProf()
    // }, []);

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

                {/* <ListArea>
                        {list.map((item, k)=>(
                            <List key={k} Array={item}/>
                        ))}
                </ListArea> */}

            </Scroller>
        </Container>
    )
}