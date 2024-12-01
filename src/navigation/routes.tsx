import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import {RootStackParamList} from './types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MainLayout from '../layouts/MainLayout';

import SelectLanguageScreen from '../screens/SelectLanguageScreen';
import TermsOfServiceScreen from '../screens/TermsOfServiceScreen';
import LoginScreen from '../screens/LoginScreen';
import ForgotPasswordStep1Screen from '../screens/forgotpassword/ForgotPasswordStep1Screen';
import ForgotPasswordStep2Screen from '../screens/forgotpassword/ForgotPasswordStep2Screen';
import OtpStep1Screen from '../screens/otp/OtpStep1Screen';
import OtpStep2Screen from '../screens/otp/OtpStep2Screen';
import SetPinCodeStep1Screen from '../screens/pincode/SetPinCodeStep1Screen';
import SetPinCodeStep2Screen from '../screens/pincode/SetPinCodeStep2Screen';
import TouchIdScreen from '../screens/TouchIdScreen';
import LoginPinCodeScreen from '../screens/pincode/LoginPinCodeScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();
const navigationRef = createNavigationContainerRef<RootStackParamList>();

export function Routes() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="SelectLang">
        <Stack.Group
          screenLayout={({children}) => (
            <MainLayout>{children}</MainLayout>
          )}>
          <Stack.Screen name="SelectLang" component={SelectLanguageScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen
            name="ForgotStep2"
            component={ForgotPasswordStep2Screen}
          />
          <Stack.Screen name="SetPinCode1" component={SetPinCodeStep1Screen} />
          <Stack.Screen name="SetPinCode2" component={SetPinCodeStep2Screen} />
          <Stack.Screen name="TouchID" component={TouchIdScreen} />
          <Stack.Screen name="LoginPinCode" component={LoginPinCodeScreen} />
        </Stack.Group>
        <Stack.Group
          screenLayout={({children}) => (
            <MainLayout showBackIcon={true}>{children}</MainLayout>
          )}>
          <Stack.Screen name="Terms" component={TermsOfServiceScreen} />
          <Stack.Screen
            name="ForgotStep1"
            component={ForgotPasswordStep1Screen}
          />
          <Stack.Screen name="OtpStep1" component={OtpStep1Screen} />
          <Stack.Screen name="OtpStep2" component={OtpStep2Screen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
