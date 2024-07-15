import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../../store/store';

const OrderDetailSheet = () => {
  const [items, setItems] = useState();
  const [totalPrice, setTotalPrice] = useState(0) || [];
  const [discount, setDiscount] = useState(100);

  const navigation = useNavigation();

  const userId = useSelector((state: RootState) => state.setUserId.id);

  const getDocuments = async () => {
    try {
      const querySnapshot = await firestore()
        .collection(userId)
        .doc('cart')
        .collection('items')
        .get();
      const docs: any = [];

      querySnapshot.docs.forEach(doc => {
        const data = doc.data();
        docs.push({id: doc.id, ...data});
      });

      setItems(docs);
      return docs;
    } catch (error) {
      console.error('Error fetching documents:', error);
      return [];
    }
  };

  const calculatePrice = () => {
    let totalPrice = 0;
    //console.log("calculatePrice: ", items);

    if (items) {
      items.forEach(item => {
        const itemPrice = item.price * item.quantity;
        totalPrice += itemPrice;
      });
      setTotalPrice(totalPrice.toFixed(2));
    }
  };

  useEffect(() => {
    getDocuments();
    calculatePrice();
  }, [items]);

  return (
    <View style={[styles.main, styles.shadow]}>
      <View style={styles.wrapper}>
        <Text style={styles.txt}>Tutar</Text>
        <Text style={styles.priceTxt}>{totalPrice} ₺</Text>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.txt}>İndirim</Text>
        <Text style={styles.priceTxt}>-{discount} ₺</Text>
      </View>
      <View style={styles.banner} />
      <View style={styles.wrapper}>
        <Text style={styles.txt}>Toplam</Text>
        <Text style={styles.priceTxt}>
          {(totalPrice - discount).toFixed(2)} ₺
        </Text>
      </View>
      <View style={styles.btnWrapper}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('OnlinePaymentScreen')}>
          <Text style={styles.btnTxt}>Sepeti Onayla</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrderDetailSheet;

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#FEFEFE', //White Color HexCode
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    padding: 10,
    borderTopColor: 'lightgray',
    borderWidth: 0.7,
  },
  wrapper: {
    flexDirection: 'row',
    padding: 5,
  },
  txt: {
    flex: 1,
    fontSize: 15,
    color: '#333333', // Txt Color
    paddingStart: 7,
    fontWeight: '400',
  },
  priceTxt: {
    fontSize: 18,
    color: '#333333',
    paddingEnd: 7,
  },
  banner: {
    backgroundColor: '#66AE7B',
    height: 1.5,
    marginStart: 10,
    marginEnd: 10,
    marginVertical: 10,
  },
  btnWrapper: {
    alignItems: 'center',
    marginVertical: 30,
  },
  btn: {
    alignItems: 'center',
    backgroundColor: '#66AE7B',
    padding: 5,
    borderRadius: 10,
    width: '100%',
  },
  btnTxt: {
    textAlign: 'center',
    color: '#FEFEFE',
    padding: 5,
    fontSize: 16,
    fontWeight: '600',
  },
  shadow: {
    shadowColor: 'black',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 5,
  },
});
