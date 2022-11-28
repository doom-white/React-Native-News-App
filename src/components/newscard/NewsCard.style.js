import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
  },
  image: {
    height: Dimensions.get('window').height / 4,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  innerContainer: {
    padding: 7,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
  },
  description: {
    marginTop: 5,
    color: '#000',
  },
  authorContainer: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  author: {
    fontStyle: 'italic',
    color: 'black',
  },
});

export default styles;
