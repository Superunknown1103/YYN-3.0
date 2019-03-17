import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import constants from '../constants/Layout'
import { YumButton, NastyButton } from './YYNButtons.js';


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
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <Image
                    source={this.props.image}
                    style={{
                        width: constants.window.width,
                        height: constants.window.imageHeight
                    }}
                />
                <View style={styles.overlay}>
                    <NastyButton onclick={() => { this.nasty() }} />
                    <YumButton onclick={() => { this.yum() }} />
                </View>

            </View>
        )
    }
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: constants.window.width / 4,
        marginTop: constants.window.height / 4,
        alignItems: 'center',
        position: 'absolute',
        left: 0,
        top: 50,
        opacity: 0.5,
        width: 50 + '%'
    }
})