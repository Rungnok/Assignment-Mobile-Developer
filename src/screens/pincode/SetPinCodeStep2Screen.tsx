import {View, Text, Alert} from 'react-native';
import React, {useState} from 'react';
import {useNavigation, useRoute, RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/types';
import {useTranslation} from 'react-i18next';

import PinCodeInput from '../../components/PinCodeInput';

export default function SetPinCodeStep2Screen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const route = useRoute<RouteProp<RootStackParamList, 'SetPinCode2'>>();
  const {t} = useTranslation();

  const [pinCode, setPinCode] = useState<string>('');

  const setPinCodeSuccess = (pin_code: string) => {
    setPinCode(pin_code);
    if (pin_code.length === 6) {
      if (route.params?.pinCode === pin_code) {
        setTimeout(() => {
          navigation.replace('TouchID');
        }, 100);
      } else {
        setPinCode('');
        Alert.alert(t('pincode.incorrect_pin_code'));
      }
    }
  };

  return (
    <View className="flex-1 justify-center items-center gap-y-5">
      <Text className="text-md text-center font-suk">
        {t('pincode.verify_pin_code')}
      </Text>
      <PinCodeInput
        value={pinCode}
        onChange={value => setPinCodeSuccess(value)}
      />
    </View>
  );
}
