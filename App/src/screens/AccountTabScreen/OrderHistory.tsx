import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import {
  OrderHistoryComp,
  historyMocks,
} from '../../components/OrderHistoryComp';
import {icons, mocks} from '../../mocks/mocks';
import {FlatList} from 'react-native-gesture-handler';
import {IOrderHistoryComp} from '../../components/components.type';
import {moderateScale, scale} from 'react-native-size-matters';

export const OrderHistory: React.FC<IOrderHistoryComp> = () => {
  const renderItem = ({item}: any) => {
    return (
      <OrderHistoryComp
        datetime={item.datetime}
        more="Detaylar"
        price={item.price}
        moreIcon={
          <Image
            source={icons.moreIcon}
            style={{width: scale(9), height: scale(9)}}
          />
        }
        orderStatus="Teslim edildi"
        tick={<Image source={icons.tick} style={{width: 12, height: 12}} />}
        bagIcon={
          <Image source={icons.bagIcon} style={{width: 27, height: 30}} />
        }
        name={item.name}
        star={<Image source={icons.star} style={{width: 8, height: 8}} />}
        again="Tekrarla"
        rate="Değerlendir"
      />
    );
  };
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <Header title="Geçmiş Siparişlerim" />
      <View style={{backgroundColor: 'white'}}>
        <FlatList
          data={historyMocks}
          renderItem={renderItem}
          scrollEnabled={true}
          horizontal={false}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => (
            <View style={{height: moderateScale(5)}} />
          )}
          contentContainerStyle={{marginTop: moderateScale(10)}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
