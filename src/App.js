import React from 'react';
import {SafeAreaView, StyleSheet, FlatList} from 'react-native';
import newsData from './news_data.json';
import BannerNews from './components/banner';
import NewsCard from './components/newscard';

const App = () => {
  const renderNews = ({item}) => <NewsCard newsData={item} />;
  const renderKey = item => item.u_id.toString();

  return (
    <SafeAreaView style={styles.mainContainer}>
      <FlatList
        ListHeaderComponent={() => <BannerNews />}
        keyExtractor={renderKey}
        data={newsData}
        renderItem={renderNews}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#eceff1',
    flex: 1,
  },
});

export default App;
