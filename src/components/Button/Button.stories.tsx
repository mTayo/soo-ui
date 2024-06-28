import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const MyButtonMeta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  args:{
    text: "Hello"
  },
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

export const Basic: StoryObj<typeof Button> = {
    args:{
        text: "Basic button"
      },
      argTypes: {
        onPress: { action: 'Basic button pressed' },
      }
};

export const AnotherExample: StoryObj<typeof Button> = {
    args:{
        text: "Another example"
    },
  argTypes: {
    onPress: { action: 'Another press' },
  }
};
