import { StyleSheet, TextInput, View } from 'react-native';
import React, { useReducer, useRef } from 'react';
import { theme } from '../../themes';
import SearchIcon from '../../../assets/icons/search.svg';
import { appStyles } from '../../styles';

export default function SearchInput(props: any) {
    const {inputStyle, keyboardType = 'default', placeholder= ''} = props;
    const inputRef: any = useRef(null);
    const initialState = {
      isFocused: false
  };
  const [state, setState] = useReducer((state: any, newState: any) => ({ ...state, ...newState }), initialState);
  const {isFocused} = state;
  const onFocus= () => { 
    setState({
      isFocused: !isFocused
    })
  };
    return (
        <View style={[
                styles.searchContainer, 
                // appStyles.w_full, 
                appStyles.flex, 
                appStyles.flexRow,
                appStyles.itemsCenter, 
                appStyles.justifyBetween,
                {paddingEnd: 16, borderRadius: 16}]}
        >
            <View style={[ appStyles.flexGrow]}>
                <TextInput
                    // editable
                    placeholder={placeholder}
                    keyboardType={keyboardType}
                    onFocus={ () => onFocus() }
                    onBlur={ () => onFocus() }
                    // style={[styles.textInput]}
                    // @ts-ignore
                    ref={inputRef}
                />
            </View>
            <View>
                <SearchIcon/>
            </View>

        </View>
    );
  }


const styles = StyleSheet.create({
  textInputOnFocus:{
    //   paddingTop: 22,
    //   paddingBottom: 22,
    //   paddingLeft: 10,
    //   paddingRight: 10,
    //   fontSize: 16,
    //   fontWeight: '400',
    //   borderWidth: 2,
    //   borderColor:'#163300',
    //   borderRadius: 12
  },
  textInput:{
    // width: '86%'
  },
  searchContainer:{
    padding: 16,
    paddingBottom: 12,
    paddingTop: 12,
    backgroundColor: theme.colors.blueGrey050,
    borderRadius: 24
  }
  });