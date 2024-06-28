import React, { useState } from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import { appStyles } from '../../styles';
import EyeIcon from '../../../assets/icons/eye.svg';
import EyeOffIcon from '../../../assets/icons/eyeoff.svg';
import { theme } from '../../themes';

const PasswordInputField = (props: PasswordProps) => {
  const {
    passwordValue,
    confirmPasswordValue,
    onPasswordChange,
    errorMessage,
    showErrorMessage,
    styleProps,
    keyboardType,
    confirmPassowrdPlaceholder,
    passwordPlaceholder,
    name,
    confirmPasswordName
  } = props;
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <>
        <View style={[appStyles.flex, appStyles.flexRow, appStyles.justifyBetween, appStyles.itemsCenter, styles.input, styles.borderBottom, styleProps]}>
            <TextInput
                style={[styles.input, appStyles.fontSizeNormal, appStyles.flexGrow]}
                onChangeText={(e) => onPasswordChange(e, name)}
                value={passwordValue}
                placeholder={passwordPlaceholder}
                secureTextEntry={!showPassword}
                keyboardType={keyboardType}
                placeholderTextColor={theme.colors.blueGrey500}
            />
            <Pressable onPress={() => setShowPassword(!showPassword)}>
                {showPassword ? <EyeIcon /> : <EyeOffIcon />}
            </Pressable>
        </View>
        <View style={[appStyles.flex, appStyles.flexRow, appStyles.justifyBetween, appStyles.itemsCenter, styles.input, styleProps]}>
            <TextInput
                style={[styles.input, appStyles.fontSizeNormal, appStyles.flexGrow]}
                value={confirmPasswordValue}
                onChangeText={(e) => onPasswordChange(e, confirmPasswordName)}
                placeholder={confirmPassowrdPlaceholder}
                secureTextEntry={!showConfirmPassword}
                keyboardType={keyboardType}
                placeholderTextColor={theme.colors.blueGrey500}
            />
            <Pressable onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                {showConfirmPassword ? <EyeIcon /> : <EyeOffIcon />}
            </Pressable>
        </View>
        {showErrorMessage && (
            <>
                {errorMessage.map((msg: string, _i: number) => (
                    <Text style={[appStyles.errorMsg, {marginBottom: 11}]} key={_i}>{msg}</Text> 
                ))}
            </>
        )} 
    </>
    
  );
};

const styles = StyleSheet.create({
  input: {
    height: 52,
    padding: 10,
    borderRadius: 16,
    paddingHorizontal: 8,
    backgroundColor:'#F9FAFB'
  },
  borderBottom:{
    borderBottomColor: '#F2F4F7',
    borderBottomWidth: 1
  }
});

export default PasswordInputField;