import React from 'react';
import constants from '../constants/Layout';
import colors from '../constants/Colors';
import { Text, View, TextInput, Button, AsyncStorage, StyleSheet } from 'react-native';

export default class RegisterBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            credentials: {
                email: '',
                password: '',
                repeatPassword: '',
            }
        }
    };

    register = async () => {
        // send credentials to server
        // if signup success
        // JSON.stringify(this.state.credentials);
        await AsyncStorage.setItem('userToken', '')
        this.props.navigation.navigate('App');
    }

    updateText(text, field) {
        let newCredentials = Object.assign(this.state.credentials);
        newCredentials[field] = text;
        this.setState = ({
            credentials: newCredentials
        })
    }

    facebookSdk = async () => {
        console.log('test');
    }

    render() {
        return (
            <View>
                <Text style={constants.largeText} textDecorationLine="underline">Register</Text>
                <TextInput
                    value={this.state.email}
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
                <TextInput
                    value={this.state.repeatPassword}
                    onChangeText={text => this.updateText(text, "repeatPassword")}
                    secureTextEntry
                    autoCorrect={false}
                    placeholder="Repeat Password"
                    style={constants.input}
                />
                <View style={constants.longButton}>
                    <Button
                        color={colors.ypink}
                        title="Make Account"
                        onPress={this.register} />
                </View>

            </View>
        )
    }
};



