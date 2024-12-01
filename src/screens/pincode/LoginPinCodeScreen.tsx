import {View, Text, Alert, TouchableOpacity} from 'react-native';
import React, {useState, useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/types';
import {useTranslation} from 'react-i18next';
import {useFocusEffect} from '@react-navigation/native';

import PinCodeInput from '../../components/PinCodeInput';
import BaseDialog from '../../components/base/BaseDialog';

import TouchIdIcon from '../../components/icons/TouchIdIcon';

export default function LoginPinCodeScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const {t} = useTranslation();

  const [showTouchIDModal, setShowTouchIDModal] = useState<boolean>(false);

  const setPinCodeSuccess = (pin_code: string) => {
    if (pin_code.length === 6) {
      Alert.alert('PIN CODE', pin_code);
    }
  };

  useFocusEffect(
    useCallback(() => {
      setShowTouchIDModal(true);
    }, []),
  );

  return (
    <View className="flex-1 justify-center items-center gap-y-5">
      <Text className="text-md text-center font-suk">
        {t('pincode.enter_pin_code')}
      </Text>
      <PinCodeInput
        onChange={value => setPinCodeSuccess(value)}
        useFingerPrint={() => {
          setShowTouchIDModal(true);
        }}
      />
      <Text className="text-md text-center font-suk pt-10">
        {t('pincode.forgot_pin_code')}
      </Text>
      <BaseDialog
        showModal={showTouchIDModal}
        onRequestClose={() => {
          setShowTouchIDModal(false);
        }}
        widthProps={'75%'}>
        <View className="pt-7">
          <View className="items-center gap-y-5">
            <TouchIdIcon color="#FB7B7B" width="45" height="45" />
            <View className="gap-y-2 w-full border-b border-b-gray-300">
              <Text className="text-slg text-center font-semibold leading-8">
                {t('touchid.touch_id_for_app')}
              </Text>
              <Text className="text-base text-center font-suk leading-7">
                {t('touchid.use_touch_id_or_pin')}
              </Text>
            </View>
          </View>
          <TouchableOpacity
            className="py-3"
            onPress={() => setShowTouchIDModal(false)}>
            <Text className="text-slg text-center font-semibold text-[#0076FF]">
              Enter Password
            </Text>
          </TouchableOpacity>
          <View className="bg-gray-300 h-[1px]"></View>
          <TouchableOpacity
            className="py-3"
            onPress={() => setShowTouchIDModal(false)}>
            <Text className="text-slg text-center text-[#0076FF]">
              {t('touchid.cancel')}
            </Text>
          </TouchableOpacity>
        </View>
      </BaseDialog>
    </View>
  );
}
