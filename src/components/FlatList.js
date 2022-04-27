import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';

function Item({ item }) {
    return (
      <View style={styles.listItem}>
        <Image source={{}}  style={{width:60, height:60,borderRadius:30}} />
        <View style={{alignItems:"center",flex:1}}>
          <Text style={{fontWeight:"bold"}}>{item.name}</Text>
          <Text>{item.position}</Text>
        </View>
        <TouchableOpacity style={{height:50,width:50, justifyContent:"center",alignItems:"center"}}>
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
              "photo": ""
          },
          {
              "name": "",
              "location": "",
              "photo": ""
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