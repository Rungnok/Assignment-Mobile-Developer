import {View, Text, TouchableOpacity} from 'react-native';
import React, {useMemo, useRef} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/types';
import {useTranslation} from 'react-i18next';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';

import BaseButton from '../components/base/BaseButton';
import BackIcon from '../components/icons/BackIcon';
import TermsIcon from '../components/icons/TermsIcon';

export default function TermsOfServiceScreen() {
  const insets = useSafeAreaInsets();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const {t} = useTranslation();

  const bottomSheetRef = useRef<BottomSheet>(null);
  const bottomSheetSnapPoints = useMemo(() => ['70%'], []);

  return (
    <GestureHandlerRootView className="flex-1 p-5">
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={bottomSheetSnapPoints}
        enablePanDownToClose={false}
        enableHandlePanningGesture={false}
        enableContentPanningGesture={false}
        backgroundStyle={{
          shadowColor: '#000',
          shadowOffset: {width: 0, height: -5},
          shadowOpacity: 0.16,
          shadowRadius: 5,
          elevation: 5,
        }}
        handleIndicatorStyle={{display: 'none'}}
        >
        <BottomSheetView
          className="flex-1 p-5 justify-between"
          style={{paddingBottom: insets.bottom}}>
          <View className="flex-row items-center gap-x-3 border-b border-b-prim-lightGray pb-5">
            <View>
              <TermsIcon color="#3b82f6" height="24" width="24" />
            </View>
            <Text className="text-xl font-suk-bold">
              {t('terms.terms_of_service')}
            </Text>
          </View>
          <View className="flex-row gap-x-5">
            <View className="flex-grow">
              <BaseButton className="!bg-white border border-blue-400">
                <Text className="text-sm font-suk-semibold text-blue-500">
                  {t('terms.decline')}
                </Text>
              </BaseButton>
            </View>
            <View className="flex-grow">
              <BaseButton
                onPress={() => {
                  navigation.reset({
                    index: 0,
                    routes: [{name: 'Login'}],
                  });
                }}>
                <Text className="text-sm font-suk-semibold text-white">
                  {t('terms.accept')}
                </Text>
              </BaseButton>
            </View>
          </View>
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
}
