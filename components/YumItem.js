import React, { Component } from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    Button,
    View,
} from 'react-native';

export default class YumItem extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <Text>{this.props.item.name}</Text>
                {/* Create a link using https://stackoverflow.com/questions/30540252/display-hyperlink-in-react-native-app
                Do this in Link.js file and then pass the url as props */}
                {/* <Text>{this.props.uri}</Text> */}
                <Text>{this.props.item.link}</Text>
            </View>
        )
    }
}