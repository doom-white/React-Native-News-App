import React from 'react';
import {Image, View, Text} from 'react-native';
import styles from './NewsCard.style';

const NewsCard = ({newsData}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: newsData.imageUrl}} />
      <View style={styles.innerContainer}>
        <Text style={styles.title}>{newsData.title}</Text>
        <Text style={styles.description}>{newsData.description}</Text>
        <View style={styles.authorContainer}>
          <Text style={styles.author}>{newsData.author}</Text>
        </View>
      </View>
    </View>
  );
};

export default NewsCard;
