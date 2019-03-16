import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import Picture from '../Picture'; 

export default class Item extends Component {
    constructor() {
        super()
    };

    displayButtons() {
        // if this item is rendered in the feed, it will display the yum and nasty overlay, otherwise just the image
        var display = this.props.onFeed ? true : false
        return display;
    }

    render() {
        const temporaryImage = require('../../assets/images/vans.jpg');
        return(
            <View>
                <Picture image={temporaryImage} displayButtons={() => { this.displayButtons() }} />
            </View>
        )
    }
}

    