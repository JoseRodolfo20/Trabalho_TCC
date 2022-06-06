import react, { useState, useEffect, useContext } from 'react';
import { Text, Button } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { 
  Container,
  Scroller,
  InfoUser,
  UserAvatar,
  UserName,
  CustomButton,
  SignServiceRequest,
  ServiceRequestText,
  SignEditProfile,
  EditProfile,
  SignOfertService,
  OfertServiceText,
  SignHistoryServices,
  HistoryServicesText
} from './styles'

import LogoutIcon from '../../assets/logout.svg'

import Api from '../../../Api';
import { UserContext } from '../../contexts/UserContext'

export default ({user}) => {
  // const {state: user} = useContext(UserContext)
  const[list, setList] = useState([])
  const route = useRoute()

//   const[userInfo, setUserInfo] = useState({
//     id: route.params.id,
//     nome: route.params.nome,
//     fotoUsuario: route.params.fotoUsuario,
//     endereco: route.params.endereco,
//     stars: route.params.stars
// })

  const navigation = useNavigation()

  
  const handleEditProfile = () => {
    navigation.reset({
      routes: [{name: 'EditProfile'}]
    })
  }

  const handleServiceRequest = async() => {
    navigation.reset({
      routes: [{name: 'RequestService'}]
    })
  }

  const handleOfertService = async() => {
    navigation.reset({
      routes: [{name: 'OfferService'}]
    })
  }

  const handleHistoryServices = async() => {
    navigation.reset({
      routes: [{name: 'HistoryServices'}]
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
        <LogoutIcon width="25" height="25" fill="#ffffff" />
      </CustomButton>
      
        <InfoUser>
          <UserAvatar /*source={{uri: userInfo.fotoUsuario}}*/ />
          <UserName>Nome do usuario logado</UserName>
        </InfoUser>

      <Scroller>
        <SignServiceRequest onPress={handleServiceRequest}>
          <ServiceRequestText>Solicitar Serviço</ServiceRequestText>
        </SignServiceRequest>

        <SignEditProfile onPress={handleEditProfile}>
            <EditProfile >Editar Perfil</EditProfile>
        </SignEditProfile>

        <SignOfertService onPress={handleOfertService}>
            <OfertServiceText>Ofertar serviço</OfertServiceText>
        </SignOfertService>

        <SignHistoryServices onPress={handleHistoryServices}>
          <HistoryServicesText>Histórico de Serviços</HistoryServicesText>
        </SignHistoryServices>
      </Scroller>
      
    </Container>
  )
}