import {View, Text} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/types';
import i18n from 'i18next';

import BaseButton from '../components/base/BaseButton';

export default function SelectLanguageScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const selectLanguage = (language: string) => {
    i18n.changeLanguage(language);
    navigation.push('Terms');
  };

  return (
    <View className="flex-1 justify-center gap-y-28 p-5">
      <View className="gap-y-2">
        <Text className="text-xl font-suk-bold">ยินดีต้อนรับ</Text>
        <Text className="text-md text-prim-darkGray font-suk-semibold">
          กรุณาเลือกภาษา
        </Text>
      </View>
      <View className="gap-y-8">
        <BaseButton
          onPress={() => {
            selectLanguage('en');
          }}>
          <Text className="text-sm text-white font-suk-semibold">English</Text>
        </BaseButton>
        <BaseButton
          onPress={() => {
            selectLanguage('th');
          }}>
          <Text className="text-sm text-white font-suk-semibold">ไทย</Text>
        </BaseButton>
      </View>
    </View>
  );
}
