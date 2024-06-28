import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import CompetitionCard from './index';

const CompetitionCardMeta: Meta<typeof CompetitionCard> = {
  title: 'CompetitionCard',
  component: CompetitionCard,
  args:{
    value: '1',
    date: 'YYYY-MM-DD ~ YYYY-MM-DD',
    address: 'Pyeongchang, Gangwon-do, Korea Very Very long city name',
    label:'20th Asian Game - Achi Nagoya 2026 (Winter)',
    bgColor: '#2030E2'

  },

  decorators: [
    (Story) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default CompetitionCardMeta;

export const Basic: StoryObj<typeof CompetitionCard> = {
    args:{
        value: '5',
        date: 'Basic YYYY-MM-DD',
        address: 'Basic address ',
        label:'19th Asian Game - Achi Nagoya 2024 (Summer) ASIA',
        bgColor: 'red'
    }
};

export const AnotherExample: StoryObj<typeof CompetitionCard> = {
    args:{
        value: '2',
        date: 'YYYY-MM-DD ~ YYYY-MM-DD',
        address: 'Pyeongchang, Gangwon-do, Korea ',
        label:'19th Asian Game - Achi Nagoya 2024 (Summer)',
        bgColor: '#253BFF'
    }
};
