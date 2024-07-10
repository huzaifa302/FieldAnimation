import {View, Text, Image, Dimensions} from 'react-native';
import React from 'react';
import Colors from '../Config/Colors';

const {width, height} = Dimensions.get('window');
const AuthHeader = () => {
  return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: 20
        }}>
        <Image
          style={{width: 50, height: 50}}
          source={require('../Assest/Icons/logo.png')}
          resizeMode="contain"
        />
        <Text style={{fontSize: 26, color: Colors.TextColor, paddingLeft: 20}}>
          Quick Order
        </Text>
      </View>
      
  );
};

export default AuthHeader;
