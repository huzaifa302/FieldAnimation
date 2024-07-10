import {View, Text} from 'react-native';
import React, { useState } from 'react';
import CustomTextInput from '../../Component/CustomTextInput';

const Login = () => {
    const [email, setEmail] = useState('')
  return (
    <View style={{flex:1, backgroundColor:'white'}}>
      <CustomTextInput label='Email' value={email} onChangeText={setEmail}  />
    </View>
  );
};

export default Login;
