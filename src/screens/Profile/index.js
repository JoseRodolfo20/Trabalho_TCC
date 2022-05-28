import react, { useState, useEffect, useContext } from 'react';
import { Text, Button } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { 
  Container,
  InfoUser,
  UserAvatar,
  UserName,
  CustomButton,
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
        // id: Array.id,
        // nome: Array.nome,
        // fotoUsuario: Array.fotoUsuario,
        // endereco: route.params.endereco,
        // email: route.params.email,
        // pass: route.params.pass
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
        <Icon name="home" size={18} color="#ffffff"/>
      </CustomButton>

      <InfoUser>
        <UserAvatar /*source={{uri: Array.fotoUsuario}}*/ />
        <UserName></UserName>
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