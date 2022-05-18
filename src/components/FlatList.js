import React from "react";
import styled from "styled-components/native";
import { useNavigation } from '@react-navigation/native'

import Stars from '../components/Stars'

const Area = styled.TouchableOpacity`
  background-color: #ffffff;
  margin-bottom: 20px;
  border-radius: 20px;
  padding: 15px;
  flex-direction: row;
`;

const Photo = styled.Image`
  width: 88px;
  height: 88px;
  border-radius: 20px;
`;

const InfoArea = styled.View`
  margin-left: 20px;
  justify-content: space-between;
`;

const UserName = styled.Text`
  font-size: 17px;
  font-weight: bold;
`;

const UserLocation = styled.Text`
  font-size: 15px;
  font-weight: bold;
`;

const SeeProfileButton = styled.View`
  width: 85px;
  height: 26px;
  border: 1px solid #1c232e;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

const SeeProfileButtonText = styled.Text`
  font-size: 13px;
  color: #1c232e;
`;

export default ({data}) => {
  const navigation = useNavigation()

  const handleClick = () => {
    navigation.navigate('Profissional', {
      id: data.id,
      name: data.name,
      photo: data.photo,
      location: data.location,
      stars: data.stars
    })
  }

  return(
    <Area onPress={handleClick}>
      <Photo source={{uri: data.photo}}/>
      <InfoArea>
        <UserName>{data.name}</UserName>
        <UserLocation>{data.location}</UserLocation>
        <Stars stars={data.stars} showNumber={true}/>       
        <SeeProfileButton>
          <SeeProfileButtonText>Ver Perfil</SeeProfileButtonText>
        </SeeProfileButton>
      </InfoArea>
    </Area>
  )
}