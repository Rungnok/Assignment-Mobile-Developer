import {TextInput, TextInputProps} from 'react-native';
import React from 'react';

interface BaseInputProps {
  onChangeText: (text: string) => void;
  value: any;
  placeholder?: string;
  type?: TextInputProps['keyboardType'];
  secure?: boolean;
}

export default function BaseInput({
  onChangeText,
  value,
  placeholder = 'Enter your value',
  type = 'default',
  secure = false,
}: BaseInputProps) {
  return (
    <TextInput
      className="border-b border-b-prim-gray text-xsm font-suk placeholder:text-prim-mediumGray py-3"
      onChangeText={onChangeText}
      value={value}
      placeholder={placeholder}
      keyboardType={type}
      secureTextEntry={secure}
    />
  );
}
