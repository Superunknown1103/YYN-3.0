import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default {
  window: {
    width,
    height,
  },
  page: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  child: {
    color: 'red',
    paddingHorizontal: 10
  },
  isSmallDevice: width < 375,
};
