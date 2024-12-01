import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/types';

import BackIcon from '../components/icons/BackIcon';

export default function MainLayout({
  children,
  showBackIcon = false,
}: {
  children: React.ReactNode;
  showBackIcon?: boolean;
}) {
  const insets = useSafeAreaInsets();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View
      className="flex-1 bg-sky-50"
      style={{
        paddingTop: insets.top,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}>
      {showBackIcon && (
        <TouchableOpacity
          className="pt-5 px-5"
          onPress={() => navigation.goBack()}
        >
          <BackIcon color="#000000" height="24" width="24" />
        </TouchableOpacity>
      )}
      {children}
    </View>
  );
}
