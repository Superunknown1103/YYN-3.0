import React from 'react';
import constants from '../constants/Layout';
import colors from '../constants/Colors';

import { Text, View, TextInput, Button, AsyncStorage } from 'react-native'; 

export default class LoginBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            credentials: {
                email: '',
                password: ''
            }
        };
    } 

    updateText(text, field) {
        let newCredentials = Object.assign(this.state.credentials);
        newCredentials[field] = text;
        this.setState = ({
            credentials: newCredentials
        })
    }

    login = async () => {
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('App');
    }

    register = async () => {
        // send credentials to server
        // if signup success
        // JSON.stringify(this.state.credentials);
        await AsyncStorage.setItem('userToken', '')
        this.props.navigation.navigate('Register');
    }

    render() {
        return (
            <View>
                <Text style={constants.largeText} textDecorationLine="underline">Login</Text>
                <TextInput
                    value={this.state.login}
                    autoCorrect={false}
                    onChangeText={text => this.updateText(text, "login")}
                    placeholder="Username"
                    style={constants.input} />
                <TextInput
                    value={this.state.password}
                    onChangeText={text => this.updateText(text, "password")}
                    secureTextEntry
                    autoCorrect={false}
                    placeholder="Password"
                    style={constants.input}
                />
                <View style={constants.longButton}>
                    <Button
                        color={colors.ypink}
                        title="Login"
                        onPress={ this.login } />
                </View>
                <View style={constants.longButton}>
                <Button 
                    color={colors.ygreen}
                    title="New Account"
                    onPress={ this.register }
                    buttonStyle={{paddingTop: '100' + '%'}} />
            </View>
            </View>
        )
    }
}
