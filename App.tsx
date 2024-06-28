import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreenUI from './src/screens/SplashScreen';
import CreateAccountUI from './src/screens/CreateAccount';
import WelcomeScreenUI from './src/screens/WelcomeScreen';
import CompetitionScreenUI from './src/screens/CompetitionListing';
import { Provider } from 'react-redux';
import store from './src/store';
import Constants from 'expo-constants';
import Storybook from './.storybook';

const Stack = createNativeStackNavigator();

function App() {
  return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
              <Stack.Screen
                  name="Splash"
                  component={SplashScreenUI}
              />
              <Stack.Screen
                  name="CreateAccount"
                  component={CreateAccountUI}
              />
              <Stack.Screen
                  name="WelomeScreen"
                  component={WelcomeScreenUI}
              />
              <Stack.Screen
                  name="CompetitionScreen"
                  component={CompetitionScreenUI}
              />
          </Stack.Navigator>
        </NavigationContainer>
    </Provider>
  );
}
export default Constants.expoConfig?.extra?.storybookEnabled ? Storybook : App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
