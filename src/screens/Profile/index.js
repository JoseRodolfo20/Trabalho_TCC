import React, { useState, useEffect, useContext } from 'react';
import { Text, Button } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { 
  Container,
  InfoUser,
  UserAvatar,
  UserName,
  CustomButton,
  SignEditProfile,
  EditProfile
} from './styles'

import Icon from 'react-native-vector-icons/FontAwesome';

import { UserContext } from '../../contexts/UserContext'

export default () => {
  const {state: user} = useContext(UserContext)

  const navigation = useNavigation()

  const handleEditProfile = async() => {
    navigation.reset({
      routes: [{name: 'SignIn'}]
    })
  }


  const handleLogoutClick = async() => {
    navigation.reset({
      routes: [{name: 'SignIn'}]
    })
  }

  const getInfoUser = async () => {

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
        <UserAvatar /*source={{uri: user.avatar}}*/ />
        <UserName></UserName>
      </InfoUser>

      <SignEditProfile onPress={handleEditProfile}>
          <EditProfile>Editar Perfil</EditProfile>
      </SignEditProfile>
      
    </Container>
  )
}