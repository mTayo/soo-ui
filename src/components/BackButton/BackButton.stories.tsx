import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import BackButton from './BackButton';

const MyButtonMeta: Meta<typeof BackButton> = {
  title: 'BackButton',
  component: BackButton,
  argTypes: {
    onPress: { action: 'pressed the button' },
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default MyButtonMeta;

export const Basic: StoryObj<typeof BackButton> = {};

export const AnotherExample: StoryObj<typeof BackButton> = {
 
  argTypes: {
    onPress: { action: 'Another press' },
  }
};
