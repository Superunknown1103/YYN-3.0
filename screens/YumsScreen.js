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
        return <YumItem style={styles.yumItem} item={item} />
    }

    _returnKey(item) {
        return item.id.toString()
    }

    render() {
        return (
            <View style={styles.pageWrapper}>
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
                    <View style={styles.flatList}>
                        <FlatList
                            data={products}
                            style={styles.flatList}
                            keyExtractor={this._returnKey}
                            renderItem={(item) => {
                                return this._renderItem(item);
                            }}
                        />
                    </View>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    pageWrapper: {
        flex: 1,
        height: constants.window.height,
        width: constants.window.width,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        flexDirection: 'row',
        padding: 20,
        marginTop: 10,
        marginLeft: 10,
    },
    backBtn: {
        width: 100,
        height: 50
    },
    longLogo: {
        width: 250,
        height: 50
    },
    longText: {
        fontSize: 35,
        fontWeight: '900',
        fontStyle: 'italic'
    },
    flatList: {
        flex: 1,
        flexDirection: 'column',
        width: 100 + '%',
        padding: 10,
        marginLeft: 20
    }
});
