import react from 'react';
import {createStackNavigator} from '@react-navigation/stack'

import Preload from '../screens/Preload';
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import MainTab from './MainTab';
import Profissional from '../screens/Profissional'
import EditProfile from '../screens/EditProfile'
import OfferService from '../screens/OfferService'

const Stack = createStackNavigator()

export default () => (
    <Stack.Navigator
        initialRouteName="Preload"
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name="Preload" component={Preload} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name='MainTab' component={MainTab} />
        <Stack.Screen name='Profissional' component={Profissional} />
        <Stack.Screen name='EditProfile' component={EditProfile} />
        <Stack.Screen name='OfferService' component={OfferService} />
    </Stack.Navigator>
);