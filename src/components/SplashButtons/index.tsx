import {  Pressable, StyleSheet, Text, View } from 'react-native';

import { theme } from '../../themes';
import { appStyles } from '../../styles';
import LoginIcon from '../../../assets/icons/login.svg';
import EmailIcon from '../../../assets/icons/mail.svg';
import ArrowRightIcon from '../../../assets/icons/arrow-right.svg';

export default function SplashButton(props: any) {
    const {onPress, text, type, btnColor="white", icon} = props;
   
    return (
        // @ts-ignore   
        <Pressable onPress={onPress} style={styles[type? type: 'blue']}> 
            <View style={[appStyles.flex, appStyles.flexRow, appStyles.gap16]}>
                {icon == "login"? (
                    <LoginIcon />
                ): (
                    <EmailIcon />
                )}
                
                <Text style={[styles.btnText, appStyles.fontSizeSmall, appStyles.font700, appStyles.whiteColor]}>{text}</Text>
            </View>
            <View style={styles.icon}>
                <ArrowRightIcon />
            </View>
        </Pressable> 
    );
  
  }


const styles = StyleSheet.create({

    blue: {
        backgroundColor: theme.colors.appBlue,
        borderRadius: 24,
        paddingBottom: 4,
        paddingTop: 4,
        paddingLeft: 16,
        paddingRight: 4,
        flexDirection:'row',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    blue_grey: {
        backgroundColor: theme.colors.blueGrey800,
        borderRadius: 24,
        paddingBottom: 4,
        paddingTop: 4,
        paddingLeft: 16,
        paddingRight: 4,
        flexDirection:'row',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },  
    icon:{
        borderRadius: 48,
        borderColor: theme.colors.whiteColor,
        borderWidth: 1,
        padding: 12,

    },
    container:{
        flex: 1,
        padding: 20,
    },
    btnText: {
        fontFamily: 'PlusJakartaSans-Regular',
        // fontSize: fontSizeSmall
    }

    
  });