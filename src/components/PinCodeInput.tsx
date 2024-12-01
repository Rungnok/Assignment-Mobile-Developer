import {View, Text, Pressable, TouchableOpacity} from 'react-native';
import React, {useState, useCallback, useEffect} from 'react';
import {useFocusEffect} from '@react-navigation/native';

import TouchIdIcon from './icons/TouchIdIcon';

type PinCodeInputProps = {
  value?: string;
  onChange: (newPin: string) => void;
  useFingerPrint?: () => void;
};

export default function PinCodeInput({
  value = '',
  onChange,
  useFingerPrint,
}: PinCodeInputProps) {
  const [pinCode, setPinCode] = useState<string[]>(value.split(''));

  const handlePress = (num: string) => {
    if (pinCode.length < 6) {
      const updatedPin = [...pinCode, num];
      setPinCode(updatedPin);
      onChange(updatedPin.join(''));
    }
  };

  const handleDelete = () => {
    const updatedPin = pinCode.slice(0, -1);
    setPinCode(updatedPin);
    onChange(updatedPin.join(''));
  };

  const PinCodeButton = ({num}: {num: string}) => {
    return (
      <Pressable
        onPress={() => handlePress(num)}
        disabled={pinCode.length === 6}>
        {({pressed}) => (
          <View
            className={`w-20 h-20 justify-center items-center rounded-full border border-[#979797] ${
              pressed ? 'bg-blue-500' : 'bg-none'
            }`}>
            <Text
              className={`text-6xl ${
                pressed ? 'text-white' : 'text-prim-mediumGray'
              }`}>
              {num}
            </Text>
          </View>
        )}
      </Pressable>
    );
  };

  useEffect(() => {
    setPinCode(value.split(''));
  }, [value]);

  useFocusEffect(
    useCallback(() => {
      setPinCode([]);
      onChange('');
    }, []),
  );

  return (
    <View className="justify-center items-center gap-y-16">
      <View className="flex-row gap-x-5">
        {Array.from({length: 6}).map((_, index) => (
          <View
            key={index}
            className={`w-4 h-4 rounded-full border ${
              pinCode[index]
                ? 'bg-blue-500 border-blue-500'
                : 'bg-none border-prim-mediumerGray'
            }`}
          />
        ))}
      </View>

      <View className="gap-y-5">
        <View className="flex-row gap-x-8">
          {['1', '2', '3'].map((num, index) => (
            <PinCodeButton key={index} num={num} />
          ))}
        </View>
        <View className="flex-row gap-x-8">
          {['4', '5', '6'].map((num, index) => (
            <PinCodeButton key={index} num={num} />
          ))}
        </View>
        <View className="flex-row gap-x-8">
          {['7', '8', '9'].map((num, index) => (
            <PinCodeButton key={index} num={num} />
          ))}
        </View>
        <View className="flex-row gap-x-8">
          <View className="w-20 h-20 justify-center items-center">
            {useFingerPrint && (
              <TouchableOpacity onPress={useFingerPrint}>
                <TouchIdIcon color="#3b82f6" width="45" height="45" />
              </TouchableOpacity>
            )}
          </View>
          <PinCodeButton num={'0'} />
          <Pressable
            onPress={handleDelete}
            disabled={pinCode.length <= 0}
            className="w-20 h-20 justify-center items-center">
            <Text className="text-6xl text-prim-mediumerGray">⌫</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
