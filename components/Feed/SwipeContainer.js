import React, { Component } from 'react';
import { View, Text, StyleSheet, Animated, PanResponder, TouchableOpacity } from 'react-native';
import Item from './Item';
import colors from '../../constants/Colors';
import constants from '../../constants/Layout';

let products = [
    { id: '1', uri: require('../../assets/images/1.jpg') },
    { id: '2', uri: require('../../assets/images/2.jpg') },
    { id: '3', uri: require('../../assets/images/3.jpg') },
    { id: '4', uri: require('../../assets/images/4.jpg') },
    { id: '5', uri: require('../../assets/images/5.jpg') }
]

export default class SwipeContainer extends Component {
    constructor() {
        super()

        this.position = new Animated.ValueXY()
        this.state = {
            currentIndex: 0
        }

        this.rotate = this.position.x.interpolate({
            inputRange: [-constants.window.width / 2, 0, constants.window.width / 2],
            outputRange: ['-10deg', '0deg', '10deg'],
            extrapolate: 'clamp'
        })

        this.rotateAndTranslate = {
            transform: [{
                rotate: this.rotate
            },
            ...this.position.getTranslateTransform()
            ]
        }

        this.yumOpacity = this.position.x.interpolate({
            inputRange: [-constants.window.width / 2, 0, constants.window.width / 2],
            outputRange: [0, 0, 1],
            extrapolate: 'clamp'
        })

        this.nastyOpacity = this.position.x.interpolate({
            inputRange: [-constants.window.width / 2, 0, constants.window.width / 2],
            outputRange: [1, 0, 0],
            extrapolate: 'clamp'
        })
    };

    componentWillMount() {
        this.PanResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onPanResponderMove: (evt, gestureState) => {
                this.position.setValue({ x: gestureState.dx, y: gestureState.dy })
            },
            onPanResponderRelease: (evt, gestureState) => {

            }

        })
    }

    renderProducts = () => {
        return products.map((item, i) => {

            if (i < this.state.currentIndex) {
                return null
            } else if (i == this.state.currentIndex) {
                return (
                    // each one is required to have a key
                    <Animated.View
                        {...this.PanResponder.panHandlers}
                        key={item.id}
                        style={[this.rotateAndTranslate, {
                            width: constants.window.width, height: constants.window.height - 120,
                            position: 'absolute'
                        }]}>
                        <Animated.View style={{ opacity: this.yumOpacity, transform: [{ rotate: '-30deg' }], position: 'absolute', top: 50, left: 40, zIndex: 1000 }}>
                            <Text style={styles.nasty}>
                                YUM
                            </Text>
                        </Animated.View>
                        <Animated.View style={{ opacity: this.nastyOpacity, transform: [{ rotate: '30deg' }], position: 'absolute', top: 50, right: 40, zIndex: 1000 }}>
                            <Text style={styles.yum}>
                                NASTY
                            </Text>
                        </Animated.View>
                        <Item onFeed={true}
                            product={item.uri}
                        />
                    </Animated.View>
                );
            } else {
                return (
                    // each one is required to have a key
                    <Animated.View
                        key={item.id}
                        style={[{
                            width: constants.window.width,
                            height: constants.window.height - 120,
                            position: 'absolute'
                        }]}>
                        <Item onFeed={true}
                            product={item.uri}
                        />
                    </Animated.View>
                );
            }
        })
            .reverse()
    }

    render() {
        return (
            <View style={styles.swipeContainer}>
                {this.renderProducts()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    swipeContainer: {
        flex: 1,
        height: constants.window.height,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    yum: {
        borderWidth: 1,
        backgroundColor: colors.ygreen,
        borderColor: colors.ygreen,
        color: '#fff',
        fontSize: 32,
        fontWeight: '800',
        padding: 10
    },
    nasty: {
        borderWidth: 1,
        backgroundColor: colors.ypink,
        borderColor: colors.ypink,
        color: '#fff',
        fontSize: 32,
        fontWeight: '800',
        padding: 10
    }
})
