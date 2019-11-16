import React, { Component } from "react";
import * as React from 'react';
import { WebView, View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import { Container, Item, Form, Input, Button, Label } from "native-base";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSmileBeam } from '@fortawesome/free-solid-svg-icons'
import { faFrown } from '@fortawesome/free-solid-svg-icons'
import { faAngry } from '@fortawesome/free-solid-svg-icons'
import { TouchableOpacity } from 'react-native';
import { faGrimace } from '@fortawesome/free-solid-svg-icons'
import * as Font from 'expo-font';
import FontAwesome from "@expo/vector-icons/build/FontAwesome";
import StarRating from 'react-native-star-rating';
import AppLoading from "expo/build/launch/AppLoading";
import { TextInput } from 'react-native';

import styles from "./style";
import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView} from 'react-native';
import { Button } from 'react-native-elements';

const appId = "1047121222092614"

export default class LoginScreen extends Component {

    render() {
        return (
            <View>
            <View>
                <FontAwesomeIcon icon={faSmileBeam} color="yellow" size={50} onPress={() => this.props.navigation.navigate('Happy1')} />
                <Text style={{ textAlign: 'center', marginTop: 5, color: 'white', fontWeight: "bold" }}>Happy</Text>
            </View>

            <View>
            <FontAwesomeIcon icon={faFrown} color="yellow" size={50} onPress={() => this.props.navigation.navigate('Sad1')} />
        <Text style={{ textAlign: 'center', marginTop: 5, color: 'white', fontWeight: "bold" }}>Sad</Text>
        </View>

        <View>
            <FontAwesomeIcon icon={faAngry} color="yellow" size={50} />
            <Text style={{ textAlign: 'center', marginTop: 5, color: 'white', fontWeight: "bold" }}>Mad</Text>
        </View>

        <View >
        <FontAwesomeIcon icon={faGrimace} color="yellow" size={50} />
        <Text style={{ textAlign: 'center', marginTop: 5, color: 'white', fontWeight: "bold" }}>Scared</Text>
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

