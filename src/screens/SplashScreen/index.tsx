import {  Dimensions, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import React, { useReducer } from 'react';
import Video from 'react-native-video';
// import { LinearGradient } from 'expo-linear-gradient';
import LinearGradient from 'react-native-linear-gradient';
import { deg } from 'react-native-linear-gradient-degree';
import { appStyles } from '../../styles';

import SplashButton from '../../components/SplashButtons';
const { width, height } = Dimensions.get("window");
export default function SplashScreenUI({navigation}: any) {
    const { width: SCREEN_WIDTH } = useWindowDimensions();
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={[{ width: SCREEN_WIDTH }, styles.container]}>
                <Video
                    source={require("../../../assets/videos/bg-video.mp4")}
                    style={styles.backgroundVideo}
                    muted={true}
                    repeat={true}
                    resizeMode={"cover"}
                    rate={1.0}
                    ignoreSilentSwitch={"obey"}
                />  
                <View style={[styles.sectionContainer, {paddingTop:72}]}>
                    <Text style={[styles.customText]}>Soo{"\n"}
                    and Carrots</Text>
                </View>
                <LinearGradient
                    colors={[' rgba(22, 23, 24, 0.00)', '#161718', '#161718']}
                    style={[styles.backgroundGradient, appStyles.flex, appStyles.gap12, appStyles.justifyEnd, styles.sectionContainer, {paddingBottom:72}  ]}
                >
                
                    <SplashButton onPress={()=> {navigation.navigate('CreateAccount')}} text="Sign up for free" icon="login" />
                    <SplashButton onPress={()=> {}} text="Continue with Email" type="blue_grey" icon="email" />
       
                </LinearGradient>
            </View>
        </ScrollView>

    );
  }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: height,
        justifyContent: 'space-between'
    },
    backgroundGradient:{
        height: 300,
    },
    sectionContainer:{
        paddingLeft:24,
        paddingRight: 24
    },
    backgroundVideo:{
        height: height,
        position: "absolute",
        top: 0,
        left: 0,
        alignItems: "stretch",
        bottom: 0,
        right: 0
    },
    customText: {
        color: 'white',
        fontSize: 36,
        fontWeight: "800",
        // fontFamily: 'PlusJakartaSans-ExtraBold'
        fontFamily: 'PlusJakartaSans-Italic'
      },
  });