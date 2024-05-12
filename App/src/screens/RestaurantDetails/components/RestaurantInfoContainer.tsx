import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {colors} from '../../../theme/colors';

type Props = {
  time: string;
  rate: number;
  price: number;
  discountPrice: number;
};

const RestaurantInfoContainer = ({time, rate, price, discountPrice}: Props) => {
  return (
    <View style={styles.main}>
      <View style={[styles.container, styles.shadow]}>
        <View style={{marginEnd: 10}}>
          <View style={styles.row}>
            <SimpleLineIcons
              name={'handbag'}
              size={16}
              color={'#66AE7B'}
              paddingStart={10}
            />
            <Text style={styles.txt}>Sürpriz Paket</Text>
          </View>
          <View style={styles.row}>
            <Icon
              name={'clock-outline'}
              size={16}
              color={'#66AE7B'}
              paddingStart={10}
            />
            <Text style={styles.txt}>Bugün: {time}</Text>
          </View>
          <View style={styles.row}>
            <Icon name={'star'} size={16} color={'green'} paddingStart={10} />
            <Text style={styles.txt}>{rate} (500+)</Text>
          </View>
        </View>
        <View style={styles.cardPrice}>
          <View style={styles.line}></View>
          <Text style={[styles.textPriceFirst]}>{price} TL</Text>
          <Text style={styles.textPrice}>{discountPrice} TL</Text>
        </View>
      </View>
      <Pressable style={[styles.pressable, styles.shadow]}>
        <SimpleLineIcons name={'location-pin'} size={20} color={'#66AE7B'} />
        <View style={{flex: 1, paddingStart: 10}}>
          <Text style={styles.labelTitle}>Restoran Adresi </Text>
          <Text style={styles.labelTxt}>Mağaza hakkında daha fazla bilgi</Text>
        </View>
        <SimpleLineIcons name={'arrow-right'} size={16} color={'black'} />
      </Pressable>
    </View>
  );
};

export default RestaurantInfoContainer;

const styles = StyleSheet.create({
  main: {},
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txt: {
    paddingStart: 10,
    color: '#333333',
    paddingTop: 10,
  },
  labelTxt: {
    color: '#333333',
    fontSize: 12,
  },
  labelTitle: {fontSize: 15, color: '#333333', fontWeight: '600'},
  cardPrice: {
    padding: 10,
  },
  textPrice: {
    fontSize: 16,
    color: '#333333',
    fontWeight: '600',
  },
  textPriceFirst: {
    fontSize: 15,
    fontWeight: '700',
    textAlign: 'right',
  },
  line: {
    position: 'absolute',
    top: 18,
    left: 20,
    width: 41,
    height: 0,
    borderWidth: 1.5,
    opacity: 0.8,
    borderColor: colors.openGreen,
    transform: [{rotate: '160.81deg'}],
    zIndex: 2,
  },
  shadow: {
    shadowColor: 'black',
    shadowOffset: {width: 5, height: 200},
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 5,
  },
  pressable: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginTop: 10,
    paddingStart: 10,
    padding: 12,
    alignItems: 'center',
  },
});
