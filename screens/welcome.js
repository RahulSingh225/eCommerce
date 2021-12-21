import React from 'react'
import { Text, View } from 'react-native-web'

function welcome({navigation}) {
    React.useEffect(()=>{
    setTimeout(() => {
        navigation.navigate('login')
    }, 3000);
    },[])
    return (
        <View>
<Text>Welcome Page</Text>
        </View>
            

    )
}

export default welcome
