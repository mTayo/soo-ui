import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import NavigationPressable from './index';


const NavigationPressableMeta: Meta<typeof NavigationPressable> = {
  title: 'NavigationPressable',
  component: NavigationPressable,
  args:{
    styleProps: {marginBottom: 12},
    placeholder: 'Place holder',
    showErrorMessage: true,
    errorMessage: 'Error occured',
    value: 'Value'
  },

  decorators: [
    (Story) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default NavigationPressableMeta;

export const Basic: StoryObj<typeof NavigationPressableMeta> = {
    args:{
        styleProps: {marginBottom: 0},
        placeholder: 'Basic Place holder',
        showErrorMessage: false,
        errorMessage: '',
        value: ''
      },
};

export const AnotherExample: StoryObj<typeof NavigationPressableMeta> = {
    args:{
        styleProps: {marginBottom: 16},
        placeholder: 'Basic Place holder',
        showErrorMessage: false,
        errorMessage: '',
        value: ''
    }
};
