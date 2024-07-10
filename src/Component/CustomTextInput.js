import React from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  Dimensions,
  LayoutAnimation,
  TouchableOpacity,
} from 'react-native';
import Colors from '../Config/Colors';

const {width} = Dimensions.get('window');

export default function CustomTextInput(props) {
  const [showInput, setShowInput] = React.useState(false);
  const [secureTextEntry, setSecureTextEntry] = React.useState(
    props.isPassword,
  );
  const inputRef = React.useRef();
  return (
    <View
      style={{
        alignSelf: 'center',
        marginTop: 25,
        width: width - 60,
        height: 50,
        backgroundColor: 'transparent',
        paddingHorizontal: 10,
        borderRadius: 7,
        borderWidth: 1,
        borderColor: Colors.PrimaryColor,
        ...props.containerStyle,
      }}>
      <TouchableOpacity
        disabled={showInput}
        onPress={() => {
          LayoutAnimation.linear();
          setShowInput(true);
          setTimeout(() => {
            inputRef.current.focus();
          }, 100);
        }}
        style={{
          flex: 1,
          width: showInput ? null : width - 80,
          marginLeft: showInput ? 0 : 10,
          height: showInput ? 48 * 0.5 : 48,
          backgroundColor: 'white',
          flexDirection: 'row',
          alignItems: 'center',
          position: 'absolute',
          left: showInput ? 10 : 0,
          top: showInput ? -(48 * 0.5) / 2 : 0,
          paddingHorizontal: 10,
          flexDirection: 'row'
        }}>
            <Image source={require('../Assest/Icons/Emailicon.png')} />
        <Text
          style={{
            color: Colors.PrimaryColor,
            fontSize: showInput ? 14 * 0.85 : 14,
          }}>
          {props.label}
        </Text>
      </TouchableOpacity>
      {showInput && (
        <View
          style={{
            width: '100%',
            height: 50,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TextInput
            ref={inputRef}
            onBlur={() => {
              LayoutAnimation.linear();
              props.value === '' && setShowInput(false);
            }}
            style={{
              width: '85%',
              height: 50,
              color: Colors.black,
            }}
            placeholderTextColor={Colors.black}
            secureTextEntry={secureTextEntry}
            {...props}
          />
          {props.isPassword && (
            <TouchableOpacity
              onPress={() => {
                setSecureTextEntry(!secureTextEntry);
              }}
              style={{
                width: '15%',
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: Colors.primary,
                  fontWeight: '600',
                  fontSize: 14,
                }}>
                {secureTextEntry ? 'Show' : 'Hide'}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      )}
      {/* <Image
        source={Images.border}
        style={{width: width, marginLeft: -30, marginTop: showInput ? 0 : 50}}
      /> */}
    </View>
  );
}
