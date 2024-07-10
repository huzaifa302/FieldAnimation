import {View, Text, Image, Dimensions} from 'react-native';
import React from 'react';
import Colors from '../../Config/Colors';
import AuthHeader from '../../Component/AuthHeader';
import Button from '../../Component/Button';
import Login from './Login';

const {width, height} = Dimensions.get('window');
const GetStarted = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: Colors.cream}}>
      <AuthHeader />
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Image
          style={{width: width - 40, height: (width - 40) * 0.895}}
          source={require('../../Assest/Images/burger.png')}
          resizeMode="contain"
        />
        <Text
          style={{
            color: Colors.PrimaryColor,
            fontSize: 33,
            textAlign: 'center',
            paddingBottom: 25,
          }}>
          Quick
          <Text style={{color: Colors.TextColor}}>
            Delivery{'\n'}at your Doorstep
          </Text>
        </Text>
        <Button title={"let's Get Started"} onPress={()=>navigation.navigate('Login')} />
        <View style={{flexDirection: 'row', paddingTop: 20}}>
          <Text style={{fontSize: 14, color: Colors.TextColor}}>
            Already have an account? 
          </Text>
          <Text style={{fontSize: 14, color: Colors.PrimaryColor}}>
            Sign In
          </Text>
        </View>
      </View>
    </View>
  );
};

export default GetStarted;
