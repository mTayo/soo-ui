import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, Pressable, View, ScrollView} from 'react-native';
import { theme } from '../../themes';
import { useDispatch } from 'react-redux';
import { appStyles } from '../../styles';
import SearchInput from '../../components/SearchInput';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackButton from '../../components/BackButton/BackButton';
import TitleText from '../../components/TitleText';
import CompetitionCard from '../../components/CompetitionCard';
import { competitionData } from '../../../data';

const CompetitionListingScreen = ({navigation}: any) => {
    const dispatch = useDispatch();
    const selectCompetition = (datum: competitionDataProps) => {
        dispatch({type: 'NEWSELECTION', payload: datum});
        navigation.navigate('CreateAccount');
    };
   
  return (
    <ScrollView>
    <SafeAreaView style={styles.contentContainer}>
        
            <View >
                <View style={[appStyles.flex, appStyles.flexRow, appStyles.gap12, appStyles.itemsCenter, {marginBottom:24}]}>
                    <BackButton onPress={() => {navigation.navigate('CreateAccount')}}/>
                    <View style={[appStyles.flexGrow]}>
                        <SearchInput />
                    </View>
                </View>
                <TitleText text="Competition" />
                <Text style={{marginTop: 8, marginBottom: 24}}>
                    An account is needed per one host. If you already have an account for the host 
                    of competition you want to sign up, you can login and  register.
                </Text>

                {competitionData.map((datum:competitionDataProps, _i:number) => (
                    <Pressable key={_i} onPress={() => selectCompetition(datum)}>
                        <CompetitionCard 
                            label={datum?.label} 
                            address={datum?.address} 
                            value={datum?.value} 
                            date={datum?.date} 
                            bgColor={datum?.bgColor}
                        />
                    </Pressable>
                ))}
                
            </View>
    </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    contentContainer:{
        paddingLeft: 24,
        paddingRight: 24,
        backgroundColor: theme.colors.whiteColor,
        flex: 1
    },
});

export default CompetitionListingScreen;