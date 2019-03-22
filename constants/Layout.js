import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default {
  window: {
    width,
    height,
    imageHeight: Math.floor(Dimensions.get("window").width) * 1.1
  },
  page: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logo: {
    height: 200,
    width: 200,
    alignSelf: 'center',
    marginTop: 80
  },
  miniLogo: {
    height: 50,
    width: 50,
    marginTop: 20,
    alignContent: 'flex-start'
  },
  largeText: {
    padding: 20,
    color: 'black',
    fontSize: 32,
    fontFamily: 'sans-serif-thin',
    alignSelf: 'center',
    marginTop: 5
  },
  input: {
    height: 50,
    width: 90 + '%',
    alignSelf: 'center',
    textAlign: 'center',
    backgroundColor: "#edebe9",
    marginBottom: 10
  },
  longButton: {
    padding: 10,
    width: 50 + '%',
    alignSelf: 'center',
  },
  isSmallDevice: width < 375,
};

