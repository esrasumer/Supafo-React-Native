import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { SubmitButtonProps } from './components.types';
import { moderateScale } from 'react-native-size-matters';

const SubmitButton = ({
  onPress,
  isEnabled,
  title,
}:SubmitButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: isEnabled ? '#70bc63' : '#84a17f' },
      ]}
      onPress={onPress}
      disabled={!isEnabled}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#A3D8A3',
    padding: moderateScale(8),
    borderRadius: moderateScale(20),
    height: moderateScale(40),
    width:'85%',
    marginStart:moderateScale(25),
    alignItems: 'center',
    marginTop: moderateScale(60),
  },
  buttonText: {
    color: '#fff',
    fontSize: moderateScale(16),
    fontWeight: 'bold',
  },
});

export default SubmitButton;
