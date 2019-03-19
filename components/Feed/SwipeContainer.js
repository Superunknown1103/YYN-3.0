import React, { Component } from 'react';
import { View, Text, StyleSheet, Animated, PanResponder, TouchableOpacity } from 'react-native';
import Item from './Item';
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
    };

    componentWillMount(){
        this.PanResponder = PanResponder.create({
            onStartShouldSetPanResponder:(evt, gestureState) => true,
            onPanResponderMove:(evt, gestureState) => {
                this.position.setValue({x: gestureState.dx, y: gestureState.dy })
            },
            onPanResponderRelease: (evt, gestureState) => {

            }

        })
    }

    renderProducts = () => {
        return products.map((item, i) => {
            return(
                // each one is required to have a key
                <Animated.View 
                {...this.PanResponder.panHandlers} 
                key={item.id} 
                style={[{transform: this.position.getTranslateTransform() }, {width: constants.window.width, height: constants.window.height - 129,
                position: 'absolute' }]}>
                    <Item onFeed={true} 
                    product={item.uri}
                    />
                </Animated.View>
            );
        })
        // .reverse()
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
    }
})
