import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import CheckBoxField from './index';

const MyButtonMeta: Meta<typeof CheckBoxField> = {
  title: 'CheckBoxField',
  component: CheckBoxField,
  args:{
    value: true,

  },
  argTypes: {
    onChange: { action: 'pressed the button' },
  
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

export const Basic: StoryObj<typeof CheckBoxField> = {};

export const AnotherExample: StoryObj<typeof CheckBoxField> = {
 
  argTypes: {
    onChange: { action: 'Another press' },
  }
};
