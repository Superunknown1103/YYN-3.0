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
    { id: 1, name: 'Item 1', uri: require('../assets/images/1.jpg'), link: 'https://www.amazon.com/Aurora-World-Miyoni-Donkey-Plush/dp/B01BKUFUCG/ref=sr_1_4?keywords=donkey&qid=1553521405&s=gateway&sr=8-4' },
    { id: 2, name: 'Item 2', uri: require('../assets/images/2.jpg'), link: 'https://www.amazon.com/Aurora-World-Miyoni-Donkey-Plush/dp/B01BKUFUCG/ref=sr_1_4?keywords=donkey&qid=1553521405&s=gateway&sr=8-4' },
    { id: 3, name: 'Item 3', uri: require('../assets/images/3.jpg'), link: 'https://www.amazon.com/Aurora-World-Miyoni-Donkey-Plush/dp/B01BKUFUCG/ref=sr_1_4?keywords=donkey&qid=1553521405&s=gateway&sr=8-4' },
    { id: 4, name: 'Item 4', uri: require('../assets/images/4.jpg'), link: 'https://www.amazon.com/Aurora-World-Miyoni-Donkey-Plush/dp/B01BKUFUCG/ref=sr_1_4?keywords=donkey&qid=1553521405&s=gateway&sr=8-4' },
    { id: 5, name: 'Item 5', uri: require('../assets/images/5.jpg'), link: 'https://www.amazon.com/Aurora-World-Miyoni-Donkey-Plush/dp/B01BKUFUCG/ref=sr_1_4?keywords=donkey&qid=1553521405&s=gateway&sr=8-4' }
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
                <ScrollView style={{padding: 10}}>
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
