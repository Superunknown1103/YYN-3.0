import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import Item from './Item'; 
import constants from '../../constants/Layout';

export default class SwipeContainer extends Component {
    constructor() {
        super()
    };

    render() {
        return(
            <View style={styles.swipeContainer}>
                <Item onFeed={true} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    swipeContainer: {
        marginTop: Math.floor(constants.window.height / 8),
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
    