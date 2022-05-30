import React from "react";
import styled from "styled-components/native";

import { useNavigation } from '@react-navigation/native'

import { RNCamera } from 'react-native-camera';

export default ({}) => {
    const navigation = useNavigation()

    return(
        <RNCamera
            ref={camera => { this.camera = camera }}
            style = {styles.preview}
            type={RNCamera.Constants.Type.back}
            autoFocus={RNCamera.Constants.AutoFocus.on}
            flashMode={RNCamera.Constants.FlashMode.off}
            permissionDialogTitle={'Permission to use camera'}
            permissionDialogMessage={'We need your permission to use your camera phone'}
        />   
    )
}