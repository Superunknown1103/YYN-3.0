import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import YumButton from './YumButton.js';
import NastyButton from './NastyButton.js';

export default class Picture extends Component {
    constructor() {
        super()
        this.state = {
            liked: false,
            screenWidth: Math.floor(Dimensions.get("window").width),
            imageHeight: Math.floor(Dimensions.get("window").width) * 1.1
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
                    source={this.props.currentImage}
                    style={{
                        width: this.state.screenWidth,
                        height: this.state.imageHeight
                    }}
                />
                {/* <YumButton onPress={() => { this.yum() }} />
                <NastyButton onPress={() => { this.nasty() }} /> */}
            </View>
        )
    }
};