import React, { useState } from 'react';
  import { StyleSheet, Text, View } from 'react-native';
  import { Dropdown } from 'react-native-element-dropdown';
import { appStyles } from '../../styles';

  export default function SelectField(props: SelectInputProps){
    const {
        data, 
        styleProps,
        onChange, 
        name, 
        placeholder, 
        showErrorMessage, 
        errorMessage, 
        value
    } = props;
    const [selectvalue, setValue] = useState<string>('');
    const [isFocus, setIsFocus] = useState(false);


    return (
      <View style={styleProps}>
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          disable
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={placeholder}
          value={selectvalue}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item?.value);
            setIsFocus(false);
            onChange(item?.value, name)
          }}

        />
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
      borderRadius: 16,
      paddingHorizontal: 8,
      backgroundColor:'#F9FAFB',
      zIndex: -2
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