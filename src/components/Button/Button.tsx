import {  Pressable, StyleSheet, Text, View } from 'react-native';

import { theme } from '../../themes';
import { appStyles } from '../../styles';
import { useFonts } from 'expo-font';

export default function AppButton(props: any) {
    const {onPress, text, type, btnColor="white", icon} = props;
    const [fontsLoaded] = useFonts({
        "PlusJakartaSans-Medium": require("../../../assets/fonts/PlusJakartaSans-Medium.ttf"),
       });
    return (
        // @ts-ignore   
        <Pressable onPress={onPress} style={styles[type? type: 'blue']}> 
            <Text style={[styles.btnText, appStyles.fontSizeSmall, appStyles.font700, appStyles.whiteColor]}>{text}</Text>
        </Pressable> 
    );
  
  }


const styles = StyleSheet.create({

    blue: {
        backgroundColor: theme.colors.appBlue,
        borderRadius: 48,
        paddingBottom: 18,
        paddingTop: 18,
        paddingLeft: 16,
        paddingRight: 4,
        flexDirection:'row',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
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
        fontFamily: 'PlusJakartaSans-Medium',
        fontWeight: '900'
    }

    
  });