import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  bannerImage: {
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width / 2,
  },
});

export default styles;
