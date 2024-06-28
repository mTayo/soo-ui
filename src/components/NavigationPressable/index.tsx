import React, { useState } from 'react';
  import { StyleSheet, Text, View } from 'react-native';
import ChevronDownIcon from '../../../assets/icons/chevron-down-icon.svg';
import { appStyles } from '../../styles';

  export default function NavigationPressable(props: NavigationPressableProps){
    const {
        styleProps,
        placeholder, 
        showErrorMessage, 
        errorMessage, 
        value
    } = props;
    const [selectvalue, setValue] = useState<string>('');
    const [isFocus, setIsFocus] = useState(false);


    return (
      <View style={styleProps}>
        <View style={[styles.dropdown]}>
            <Text style={[appStyles.flexGrow, styles.placeholderStyle]}>{value || placeholder}</Text>
            <View style={{width: 24}}><ChevronDownIcon /></View>
        </View>
        
        {showErrorMessage && (
            <Text style={appStyles.errorMsg}>{errorMessage}</Text> 
        )}
      </View>
    );
  };


  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      padding: 16,
    },
    dropdown: {
      height: 50,
      backgroundColor:'#F9FAFB',
      flex: 1,
      justifyContent: 'space-between',
      flexDirection: 'row',
      gap: 5,
      padding: 10,
      borderRadius: 16,
      paddingHorizontal: 16,
    },
    icon: {
      marginRight: 5,
    },
    label: {
      position: 'absolute',
      backgroundColor: 'white',
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
    },
    placeholderStyle: {
      fontSize: 16,
      width: '90%'
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  });