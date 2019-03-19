import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export class YumButton extends Component {
    render() {
        return (
            <TouchableOpacity style={{ flex: 1 }}>
                <View style={styles.yumButton}>
                <Text style={{fontSize: 20}}>
                        Yum
                </Text>
                </View>
            </TouchableOpacity>

        )
    }
}

export class NastyButton extends Component {
    render() {
        return (
            <TouchableOpacity>
                <View style={styles.nastyButton}>
                    <Text style={{fontSize: 20}}>
                        Nasty
                </Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    yumButton: {
        borderWidth: 1,
        borderColor: 'black',
        borderStyle: 'solid',
        alignSelf: 'flex-end',
        padding: 10,
        opacity: 0.9,
        color: 'black',
        backgroundColor: 'white',
    },
    nastyButton: {
        borderWidth: 1,
        borderColor: 'black',
        borderStyle: 'solid',
        alignSelf: 'flex-start',
        padding: 10,
        opacity: 0.9,
        color: 'black',
        backgroundColor: 'white'
    }
});