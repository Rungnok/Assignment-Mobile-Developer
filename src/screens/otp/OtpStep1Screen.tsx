import {View, Text} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/types';
import {useTranslation} from 'react-i18next';

import BaseButton from '../../components/base/BaseButton';

import OtpIcon from '../../components/icons/OtpIcon';

export default function OtpStep1Screen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const {t} = useTranslation();

  const requestOtp = () => {
    navigation.push('OtpStep2');
  };

  return (
    <View className="flex-1 justify-center items-center gap-y-14 p-5">
      <OtpIcon color="#3b82f6" width="80" height="80" />
      <View className="gap-y-5">
        <Text className="text-xl text-center font-suk-bold">
          {t('otp.otp_send')}
        </Text>
        <Text className="text-xl text-center text-blue-500 font-suk-semibold">
          082-XXX-8998
        </Text>
      </View>
      <View className="gap-y-8 w-full">
        <BaseButton onPress={requestOtp}>
          <Text className="text-sm text-white font-suk-semibold">
            {t('otp.request_otp')}
          </Text>
        </BaseButton>
        <Text className="text-xxs text-center text-prim-mediumerGray font-suk">
          {t('otp.wrong_tel')}
        </Text>
      </View>
    </View>
  );
}
