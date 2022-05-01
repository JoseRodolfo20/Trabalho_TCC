import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native'
import { useNavigation } from '@react-navigation/native';

import Stars from '../components/Stars'

const SeeProfileButton =  styled.View`
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

function Item({ item }) {

    const navigation = useNavigation()

    const handleClick = () => {
      navigation.navigate('Profissional', {
        name: item.name,
        photo: item.photo,
        location: item.location,
        stars: item.stars
      })
    }

    return (
      <View style={styles.listItem} >
        <Image source={{}}  style={{width:60, height:60,borderRadius:30}} />
        <View style={{alignItems:"center",flex:1}}>
          <Text style={{fontWeight:"bold"}}>{item.name}</Text>
          <Text>{item.position}</Text>
          <Stars starts={item.stars} showNumber={true}  />
        </View>
        <TouchableOpacity onPress={handleClick} style={{height:70,width:50, justifyContent:"center",alignItems:"center"}}>
          <SeeProfileButton>
            <SeeProfileButtonText>Ver Perfil</SeeProfileButtonText>
          </SeeProfileButton>
        </TouchableOpacity>
      </View>
    );
  }

export default class List extends React.Component {
    state = {
      data:[
          {
              "name": "",
              "location": "",
              "photo": "",
          },
          {
              "name": "",
              "location": "",
              "photo": ""
          }
      ]
    }
  
    render(){
      return (
        <View style={styles.container}>
          <FlatList
            style={{flex:1}}
            data={this.state.data}
            renderItem={({ item }) => <Item item={item}/>}
            keyExtractor={item => item.name}
          />
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1c232e',
      marginTop:30
    },
    listItem:{
      margin:10,
      padding:10,
      backgroundColor:"#FFF",
      width:"100%",
      flex:1,
      alignSelf:"center",
      flexDirection:"row",
      borderRadius:7
    }
    
  });


