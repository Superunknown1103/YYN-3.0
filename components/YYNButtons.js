import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../constants/Colors';

export default class YYNButtons extends Component {

    triggerYum() {
        // add to list of liked items
    }

    triggerNasty() {
        // add to list of disliked items
    }

    render() {
        return (
            <View>
                <TouchableOpacity onPress={this.triggerYum(this.props.id)} style={{ flex: 1 }}>
                    <View style={this.yumButton}>
                        <Text style={{ fontSize: 20 }}>
                            Yum
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1 }}>
                    <View style={styles.nastyButton}>
                        <Text style={{ fontSize: 20 }}>
                            Nasty
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    yumButton: {
        borderWidth: 1,
        backgroundColor: colors.ygreen,
        borderColor: colors.ygreen,
        color: '#fff',
        fontSize: 25,
        fontWeight: '800',
        padding: 10
    },
    nastyButton: {
        borderWidth: 1,
        backgroundColor: colors.pink,
        borderColor: colors.ypink,
        color: '#fff',
        fontSize: 25,
        fontWeight: '800',
        padding: 10
    }
});