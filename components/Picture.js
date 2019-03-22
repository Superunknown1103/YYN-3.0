import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import constants from '../constants/Layout';


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
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Image
                        source={this.props.image}
                        style={{
                            flex: 1,
                            width: null,
                            height: constants.window.imageHeight,
                            resizeMode: 'cover',
                            borderRadius: 20
                        }}
                    />
                </View>
            </View>
        )
    }
};

// const styles = StyleSheet.create({
//     overlay: {
//         // flex: 1,
//         flexDirection: 'row',
//         marginLeft: constants.window.width / 4,
//         // marginTop: constants.window.height / 4,
//         alignItems: 'center',
//         position: 'absolute',
//         left: 0,
//         top: constants.window.imageHeight,
//         opacity: 0.5,
//         width: 50 + '%'
//     }
// })