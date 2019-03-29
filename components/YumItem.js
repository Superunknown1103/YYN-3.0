import React, { Component } from 'react';
import {
    Image,
    Text,
    TouchableOpacity,
    Linking,
    StyleSheet,
    View,
} from 'react-native';

export default class YumItem extends Component {
    render() {
        return (
            <View>
                <View style={{ flex: 1, alignContent: 'center' }}>
                    <Text>{this.props.item.name}</Text>
                </View>
                {/* Create a link using https://stackoverflow.com/questions/30540252/display-hyperlink-in-react-native-app
                Do this in Link.js file and then pass the url as props */}
                {/* <Text>{this.props.uri}</Text> */}
                <TouchableOpacity style={{ color: "red", flex: 1 }} onPress={() => {
                    Linking.openURL(this.props.item.link)
                }
                }>
                    <Image resizeMode="contain" style={styles.yummyPic} source={this.props.item.uri} />
                </TouchableOpacity>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    yummyPic: {
        height: 100,
        width: 100
    }
})