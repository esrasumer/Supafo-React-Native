import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {Card} from './Card';
import {CardType} from './components.type';
import {colors} from '../theme/colors';

export const CardSwiper = ({data}: {data: CardType[]}) => {
  return (
    <View style={{marginBottom: 10}}>
      <SwiperFlatList
        index={0}
        showPagination
        paginationStyle={styles.dots}
        paginationStyleItem={styles.dot}
        paginationStyleItemActive={styles.dotActive}
        paginationStyleItemInactive={styles.dotInActive}
        data={data}
        renderItem={({item}) => <Card {...item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dots: {
    bottom: '-25%',
  },

  dot: {
    width: 7,
    height: 7,
  },
  dotActive: {
    width: 15,
    backgroundColor: '#FF9200',
  },
  dotInActive: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#FF9200',
  },
});