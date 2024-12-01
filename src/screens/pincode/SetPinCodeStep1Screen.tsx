import {View, Text} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/types';
import {useTranslation} from 'react-i18next';

import PinCodeInput from '../../components/PinCodeInput';

export default function SetPinCodeStep1Screen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const {t} = useTranslation();

  const setPinCodeSuccess = (pin_code: string) => {
    if (pin_code.length === 6) {
      setTimeout(() => {
        navigation.replace('SetPinCode2', {pinCode: pin_code});
      }, 100);
    }
  };

  return (
    <View className="flex-1 justify-center items-center gap-y-5">
      <Text className="text-md text-center font-suk">
        {t('pincode.set_pin_code')}
      </Text>
      <PinCodeInput onChange={value => setPinCodeSuccess(value)} />
    </View>
  );
}
