import { Image,  StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function CompetitionCard(props: competitionDataProps) {
    const { value, label, date, address, bgColor } = props;
    return (
        <View style={[styles.container, {backgroundColor: bgColor}]}>
            <View style={{  }}>
                <Image source={require('../../../assets/images/card_bg.png')} style={styles.backgroundImg} />
            </View>
            <Text style={styles.header}>{label}</Text>
            <Text style={styles.text}>{date}</Text>
            <Text style={styles.text}>{address}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 24,
        borderRadius: 24,
        backgroundColor: '#253BFF', 
        marginBottom: 16,
        minHeight: 150
    },
    backgroundImg:{
        position: "absolute",
        top: -20,
        left: -5,
        right: 0,
        resizeMode: 'cover'
    },
    image: {
        display: 'flex',
        justifyContent: 'center',
    },
    text: {
      color: 'white',
      fontSize: 14,
      textAlign: 'left',
      marginTop: 12,
    },
    header: {
        color: 'white',
        fontSize: 14,
        fontWeight: '700'
    }
});