import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/types';
import {useTranslation} from 'react-i18next';

import BaseButton from '../components/base/BaseButton';

import TouchIdIcon from '../components/icons/TouchIdIcon';

export default function TouchIdScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const {t} = useTranslation();

  const setTouchID = () => {
    navigation.replace('LoginPinCode')
  };

  return (
    <View className="flex-1 p-5 gap-y-16">
      <View className="gap-y-2">
        <Text className="text-xl font-suk-bold">{t('touchid.touch_id')}</Text>
        <Text className="text-md text-prim-darkGray font-suk-semibold">
          {t('touchid.set_touch_id_detail')}
        </Text>
      </View>
      <View className="justify-center items-center py-24">
        <View
          className="rounded-full bg-sky-50  w-24 h-24 justify-center items-center"
          style={{
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.17,
            shadowRadius: 5,
            elevation: 5,
          }}>
          <TouchIdIcon color="#3b82f6" width="65" height="65" />
        </View>
      </View>
      <View className="items-center gap-y-10 w-full">
        <BaseButton onPress={setTouchID} className='w-full'>
          <Text className="text-sm text-white font-suk-semibold">
            {t('touchid.set_touch_id')}
          </Text>
        </BaseButton>
        <TouchableOpacity onPress={() => navigation.replace('LoginPinCode')}>
          <Text className="text-sm text-blue-500 font-suk-semibold">
            {t('touchid.skip')}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
