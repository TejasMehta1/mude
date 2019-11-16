import React, { Component } from "react";
// import * as React from 'react';
import { WebView, View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import { Container, Item, Form, Input, Button, Label } from "native-base";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSmileBeam, faAlignCenter } from '@fortawesome/free-solid-svg-icons'
import { faFrown } from '@fortawesome/free-solid-svg-icons'
import { faAngry } from '@fortawesome/free-solid-svg-icons'
import { faSadTear } from '@fortawesome/free-solid-svg-icons'
import { faKissWinkHeart } from '@fortawesome/free-solid-svg-icons'
import { faMeh } from '@fortawesome/free-solid-svg-icons'
import { TouchableOpacity } from 'react-native';
import LoginScreen from './login.js'
import { faGrimace } from '@fortawesome/free-solid-svg-icons'
import * as Font from 'expo-font';
import FontAwesome from "@expo/vector-icons/build/FontAwesome";
// import StarRating from 'react-native-star-rating';
// import AppLoading from "expo/build/launch/AppLoading";
import { TextInput } from 'react-native';

import styles from "./style";
//import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView} from 'react-native';
//import { Button } from 'react-native-elements';

const appId = "1047121222092614"

export default class Emoji extends Component {

    render() {
        return (
            <View style={{backgroundColor: 'blue', flex: 1,
            alignItems: "center",
            justifyContent: "center"}}>
               <ImageBackground source={require('./background.jpg')} style={{width: 1000, height: 1000,flex: 1}}>
                <View style= {{flexDirection: 'row', marginLeft: 327, marginTop: 400}}>
            <View style={{marginHorizontal: 20}}>
                <FontAwesomeIcon icon={faSmileBeam} color="white" size={75} onPress={() => this.props.navigation.navigate('./login.js')} />
                <Text style={{ textAlign: 'center', marginTop: 5, color: 'white', fontWeight: "bold",marginRight: 50 }}></Text>
            </View>

            <View style={{marginHorizontal: 20}}>
            <FontAwesomeIcon icon={faSadTear} color="white" size={75} onPress={() => this.props.navigation.navigate('./login.js')} />
        <Text style={{ textAlign: 'center', marginTop: 5, color: 'white', fontWeight: "bold",marginRight: 50}}></Text>
        </View>

        <View style={{marginHorizontal: 20}}>
            <FontAwesomeIcon icon={faAngry} color="#ff9785" size={75} />
            <Text style={{ textAlign: 'center', marginTop: 5, color: '#ff7961', fontWeight: "bold",marginRight: 50}}></Text>
        </View>
 
        </View>
        </ImageBackground>


  <View style= {{flexDirection: 'row', marginVertical: 220}}>
        <View style={{marginHorizontal: 20}}>
        <FontAwesomeIcon icon={faGrimace} color="white" size={75} />
        <Text style={{ textAlign: 'center', marginTop: 5, color: 'white', fontWeight: "bold",marginRight: 50}}></Text>
        </View>
        <View style={{marginHorizontal: 20}}>
        <FontAwesomeIcon icon={faKissWinkHeart} color="white" size={75} />
        <Text style={{ textAlign: 'center', marginTop: 5, color: 'white', fontWeight: "bold",marginRight: 50}}></Text>
        </View>
        <View style={{marginHorizontal: 20}}>
        <FontAwesomeIcon icon={faMeh} color="white" size={75} />
        <Text style={{ textAlign: 'center', marginTop: 5, color: 'white', fontWeight: "bold",marginRight: 50}}></Text>
        </View>
        
            </View>
            </View>
       
        );
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    onLoginPress() {

    }

    async onFbLoginPress() {
        const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(appId, {
            permissions: ['public_profile', 'email'],
        });
        if (type === 'success') {
            const response = await fetch(
                `https://graph.facebook.com/me?access_token=${token}`);
            Alert.alert(
                'Logged in!',
                `Hi ${(await response.json()).name}!`,
            );
        }
    }
}

