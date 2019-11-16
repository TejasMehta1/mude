import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//import LoginScreen from './login.js'
import EmojiScreen from './emoji.js'

export default class App extends React.Component {
    render() {
        return (
            <EmojiScreen />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
