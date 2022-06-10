import React, { useState } from "react";
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from "react-native-gesture-handler";

const DropDown = ({
    data = [],
    value = {},
    onSelect = () => {

    }
}) => {
    const[showOption, setShowOption] = useState(false)

    const onSeletectedItem = (item) => {
        setShowOption(false)
        onSelect(item)
    }

    return(
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.DropDownStyle}
                activeOpacity={0.8}
                onPress={()=>setShowOption(!showOption)}
            >
                <Text style={{
                    color: '#ffffff',
                    fontSize: 15
                }}>{!!value ? value?.profissao: `Escolha a Profissão`}</Text>
            </TouchableOpacity>
            {showOption && (<View style={{
                color: "#ffffff",
            }}>
            {data.map((item, k) =>{
                return(
                    <TouchableOpacity 
                        key={String(k)}
                        onPress={()=>onSeletectedItem(item)}
                        style={{
                            backgroundColor: value == value ? '#ffffff' : '#3b8952',
                            margin: 0,
                            marginLeft: 20,
                            marginRight: 20,
                            paddingVertical: 8,
                            borderRadius: 4,
                            paddingHorizontal: 6
                        }}
                    >
                        <Text>{item.profissao}</Text>
                    </TouchableOpacity>
                )
            })}
            </View>)}
        </View>
    )
}

const styles = StyleSheet.create({
        DropDownStyle:{
            backgroundColor: '#3b8952',
            padding: 8,
            borderRadius: 6,
            minHeight: 42,
            margin: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 6
        }
    })

export default DropDown