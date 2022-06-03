import react from 'react'
import { useNavigation } from '@react-navigation/native'
import { 
    Container,
    Scroller,
    HeaderArea, 
    HeaderTitle,
    BackButton
} from './styles'

import BackIcon from '../../assets/back.svg'

export default () => {
    const navigation = useNavigation()

    const handleBackButton = () => {
        navigation.reset({
            routes: [{name: 'MainTab'}]
        })
    }

    return(
        <Container>
            <Scroller>
                <HeaderArea>
                    <HeaderTitle>Histórico de Serviços</HeaderTitle>
                </HeaderArea>
            </Scroller>
            <BackButton onPress={handleBackButton}>
                <BackIcon width="25" height="25" fill="#ffffff"/>
            </BackButton>
        </Container>
    )
}