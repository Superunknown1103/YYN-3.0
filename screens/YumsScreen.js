import React from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    Button,
    View,
    FlatList
} from 'react-native';
import constants from '../constants/Layout';
import LoginBox from '../components/LoginBox';
import colors from '../constants/Colors';
import YumItem from '../components/YumItem';

let products = [
    { id: 1, name: 'Sneakers', uri: require('../assets/images/1.jpg'), link: 'https://github.com/Superunknown1103/YYN-3.0/blob/master/assets/images/1.jpg' },
    { id: 2, name: 'More Sneakers', uri: require('../assets/images/2.jpg'), link: 'https://github.com/Superunknown1103/YYN-3.0/blob/master/assets/images/2.jpg' },
    { id: 3, name: 'Damn, Daniel', uri: require('../assets/images/3.jpg'), link: 'https://github.com/Superunknown1103/YYN-3.0/blob/master/assets/images/3.jpg' },
    { id: 4, name: 'WHat r those', uri: require('../assets/images/4.jpg'), link: 'https://github.com/Superunknown1103/YYN-3.0/blob/master/assets/images/4.jpg' },
    { id: 5, name: 'Nice Kicks', uri: require('../assets/images/5.jpg'), link: 'https://github.com/Superunknown1103/YYN-3.0/blob/master/assets/images/5.jpg' }
]

export default class YumsScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    back = async () => {
        this.props.navigation.navigate('Home');
    }

    _renderItem({ item }) {
        return <YumItem item={item} />
    }

    _returnKey(item) {
        return item.id.toString()
    }

    render() {
        return (
            <View style={constants.page}>
                <View style={styles.header}>
                    <View style={styles.longLogo}>
                        <Text style={styles.longText}>#YUMMY LIST</Text>
                    </View>
                    <View style={styles.backBtn}>
                        <Button
                            color={colors.ypink}
                            title="Back"
                            onPress={this.back}
                        />
                    </View>
                </View>
                <ScrollView style={{padding: 10, marginTop: 15 + '%', alignContent: 'center'}}>
                    <FlatList
                        data={products}
                        keyExtractor={this._returnKey}
                        renderItem={(item) => {
                            return this._renderItem(item);
                        }}
                    />
                </ScrollView>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    header: {
        flex: 1,
        height: 50,
        flexDirection: 'row',
        marginBottom: 0,
        alignContent: 'center',
        justifyContent: 'space-between'
    },
    backBtn: {
        marginTop: 30,
        marginRight: 25
    },
    longLogo: {
        height: 50,
        margin: 30
    },
    longText: {
        fontSize: 25,
        fontWeight: '900',
        fontStyle: 'italic'
    }
});
