import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import Modal from './index';


const ModalMeta: Meta<typeof Modal> = {
  title: 'Modal',
  component: Modal,
  args:{
    modalVisible: false,
  },
  argTypes: {
    toggleModal: { action: 'Modal has been toggled' },
  },

  decorators: [
    (Story) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default ModalMeta;

export const Basic: StoryObj<typeof ModalMeta> = {};

export const AnotherExample: StoryObj<typeof ModalMeta> = {
    args:{
        modalVisible: false,
    },
    argTypes: {
        toggleModal: { action: 'Modal has been toggled' },
      }
};
