import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import constants from '../constants/Layout';

import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

// const child = {
//     color: "red",
//     fontSize: 30,
//     paddingHorizontal: 10
// }

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <View style={constants.page}>
                <View style={constants.logo}>
                    <Image source={require('../assets/images/robot-dev.png')} />
                </View>
                <View>
                    <Text style={styles.child}>test 1</Text>
                    <Text style={styles.child}>test 2</Text>
                    <Text style={styles.child}>test 3</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    child: {
        ...constants.child
    }
})

// const styles = StyleSheet.create({
//     container: {
//         ...sample
//         // width: 100 + '%'
//     },
//     child1: {
//         ...child,
//         justifyContent: 'space-between'
//     },
//     child2: {
//         ...child,
//         justifyContent: 'space-between'
//     },
//     child3: {
//         ...child,
//         justifyContent: 'space-between'
//     }
// })