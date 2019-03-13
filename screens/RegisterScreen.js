import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import constants from '../constants/Layout';
import LoginBox from '../components/LoginBox';

import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

// const child = {
//     color: "red",
//     fontSize: 30,
//     paddingHorizontal: 10
// } 

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <View style={constants.page}>
                <View>
                    <Image resizeMode="contain" style={constants.logo} source={require('../assets/images/YYN.png')} />
                    <LoginBox />
                </View>
                
            </View>
        )
    }
};