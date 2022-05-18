import React, { useState, useEffect, useContext } from 'react';
import { Text, Button } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { 
  Container,
  InfoUser,
  UserAvatar,
  UserName,
  CustomButton
} from './styles'

import Icon from 'react-native-vector-icons/FontAwesome';

import { UserContext } from '../../contexts/UserContext'

export default () => {
  const {state: user} = useContext(UserContext)

  const navigation = useNavigation()


  const handleLogoutClick = async() => {
    navigation.reset({
      routes: [{name: 'SignIn'}]
    })
  }

  return(
    <Container>
      <InfoUser>
        <UserAvatar /*source={{uri: user.avatar}}*/ />
        <UserName></UserName>
      </InfoUser>
      <CustomButton onPress={handleLogoutClick}>
      <Icon name="home" size={18} color="#ffffff"/>
      </CustomButton>
    </Container>
  )
}