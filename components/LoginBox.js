import React from 'react';
import constants from '../constants/Layout';
import { Text, View, TextInput, Button } from 'react-native';

export default class LoginBox extends React.Component {
    constructor() {
        super()
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

    register() {
        // send credentials to server
        // if signup success
        JSON.stringify(this.state.credentials);
        // this.props.navigation.navigate('main')
    }

    render() {
        return (
            <View>
                <Text style={constants.largeText} textDecorationLine="underline" >Login</Text>
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
                        color="#f4bec8"
                        title="Login"
                        onPress={() => { this.register(); }} />
                </View>
                <Text onclick={() => { this.newUser(); }} style={{ textAlign: 'center', alignSelf: 'center' }}>
                    New User?
            </Text>
            </View>
        )
    }
}
