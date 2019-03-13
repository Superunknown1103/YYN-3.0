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
import colors from '../constants/Colors';
import RegisterBox from '../components/RegisterBox';
import { Button } from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class RegisterScreen extends React.Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <View style={constants.page}>
             <Image resizeMode="contain" style={constants.logo} source={require('../assets/images/YYN.png')} />
                    <RegisterBox navigation={this.props.navigation} />
            </View>
        )
    }
};