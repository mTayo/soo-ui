import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import TextFieldInput from './index';


const TextFieldInputMeta: Meta<typeof TextFieldInput> = {
  title: 'TextFieldInput',
    component: TextFieldInput,
    args:{
        styleProps: {marginBottom: 12},
        placeholder: 'Place holder',
        showErrorMessage: true,
        errorMessage: 'Error occured',
        value: 'Value'
    },
    argTypes:{
        onChange: { action: 'Change occurred' },
    },
    decorators: [
        (Story) => (
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
            <Story />
        </View>
        ),
    ],
};

export default TextFieldInputMeta;

export const Basic: StoryObj<typeof TextFieldInputMeta> = {
    args:{
        styleProps: {marginBottom: 0},
        placeholder: 'Basic Place holder',
        showErrorMessage: false,
        errorMessage: '',
        value: ''
      },
      argTypes:{
        onChange: { action: 'Basic Change occurred' },
    },
};

export const AnotherExample: StoryObj<typeof TextFieldInputMeta> = {
    args:{
        styleProps: {marginBottom: 16},
        placeholder: 'Basic Place holder',
        showErrorMessage: false,
        errorMessage: '',
        value: ''
    },
    argTypes:{
        onChange: { action: 'Another Change occurred' },
    },
};
