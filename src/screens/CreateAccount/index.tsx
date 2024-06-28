import {  Dimensions, Pressable, ScrollView, StyleSheet, Text,  View, useWindowDimensions } from 'react-native';
import React, { useReducer } from 'react';
import { appStyles } from '../../styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import TitleText from '../../components/TitleText';
import { theme } from '../../themes';
import ArrowLeftIcon from '../../../assets/icons/arrow-left.svg';
import SelectField from '../../components/SelectDropdown';
import TextFieldInput from '../../components/TextFieldInput';
import PasswordInputField from '../../components/PasswordField';
import CheckBoxField from '../../components/CheckBox';
import AppButton from '../../components/Button/Button';
import { competitionData } from '../../../data';
import { validateData } from '../../helpers/validator';
import { isNotEmptyArray, isObjectEmpty } from '../../libs';
import NavigationPressable from '../../components/NavigationPressable';
import { useSelector } from 'react-redux';


export default function CreateAccountUI({navigation}: any) {
    const selectedCompetition = useSelector((state: any) => state?.selectedCompetition);
    const initialState = {
        formData: {
            termsAccepted: false,
            email: '',
            password: '',
            confirmPassword: '',
            first_name: '',
            last_name: '',
            selected_competition: ''
        },
        errors:{}
    };
    const [state, setState] = useReducer((state: any, newState: any) => ({ ...state, ...newState }), initialState);
    const {formData, errors} = state;
    const handleInputChange =  (e: React.ChangeEvent<HTMLInputElement>, name: string): void => {
        setState({
            formData:{
                ...formData,
                [name]: e
            },
            errors:{
                ...errors,
                [name]: []
            }
        })
    };
    const handleToggle = () => {
        setState({
            formData:{
                ...formData,
                termsAccepted: !formData.termsAccepted
            },
            errors:{
                ...errors,
                termsAccepted: []
            }
        })
    };
    const validateFormInputs = async () => {
        const rules = {
            email: 'isEmail',
            last_name: 'required',
            first_name: 'required',
            selected_competition: 'required',
            password: 'passwordLength|3matchingLetters|checkForPasswordRegex|confirmPassword',
        };
        const messages = {
            'email.required': 'Email format is invalid',
            'email.isEmail': 'Email format is invalid',
            'last_name.required': 'This is a required field.',
            'first_name.required': 'This is a required field.',
            'selected_competition.required': 'You must pick a competition to register',
            'password.passwordLength': '✓ At least 8 letters',
            'password.3matchingLetters': '✓ Include at least 3 uppercase letters, lowercase letters, number, or special letters',
            'password.checkForPasswordRegex': 'Special letters are only limited to (~`!@#$%^&*()_-+=?)',
            'password.confirmPassword': 'New password and Confirm password do not match.'
        };
        
        let validate = await validateData({...formData, selected_competition:selectedCompetition?.value}, rules, messages);
        if(isObjectEmpty(validate)){
            navigation.navigate("WelomeScreen")
        }else{
            setState({
                errors: validate
            });
        }

    };
  
    return (
        <SafeAreaView style={[styles.container]}>
            <ScrollView showsVerticalScrollIndicator={false} style={[styles.contentContainer]}>
                <View style={[appStyles.flex, appStyles.flexRow, appStyles.itemsCenter, appStyles.gap16, {marginBottom: 24}]}>
                    <View style={styles.icon}>
                        <ArrowLeftIcon />
                    </View>
                    <TitleText text="Create Account" />
                </View>
                <View>
                    <Pressable style={{zIndex:4}} onPress={()=> navigation.navigate('CompetitionScreen')}>
                        
                        <NavigationPressable 
                            value={selectedCompetition?.label}
                            placeholder="Competition to sign up * "
                            styleProps={!isObjectEmpty(selectedCompetition) && styles.inputBottomMargin} 
                            errorMessage={errors?.selected_competition}
                            showErrorMessage={isObjectEmpty(selectedCompetition) ? true : false}
                        />
                        <View>

                        </View>
                    </Pressable>
                    <TextFieldInput 
                        errorMessage={errors?.email}
                        showErrorMessage={isNotEmptyArray(errors?.email) ? true : false}
                        onChange={handleInputChange}
                        value={formData?.email}
                        placeholder='Email address'
                        keyboardType="email-address"
                        styleProps={!isNotEmptyArray(errors?.email) && styles.inputBottomMargin} 
                        name='email'
                    />
                    <View style={{marginBottom:!isNotEmptyArray(errors?.password)? 24 : 0}}>
                        <PasswordInputField
                            passwordValue={formData?.password}
                            confirmPasswordValue={formData?.confirmPassword}
                            onPasswordChange={handleInputChange}
                            onConfirmPasswordChange={handleInputChange}
                            errorMessage={errors?.password}
                            confirmPasswordErrorMessage={errors?.cconfirmPassword}
                            showErrorMessage={isNotEmptyArray(errors?.password || errors.confirmPassword) ? true : false}
                            confirmPassowrdPlaceholder="Confirm Password"
                            passwordPlaceholder="Password" 
                            keyboardType={'default'}  
                            name="password"
                            confirmPasswordName="confirmPassword"                  
                        />
                    </View>
                    <TextFieldInput 
                        errorMessage={errors?.first_name}
                        showErrorMessage={errors?.first_name}
                        onChange={handleInputChange}
                        value={formData?.first_name}
                        placeholder='First Name in English *'
                        keyboardType="default"
                        styleProps={!isNotEmptyArray(errors?.first_name) && styles.inputBottomMargin} 
                        name="first_name"
                    />
                    <TextFieldInput 
                        errorMessage={errors?.last_name}
                        showErrorMessage={errors?.last_name}
                        onChange={handleInputChange}
                        value={formData?.last_name}
                         placeholder='Last Name in English *'
                        keyboardType="default"
                        styleProps={!isNotEmptyArray(errors?.last_name) && styles.inputBottomMargin} 
                        name="last_name"
                    />
                    
                    
                </View>
               
            </ScrollView>
            
            <View style={[{marginTop: 8}, styles.contentContainer]}>
                <CheckBoxField value={formData?.termsAccepted} onChange={()=>handleToggle()}>
                    <Text style={{marginLeft: 12, paddingTop: 10, paddingRight: 24}}>
                        By signing up, I agree to Cloit's <Text style={appStyles.underline}>Terms & Conditions</Text> and <Text style={appStyles.underline}>Privacy Policy.</Text>"
                    </Text>
                </CheckBoxField> 
            </View>
            <View style={[{marginTop: 24}, styles.contentContainer]}>
                <AppButton text="Sign Up"  onPress={validateFormInputs} />
            </View>
        </SafeAreaView>
    );
  }


const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.whiteColor,
        flex:1,
        justifyContent: 'space-between'
    },
    contentContainer:{
        paddingLeft: 24,
        paddingRight: 24,
    },
    icon:{
        borderRadius: 48,
        borderColor: theme.colors.blueGrey300,
        borderWidth: 1,
        padding: 12,

    },
    inputBottomMargin: {
        marginBottom: 8
    },
    customText: {
        color: 'white',
        fontSize: 36,
        fontWeight: "800",
        fontFamily: 'PlusJakartaSans-Regular'
      },
  });