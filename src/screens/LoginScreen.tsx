import {
  View,
  ScrollView,
  Text,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/types';
import {useTranslation} from 'react-i18next';

import BaseInput from '../components/base/BaseInput';
import BaseButton from '../components/base/BaseButton';
import BaseCheckBox from '../components/base/BaseCheckBox';

export default function LoginScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const {t} = useTranslation();

  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [saveSignIn, setSaveSignIn] = useState<boolean>(false);

  return (
    <KeyboardAvoidingView
      className="flex-1"
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="flex-1 justify-center p-5 gap-y-10">
          <BaseInput
            onChangeText={setUserName}
            value={userName}
            placeholder={t('login.user_name')}
          />
          <BaseInput
            onChangeText={setPassword}
            value={password}
            placeholder={t('login.password')}
            secure={true}
          />
          <View className="flex-row justify-between -mt-4">
            <View className="flex-row gap-x-2 items-center">
              <BaseCheckBox isChecked={saveSignIn} onChange={setSaveSignIn} />
              <TouchableOpacity onPress={() => setSaveSignIn(prev => !prev)}>
                <Text className="text-xsm text-prim-mediumGray font-suk">
                  {t('login.save_signin')}
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => navigation.push('ForgotStep1')}>
              <Text className="text-xsm text-prim-mediumGray font-suk">
                {t('login.forgot_password')}
              </Text>
            </TouchableOpacity>
          </View>
          <BaseButton onPress={() => navigation.push('OtpStep1')}>
            <Text className="text-sm text-white font-suk-semibold">
              {t('login.signin')}
            </Text>
          </BaseButton>
          <View className="flex-row items-center justify-center">
            <View className="flex-1 h-[1px] bg-prim-gray" />
            <Text className="text-prim-mediumGray text-xms font-suk px-2">
              {t('login.dont_have_user')}
            </Text>
            <View className="flex-1 h-[1px] bg-prim-gray" />
          </View>
          <BaseButton className="!bg-sky-50 border border-blue-400">
            <Text className="text-sm text-blue-500 font-suk-semibold">
              {t('login.signup')}
            </Text>
          </BaseButton>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
