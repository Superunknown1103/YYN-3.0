import React, { Component } from 'react';
import { View, Text, StyleSheet, Animated, PanResponder, Linking, TouchableOpacity } from 'react-native';
import Item from './Item';
import colors from '../../constants/Colors';
import constants from '../../constants/Layout';

let products = [
    { id: 1, uri: require('../../assets/images/1.jpg'), link: 'https://github.com/Superunknown1103/YYN-3.0/blob/master/assets/images/1.jpg' },
    { id: 2, uri: require('../../assets/images/2.jpg'), link: 'https://github.com/Superunknown1103/YYN-3.0/blob/master/assets/images/2.jpg' },
    { id: 3, uri: require('../../assets/images/3.jpg'), link: 'https://github.com/Superunknown1103/YYN-3.0/blob/master/assets/images/3.jpg' },
    { id: 4, uri: require('../../assets/images/4.jpg'), link: 'https://github.com/Superunknown1103/YYN-3.0/blob/master/assets/images/4.jpg' },
    { id: 5, uri: require('../../assets/images/5.jpg'), link: 'https://github.com/Superunknown1103/YYN-3.0/blob/master/assets/images/5.jpg' }
]

export default class SwipeContainer extends Component {
    constructor() {
        super()

        this.position = new Animated.ValueXY()
        this.state = {
            currentIndex: 0,
            currentProduct: products[0]
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

        this.buyMeOpacity = this.position.x.interpolate({
            inputRange: [-constants.window.width / 2, 0, constants.window.width / 2],
            outputRange: [1, 0, 0],
            extrapolate: 'clamp'
        })

        this.nextCardOpacity = this.position.x.interpolate({
            inputRange: [-constants.window.width / 2, 0, constants.window.width / 2],
            outputRange: [1, 0, 1],
            extrapolate: 'clamp'
        })

        this.nextCardScale = this.position.x.interpolate({
            inputRange: [-constants.window.width / 2, 0, constants.window.width / 2],
            outputRange: [1, 0.8, 1],
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
                // swipe up
                if (gestureState.dx > -20 && gestureState.dx < 20 && gestureState.dy < 50) {
                    // redirect to product purchase
                    Linking.openURL(this.state.currentProduct.link)
                    Animated.spring(this.position, {
                        toValue: { x: constants.window.width, y: gestureState.dy + 100 }
                    }).start(() => {
                        // the next card will be rendered at the top of the deck
                        this.setState({ currentIndex: this.state.currentIndex + 1, currentProduct: products[this.state.currentProduct + 1] }, () => {
                            this.position.setValue({ x: 0, y: 0 })
                        })
                    })
                }
                // right swipe
                // once the swiping action reaches a certain degree, the card will be disposed
                else if (gestureState.dx > 120) {
                    Animated.spring(this.position, {
                        toValue: { x: constants.window.width + 100, y: gestureState.dy }
                    }).start(() => {
                        // the next card will be rendered at the top of the deck
                        this.setState({ currentIndex: this.state.currentIndex + 1, currentProduct: products[this.state.currentProduct + 1] }, () => {
                            this.position.setValue({ x: 0, y: 0 })
                        })
                    })
                }
                // left swipe
                else if (gestureState.dx < -120) {
                    Animated.spring(this.position, {
                        toValue: { x: -constants.window.width - 100, y: gestureState.dy }
                    }).start(() => {
                        // the next card will be rendered at the top of the deck
                        this.setState({ currentIndex: this.state.currentIndex + 1, currentProduct: products[this.state.currentProduct + 1] }, () => {
                            this.position.setValue({ x: 0, y: 0 })
                        })
                    })
                }
                // if not dragged far enough, spring card back into position
                else {
                    Animated.spring(this.position, {
                        toValue: { x: 0, y: 0 },
                        friction: 4
                    }).start()
                }
            }

        })
    }

    renderProducts = () => {
        return products.map((item, i) => {

            if (i < this.state.currentIndex) {
                return null
                // current card rendered in this else if
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
                        {/* The 2 views below are for the buttons that appear at the border when swiping */}
                        <Animated.View style={{ opacity: this.yumOpacity, transform: [{ rotate: '-30deg' }], position: 'absolute', top: 50, left: 40, zIndex: 1000 }}>
                            <Text style={styles.nasty}>
                                YUM
                            </Text>
                        </Animated.View>
                        <Animated.View style={{ opacity: this.buyMeOpacity, transform: [{ rotate: '30deg' }], position: 'absolute', top: 200, left: 100, zIndex: 1000 }}>
                            <Text style={styles.buyme}>
                                BUY ME
                            </Text>
                        </Animated.View>
                        <Animated.View style={{ opacity: this.nastyOpacity, transform: [{ rotate: '30deg' }], position: 'absolute', top: 50, right: 40, zIndex: 1000 }}>
                            <Text style={styles.yum}>
                                NASTY
                            </Text>
                        </Animated.View>
                        {/* // the picture itself */}
                        <TouchableOpacity>
                            <Item onFeed={true}
                                product={item.uri}
                            />
                        </TouchableOpacity>
                    </Animated.View>
                );
                // next cards render in this else
            } else {
                return (
                    <View>
                        {/* // each one is required to have a key */}
                        <Animated.View
                            key={item.id}
                            style={[{
                                opacity: this.nextCardOpacity,
                                transform: [{ scale: this.nextCardScale }],
                                width: constants.window.width,
                                height: constants.window.height - 120,
                                position: 'absolute'
                            }]}>
                            <Item onFeed={true}
                                product={item.uri}
                            />
                        </Animated.View>
                    </View>
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
    },
    buyMe: {
        borderWidth: 1,
        backgroundColor: colors.ypink,
        borderColor: colors.ypink,
        color: '#fff',
        fontSize: 32,
        fontWeight: '800',
        padding: 10
    }
})
