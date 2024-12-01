import {Pressable, View} from 'react-native';
import React from 'react';
import CheckIcon from '../icons/CheckIcon';

interface BaseCheckBoxProps {
  isChecked: boolean;
  onChange: (checked: boolean) => void;
}

export default function BaseCheckBox({isChecked, onChange}: BaseCheckBoxProps) {
  return (
    <Pressable
      className={`justify-center items-center h-4 w-4 rounded border ${
        isChecked ? 'bg-blue-500 border-blue-500' : 'bg-white border-prim-gray'
      }`}
      onPress={() => onChange(!isChecked)}>

      {isChecked && <CheckIcon width="8" height="8" color="white" />}
    </Pressable>
  );
}
