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
import DropDown from "../../components/FilterComponent";
// import Api from "../../../Api";

export default () => {
    let profissao = [{id: 1, profissao: 'Pedreiro'}, {id: 2, profissao: 'Pintor'}, {id: 3, profissao: 'Eletricista'}, {id: 3, profissao: 'Vidraceiro'}, {id: 3, profissao: 'Serralheiro'}]

    const[list, setList] = useState([])
    const[searchText, setSearchText] = useState('')
    const[emptyList, setEmptyList] = useState(false)
    const[loading, setLoading] = useState(false)
    const[selectedItem, setSelectedItem] = useState(null)

    const onSelect = (item) => {
        setSelectedItem(item)
    }

    const searchProf = async () => {

    }

    return(
        <Container>

            <DropDown 
                value={selectedItem}
                data={profissao}
                onSelect={onSelect}
            />

                

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