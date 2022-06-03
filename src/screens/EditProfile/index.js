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
    CustomEditButtonText,

    BackButton

} from "./styles";

import Api from '../../../Api'

import BackIcon from '../../assets/back.svg'
import { UserContext } from '../../contexts/UserContext'
// import SignEditInput from '../../components/SignEditInput'

import EditImageIcon from '../../assets/editImage.svg'
import ProfileIcon from '../../assets/profile.svg'
import EmailIcon from '../../assets/email.svg'
import CadeadoIcon from '../../assets/cadeado.svg'
import AsyncStorage from "@react-native-async-storage/async-storage";

export default () => {
    const {state:user} = useContext(UserContext)
    const navigation = useNavigation()
    const [fotoField, setFotoField] = useState('')
    const [nameField, setNameField] = useState('')
    const [emailField, setEmailField] = useState('')
    const [passwordField, setPasswordField] = useState('')
    const [locationField, setLocationField] = useState('')
    // const route = useRoute()

    // const[UserInfo, setUserInfo] = useState({
    //     id: route.params.id,
    //     nome: route.params.nome,
    //     email: route.params.email,
    //     pass: route.params.pass,
    //     endereco: route.params.endereco
    // })


    const handleEditClick = async() => {
        if(nameField != '' && emailField != '' && passwordField != '' && locationField != ''){
            let json = await Api.editProfile(nameField, emailField, passwordField, locationField)
            if(json.token){
                await AsyncStorage.setItem('token', json.token)

                alert('Dados alterados com Sucesso!')

                navigation.reset({
                    routes: [{name: 'SignIn'}]
                })
            }

        }else{
            alert('Preencha todos os campos!')
        }
    }

    const handleBackButton = () => {
        navigation.reset({
            routes: [{name: 'MainTab'}]
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
                        value={fotoField}
                        onChangeText={t=>setFotoField(t)}
                    />

                    <SignName
                        IconSvg={ProfileIcon}
                        placeholder="Editar Nome"
                        placeholderTextColor="#ccc"
                        value={nameField}
                        onChangeText={t=>setNameField(t)}
                    />

                    <SignEmail 
                        IconSvg={EmailIcon}
                        placeholder="Editar Email"
                        placeholderTextColor="#ccc"    
                        value={emailField}  
                        onChangeText={t=>setEmailField(t)}               
                    />

                    <SignPassword 
                        IconSvg={CadeadoIcon}
                        placeholder="Editar Senha"
                        placeholderTextColor="#ccc"
                        value={passwordField}
                        onChangeText={t=>setPasswordField(t)}
                        password={true}
                    />

                    <SignEndereco 
                        placeholder="Editar Localização"
                        placeholderTextColor="#ccc"
                        value={locationField}
                        onChangeText={t=>setLocationField(t)}
                    />
                </InputArea>

                <EditButton onPress={handleEditClick}>
                    <CustomEditButtonText>Editar Perfil</CustomEditButtonText>
                </EditButton>

            </Scroller>

            <BackButton onPress={handleBackButton}>
                <BackIcon width="25" height="25" fill="#ffffff"/>
            </BackButton>

        </Container>
    )
}