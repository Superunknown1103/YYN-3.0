import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
import SwipeContainer from '../components/Feed/SwipeContainer';
import { MonoText } from '../components/StyledText';
import constants from '../constants/Layout';
import colors from '../constants/Colors';

export default class HomeScreen extends Component {
  constructor() {
    super()

    this.showYummies = () => {
      alert('yummy list');
    }
  }

  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.longLogo}>
            <Text style={styles.longText}>#YUM YUM NA$TY</Text>
          </View>
          <View style={styles.yummies}>
            <Button
              color={colors.ypink}
              title="Yummy List"
              onPress={this.showYummies()}
            />
          </View>
        </View>
        <ScrollView style={styles.container}>
          <SwipeContainer />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: 100 + '%'
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  header: {
    flex: 1,
    height: 50,
    flexDirection: 'row',
    marginBottom: 0,
    justifyContent: 'space-between'
  },
  yummies: {
    margin: 30
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
