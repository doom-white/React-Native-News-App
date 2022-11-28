import React from 'react';
import {ScrollView, Image} from 'react-native';
import bannerNewsData from '../../news_banner_data.json';
import styles from './Banner.style';

const Banner = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {bannerNewsData.map(bannerNews => (
        <Image
          style={styles.bannerImage}
          key={bannerNews.id}
          source={{uri: bannerNews.imageUrl}}
        />
      ))}
    </ScrollView>
  );
};

export default Banner;
