import {View, Text} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/types';
import {useTranslation} from 'react-i18next';

import BaseButton from '../../components/base/BaseButton';

import SuccessIcon from '../../components/icons/SuccessIcon';

export default function ForgotPasswordStep2Screen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const {t} = useTranslation();

  return (
    <View className="flex-1 items-center p-5 pt-24 gap-y-20 overflow-auto">
      <SuccessIcon color="#3b82f6" width="128" height="128" />
      <View className="gap-y-5">
        <Text className="text-xl text-center font-suk-bold">{t('forgot.success')}</Text>
        <Text className="text-md text-center text-prim-darkGray font-suk-semibold">
          {t('forgot.reset_password_success')}
        </Text>
      </View>
      <BaseButton
        className="w-full"
        onPress={() => navigation.replace('Login')}>
        <Text className="text-sm text-white font-suk-semibold">
          {t('forgot.submit')}
        </Text>
      </BaseButton>
    </View>
  );
}
