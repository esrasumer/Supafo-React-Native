import React from 'react';
import {Dimensions, Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import Screen from '../../components/Screen';
import Swiper from 'react-native-swiper';
import Text from '../../components/Text';
import Button from '../../components/Button';
import {ONBOARING_DATA} from '../../data/onboarding';
import routes from '../../navigation/routes';
import {OnboardingScreenComponentType} from './onboarding.type';
import { moderateScale, verticalScale } from 'react-native-size-matters';

const screenWidth = Dimensions.get('window').width;

function OnboardingScreenComponent({
  swiperRef,
  setSwipeIndex,
  navigation,
  isLastIndex,
  isStartIndex,
}: OnboardingScreenComponentType) {
  return (
    <View
    style={styles.viewStyle}>
      <Swiper
        ref={swiperRef}
        onIndexChanged={index => setSwipeIndex(index)}
        loop={false}
        activeDotColor="#66AE7B"
        dotColor="#FEFEFE"
        activeDotStyle={{marginBottom: verticalScale(30)}}
        dotStyle={{borderWidth: 2, borderColor: '#66AE7B', marginBottom: verticalScale(30)}}>
        {ONBOARING_DATA.map(item => (
          <View
            key={item.id}
            style={styles.cointainerImageStyle}>
            <View style={{marginBottom: verticalScale(12)}}>
              <Image
                source={item.image}
                resizeMode="contain"
                style={styles.imageStyle}
              />
            </View>
            <Text
              style={styles.infoTextStyle}>
              {item.text}
            </Text>
          </View>
        ))}
      </Swiper>
      <View
        style={styles.container}>
        <View  style={styles.containerButtonBackStyle}>
          <TouchableOpacity
            style={styles.buttonBackStyle}
            onPress={() => {
              navigation.navigate(routes.AUTH_SCREEN);
            }}>
            <Text
              style={styles.buttonTextStyle}
              >
              Atla
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerButtonNextStyle}>
          <TouchableOpacity
            style={styles.buttonNextStyle}
            onPress={() => {
              if (isLastIndex) {
                navigation.navigate(routes.AUTH_SCREEN);
              } else {
                swiperRef.current?.scrollBy(1);
              }
            }}>
            <Text style={styles.buttonTextStyle}>
              {' '}
              {isLastIndex ? 'Bitti' : 'Sonraki'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default OnboardingScreenComponent;

const styles = StyleSheet.create({
  viewStyle:{
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
    width: screenWidth,
  },
  cointainerImageStyle:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: moderateScale(8),
    marginBottom: verticalScale(60),

  },
  container:{
    flexDirection: 'row',               
    justifyContent: 'space-between',    
    paddingHorizontal: moderateScale(4), 
    position: 'absolute',
    bottom: verticalScale(70),          
    alignItems: 'center',   
    marginRight: moderateScale(4), 

  },
  imageStyle:{
    width:moderateScale(250),
    height:verticalScale(250),
  },
  infoTextStyle:{
    textAlign: 'center',
    marginTop: verticalScale(20),
    fontWeight: '600',
    color: 'black',                    
    fontSize: moderateScale(15),                    
    paddingHorizontal: moderateScale(4),
    marginHorizontal:moderateScale(25),
  },
  buttonTextStyle:{
    fontSize: moderateScale(16),
     color: '#333333',
    fontWeight: '600'
  },
  buttonBackStyle:{
    backgroundColor: 'transparent',
    width: screenWidth * 0.13, 
    left: screenWidth * 0.01, 
    position: 'absolute',
  },
  buttonNextStyle:{
    backgroundColor: 'transparent',
    width: screenWidth * 0.26,
    right: screenWidth * 0.005,
    position: 'absolute',
    alignItems: 'center',
  },
  containerButtonBackStyle:{
    flex:1,
    marginStart: moderateScale(20),
    marginEnd: moderateScale(20)
  },
  containerButtonNextStyle:{
    flex:1,
  }
})
