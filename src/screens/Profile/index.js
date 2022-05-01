import react from "react";
import { Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { 
    Container
} from './styles'

export default () => {

    const navigation = useNavigation()

    const handleLogoutClick = async() => {
        navigation.reset({
            routes: [{name: 'SignIn'}]
        })
    }

    return(
        <Container>
            <Button title="Sair" onPress={handleLogoutClick}/>
        </Container>
    )
}