import {
  View,
  Text,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/types';
import {useTranslation} from 'react-i18next';
import {OtpInput} from 'react-native-otp-entry';

export default function OtpStep2Screen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const {t} = useTranslation();

  const [sendAgainTime, setSendAgainTime] = useState(60);

  const onInputSuccess = (code: string | null) => {
    if (code) {
      console.log('Otp value is : ', code);
    }
    Keyboard.dismiss;
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{name: 'SetPinCode1'}],
      });
    }, 100);
  };

  const intervalSendAgain = useRef<any>(null);
  const countDownToSendAgain = () => {
    setSendAgainTime(60);
    intervalSendAgain.current = setInterval(() => {
      setSendAgainTime(prev => {
        if (prev <= 0) {
          clearInterval(intervalSendAgain.current);
          intervalSendAgain.current = null;
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  useEffect(() => {
    countDownToSendAgain();
    return () => {
      clearInterval(intervalSendAgain.current);
    };
  }, []);

  return (
    <KeyboardAvoidingView
      className="flex-1"
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={() => onInputSuccess(null)}>
        <View className="flex-1 p-5 gap-y-20">
          <View className="gap-y-2">
            <Text className="text-xl font-suk-bold">{t('otp.verify')}</Text>
            <Text className="text-md text-prim-darkGray font-suk-semibold">
              {t('otp.input_otp')}
            </Text>
            <Text className="text-md text-prim-darkGray font-suk-semibold">
              082-XXX-8998
            </Text>
          </View>
          <OtpInput
            numberOfDigits={6}
            focusColor="#3b82f6"
            onFilled={code => onInputSuccess(code)}
            type="numeric"
            theme={{
              pinCodeContainerStyle: styles.pinCodeContainer,
              pinCodeTextStyle: styles.pinCodeText,
              focusedPinCodeContainerStyle: styles.focusedPinCodeContainerStyle,
            }}
          />
          <View className="gap-y-2 pt-16">
            <Text className="text-center text-md text-prim-darkGray font-suk">
              {t('otp.no_code')}
            </Text>
            <TouchableOpacity
              onPress={countDownToSendAgain}
              disabled={sendAgainTime > 0}>
              <Text className="text-center text-md text-blue-500 font-suk-semibold">
                {t('otp.send_again')} ({sendAgainTime})
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  pinCodeContainer: {
    borderRadius: 0,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: '#B7B7B7',
    width: 30,
    height: 40,
  },
  pinCodeText: {
    fontFamily: 'SukhumvitSet-Text',
    fontSize: 24,
  },
  focusedPinCodeContainerStyle: {
    borderColor: '#B7B7B7',
  },
});
