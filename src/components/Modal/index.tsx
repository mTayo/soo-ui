import React from 'react';
import { Modal, StyleSheet, View} from 'react-native';
import { theme } from '../../themes';


const ModalUi = (props: ModalProps) => {
    const {children, modalVisible, toggleModal} = props;
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        >
        <View style={styles.overLayBg}>
            <View style={styles.modalContent}>
            <View style={styles.modalView}>
                {children}
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  overLayBg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.45)'
  },
  modalContent:{
    paddingLeft: 24,
    paddingRight: 24,
    width: '100%',
  },
  modalView: {
    backgroundColor: theme.colors.whiteColor,
    borderRadius: 20,
    padding: 24,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  icon:{
    borderRadius: 48,
    borderColor: theme.colors.blueGrey300,
    borderWidth: 1,
    padding: 16,

},
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  modalHeader: {
    color: theme.colors.blueGrey900,
    marginVertical: 24,
    fontSize: 24,
    fontWeight: '800'
  },
  textStyle: {
    color: theme.colors.blueGrey900,
    fontSize: 18,
    textAlign: 'left',
  },
  modalText: {
    marginBottom: 15,
    color: theme.colors.blueGrey900,
    fontSize: 18,
    textAlign: 'left',
  },
});

export default ModalUi;