import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { View, Text } from 'react-native'
import about from '../screens/about'
import account from '../screens/account'
import cart from '../screens/cart'
import home from '../screens/home'
import login from '../screens/login'
import welcome from '../screens/welcome'

export const Authflow=()=>{
    const Stack = createNativeStackNavigator()
        return(
            <Stack.Navigator initialRouteName='welcome'>
                <Stack.Screen name='welcome' component={welcome} />
                <Stack.Screen name='login' component={login} />
               
            </Stack.Navigator>
        )
}

export const Mainflow=()=>{
    const Stack= createNativeStackNavigator();
    return(
        <Stack.Navigator initialRouteName='home'>
            <Stack.Screen name='home' component={home}/>
            <Stack.Screen name='account' component={account}/>
            <Stack.Screen name='cart' component={cart}/>
            <Stack.Screen name='about' component={about}/>



        </Stack.Navigator>
    )
}