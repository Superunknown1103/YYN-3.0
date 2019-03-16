import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import constants from '../constants/Layout'
import YumButton from './YumButton.js';
import NastyButton from './NastyButton.js';

export default class Picture extends Component {
    constructor() {
        super()
        this.state = {
            liked: false,
        }
    }

    yum() {
        this.setState({
            liked: true
        })
    }

    nasty() {
        this.setState({
            liked: false
        })
    }

    render() {
        return (
            <View> 
                <Image
                    source={this.props.image}
                    style={{
                        width: constants.window.width,
                        height: constants.window.imageHeight
                    }}
                />
                {/* <YumButton onPress={() => { this.yum() }} />
                <NastyButton onPress={() => { this.nasty() }} /> */}
            </View>
        )
    }
};