import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

type BaseButtonProps = {
  children: React.ReactNode;
  onPress?: () => void;
  className?: string;
};

export default function BaseButton({
  children,
  onPress,
  className,
}: BaseButtonProps) {
  return (
    <TouchableOpacity
      className={`py-3 px-3 sm:px-6 rounded-smd bg-blue-500 justify-center items-center ${className}`}
      onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
}
