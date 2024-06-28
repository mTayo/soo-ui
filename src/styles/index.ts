import {  Platform, StyleSheet } from 'react-native';
import { theme } from '../themes';

export const appStyles = StyleSheet.create({
    flex:{
        display: 'flex',
    },
    flexGrow: {
        flexGrow: 1
    },
    flexRow:{
        flexDirection: 'row',
    },
    flexCol:{
        flexDirection: 'column'
    },
    flexWrap:{
        flexWrap: 'wrap'
    },
    flexShrink:{
        flexShrink: 1
    },
    justifyBetween:{
        justifyContent: 'space-between'
    },
    justifyEnd:{
        justifyContent: 'flex-end',
    },
    itemsCenter: {
        alignItems: 'center',
        // justifyContent: 'center'
    },
    itemsStart: {
        alignItems: 'flex-start',
    },
    errorMsg: {
        color: theme.colors.red500,
        fontSize: 14,
    },
    underline: {textDecorationLine: 'underline'},
    gap6:{
        gap: 6
    },
    gap8:{
        gap: 8
    },
    gap12:{
        gap: 12
    },
    gap16:{
        gap: 16
    },
    gap21:{
        gap: 21
    },
    gap25:{
        gap: 25
    },
    gap29:{
        gap: 29
    },
    gap30:{
        gap: 30
    },
    gap35:{
        gap: 35
    },
    black:{
        color:'black', 
        textAlign:'center', 
        fontWeight: '600', 
        fontSize: 16
    },
    blackColor: {
        color: '#0E0F0C',
    },
    lightGreenColor:{
        color: '#4CD964',
    },
    contentSecondaryColor:{
        color: '#454745',
    },
    bgGrey:{
        backgroundColor: theme.colors.greyColor
    },
    bgWhite:{
        backgroundColor: theme.colors.whiteColor
    },
    textTertiary:{
        color: theme.colors.textTertiary
    },
    appTextColor: {
        color: theme.colors.appColor
    },
    whiteColor: {
        color: theme.colors.whiteColor
    },
    textCenter: {
        textAlign: 'center'
    },
    screenPadding:{
        paddingLeft: Platform.OS === 'ios' ? 16 : 16,
        paddingRight: Platform.OS === 'ios' ? 16 : 16,
    },
    inputColor: {
        color: theme.colors.blueGrey900
    },
    // Font weight
    font900:{
        fontWeight:'900'
    },
    font800:{
        fontWeight:'800'
    },
    font700:{
        fontWeight:'700'
    },
    font600:{
        fontWeight:'600'
    },
    font500:{
        fontWeight:'500'
    },
    font400:{
        fontWeight:'400'
    },
    // Font size
    fontSizeXS:{
        fontSize: 12
    },
    fontSize13:{
        fontSize: 13
    },
    fontSizeSmall:{
        fontSize: 14
    },
    fontSizeNormal:{
        fontSize: 16
    },
    fontSize17:{
        fontSize: 17
    },
    fontSize18:{
        fontSize: 18
    },
    fontSizeLarge:{
        fontSize: 20
    },
    fontSizeXL:{
        fontSize: 24
    },
    fontSize26:{
        fontSize: 26
    },
    fontSize30:{
        fontSize: 30
    },
    fontSize34:{
        fontSize: 34
    },
    fontSize36:{
        fontSize: 36
    },
    fontSize40:{
        fontSize: 40
    },
    fontSize52:{
        fontSize: 52
    },
    // Avatar
    imgAvatar:{
        borderRadius: 360
    },
    // Width
    w_full:{
        width: '100%'
    },
    // Badge
    lemonBadge:{
        backgroundColor: '#D8F894'
    },
    safeAreaPadding:{
        paddingTop: Platform.OS === 'ios' ? 0 : 32,
        paddingBottom: Platform.OS === 'ios' ? 0 : 8,
    }
  });