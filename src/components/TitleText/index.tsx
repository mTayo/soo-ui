import {  StyleSheet, Text } from 'react-native';

import { theme } from '../../themes';
import { appStyles } from '../../styles';


export default function TitleText(props: any) {
    const {text} = props;
   
    return (
        // @ts-ignore   
        <Text style={[appStyles.fontSizeXL, appStyles.font800]}>{text}</Text>
    );
  
  }
