import React, { Component } from "react";
import { View, Picker, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    picker: {
        height: 20,
        width: 150,
        transform: [{scaleX: 2.0}, {scaleY: 2.0}] 
    }
})

export default class Picke extends React.Component {
    state = {profissao: 'Escolha a Profissão'}

    render(){
        const profissao = this.state.profissao

        return(
            <View style={styles.container}>

                <Picker
                    selectedValue={this.state.profissao}
                    style={styles.picker}
                    onValueChange={ (itemValue, itemIndex) =>
                        this.setState({profissao: itemValue})
                    }
                >
                    <Picker.Item label="Pedreiro" value="Pedreiro"/>
                    <Picker.Item label="Pintor" value="Pintor"/>
                    <Picker.Item label="Eletricista" value="Eletricista"/>
                    <Picker.Item label="Vidraceiro" value="Vidraceiro"/>
                    <Picker.Item label="Serralheiro" value="Serralheiro"/>
                </Picker>

            </View>
        )
    }
}