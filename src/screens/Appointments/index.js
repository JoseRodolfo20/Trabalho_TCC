import react from "react";
import { Text } from "react-native";
import{ 
    Container,
    RequestService
} from './styles'

import ListService from "../../components/RequestService";

export default () => {
    const[list, setList] = useState([])

    return(
        <Container>

        <RequestService>
            {list.map((item, k)=>(
                <ListService key={k} Array={item}/>
            ))}
        </RequestService>

        </Container>
    )
}