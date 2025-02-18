import React from 'react';
import Screen from '../../components/Screen';
import {Image, TouchableOpacity, View, StyleSheet} from 'react-native';
import {
  EmailIconDark,
  ForgotPasswordImage,
  SMSIcon,
} from '../../assets/images';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import routes, {RootStackParamList} from '../../navigation/routes';
import Header from '../../components/Header';
import Text from '../../components/Text';
import responsiveScale from '../../utils/responsiveScale';

const {scale, moderateScale, verticalScale} = responsiveScale;

function ForgotPasswordScreen() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <Screen
      header={<Header title="Sıfırlama Yöntemi Seç" />}
      style={styles.screenContainer}>
      <View style={styles.mainContainer}>
        <Image
          source={ForgotPasswordImage}
          resizeMode="contain"
          style={styles.image}
        />
        <View style={styles.buttonContainer}>
          <Button
            image={EmailIconDark}
            onPress={() =>
              navigation.navigate(routes.FORGOT_PASSWORD_BY_EMAIL_SCREEN)
            }
            variant="light"
            style={styles.button}>
            Mail ile doğrula
          </Button>
          <Button
            image={SMSIcon}
            onPress={() =>
              navigation.navigate(routes.FORGOT_PASSWORD_BY_SMS_SCREEN)
            }
            variant="light"
            style={styles.button}>
            SMS ile doğrula
          </Button>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: moderateScale(160),
    paddingHorizontal: moderateScale(40),
  },
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
    flex: 0.6,
    marginBottom: moderateScale(115),
  },
  image: {
    height: verticalScale(130),
    marginBottom: moderateScale(55)
  },
  buttonContainer: {
    marginTop: moderateScale(0),
    width: '100%',
    rowGap: moderateScale(-2.5),
  },
  button: {
    marginTop: moderateScale(15),
    height:verticalScale(35),
    borderRadius: moderateScale(15),
    alignItems: 'center',
    width: '100%',
  },
});

export default ForgotPasswordScreen;
