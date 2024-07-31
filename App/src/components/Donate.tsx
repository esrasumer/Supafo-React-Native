import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {DonateType} from './components.type';
import {colors} from '../theme/colors';
import {moderateScale, scale} from 'react-native-size-matters';

export function Donate(props: DonateType) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={props.backgroundImage}
        style={styles.backgroundImage}
        borderRadius={20}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Image style={styles.icon} source={props.icon} />
          </View>
          {!props.isAvailable ? (
            <View style={styles.headerRight}>
              <Text style={styles.headerRightText}>Yakında</Text>
            </View>
          ) : null}
        </View>

        <View style={styles.content}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{props.title}</Text>
          </View>

          <TouchableOpacity onPress={props.onPress} style={styles.button}>
            <Text style={styles.buttonText}>{props.buttonTitle}</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 24,
    borderRadius: 20,
    borderColor: 'lightgray',
    borderWidth: 1.3,
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    padding: 10,
    height: moderateScale(148),
    borderRadius: 20,
    justifyContent: 'space-between',
  },
  icon: {
    width: 40,
    height: 25,
  },
  header: {
    padding: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerRight: {
    borderRadius: 15,
    backgroundColor: '#66AE7B',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: moderateScale(8),
  },
  headerRightText: {
    fontSize: scale(11),
    fontWeight: '700',
    color: colors.splashtext,
    textAlign: 'center',
  },
  content: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  titleContainer: {
    width: 193,
    alignItems: 'center',
  },
  title: {
    fontSize: scale(15),
    fontWeight: '700',
    color: '#66AE7B',
    textAlign:'center'
  },
  button: {
    borderRadius: 20,
    width: '30%',
    opacity: 0.7,
    backgroundColor: colors.greenColor,
    alignItems: 'center',
    padding: 6,
    margin: 15,
  },
  buttonText: {
    fontWeight: '600',
    fontSize: scale(15),
    color: 'white',
  },
});
