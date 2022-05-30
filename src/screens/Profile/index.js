import react, { useState, useEffect, useContext } from 'react';
import { Text, Button } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { 
  Container,
  InfoUser,
  UserAvatar,
  UserName,
  CustomButton,
  CustomButtonText,
  SignEditProfile,
  EditProfile,
  SignOfertService,
  OfertServiceText
} from './styles'

import Icon from 'react-native-vector-icons/FontAwesome';
import EditIcon from '../../assets/edit.svg'

import Api from '../../../Api';
import { UserContext } from '../../contexts/UserContext'
import { UserInfo } from '../Profissional/styles';

export default ({Array}) => {
  const {state: user} = useContext(UserContext)
  const[list, setList] = useState([])
  const route = useRoute()

  const navigation = useNavigation()

  
  const handleEditProfile = () => {
    // navigation.navigate('EditProfile', {
    //     id: Array.id,
    //     nome: Array.nome,
    //     fotoUsuario: Array.fotoUsuario,
    //     endereco: Array.params.endereco,
    //     email: Array.params.email,
    //     pass: Array.params.pass
    // })
    navigation.reset({
      routes: [{name: 'EditProfile'}]
    })
  }

  const handleOfertService = async() => {
    navigation.reset({
      routes: [{name: 'OfferService'}]
    })
  }

  const handleLogoutClick = async() => {
    // await Api.logout()
    navigation.reset({
      routes: [{name: 'SignIn'}]
    })
  }

  const getInfoUser = async () => {
    setList([])

    let res = await Api.getInfoUser()
    console.log(res)

      setList(res)

  }

  useEffect(() => {
    getInfoUser()
  }, []);

  return(
    <Container>
      
      <CustomButton onPress={handleLogoutClick}>
        <CustomButtonText>SAIR</CustomButtonText>
      </CustomButton>

      <InfoUser>
        <UserAvatar /*source={{uri: Array.fotoUsuario}}*/ />
        <UserName>José Rodofo</UserName>
      </InfoUser>

      <SignEditProfile onPress={handleEditProfile}>
          <EditProfile >Editar Perfil</EditProfile>
      </SignEditProfile>

      <SignOfertService onPress={handleOfertService}>
          <OfertServiceText >Ofertar serviço</OfertServiceText>
      </SignOfertService>
      
    </Container>
  )
}