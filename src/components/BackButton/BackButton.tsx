import {  Pressable, StyleSheet, Text, View } from 'react-native';

import { theme } from '../../themes';
import { appStyles } from '../../styles';
import ArrowBack from '../../../assets/icons/arrow-left.svg';

export default function BackButton(props: any) {
    const { onPress } = props;
    return (
        <Pressable onPress={onPress} style={styles.icon}> 
            <ArrowBack />
        </Pressable> 
    );
  }

const styles = StyleSheet.create({
    icon:{
        borderRadius: 48,
        backgroundColor: theme.colors.blueGrey050,
        borderColor: theme.colors.whiteColor,
        borderWidth: 1,
        padding: 16,
        width: 52,
        height: 52
    },
});