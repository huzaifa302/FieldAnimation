import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import React from 'react';
import {colors} from 'react-native-swiper-flatlist/src/themes';
import Colors from '../Config/Colors';

const {width} = Dimensions.get('window');
const Button = ({title, onPress=() => {}}) => {
  return (
    <TouchableOpacity
    onPress={onPress}
      style={{
        backgroundColor: Colors.PrimaryColor,
        width: width - 40,
        height: 60,
        borderRadius: 10,
        justifyContent: 'center',
      }}
      activeOpacity={0.8}>
      <Text style={{color: Colors.White, fontSize: 16, textAlign: 'center'}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
