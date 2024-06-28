import React, { useEffect, useReducer, useRef, useState } from 'react';
import {Keyboard, StyleSheet, Text, TextInput, View} from 'react-native';
import { appStyles } from '../../styles';
import { theme } from '../../themes';

const TextFieldInput = (props: TextInputProps) => {
  const inputRef: any = useRef(null);
    const {
        styleProps ={},
        keyboardType= "default", 
        placeholder= "input", 
        onChange, 
        value, 
        errorMessage,
        showErrorMessage,
        name
    } = props;
    const [keyboardStatus, setKeyboardStatus] = useState('');
    useEffect(() => {
        const showSubscription = Keyboard.addListener('keyboardDidShow', () => setKeyboardStatus('display'));
        const hideSubscription = Keyboard.addListener('keyboardDidHide', () => setKeyboardStatus('none'));
        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };
    }, []);
    const textInputRef = useRef<TextInput>(null);
    const checkKeyboards = () => {
        if(keyboardStatus === "none") textInputRef.current?.blur()
        
        return true
    };
  return (
        <View style={styleProps}>
            <TextInput
                style={[styles.input, appStyles.fontSizeNormal, ]}
                onChangeText={(e)=>onChange(e, name)}
                value={value}
                onPressIn={checkKeyboards}
                placeholder={placeholder}
                keyboardType={keyboardType}
                placeholderTextColor={theme.colors.blueGrey500}
                editable
                // @ts-ignore
                ref={inputRef}
            />
            {showErrorMessage && (
                <Text style={appStyles.errorMsg}>{errorMessage}</Text> 
            )} 
        </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 52,
    padding: 10,
    borderRadius: 16,
    paddingHorizontal: 16,
    backgroundColor:'#F9FAFB',

  },
});

export default TextFieldInput;