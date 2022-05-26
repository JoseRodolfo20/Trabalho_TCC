import react, { useState, useContext } from "react";
import { useNavigation, useRoute } from '@react-navigation/native'
import { 
    Container,
    Scroller,
    HeaderArea,
    HeaderTitle,

    InputArea,
    Profile,
    SignName,
    SignEmail,
    SignPassword,
    SignEndereco,

    EditButton,
    CustomEditButtonText

} from "./styles";

import { UserContext } from '../../contexts/UserContext'
// import SignEditInput from "../../components/SignEditInput";

import EditImageIcon from '../../assets/editImage.svg'
import ProfileIcon from '../../assets/profile.svg'
import EmailIcon from '../../assets/email.svg'
import CadeadoIcon from '../../assets/cadeado.svg'

export default () => {
    const {state:user} = useContext(UserContext)
    const navigation = useNavigation()
    // const route = useRoute()

    // const[UserInfo, setUserInfo] = useState({
    //     id: route.params.id,
    //     nome: route.params.nome,
    //     email: route.params.email,
    //     pass: route.params.pass,
    //     endereco: route.params.endereco
    // })


    const handleEditClick = () => {
        navigation.reset({
            routes: [{name: 'Profile'}]
        })
    }

    return(
        <Container>
            <Scroller>
                <HeaderArea>
                    <HeaderTitle>Editar meu Dados</HeaderTitle>
                </HeaderArea>

                <InputArea>
                    <Profile /*source={{uri: UserInfo.fotoUsuario}}*/
                        IconSvg={EditImageIcon}
                    />

                    <SignName
                        IconSvg={ProfileIcon}
                        placeholder="Editar Nome"
                        placeholderTextColor="#fff"
                    />

                    <SignEmail 
                        IconSvg={EmailIcon}
                        placeholder="Editar Email"
                        placeholderTextColor="#fff"
                    />

                    <SignPassword 
                        IconSvg={CadeadoIcon}
                        placeholder="Editar Senha"
                        placeholderTextColor="#fff"
                    />

                    <SignEndereco 
                        placeholder="Editar Localização"
                        placeholderTextColor="#fff"
                    />
                </InputArea>

                <EditButton onPress={handleEditClick}>
                    <CustomEditButtonText>Editar Perfil</CustomEditButtonText>
                </EditButton>

            </Scroller>
        </Container>
    )
}