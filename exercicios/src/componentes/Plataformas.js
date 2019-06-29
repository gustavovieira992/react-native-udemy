import React from 'react';
import {Button, Alert, ToastAndroid, Platform, View, Text} from 'react-native';
import Padrao from '../estilo/Padrao';

export default props => {
    const notificar = msg => {
        if (Platform.OS === 'android') {
            ToastAndroid.show(msg, ToastAndroid.LONG)
        } else {
            Alert.alert('Informação', msg)
        }
    }

    return (
        <View>
            <Text style={Padrao.ex}>Texto</Text>
            <Button title='Plataforma?' onPress={() => notificar('Parabéns!')}/>
        </View>
    )
}