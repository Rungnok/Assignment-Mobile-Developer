import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/types';
import {useTranslation} from 'react-i18next';

import BaseInput from '../../components/base/BaseInput';
import BaseButton from '../../components/base/BaseButton';

export default function ForgotPasswordStep1Screen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const {t} = useTranslation();

  const [emaiInput, setEmailInput] = useState<string>('');

  const sendEmail = () => {
    console.log(emaiInput);
    navigation.reset({
      index: 0,
      routes: [{name: 'ForgotStep2'}],
    });
  };

  return (
    <View className="flex-1 p-5 gap-y-16">
      <View className="gap-y-2">
        <Text className="text-xl font-suk-bold">
          {t('forgot.forgot_password')}
        </Text>
        <Text className="text-md text-prim-darkGray font-suk-semibold">
          {t('forgot.please_input_email_tel')}
        </Text>
      </View>
      <View className="gap-y-14">
        <BaseInput
          value={emaiInput}
          onChangeText={setEmailInput}
          placeholder={t('forgot.input_email_tel')}
        />
        <BaseButton onPress={sendEmail}>
          <Text className="text-sm text-white font-suk-semibold">
            {t('forgot.send')}
          </Text>
        </BaseButton>
      </View>
    </View>
  );
}
