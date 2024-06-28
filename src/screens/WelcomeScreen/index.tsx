import React, {useEffect, useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import { theme } from '../../themes';
import AppButton from '../../components/Button/Button';
import { appStyles } from '../../styles';
import IconTitle from '../../../assets/icons/icon-title.svg';
import IconCancel from '../../../assets/icons/icon-cancel.svg';
import ModalUi from '../../components/Modal';

const WelomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(()=> {
    setModalVisible(true);
  }, []);
  return (
    <View >
        <ModalUi modalVisible={modalVisible} toggleModal={setModalVisible}>
            <>
                <View style={[
                        appStyles.flex, 
                        appStyles.justifyBetween, 
                        appStyles.itemsCenter, 
                        appStyles.flexRow, 
                        {paddingBottom:24}
                        ]}
                >
                    <IconTitle />
                    <Pressable onPress={() => setModalVisible(!modalVisible)} style={styles.icon}>
                        <IconCancel />
                    </Pressable>
                </View>
                <Text style={styles.modalHeader}>Welcome to Soo</Text>
                <Text style={styles.modalText}>Great to have you with us!</Text>

                <View style={{marginTop: 24, width: '100%'}}>
                    <AppButton text="Got it" type="blue"  onPress={() => setModalVisible(!modalVisible)} />
                </View>
            </>
        </ModalUi>
      
    </View>
  );
};

const styles = StyleSheet.create({
    icon:{
        borderRadius: 48,
        borderColor: theme.colors.blueGrey300,
        borderWidth: 1,
        padding: 16,
    },
    modalHeader: {
        color: theme.colors.blueGrey900,
        marginVertical: 24,
        fontSize: 24,
        fontWeight: '800'
    },
    modalText: {
        marginBottom: 15,
        color: theme.colors.blueGrey900,
        fontSize: 18,
        textAlign: 'left',
    },
});

export default WelomeScreen;